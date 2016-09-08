/**
 * Mocking client-server processing
 */
export default {
    doubleAsync(counter, cb) {
        return new Promise((resolve) => {
            setTimeout(() => {
                cb(counter + 2)
                resolve()
            }, 200)
        })
    }
}