export const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

export const isValidKey = (
  key: string | number | symbol,
  object: object
): key is keyof typeof object => {
  return key in object
}
