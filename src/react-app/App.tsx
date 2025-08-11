// src/App.tsx

import "./App.css";

function App() {
  return (
    <div className="landing-container">
      <div className="background-overlay"></div>
      
      <div className="content">
        <div className="logo-container">
          <span className="logo">⏰🔥</span>
        </div>
        
        <h1 className="title">HOTSTREAKZ</h1>
        
        <div className="slogan">On Fire or Burn Out</div>
        
        <div className="coming-soon">
          <span className="coming">COMING</span>
          <span className="soon">SOON</span>
        </div>
        
        <div className="description">
          The ultimate time-based fantasy sports experience
        </div>
      </div>
      
      <div className="neon-lines">
        <div className="neon-line neon-red"></div>
        <div className="neon-line neon-green"></div>
      </div>
    </div>
  );
}

export default App;
