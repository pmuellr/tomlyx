'use strict'

/** @typedef { import('./types').Exercise } Exercise */
/** @typedef { import('./types').Exercises } Exercises */

module.exports = {
  createLilypondFile
}

const fs = require('fs')

const { log } = require('./log')

/** @type { (fileName: string) => LilypondFile } */
function createLilypondFile(fileName) {
  return new LilypondFile(fileName)
}

class LilypondFile {
  /** @param { fileName: string } */
  constructor (fileName) {
    this._fileName = fileName
  }

  /** @type { (exercises: Exercises) => void } */
  write(exercises) {
    log.debug(`woulda written "${this._filename}" as ${JSON.stringify(exercises, null, 4)}`)

    /** @type { string[] } */
    const chunks = []
    chunks.push(getHeader(exercises))

    for (const exercise of exercises.exercises) {
      chunks.push(getExercise(exercise))
    }

    chunks.push(getMidiExercises(exercises))

    fs.writeFileSync(this._fileName, chunks.join('\n'))
    log(`generated file ${this._fileName}`)
  }
}

/** @type { (exercises: Exercises) => string } */
function getMidiExercises(exercises) {
  const staffs = exercises.exercises
    .map(({ staffRelative, varName }) => {
      staffRelative = staffRelative.padEnd(6)
      varName = varName.padEnd(10)
      return `    \\new Staff { \\clef "treble" \\relative ${staffRelative} { \\${varName} }}`
    })
    .join('\n')

  return `%-------------------------------------------------------------------------------

\\score {
  <<
${staffs}
  >>
  \\midi {}
}
`
}

/** @type { (exercise: Exercise) => string } */
function getExercise(exercise) {
  const { name, staffRelative, tabRelative, tabMinimumFret, music, varName } = exercise

  return `%-------------------------------------------------------------------------------
\\markup { \\bold { ${name} }}

${varName} = ${music} 

\\score {
  <<
    \\new Staff {
      \\clef "treble"
      \\relative ${staffRelative} { \\${varName} }
    }
    \\new TabStaff {
      \\set TabStaff.minimumFret = ${tabMinimumFret}
      \\set TabStaff.restrainOpenStrings = ##t      
      \\relative ${tabRelative} { \\${varName} }
    }
  >>
  \\layout {}
}
`
}

/** @type { (exercises: Exercises) => string } */
function getHeader(exercises) {
  const { title, composer, subtitle } = exercises
  return `\\version "2.20.0"

#(ly:set-option 'midi-extension "mid")

\\header {
  title = "${title}"
  composer = "${composer}"
  subtitle = "${subtitle}"
}

\\paper {
  indent = #0
  #(set-paper-size "letter")
}

\\layout {
  indent = #0
  ragged-right = ##f
  ragged-last = ##f
  \\context {
    \\StaffGroup
    \\override StaffGrouper.staff-staff-spacing.basic-distance = #8
  }
  \\context {
    \\Voice
    \\override TextScript.padding = #1
    \\override Glissando.thickness = #3
  }
}
`
}