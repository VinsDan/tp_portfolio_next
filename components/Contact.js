import styles from './Contact.module.css';

export default function Contact() {
  return (
    <footer className={styles.contact}>
      <h2 className={styles.contactTitle}>Contact</h2>
      <p className={styles.paragraph}>📧 Email : vincentdaniel2002@live.fr</p>
      <p className={styles.paragraph}>📱 Téléphone : +33 7 81 52 59 64</p>
      <p className={styles.paragraph}>💼 Portfolio réalisé avec ❤️</p>
    </footer>
  );
}
