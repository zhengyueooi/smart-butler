import styles from '../style/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.text}>
        <h1>Highlights of <br /> Car wash</h1>
        <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.</p>
        <a href="#" className={styles.btn}>Order Now</a>
      </div>
      <div className={styles.image}>
        <img src="https://cdn.pixabay.com/photo/2017/06/20/19/22/honda-2420420_1280.jpg" alt="Car" />
      </div>
    </section>
  );
}
