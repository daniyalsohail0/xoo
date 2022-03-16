import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import About from './components/About';
import Socials from './components/Socials';
import Nft from './components/Nft';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Socials />
      <Nft />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
