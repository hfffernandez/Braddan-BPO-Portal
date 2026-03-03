import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Manifiesto from './components/Manifiesto';
import Archivo from './components/Archivo';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative w-full min-h-screen bg-light">
      <Navbar />
      <Hero />
      <Features />
      <Manifiesto />
      <Archivo />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;
