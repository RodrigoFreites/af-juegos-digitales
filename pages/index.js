import { Typography } from '@mui/material';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AF Juegos Digitales</title>
        <meta name="description" content="Tienda de juegos digitales" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h1" variant="h1">
        AF Juegos Digitales
      </Typography>
    </div>
  );
}
