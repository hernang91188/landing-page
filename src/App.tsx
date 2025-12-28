
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import About from './components/About';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Blog from './components/Blog';
import ScrollToHash from './components/ScrollToHash';

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen bg-cream-100 font-sans text-navy-900 selection:bg-gold-500 selection:text-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <Services />
              <Process />
              <About />
              <Booking />
            </main>
          } />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
