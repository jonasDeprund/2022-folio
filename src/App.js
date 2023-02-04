import React from 'react';

// Component
import Footer from './components/Footer';
import Nav from './components/Nav';
import Projects from './components/Projects';

// Styles
import './scss/_main.scss';

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Projects />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
