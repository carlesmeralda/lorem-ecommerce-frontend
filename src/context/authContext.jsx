import { createContext, useCallback, useState, useEffect } from 'react'

export const AuthContext = createContext({
  isAuth: false,
  login: () => {},
  logout: () => {},
  userId: null,
  token: null,
})

let logoutTimer

const AuthContextProvider = ({ children }) => {
  const [userId, setUserId] = useState()
  const [tokenExp, setTokenExp] = useState()
  const [token, setToken] = useState(false)

  const loginHandler = useCallback((uid, token, expDate) => {
    setToken(token)
    setUserId(uid)

    const tokenExpire =
      expDate || new Date(new Date().getTime() + 1000 * 60 * 60)

    setTokenExp(tokenExpire)

    localStorage.setItem(
      'user-data',
      JSON.stringify({
        userId: uid,
        token,
        expiration: tokenExpire.toISOString(),
      })
    )
  }, [])

  const logoutHandler = useCallback(() => {
    setToken(null)
    setTokenExp(null)
    setUserId(null)
    localStorage.removeItem('user-data')
  }, [])

  useEffect(() => {
    if (token && tokenExp) {
      const remainingTime = tokenExp.getTime() - new Date().getTime()
      logoutTimer = setTimeout(logoutHandler, remainingTime)
    } else {
      clearTimeout(logoutTimer)
    }
  }, [token, logoutHandler, tokenExp])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('user-data'))

    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      loginHandler(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration)
      )
    }
  }, [loginHandler])

  return (
    <AuthContext.Provider
      value={{
        isAuth: !!token,
        token: token,
        login: loginHandler,
        logout: logoutHandler,
        userId: userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
