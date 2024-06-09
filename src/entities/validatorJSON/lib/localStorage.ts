export const getLastJSONLocalStorage = (key = 'JSONValid_last') => {
  return localStorage.getItem(key) as string
}
