import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Redefining from './components/Redefining';
import Templates from './components/Templates';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Redefining />
      <Templates />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}
