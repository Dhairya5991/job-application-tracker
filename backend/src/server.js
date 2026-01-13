const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(morgan('combined'));

let isDbConnected = false;

/* ---------------- DATABASE ---------------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection failed', err));

mongoose.connection.on('connected', () => {
  isDbConnected = true;
});

mongoose.connection.on('disconnected', () => {
  isDbConnected = false;
});

/* ---------------- API ROOT ---------------- */
app.get('/api', (req, res) => {
  res.status(200).json({
    name: 'Job Application Tracker API',
    version: '1.0.0',
    status: 'running',
    endpoints: {
      auth: '/api/auth',
      jobs: '/api/jobs',
      admin: '/api/admin'
    }
  });
});

/* ---------------- HEALTH CHECKS ---------------- */
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    service: 'job-application-tracker-api',
    timestamp: new Date().toISOString()
  });
});

app.get('/ready', (req, res) => {
  if (isDbConnected) {
    res.status(200).json({ status: 'READY', database: 'connected' });
  } else {
    res.status(503).json({ status: 'NOT_READY', database: 'disconnected' });
  }
});

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Job Application Tracker API is running',
    version: '1.0.0',
    docs: '/api',
    health: '/health'
  });
});

/* ---------------- ROUTES ---------------- */
app.use('/api/auth', require('./routes/auth'));
app.use('/api/jobs', require('./routes/jobs'));
app.use('/api/admin', require('./routes/admin'));

/* ---------------- ERRORS ---------------- */
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

/* ---------------- SERVER ---------------- */
const server = app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});

/* ---------------- GRACEFUL SHUTDOWN ---------------- */
process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

function shutdown() {
  console.log('Shutting down gracefully...');
  server.close(() => {
    mongoose.connection.close(false, () => {
      console.log('MongoDB disconnected');
      process.exit(0);
    });
  });
}
