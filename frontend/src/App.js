import React, { useEffect, useState } from 'react';
import api from './api';
import PlanForm from './components/PlanForm';
import PlanList from './components/PlanList';

export default function App() {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    api.get('/plans').then(res => setPlans(res.data));
  }, []);

  return (
    <div className="App">
      <h1>Lesson Plan Architect</h1>
      <PlanForm onNewPlan={plan => setPlans([plan, ...plans])} />
      <PlanList plans={plans} />
    </div>
  );
}
