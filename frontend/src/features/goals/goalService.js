import axios from 'axios'

const API_URL = '/api/goals/';

// Create new goal
const createGoal = async (goalData, token) => {
  const config = getAuthHeaders(token);

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get user goals
const getGoals = async (token) => {
  const config = getAuthHeaders(token);

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = getAuthHeaders(token);

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

const getAuthHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal,
}

export default goalService
