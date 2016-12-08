export const apiDomain = 'http://todos.dev/'
export const registUrl = apiDomain + 'api/register'
export const loginUrl = apiDomain + 'oauth/token'
export const userUrl = apiDomain + 'api/user'
export const undoUrl = apiDomain + 'api/undo'
export const doingUrl = apiDomain + 'api/doing'
export const didUrl = apiDomain + 'api/did'
export const changeToUndo = apiDomain + 'api/changeToUndo/'
export const changeToDoing = apiDomain + 'api/changeToDoing/'
export const changeToDid = apiDomain + 'api/changeToDid/'
export const addTodoUrl = apiDomain + 'api/todo'
export const delTodoUrl = apiDomain + 'api/todo/'

export const getHeader = function () {
  const tokenData = JSON.parse(window.localStorage.getItem('authUser'))
  const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer ' + tokenData.access_token
  }
  return headers
}
