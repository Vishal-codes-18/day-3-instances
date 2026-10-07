import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import "./App.css";

function App() {
  return (
    <div className="dashboard">
      <h1>🚀 DevOps Dashboard</h1>
      <p>My first React application deployed on AWS EC2</p>

      <div className="cards">
        <div className="card">
          <h2>☁️ AWS EC2</h2>
          <p>Server: Running</p>
        </div>

        <div className="card">
          <h2>🐳 Docker</h2>
          <p>Status: Ready</p>
        </div>

        <div className="card">
          <h2>🔄 CI/CD</h2>
          <p>Status: Learning</p>
        </div>
      </div>

      <button onClick={() => alert("Deployment successful! 🚀")}>
        Test Deployment
      </button>
    </div>
  );
}

export default App;