export async function GET() {
  const projets = [
  {
    nom: 'Portfolio React',
    description: 'Un site personnel pour présenter mes compétences, projets et contact.',
    emoji: '💼',
  },
  {
    nom: 'App de gestion de tâches',
    description: 'Une appli de gestion de tâches',
    emoji: '📝',
  },
  {
    nom: "Application de boîte d’intérim",
    description: "Un site de proposition de jobs d’intérim.",
    emoji: '🏢',
  },
  {
    nom: 'Blog personnel',
    description: 'Un blog pour partager mes réflexions et articles.',
    emoji: '📰',
  }
];


  return Response.json(projets);
}
