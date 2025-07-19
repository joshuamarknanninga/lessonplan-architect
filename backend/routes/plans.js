const router = require('express').Router();
const fetch = require('node-fetch');
const Plan = require('../models/Plan');

const GPT_URL = 'https://chatgpt.com/g/g-680d4e8e096c8191ae677b55cee0a9e7-lesson-plan-architect';

// Generate new lesson plan via your custom GPT and save it
router.post('/generate', async (req, res) => {
  const { prompt, title } = req.body;
  try {
    // Proxy the prompt to your custom GPT endpoint
    const gptRes = await fetch(GPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const { response: content } = await gptRes.json();

    // Persist to MongoDB
    const plan = await Plan.create({ title, content });
    res.json(plan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Generation failed' });
  }
});

// Fetch all saved plans
router.get('/', async (_, res) => {
  const plans = await Plan.find().sort('-createdAt');
  res.json(plans);
});

module.exports = router;
