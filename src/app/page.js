'use client'

import Header from './components/z1-company/Header';
import Hero from './components/z1-company/Hero';
import Services from './components/z1-company/Services';
import Features from './components/z1-company/Features';
import Promo from './components/z1-company/Promo';
import Testimonials from './components/z1-company/Testimonials';
import MainHome from './components/main';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (<>
    <MainHome />
    </>);
  }
  