import React, { useState } from 'react';
import api from '../api';

export default function PlanForm({ onNewPlan }) {
  const [prompt, setPrompt] = useState('');
  const [title, setTitle] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await api.post('/plans/generate', { prompt, title });
    onNewPlan(res.data);
    setPrompt('');
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Plan title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Describe what you need..."
        value={prompt}
        onChange={e => setPrompt(e.target.value)}
        required
      />
      <button type="submit">🚀 Generate Lesson Plan</button>
    </form>
  );
}
