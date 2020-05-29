\version "2.20.0"

#(ly:set-option 'midi-extension "mid")

\header {
  title = "Blues Improvisation Complete (Eb)"
  composer = "Jeff Harrington"
  subtitle = "A Blues Scale Exercises"
}

\paper {
  indent = #0
  #(set-paper-size "letter")
}

\layout {
  indent = #0
  ragged-right = ##f
  ragged-last = ##f
  \context {
    \StaffGroup
    \override StaffGrouper.staff-staff-spacing.basic-distance = #8
  }
  \context {
    \Voice
    \override TextScript.padding = #1
    \override Glissando.thickness = #3
  }
}

%-------------------------------------------------------------------------------
\markup { \bold { exercise 1 }}

musicI = {
    a8   c(    d)    ees(  e)   g(    a)   c(   |
    d)   ees(  d)    c(    a)   g(    e)   ees( |
    d)   c(    a)    g(    e)   ees(  d)   c(   |
    d)   ees(  e)    g(    a2)                  |
} 

\score {
  <<
    \new Staff {
      \clef "treble"
      \relative a' { \musicI }
    }
    \new TabStaff {
      \set TabStaff.minimumFret = #3
      \set TabStaff.restrainOpenStrings = ##t      
      \relative a { \musicI }
    }
  >>
  \layout {}
}

%-------------------------------------------------------------------------------
\markup { \bold { exercise 2 }}

musicII = { 
    \tuplet 3/2 { a8(   c)   d }
    \tuplet 3/2 { ees(  e)   g }
    \tuplet 3/2 { a(    c)   d } 
    \tuplet 3/2 { ees(  d)   c } |
    \tuplet 3/2 { a(    g)   e }
    \tuplet 3/2 { ees(  d)   c }
    \tuplet 3/2 { a(    g)   e }
    \tuplet 3/2 { ees(  d)   c } |
    \tuplet 3/2 { d(    ees) e }
    \tuplet 3/2 { g(    a)   c }
    a2 |
} 

\score {
  <<
    \new Staff {
      \clef "treble"
      \relative a' { \musicII }
    }
    \new TabStaff {
      \set TabStaff.minimumFret = #3
      \set TabStaff.restrainOpenStrings = ##t      
      \relative a { \musicII }
    }
  >>
  \layout {}
}

%-------------------------------------------------------------------------------
\markup { \bold { exercise 3 }}

musicIII = { 
    \tuplet 3/2 { a8 g a }
    \tuplet 3/2 { c a c }
    \tuplet 3/2 { d c d } 
    \tuplet 3/2 { ees d ees } |
    \tuplet 3/2 { e ees e }
    \tuplet 3/2 { g e g }
    \tuplet 3/2 { a g a }
    \tuplet 3/2 { c a c } |
    \tuplet 3/2 { d c d }
    ees2. |
} 

\score {
  <<
    \new Staff {
      \clef "treble"
      \relative a' { \musicIII }
    }
    \new TabStaff {
      \set TabStaff.minimumFret = #5
      \set TabStaff.restrainOpenStrings = ##t      
      \relative a { \musicIII }
    }
  >>
  \layout {}
}

%-------------------------------------------------------------------------------
\markup { \bold { exercise 4 }}

musicIV = { 
    \tuplet 3/2 { c8 d c }
    \tuplet 3/2 { a c a }
    \tuplet 3/2 { g a g } 
    \tuplet 3/2 { e g e } |
    \tuplet 3/2 { ees e ees }
    \tuplet 3/2 { d e d }
    \tuplet 3/2 { c d c } 
    \tuplet 3/2 { a c a } | \break
    \tuplet 3/2 { g a g }
    \tuplet 3/2 { e g e }
    \tuplet 3/2 { ees e ees } 
    \tuplet 3/2 { d e d } |
    \tuplet 3/2 { ees e g }
    a2. |
} 

\score {
  <<
    \new Staff {
      \clef "treble"
      \relative a'' { \musicIV }
    }
    \new TabStaff {
      \set TabStaff.minimumFret = #3
      \set TabStaff.restrainOpenStrings = ##t      
      \relative a' { \musicIV }
    }
  >>
  \layout {}
}

%-------------------------------------------------------------------------------
\markup { \bold { exercise 5 }}

musicV = { 
    a8   c(    d)    ees(  e)   ees(    d)   c(   |
    d)   ees(  e)    g(    a)   g(      e)   ees( |
    e)   g(    a)    c(    d)   c(      a)   a(   |
    a2)  r2 |
} 

\score {
  <<
    \new Staff {
      \clef "treble"
      \relative a { \musicV }
    }
    \new TabStaff {
      \set TabStaff.minimumFret = #3
      \set TabStaff.restrainOpenStrings = ##t      
      \relative a { \musicV }
    }
  >>
  \layout {}
}

%-------------------------------------------------------------------------------
\markup { \bold { exercise 6 }}

musicVI = { 
    d8   c(    a)    g(    e)   g(      a)   c(   |
    a)   g(    e)    ees(  d)   e(      ees) g(   |
    e)   ees(  d)    c(    a)   c(      d)   ees( |  \break
    d)   c(    a)    g(    e)   g(      a)   c(   |
    a)   g(    e)    ees(  d)   ees(    e)   d(   |
    e)   ees(  d)    c(    d)   ees(    e)   g(   |
    a2)  r2 |
} 

\score {
  <<
    \new Staff {
      \clef "treble"
      \relative d''' { \musicVI }
    }
    \new TabStaff {
      \set TabStaff.minimumFret = #3
      \set TabStaff.restrainOpenStrings = ##t      
      \relative d'' { \musicVI }
    }
  >>
  \layout {}
}

%-------------------------------------------------------------------------------

\score {
  <<
    \new Staff { \clef "treble" \relative a'     { \musicI     }}
    \new Staff { \clef "treble" \relative a'     { \musicII    }}
    \new Staff { \clef "treble" \relative a'     { \musicIII   }}
    \new Staff { \clef "treble" \relative a''    { \musicIV    }}
    \new Staff { \clef "treble" \relative a      { \musicV     }}
    \new Staff { \clef "treble" \relative d'''   { \musicVI    }}
  >>
  \midi {}
}
