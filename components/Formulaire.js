import styles from './Formulaire.module.css';
import { useState } from 'react';


export default function Formulaire({ ajouterProjet }) {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (titre.trim() && description.trim()) {
      ajouterProjet({ nom: titre, description });
      setTitre('');
      setDescription('');
    }
  };

  return (
    <section className={styles.formulaire}>
      <h2 className={styles.heading}>Ajouter un projet</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.champ}>
          <label className={styles.label} htmlFor="titre">Titre du projet</label>
          <input
            className={styles.input}
            type="text"
            id="titre"
            name="titre"
            placeholder="Ex: Blog manga"
            value={titre}
            onChange={(e) => setTitre(e.target.value)}
          />
        </div>

        <div className={styles.champ}>
          <label className={styles.label} htmlFor="description">Description</label>
          <textarea
            className={styles.textarea}
            id="description"
            name="description"
            placeholder="Ex: Un blog pour parler de mes mangas préférés"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button className={styles.button} type="submit">Ajouter</button>
      </form>
    </section>
  );
}
