
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-cream-100 font-sans text-navy-900 selection:bg-gold-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <About />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}

export default App;
