import axios from 'axios'

const client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
})

const clearUserSessionInfoLocalStorage = () => {
  localStorage.removeItem('omsToken')
}

/**
 * Extract bearer token from the request Authorization header
 * @param req
 */
const parseBearerToken = req => {
  const auth = req.headers ? req.headers.Authorization || null : null
  if (!auth) {
    return null
  }

  const parts = auth.split(' ')
  // Malformed header
  if (parts.length < 2) {
    return null
  }

  const schema = parts.shift().toLowerCase()
  const token = parts.join(' ')
  if (schema !== 'bearer') {
    return null
  }

  return token
}

const signOut = () => {
  client.request({
    method: 'POST',
    url: '/api/v1/auth/logout',
  }).finally(() => {
    clearUserSessionInfoLocalStorage()
    window.location = '/login'
  })
}

const login = (username, password) => {
  console.log("here,,,,,")
  return client.post('/api/login', { email: username, password }).then(response => {
    console.log("response", response)
    clearUserSessionInfoLocalStorage()
    console.log("token",  response.data.token);
    localStorage.setItem('omsToken', response.data.token)
    return Promise.resolve(response.data)
  })}

const getRefreshToken = () => {
  return client.get('/api/v1/auth/refresh_token').then(response => {
    const userInfo = response.data
    localStorage.setItem('omsToken', userInfo.accessToken)
    client.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`
    return Promise.resolve(response.data)
  })
}

const apiResponseErrorInterceptor = async error => {
  if (
    error.response.status === 401 &&
    !window.location.pathname.includes('login') &&
    !window.location.pathname.includes('password')
  ) {
    await signOut()
  } else if (
    (error.response && error.response.status === 403) ||
    (error.response && error.response.data.messages && error.response.data.messages[0].token_class === 'AccessToken')
  ) {
    const originalRequest = error.config
    const originalReqAccessToken = parseBearerToken(originalRequest)

    if (originalReqAccessToken) {
      return getRefreshToken()
        .then(resp => {
          originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`
          return client.request(originalRequest)
        })
        .catch(async () => {
          await signOut()
        })
    }
  }
  return Promise.reject(error)
}

// client.interceptors.response.use(
//   apiResponseErrorInterceptor,
// )

const apiRequest = options => {
  const accessToken = localStorage.getItem('botsAccessToken')

  if (accessToken) {
    client.defaults.headers.Authorization = `Bearer ${accessToken}`
  }

  const onSuccess = response => response
  const onError = error => Promise.reject(error.response || error.message)

  return client.request(options).then(onSuccess).catch(onError)
}

const isLoggedIn = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('omsToken')
  }
  else {
    return false;
  }
}

export { client, login, signOut, getRefreshToken, isLoggedIn }

export default apiRequest