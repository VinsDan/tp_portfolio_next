import styles from './projets.module.css';

export default function Projets({ projets }) {
  return (
    <section className={styles.projets}>
      <h2 className={styles.titre}>Mes projets récents</h2>

      {projets.length === 0 ? (
        <p>Aucun projet pour l’instant.</p>
      ) : (
        projets.map((projet) => (
          <div className={styles.projet} key={projet.id}>
            <div className={styles['projet-info']}>
              <h3>{projet.titre}</h3>
              <p>{projet.description}</p>
              <a href={projet.lien} target="_blank" rel="noopener noreferrer">
                Voir le projet
              </a>
            </div>
            {projet.image && (
              <img
                src={projet.image}
                alt={`Illustration du projet ${projet.titre}`}
                width="300"
              />
            )}
          </div>
        ))
      )}
    </section>
  );
}
