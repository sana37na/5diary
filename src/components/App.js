import './../App.css';
import Header from './Header';
import Navigation from './Navigation';
import Top from '../pages/Top';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrap">
        {/* <Top /> */}
        <Navigation />
      </div>
        <Footer />
    </div>
  );
}

export default App;
