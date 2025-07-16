import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 – Seite nicht gefunden | Tourney</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <h1>404 – Seite nicht gefunden</h1>
    </>
  );
}
