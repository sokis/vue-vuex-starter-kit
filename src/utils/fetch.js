import request from './request'
import * as api from 'store/constants/api'

export function fetch(url, options) {
  options = Object.assign({
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }, options)

  url = __MOCK__ ? `apis/${url}` : api[url]

  if (options.method === 'POST') {
    options.body = params(options.body)
  }

  return request(url, options).then(json => {
    try {
      if (typeof json !== 'object') {
        json = JSON.parse(json)
      }
    } catch (es) {
      const e = new Error()
      e.message = 'Error Type'
      e.code = '10001'
      throw e
    }

    return json
  })
}

function params(data = {}) {
  return Object.keys(data).map(i => {
    const v = data[i]
    return `${encodeURIComponent(i)}=${encodeURIComponent(v)}`
  }).join('&')
}

const DEFAULT_PARAMS = {

}

export function GET(url, query, option = {}) {
  const options = {
    method: 'GET',
    query: Object.assign({}, DEFAULT_PARAMS, query),
    ...option
  }

  return fetch(url, options)
}

export function POST(url, body, option = {}) {
  const options = {
    method: 'POST',
    body: Object.assign({}, DEFAULT_PARAMS, body),
    ...option
  }

  return fetch(url, options)
}
