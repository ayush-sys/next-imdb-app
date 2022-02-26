import { useRouter } from "next/router"

export default function HeaderItem({ title, Icon, link }) {
    const router = useRouter();

    return (
        <div className="header-item group" onClick={() => router.push({link})}>
            <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
            <p className="tracking-widest opacity-0 group-hover:opacity-100">{title}</p>
        </div>
    )
}