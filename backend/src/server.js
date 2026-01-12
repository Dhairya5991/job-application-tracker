
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'));

app.get('/health', (req,res)=>res.json({status:'UP'}));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/admin', require('./routes/admin'));

app.listen(5000, ()=>console.log('Backend running'));
