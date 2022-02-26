import Image from "next/image";
import HeaderItem from "./HeaderItem";
import { HomeIcon,
    BadgeCheckIcon,
    CollectionIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from "@heroicons/react/outline";


export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5  justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            <HeaderItem title="HOME" Icon={HomeIcon} link="/"/>
            <HeaderItem title="TRENDING" Icon={LightningBoltIcon} link="#"/>
            <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} link="#"/>
            <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} link="#"/>
            <HeaderItem title="SEARCH" Icon={SearchIcon} link="#"/>
            <HeaderItem title="ACCOUNT" Icon={UserIcon} link="#"/>
        </div>
        <Image 
            className="object-contain"
            src="https://links.papareact.com/ua6"
            width={200}
            height={100}
        />
    </header>
  )
}