import debug from 'debug'
import { clone } from 'lodash/lang'

const log = debug('response')

function response (req) {
  const res = clone(req.xhr)

  res.body = res.responseText
  res.headers = req.xhr.getAllResponseHeaders()

  log(res.body)
  log(res.headers)

  return res
}

export default response