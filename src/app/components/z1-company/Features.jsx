import styles from '../../style/z1-company/Features.module.css';

const features = [
  {
    title: "Preserving Paint Condition",
    description: "Li Europan lingues es membres del sam familie.",
    image: "https://cdn.pixabay.com/photo/2016/11/19/15/40/auto-1838781_1280.jpg"
  },
  {
    title: "Preventing Corrosion",
    description: "Lor separat existentie es un myth.",
    image: "https://cdn.pixabay.com/photo/2020/01/27/08/26/car-4797829_1280.jpg"
  },
  {
    title: "Boosting Pride of Ownership",
    description: "Por scientie, musica, sport etc.",
    image: "https://cdn.pixabay.com/photo/2018/04/04/12/25/car-3286716_1280.jpg"
  }
];

export default function Features() {
  return (
    <section className={styles.features}>
      <h2>Our Features</h2>
      {features.map((f, idx) => (
        <div key={idx} className={styles.feature}>
          <div className={styles.text}>
            <h3>{f.title}</h3>
            <p>{f.description}</p>
          </div>
          <img src={f.image} alt={f.title} className={styles.image} />
        </div>
      ))}
    </section>
  );
}
