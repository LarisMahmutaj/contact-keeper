import axios from 'axios'

const setAuthToken = token => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token
  } else {
    delete axios.default.header.common['x-auth-token']
  }
}

export default setAuthToken
