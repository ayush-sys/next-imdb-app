import type { NextPage } from 'next';
import Head from 'next/head';
import { Header, Navbar } from "../components/index";


const Home: NextPage = () => {
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


      {/* <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className='text-4xl tracking-wide text-gray-600'>
          Welcome to 
          <span className='hover:text-gray-700'>IMDb Clone</span>
        </h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a className='text-xl font-semibold text-gray-500 hover:text-gray-700'>
          Developed by Ayush Pattanayak
        </a>
      </footer> */}
    </div>
  )
}

export default Home
