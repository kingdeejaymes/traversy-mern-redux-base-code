const express = require('express')
const router = express.Router()
const goalsCtrl = require('../controllers/goalController')

const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, goalsCtrl.getGoals).post(protect, goalsCtrl.setGoal)
router.route('/:id').delete(protect, goalsCtrl.deleteGoal).put(protect, goalsCtrl.updateGoal)

module.exports = router
