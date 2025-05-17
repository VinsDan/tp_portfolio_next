import styles from './Skills.module.css';
import { useState } from 'react';

const compétences = [
  {
    nom: 'HTML / CSS',
    description: 'Bonne maîtrise des bases du web : mise en page, responsive, flexbox...',
    note: 4,
  },
  {
    nom: 'JavaScript / React',
    description: 'Création de composants dynamiques, hooks, props, routing...',
    note: 4,
  },
  {
    nom: 'Java',
    description: 'Connaissance correcte du langage',
    note: 3,
  },
  {
    nom: 'Git & GitHub',
    description: 'Utilisation de Git en solo et en groupe, gestion de branches, commits clairs.',
    note: 4,
  },
  {
    nom: 'Node.js',
    description: 'Connaissances de base pour du backend léger (express, npm).',
    note: 3,
  },
  {
    nom: 'C/C++',
    description: 'Bonne connaissance du langage en général, expérience en projet légère',
    note: 4,
  },
  {
    nom: 'Travail en équipe',
    description: 'Adaptabilité, communication, participation active aux projets.',
    note: 5,
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <section className={styles.skills}>
      <h2 className={styles.heading}>Mes compétences</h2>
      <ul className={styles.list}>
        {compétences.map((skill, index) => (
          <li
            key={index}
            className={styles.item}
            onClick={() => setActiveSkill(index)}
          >
            {skill.nom}
          </li>
        ))}
      </ul>

      {activeSkill !== null && (
        <div className={styles.description}>
          <p>{compétences[activeSkill].description}</p>
          <p className={styles.note}>
            Note :{' '}
            {'★'.repeat(compétences[activeSkill].note)}
            {'☆'.repeat(5 - compétences[activeSkill].note)}
          </p>
        </div>
      )}
    </section>
  );
}
