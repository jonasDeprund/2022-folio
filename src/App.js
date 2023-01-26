import React from 'react';
// Component
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ContainerProject from './components/ContainerProject';

// Styles
import './scss/_main.scss';

const projects = [...]; // Ajoutez ici la liste des projets

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Header />
        <ContainerProject projects={projects} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
