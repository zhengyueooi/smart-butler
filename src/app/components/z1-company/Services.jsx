import styles from '../../style/z1-company/Services.module.css';

const services = [
  { title: "Exterior Wash", description: "Li Europan lingues es membres del sam familie." },
  { title: "Undercarriage Wash", description: "Lor separat existentie es un myth." },
  { title: "Rain Repellent Treatment", description: "Por scientie, musica, sport etc." },
];

export default function Services() {
  return (
    <section className={styles.services}>
      <h2>Our Service</h2>
      <div className={styles.cards}>
        {services.map((s, idx) => (
          <div key={idx} className={styles.card}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
