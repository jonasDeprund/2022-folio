import React from 'react';

// Component
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ContainerProject from './components/ContainerProject';
import ProjectSmallPreview from './components/ProjectSmallPreview';

// Styles
import './scss/_main.scss';

const projects = [
  {
    title: 'Projet 1',
    image:
      'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    description: 'Ceci est une description pour le projet 1',
  },
  {
    title: 'Projet 2',
    image:
      'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
    description: 'Ceci est une description pour le projet 2',
  },
  {
    title: 'Projet 3',
    image:
      'https://images.unsplash.com/photo-1661956600684-97d3a4320e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3270&q=80',
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
