
const router = require('express').Router();
const Job = require('../models/Job');
const auth = require('../middleware/auth');

router.get('/', auth, async(req,res)=>{
  const jobs = await Job.find({userId:req.user.id});
  res.json(jobs);
});

router.post('/', auth, async(req,res)=>{
  const job = await Job.create({...req.body, userId:req.user.id});
  res.json(job);
});

module.exports = router;
