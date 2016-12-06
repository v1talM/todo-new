export const apiDomain = 'http://todos.dev/'
export const loginUrl = apiDomain + 'oauth/token'
export const userUrl = apiDomain + 'api/user'
export const undoUrl = apiDomain + 'api/undo'
export const doingUrl = apiDomain + 'api/doing'
export const didUrl = apiDomain + 'api/did'
export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
}
