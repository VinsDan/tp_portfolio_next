import styles from './Presentation.module.css';

export default function Presentation() {
  return (
    <section className={styles.presentation}>
      <div className={styles.overlay}>
        <h1 className={styles.title}>PORTFOLIO</h1>
        <p className={styles.text}>
          Bonjour, Je m'appelle Vincent DANIEL, Voici mon Portfolio !
        </p>
      </div>
    </section>
  );
}
