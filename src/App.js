// App.js
import React from 'react';
import Navbar from './Components/NavBar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './Components/Intro/intro';
import Projects from './Components/Projects/projects';
import About from './Components/About/about';
import Skills from './Components/Skills/skills';
import EmailForm from './Components/EmailForm';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/EmailForm" element={<EmailForm />} />
          <Route path="/" element={<Intro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
