import Container from './components/Container';
// import Background from './components/Background';
import Shape from './components/Shape';
import Footer from './components/Footer';
import Header from './components/Header';
import './scss/_main.scss'; // assuming a styles directory under src/

function App() {
  return (
    <div className="main">
      <Header />
      {/* <Background /> */}
      <Shape />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
