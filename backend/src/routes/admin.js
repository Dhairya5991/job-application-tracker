
const router = require('express').Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const User = require('../models/User');

router.get('/users', auth, admin, async(req,res)=>{
  res.json(await User.find());
});

module.exports = router;
