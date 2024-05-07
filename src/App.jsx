import React from 'react';
import Navbar from './components/Navbar';
import ModelView from './components/ModelView';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home" className="section">
        <ModelView />
      </div>
      <div id="about" className="section">
        <h1>About</h1>
      </div>
      <div id="wheels" className="section">
        <h1>Wheels</h1>
      </div>
      <div id="contact" className="section">
        <h1>Contact</h1>
      </div>
    </div>
  );
}

export default App;
