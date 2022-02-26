import Head from 'next/head';
import requests from "../libs/requests";
import { Header, Navbar, Main, Footer } from "../components/index";


export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        <link rel="icon" href="/hulu.png" />
      </Head>

      {/* Header */}
      <Header/>

      {/* Navbar */}
      <Navbar/>

      {/* Main */}
      <Main results={results}/>

      {/* Footer */}
      <Footer />
    </div>
  );
}


export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || 
  requests.fetchTrending.url}`).then(res => res.json());

  return {
    props: {
      results: request.results,
    }
  }
}
