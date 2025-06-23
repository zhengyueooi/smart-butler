'use client'

import Head from 'next/head';
import styles from '../../style/main/MainHome.module.css';
import { useState } from 'react';
import Header from '../z1-company/Header';
import Hero from '../z1-company/Hero';
import Services from '../z1-company/Services';
import Features from '../z1-company/Features';
import Promo from '../z1-company/Promo';
import Testimonials from '../z1-company/Testimonials';
export default function MainHome() {

    const [modalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleOpenModal = (template) => {
        if (template === 'product') {
        // Replace this with your actual code you want to show
        setModalContent(`<section><h1>Product Launch Template Code</h1><p>// ...</p></section>`);
        setModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setModalContent('');
    };

  return (
    <>
      <Head>
        <title>Your Company - Landing Pages</title>
        <meta name="description" content="We build modern, high-converting landing pages." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className={styles.main}>
        {/* Hero */}
        <section className={styles.hero} id="hero" data-aos="fade-up">
          <h1>🚀 Turn Clicks into Customers</h1>
          <p>We build beautiful, high-converting landing pages that drive real results.</p>
          <button className={styles.cta}>Get a Free Quote</button>
        </section>

        {/* Services */}
        <section className={styles.section} id="services">
          <h2 data-aos="fade-up">What We Offer</h2>
          <div className={styles.grid}>
            {[
              ["Landing Page Design", "Fast, responsive pages crafted for visual impact."],
              ["Conversion Optimization", "We follow proven strategies to increase leads."],
              ["Custom Development", "Add animations, forms, or backend integrations."],
              ["Template Adaptation", "Start from a base or let us custom-build it."],
            ].map(([title, desc], i) => (
              <div
                key={i}
                className={styles.card}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partners */}
        <section className={styles.section} id="partners">
          <h2 data-aos="fade-up">Trusted by Brands</h2>
          <div className={styles.logoGrid}>
            {["partner1", "partner2", "partner3", "partner4"].map((logo, i) => (
              <img
                key={logo}
                src={`/logos/${logo}.svg`}
                alt={logo}
                data-aos="fade-up"
                data-aos-delay={i * 100}
              />
            ))}
          </div>
        </section>

        {/* Templates */}
        {/* Templates Section */}
        <section className={styles.section} id="templates">
          <h2 data-aos="fade-up">Explore Our Templates</h2>
          <div className={styles.templateShowcase}>
            <div className={styles.templateCard}>
              <img src="/templates/saas.png" alt="SaaS Startup" />
              <h3>SaaS Startup</h3>
            </div>
            <div
              className={styles.templateCard}
              onClick={() => handleOpenModal('product')}
              style={{ cursor: 'pointer' }}
            >
              <img src="/templates/product.png" alt="Product Launch" />
              <h3>Product Launch</h3>
            </div>
            <div className={styles.templateCard}>
              <img src="/templates/local.png" alt="Local Business" />
              <h3>Local Business</h3>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className={styles.section} id="contact" data-aos="fade-up">
          <h2>Let’s Build Something Great</h2>
          <p>Have a project in mind? Fill in the form below:</p>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Tell us about your project..." rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <nav>
          <a href="#hero">Home</a>
          <a href="#services">Services</a>
          <a href="#partners">Partners</a>
          <a href="#templates">Templates</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>


        {/* Modal */}
        {modalOpen && (
          <div className={styles.modalOverlay} onClick={handleCloseModal}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
              <h2>Product Launch Template</h2>
              <pre className={styles.codeBlock}>
                <Header />
                <Hero />
                <Services />
                <Features />
                <Promo />
                <Testimonials />
              </pre>
              <button onClick={handleCloseModal} className={styles.closeBtn}>Close</button>
            </div>
          </div>
        )}
    </>
  );
}
