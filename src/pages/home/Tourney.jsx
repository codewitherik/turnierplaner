import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home | Tourney Turnierplaner 2025</title>
        <meta name="description" content="Willkommen bei Tourney, deinem Turnierplaner 2025." />
        <meta property="og:title" content="Tourney Turnierplaner" />
        <meta property="og:description" content="Organisiere deine Turniere einfach und schnell." />
      </Helmet>

      <h1>🏠 Home</h1>
    </>
  );
}
