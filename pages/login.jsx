import Head from "next/head";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";


export default function login() {
  return (
    <div>
        <Head>
            <title>Hulu 2.0</title>
            <link rel="icon" href="/hulu.png" />
        </Head>

        <main className="flex flex-col items-center justify-center">
            <Image 
                src="https://links.papareact.com/ua6"
                alt="hulu-logo"
                height={300}
                width={400}
            />

            <button className="login-btn">
                <FaGoogle className="h-4 w-4 mr-2"/>
                Login with Google
            </button>
        </main>
    </div>
  )
}