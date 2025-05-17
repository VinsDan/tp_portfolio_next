import styles from './a_propos.module.css';
import Link from 'next/link';

export default function APropos() {
  return (
    <div className={styles.container}>
      <div>
        <h2>À propos de moi</h2>
        <p>
          Bonjour, je m'appelle Vincent Daniel. Je suis étudiant en informatique et passionné par le développement web.
          J’ai conçu ce portfolio avec Next.js pour présenter mes compétences, projets et contacts.
        </p>
        <p>
          Mes domaines de prédilection incluent le front-end (React, Next.js), la gestion de projet, et le travail en équipe.
          J’aime construire des applications web fonctionnelles, ergonomiques et modernes.
        </p>
  {/* ✅ Bouton de retour à l'accueil */}
        <Link href="/">
          <button className={styles.backButton}>Retour à l’accueil</button>
        </Link>
      </div>
    </div>
  );
}
