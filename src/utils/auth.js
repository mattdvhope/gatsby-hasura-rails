// This provides functions for logging in and logging out..

export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("user")
    ? JSON.parse(window.localStorage.getItem("user"))
    : {}

const setUser = user =>
  window.localStorage.setItem("user", JSON.stringify(user))

export const handleLogin = person => {
  if (!isBrowser) return false
  return setUser(person)
}

export const isLoggedIn = () => {
  const user = getUser()
  console.log(user);
  if (user.name) {
    return true
  } else {
    return false
  }
  // return !!user.name
}

export const logout = callback => {
  setUser({})
  callback()
}