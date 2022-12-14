import axios from "axios"

const LOCALSTORAGE_KEYS = {
  accessToken: 'spotify_access_token',
  refreshToken: 'spotify_refresh_token',
  expireTime: 'spotify_token_expire_time',
  timestamp: 'spotify_token_timestamp',
}

const LOCALSTORAGE_VALUES = {
  accessToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.accessToken),
  refreshToken: window.localStorage.getItem(LOCALSTORAGE_KEYS.refreshToken),
  expireTime: window.localStorage.getItem(LOCALSTORAGE_KEYS.expireTime),
  timestamp: window.localStorage.getItem(LOCALSTORAGE_KEYS.timestamp),
}

const hasTokenExpired = () => {
  const { expireTime, timestamp, accessToken } = LOCALSTORAGE_VALUES

  if (!accessToken || !timestamp) {
    return false
  }
  const milisecondsElapsed = Date.now() - Number(timestamp)
  return (milisecondsElapsed / 1000) > Number(expireTime)
}

const refreshToken = async () => {
  try {
    if (!LOCALSTORAGE_VALUES.refreshToken || LOCALSTORAGE_VALUES.refreshToken === 'undefined' || (Date.now() - Number(LOCALSTORAGE_VALUES.timestamp) / 1000) < 1000) {
      console.error('No refresh token or token has expired')
      logout()
    }

    const { data } = await axios.get(`/refresh_token?refresh_token=${LOCALSTORAGE_VALUES.refreshToken}`)
    window.localStorage.setItem(LOCALSTORAGE_KEYS.accessToken, data.access_token)
    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now())

    window.location.reload()

  } catch (e) {
    console.error(e)
  }
}

export const logout = () => {
  for (const property in LOCALSTORAGE_KEYS) {
    window.localStorage.removeItem(LOCALSTORAGE_KEYS[property])
  }
  window.location = window.location.origin
}

const getAccessToken = () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const queryParams = {
    [LOCALSTORAGE_KEYS.accessToken]: urlParams.get('access_token'),
    [LOCALSTORAGE_KEYS.refreshToken]: urlParams.get('refresh_token'),
    [LOCALSTORAGE_KEYS.expireTime]: urlParams.get('expires_in'),
  }

  const hasError = urlParams.get('error');

  if (hasError || hasTokenExpired() || LOCALSTORAGE_VALUES.accessToken === 'undefined') {
    refreshToken() // refresh token if expired or no token
  }

  if (LOCALSTORAGE_VALUES.accessToken && LOCALSTORAGE_VALUES.accessToken !== 'undefined') {
    return LOCALSTORAGE_VALUES.accessToken
  }

  if (queryParams[LOCALSTORAGE_KEYS.accessToken]) {
    for (const property in queryParams) {
      window.localStorage.setItem(property, queryParams[property])
    }

    window.localStorage.setItem(LOCALSTORAGE_KEYS.timestamp, Date.now())
    return queryParams[LOCALSTORAGE_KEYS.accessToken]
  }
  return false
}

export const accessToken = getAccessToken()

// axios Globals
axios.defaults.baseURL = 'https://api.spotify.com/v1'
axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
axios.defaults.headers.post['Content-Type'] = 'application/json'

export const getCurrentUserProfile = () => axios.get('/me')

export const getCurrentUserPlaylist = (limit = 20) => {
  return axios.get(`/me/playlists?limit=${limit}`)
}

export const getTopArtists = (time_range = 'short_term') => {
  return axios.get(`/me/top/artists?time_range=${time_range}`)
}

export const getTopTracks = (time_range = 'short_term') => {
  return axios.get(`/me/top/tracks?time_range=${time_range}`);
}