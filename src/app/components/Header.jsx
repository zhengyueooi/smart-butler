import styles from '../style/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Aqua<span>Wash</span></div>
      <nav className={styles.nav}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Product</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
}
