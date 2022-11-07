import Background, { Sketch } from './components/Background';
import Container from './components/Container';
import Footer from './components/Footer';
import Header from './components/Header';
import './scss/_main.scss'; // assuming a styles directory under src/

function App() {
  return (
    <div className="main">
      <Header />
      <Container />
      <Background />
      <Footer />
    </div>
  );
}

export default App;
