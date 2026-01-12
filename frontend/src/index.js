
import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div style={{fontFamily:'Arial',padding:'40px'}}>
      <h1>Job Application Tracker</h1>
      <p>Modern DevOps-ready full stack app</p>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
