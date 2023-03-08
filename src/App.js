import React from 'react';
import Background from './components/Background';

// Component
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Services from './components/Services';

// Styles
import './scss/_main.scss';

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Header />
        <Background />
        <Projects />
        <Services />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
