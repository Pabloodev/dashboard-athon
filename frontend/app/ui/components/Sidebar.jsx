"use client"
import clsx from "clsx";



import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "./../../data/linksData";


export default function Sidebar() {

  const pathname = usePathname()

  return (
    <div className="flex flex-col h-screen border border-gray-600 transition-all duration-300">
      <div className="flex flex-col p-5 justify-between flex-1 text-start">
        <ul className="flex flex-col space-y-5">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className={clsx(
                  "flex items-center gap-3 p-2 transition duration-300 rounded-lg text-base lg:text-lg xl:text-xl",
                  {
                    "bg-sky-900": pathname === link.href,
                    "hover:bg-sky-950": pathname !== link.href,
                  }
                )}
              >
                <link.icon color={link.iconColor} size={20} />
                <h2 className="text-sm lg:text-lg">{link.name}</h2>
              </Link>
            </li>
          ))}

        </ul>

        <div className="flex items-center gap-3 justify-center">
          <Image
            src={"/athonfav.png"}
            width={30}
            height={30}
            alt="Athon Logo"
          />
          <span className="font-medium text-base text-center">Athon Telecom</span>
        </div>
      </div>
    </div>
  );
}
