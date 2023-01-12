import React from 'react';
// Component
import Header from './components/Header';
import Background from './components/Background';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Thumbnail from './components/Thumbnail';
// Styles
import './scss/_main.scss';

function App() {
  return (
    <div className="main">
      <Nav />
      <Header />
      <Background />
      <Thumbnail />
      <Footer />
    </div>
  );
}

export default App;
