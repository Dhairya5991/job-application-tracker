
const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: String,
  position: String,
  status: { type: String, default: 'Applied' },
  notes: String,
  userId: mongoose.Schema.Types.ObjectId
}, { timestamps: true });

module.exports = mongoose.model('Job', JobSchema);
