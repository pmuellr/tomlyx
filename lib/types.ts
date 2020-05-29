export interface Exercises {
  title: string
  composer: string
  subtitle: string
  paperSize: string
  exercises: Exercise[]
}

export interface Exercise {
  name: string
  varName: string
  staffRelative: string
  tabRelative: string
  tabMinimumFret: string
  music: string
  pageBreakBefore: boolean
  pageBreakAfter: boolean
}