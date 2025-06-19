import './globals.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Promo from './components/Promo';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Features />
      <Promo />
      <Testimonials />
    </>
  );
}
