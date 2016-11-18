// ------------------------------------
// Constants
// ------------------------------------
export const INCREMENT = 'INCREMENT'
export const DOUBLE_ASYNC = 'DOUBLE_ASYNC'

// ------------------------------------
// Apis
// ------------------------------------
export function doubleAsync(...args) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2)
    }, 1000)
  })
}
