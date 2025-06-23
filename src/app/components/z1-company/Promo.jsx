import styles from '../../style/z1-company/Promo.module.css';

export default function Promo() {
  return (
    <section className={styles.promo}>
      <h2>
        Get <span>50%</span> Off your First Car Wash
      </h2>
      <a href="#" className={styles.btn}>Order Now</a>
    </section>
  );
}
