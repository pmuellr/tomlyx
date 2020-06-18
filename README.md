tomlyx - TOML sourced LilYpond generated music eXercises
================================================================================

Generate [LilyPond][] wrappings for music formatted in TOML files.

[LilyPond]: http://lilypond.org/website/index.html

Example:

    $ cd samples

    $ tomlyx sample.toml
    tomlyx: reading file sample.toml
    tomlyx: generated file sample.ly

    $ lilypond sample.ly
    GNU LilyPond 2.20.0
    ...
    MIDI output to `sample.mid'...
    ...
    Converting to `sample.pdf'...
    ...

* [`sample.toml`](samples/sample.toml) - source file
* [`sample.ly`](samples/sample.ly) - generated lilypond file
* [`sample.pdf`](samples/sample.pdf) - generated PDF file
* [`sample.mid`](samples/sample.mid) - generated MIDI file


usage
================================================================================

    tomlyx --help                # print help

    tomlyx <toml-file-name>     # generate a .ly file from this .toml file 


install
================================================================================

    npm -g pmuellr/tomlyx


typescript typing in javascript
================================================================================

I've been playing with using [JSDoc in my `.js` files][jsdoc-type-check] to get a TypeScript IDE
experience in VSCode for my JavaScript development.  It's going pretty well.

To enable type checking for JavaScript code (not enabled by default), go in your
Settings, search for "javascript validate", and you'll find a setting 
"JavaScript > Validate: Enable" which you should set to true.  The preferences
file  setting is:

    "javascript.validate.enable": true

[jsdoc-type-check]: https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html

changelog
================================================================================

2020-05-28 - v1.0.0


license
================================================================================

This package is licensed under the MIT license.  See the [LICENSE.md][] file
for more information.


contributing
================================================================================

Awesome!  We're happy that you want to contribute.

Please read the [CONTRIBUTING.md][] file for more information.


[LICENSE.md]: LICENSE.md
[CONTRIBUTING.md]: CONTRIBUTING.md
[CHANGELOG.md]: CHANGELOG.md