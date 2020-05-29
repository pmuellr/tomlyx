#!/usr/bin/env node

'use strict'

/** @typedef { import('./lib/types').Exercise } Exercise */
/** @typedef { import('./lib/types').Exercises } Exercises */

const fs = require('fs')

const toml = require('toml')
const minimist = require('minimist')
const { toRoman } = require('roman-numerals')

const pkg = require('./package.json')
const { createLilypondFile } = require('./lib/lilypond-file')
const { log } = require('./lib/log')

const minimistOpts = {
  boolean: ['help', 'version', 'generate'],
  alias: {
    g: 'generate',
    h: 'help',
    v: 'version',
  }
}

const argv = minimist(process.argv.slice(2), minimistOpts)

// check for help and version options
if (argv.version) version()
if (argv.help) help()
if (argv._.length === 0) help()
if (argv._[0] === '') help()


const fileNames = argv._.slice()

for (let inFileName of fileNames) {
  const outFileName = inFileName.replace(/\.toml$/i, '.ly')
  log.debug(`generating file ${outFileName}`)
  const lyFile = createLilypondFile(outFileName)
  const exercises = getExercises(inFileName)
  lyFile.write(exercises)
}

/** @type { (fileName: string) => Exercises } */
function getExercises(fileName) {
  log(`reading file ${fileName}`)

  let contents
  try {
    contents = fs.readFileSync(fileName, 'utf8')
  } catch (err) {
    log.exitError(`error reading file "${fileName}": ${err.message}`)
  }

  contents = toml.parse(contents)

  const exercises = {
    title: contents.title || 'no title provided',
    composer: contents.composer || 'no composer provided',
    subtitle: contents.subtitle || '',
    paperSize: contents.paperSize || 'letter',
    exercises: [],
  }

  let counter = 1
  for (const key of Object.keys(contents)) {
    const exercise = getExercise(key, counter, contents[key])
    if (exercise == null) continue

    exercises.exercises.push(exercise)
    counter++
  }

  return exercises
}

/** @type { (name: string, index: number, object: any) => undefined | Exercise } */
function getExercise(name, index, object) {
  if (typeof object !== 'object') return

  const { staffRelative, tabRelative, tabMinimumFret, music } = object
  let { pageBreakBefore, pageBreakAfter } = object
  const varName = `music${toRoman(index)}`

  if (staffRelative == null) return log(`exercise "${name}" is missing key staffRelative`)
  if (tabRelative == null) return log(`exercise "${name}" is missing key tabRelative`)
  if (tabMinimumFret == null) return log(`exercise "${name}" is missing tabMinimumFret`)
  if (music == null) return log(`exercise "${name}" is missing key music`)
  pageBreakBefore = !!pageBreakBefore
  pageBreakAfter = !!pageBreakAfter

  name = name.replace(/_/g, ' ')
  return { name, staffRelative, tabRelative, tabMinimumFret, music, varName, pageBreakBefore, pageBreakAfter }
}

function version() {
  console.log(pkg.version)
  process.exit()
}

function help() {
  console.log(`usage: ${pkg.name} [options] file-name.toml`)
  console.log('')
  console.log('Generates a Lilypond .ly file from a .toml file.')
  console.log('')
  console.log('options:')
//console.log('    -g --generate - also generate a PDF and MIDI file via lilypond')
  console.log('    -v --version  - print the program version')
  console.log('    -h --help     - display this help')
  console.log('')
  console.log(`For more info, see: ${pkg.homepage}`)
  process.exit()
}
