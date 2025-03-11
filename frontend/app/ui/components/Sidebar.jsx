"use client"
import clsx from "clsx";

import {
  ChartColumn,
  PhoneCall,
  DollarSign,
  Users,
  HandHeart,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Dashboard Geral",
    href: "/dashboard",
    icon: ChartColumn
  },
  {
    name: "Atendimento N1",
    href: "/dashboard/suporte",
    icon: PhoneCall,
    iconColor: "#0fafff"
  },
  {
    name: "Financeiro",
    href: "/dashboard/financeiro",
    icon: DollarSign,
    iconColor: "#93ff0f"
  },
  {
    name: "Comercial",
    href: "/dashboard/comercial",
    icon: Users,
    iconColor: "#7000a3"
  },
  {
    name: "Retenção",
    href: "/dashboard/retencao",
    icon: HandHeart,
    iconColor: "#fea9ef"
  },
  {
    name: "Qualidade",
    href: "/dashboard/qualidade",
    icon: ChartNoAxesColumnIncreasing,
    iconColor: "#a33900"
  },
]

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
                <link.icon color={link.iconColor} size={32} />
                <h2 className="text-sm lg:text-lg">{link.name}</h2>
              </Link>
            </li>
          ))}

        </ul>

        <div className="flex items-center gap-3 justify-center">
          <Image
            src={"/athonfav.png"}
            width={40}
            height={40}
            alt="Athon Logo"
          />
          <span className="font-medium text-sm text-center">Athon Telecom</span>
        </div>
      </div>
    </div>
  );
}
