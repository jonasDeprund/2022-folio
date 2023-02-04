import React from 'react';

// Component
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ProjectSmallPreview from './components/ProjectSmallPreview';

// Styles
import './scss/_main.scss';

const projects = [
  {
    title: 'Nexity',
    image: './images/thumb-bonduelle.png',
    description: 'Ceci est une description pour le projet 1',
  },
  {
    title: 'Bonduelle',
    image: './images/thumb-bonduelle.png',
    description: 'Ceci est une description pour le projet 2',
  },
  {
    title: 'Danone',
    image: './images/thumb-bonduelle.png',
    description: 'Ceci est une description pour le projet 3',
  },
  {
    title: 'Elo Group',
    image: './images/thumb-bonduelle.png',
    description: 'Ceci est une description pour le projet 3',
  },
  {
    title: 'AHP',
    image: './images/thumb-bonduelle.png',
    description: 'Ceci est une description pour le projet 3',
  },
  {
    title: 'Brico',
    image: './images/thumb-bonduelle.png',
    description: 'Ceci est une description pour le projet 3',
  },
];

function App() {
  return (
    <div>
      <nav>
        <Nav />
      </nav>
      <main>
        <Header />
        {projects.map((project, index) => (
          <ProjectSmallPreview
            title={project.title}
            image={project.image}
            description={project.description}
          />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
