import React from 'react';
import { Helmet } from 'react-helmet';

export default function Seo({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title || 'Tourney - Turniere planen leicht gemacht'}</title>
      <meta name="description" content={description || 'Tourney ist die beste Plattform, um Turniere einfach zu erstellen und zu verwalten.'} />
      <meta name="keywords" content={keywords || 'Turniere, Planung, Sport, Management, Tournament'} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Füge weitere Meta-Tags hinzu, falls nötig */}
      <link rel="canonical" href={window.location.href} />
    </Helmet>
  );
}
