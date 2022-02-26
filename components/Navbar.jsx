import requests from "../libs/requests";
import { useRouter } from "next/router";


export default function Navbar() {
    const router = useRouter();


    return (
        <nav className="relative">
            <div className="nav-container">
                {Object.entries(requests).map(([key, { title, url }]) => (
                    <h2 
                        key={key} 
                        className="nav-item" 
                        onClick={() => router.push(`/?genre=${key}`)}
                    >
                        {title}
                    </h2>
                ))}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12"/>
        </nav>
    )
}