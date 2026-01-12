
const mongoose = require('mongoose');

module.exports = mongoose.model('Job', new mongoose.Schema({
  company:String,
  position:String,
  status:String,
  notes:String,
  userId: mongoose.Schema.Types.ObjectId
}, {timestamps:true}));
