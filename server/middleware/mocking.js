import { join } from 'path'
import fs from 'fs'
import send from 'koa-send'
import _debug from 'debug'

const debug = _debug('app:server:mocking')

export default ({ root, matcher, reducer }) => {
  debug('Enable mocking middleware.')

  let lastMatcher = () => true
  let lastReducer = dest => dest

  if (matcher) {
    if (typeof matcher === 'function') {
      lastMatcher = matcher
    } else if (matcher.constructor === RegExp) {
      lastMatcher = url => matcher.test(url)
    }
  }

  if (reducer) {
    if (typeof reducer === 'function') {
      lastReducer = reducer
    } else if (reducer.constructor === RegExp) {
      lastReducer = url => url.replace(reducer, '')
    }
  }

  return async (ctx, next) => {
    if (lastMatcher(ctx.url)) {
      const dest = join(lastReducer(ctx.path), ctx.method + '.json')
      if (fs.existsSync(join(root, dest))) {
        ctx.status = 403
        if (await send(ctx, dest, { root })) {
          debug('Mock file found: %s', dest)
          return
        }
      }
    }
    await next()
  }
}
