import {post} from './utils/network'

export function signUp(data) {
  return function(dispatch) {
    return post('/api/register', data)
  }
}
