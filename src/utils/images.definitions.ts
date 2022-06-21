export const staticImageDirectories = {
  ARROW_LEFT: "arrowLeft",
} as const

const staticImageDirectoriesList = [
  staticImageDirectories.ARROW_LEFT
] as const

export type ImageDirectories = typeof staticImageDirectoriesList[number]

export const imageDirectories = new Map<ImageDirectories, string>([
  [staticImageDirectories.ARROW_LEFT, "/icons/arrow-left.svg"],
])