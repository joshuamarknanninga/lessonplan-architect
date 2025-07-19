require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const planRoutes = require('./routes/plans');

const app = express();
app.use(cors(), express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('🎉 MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/plans', planRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server listening on port ${PORT}`));
