import Head from "next/head";
import Image from "next/image";
import { FaFacebook, FaGoogle } from "react-icons/fa";
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
                <button className="login-btn" onClick={() => signOut()}>
                    <FiLogOut className="h-4 w-4 mr-2"/>
                    Logout
                </button>
            </main>
        ) : (
        <main className="flex flex-col items-center justify-center space-y-6">
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

            <button className="login-btn" onClick={() => signIn()}>
                <FaFacebook className="h-4 w-4 mr-2"/>
                Login with Facebook
            </button>
        </main>
        )}


        {session && (
            <div className="flex flex-col text-xl font-semibold text-white space-y-4">
                <h1 className="text-2xl text-white font-semibold tracking-wider">
                    Congratulations !! You are succesfully logged in.
                </h1>
                <p>Signed in as {session.user.email}</p>
                <p>Name: {session.user.name}</p>
                <img src={session.user.image} className="h-20 w-20"/>
            </div>
        ) }

        
    </div>
  )
}