
const router = require('express').Router();
const Job = require('../models/Job');
const auth = require('../middleware/auth');

router.get('/', auth, async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const jobs = await Job.find({ userId: req.user.id })
    .skip((page - 1) * limit)
    .limit(Number(limit));
  res.json(jobs);
});

router.post('/', auth, async (req, res) => {
  const job = await Job.create({ ...req.body, userId: req.user.id });
  res.json(job);
});

module.exports = router;
