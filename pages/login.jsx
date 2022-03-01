import Head from "next/head";
import Image from "next/image";
import { FaGoogle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
// import firebase from "../libs/firebase";
import { signIn, signOut, useSession } from "next-auth/react";



export default function login() {
    const { data:session } = useSession();

  return (
    <div>
        <Head>
            <title>Hulu 2.0</title>
            <link rel="icon" href="/hulu.png" />
        </Head>

        {session ? (
            <main className="flex flex-col items-center justify-center">
                <h1 className="text-2xl text-white font-semibold tracking-wider">
                    Congratulations !! You are succesfully logged in.
                </h1>
                <button className="login-btn" onClick={() => signOut()}>
                    <FiLogOut className="h-4 w-4 mr-2"/>
                    Logout
                </button>
            </main>
        ) : (
        <main className="flex flex-col items-center justify-center">
            <Image 
                src="https://links.papareact.com/ua6"
                alt="hulu-logo"
                height={300}
                width={400}
            />

            <button className="login-btn" onClick={() => signIn()}>
                <FaGoogle className="h-4 w-4 mr-2"/>
                Login with Google
            </button>
        </main>
        )}


        {session && (
            <div className="flex flex-row text-xl font-semibold text-white">
                <p>Signed in as {session.user.email}</p>
                <p>Name: {session.user.name}</p>
            </div>
        ) }

        
    </div>
  )
}