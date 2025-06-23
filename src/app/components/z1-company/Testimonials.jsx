import styles from '../../style/z1-company/Testimonials.module.css';

const testimonials = [
  {
    name: "Ariestina Marisa",
    text: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth."
  },
  {
    name: "Browendi Esia",
    text: "Por scientie, musica, sport etc. Litot Europa usa li sam vocabular."
  }
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <h2>What they Say About Us</h2>
      <div className={styles.cards}>
        {testimonials.map((t, idx) => (
          <div key={idx} className={styles.card}>
            <p>"{t.text}"</p>
            <strong>{t.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
