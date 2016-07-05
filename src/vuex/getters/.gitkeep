export default {
  auth ({ auth: { auth } }) {
    if (!auth) {
      return null
    }
    const { token, expires } = auth
    if (!token || expires < Date.now()) {
      return null
    }
    return auth
  }
}
