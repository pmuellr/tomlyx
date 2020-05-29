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