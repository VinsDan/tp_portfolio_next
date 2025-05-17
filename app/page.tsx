'use client';

import Link from 'next/link';
import '@/app/globals.css';
import Presentation from '@/components/Presentation';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center', position: 'relative' }}>
      {/* ✅ Bouton clair/sombre en haut à droite */}
      <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
      </div>
      <Presentation />

      <p style={{
         marginTop: '1rem',
        fontSize: '1.2rem',
        color: 'var(--foreground)'  // ✅ utilise la variable CSS
      }}>
  Bienvenue sur mon portfolio. Découvrez qui je suis et mes réalisations en cliquant ci-dessous.
</p>


      <nav style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link href="/a_propos">
          <button className="japan-button">À propos</button>
        </Link>
        <Link href="/projets">
          <button className="japan-button">Mes Projets</button>
        </Link>
        <Link href="/contact">
          <button className="japan-button">Contact</button>
        </Link>
      </nav>
    </main>
  );
}
