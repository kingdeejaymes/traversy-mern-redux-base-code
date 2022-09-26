import axios from 'axios'

const API_URL = '/api/users/'

// Update user profile
const update = async (userID, userData, token) => {
  const response = await axios.put(API_URL + userID, userData, getAuthHeaders(token))

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const getAuthHeaders = (token) => {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  }

const authService = {
    update,
}

export default authService
