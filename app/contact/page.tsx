'use client';

import { useState } from 'react';
import Link from 'next/link'; // ✅ Ajout du lien vers l'accueil
import styles from '@/components/Contact.module.css';

export default function ContactPage() {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [envoye, setEnvoye] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ nom, email, message });
    setEnvoye(true);
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.contactTitle}>Contact</h2>

      {envoye ? (
        <p className={styles.confirmation}>Merci pour ton message ! ✅</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="nom" className={styles.label}>Nom :</label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email :</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message :</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className={styles.textarea}
            />
          </div>

          <button type="submit" className={styles.button}>Envoyer</button>
        </form>
      )}

      {/* ✅ Bouton retour à l'accueil */}
      <div className={styles.returnContainer}>
        <Link href="/">
          <button className={styles.returnButton}>🏠 Retour à l’accueil</button>
        </Link>
      </div>
    </div>
  );
}
