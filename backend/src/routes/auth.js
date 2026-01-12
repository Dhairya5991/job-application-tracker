
const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async(req,res)=>{
  await new User(req.body).save();
  res.json({message:'Registered'});
});

router.post('/login', async(req,res)=>{
  const user = await User.findOne({email:req.body.email});
  if(!user) return res.sendStatus(401);
  const ok = await bcrypt.compare(req.body.password, user.password);
  if(!ok) return res.sendStatus(401);
  const token = jwt.sign({id:user._id, role:user.role}, process.env.JWT_SECRET);
  res.json({token, role:user.role});
});

module.exports = router;
