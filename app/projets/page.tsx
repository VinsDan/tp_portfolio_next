import Link from 'next/link'; // ✅ AJOUT ICI
import Projets from '@/components/Projets';
import styles from '@/components/projets.module.css';

async function getProjets() {
  const res = await fetch('http://localhost:3000/api/projets', {
    cache: 'no-store',
  });
  return res.json();
}

export default async function ProjetsPage() {
  const projets = await getProjets();

  return (
    <section className={styles.projets}>
      <h2 className={styles.titre}>Mes projets récents</h2>
      
      {projets.map((projet: any, index: number) => (
  <div key={index} className={styles.projet}>
    <div className={styles['projet-info']}>
      <h3>
        <span className={styles.emoji}>{projet.emoji}</span> {projet.nom}
      </h3>
      <p>{projet.description}</p>
      <p className={styles.descriptionDetaillee}>
        {projet.details}
      </p>
    </div>
  </div>
))}


      {/* ✅ BOUTON RETOUR */}
      <div className={styles.boutonRetourContainer}>
        <Link href="/">
          <button className={styles.boutonRetour}>🏠 Retour à l’accueil</button>
        </Link>
      </div>
    </section>
  );
}
