import { STATUS_CODES } from 'http'
import _debug from 'debug'

export default () => {
  const debug = _debug('app:server:error')
  debug('Enable error middleware.')
  return async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.app.emit('error', err, ctx)

      ctx.status = ctx.status || 500
      ctx.type = 'application/json'
      ctx.body = {
        code: STATUS_CODES[ctx.status],
        message: err.message
      }
    }
  }
}
