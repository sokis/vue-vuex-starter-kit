import { POST } from 'utils/fetch'
import { Schema, arrayOf, normalize } from 'normalizr'

// ------------------------------------
// Constants
// ------------------------------------
export const USER_LIST = 'USER_LIST'

// ------------------------------------
// Apis
// ------------------------------------
const user = new Schema('users')

export function list() {
  return POST(USER_LIST).then(json => normalize(json, { data: arrayOf(user) }))
}
