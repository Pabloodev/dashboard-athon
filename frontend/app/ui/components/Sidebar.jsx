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

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen border border-gray-600 w-[400px] max-w-[400px]">
      <Link
        className="flex items-center gap-4 border-b border-gray-600 p-5"
        href={"/dashboard"}
      >
        <ChartColumn />
        <h1 className="font-medium">Dashboard</h1>
      </Link>

      <div className="flex flex-col p-5 justify-between flex-1 text-start">
        <ul className="flex flex-col space-y-8">
          <li className="flex items-center gap-3">
            <Link
              href={"/dashboard/suporte"}
              className="flex items-center gap-3"
            >
              <PhoneCall color="#0fafff" />
              <h2>Atendimento N1</h2>
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <Link
              href={"/dashboard/financeiro"}
              className="flex items-center gap-3"
            >
              <DollarSign color="#93ff0f" />
              <h2>Financeiro</h2>
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <Link
              className="flex items-center gap-3"
              href={"/dashboard/comercial"}
            >
              <Users color="#7000a3" />
              <h2>Comercial</h2>
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <Link
              href={"/dashboard/retencao"}
              className="flex items-center gap-3"
            >
              <HandHeart color="#fea9ef" />
              <h2>Retenção</h2>
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <Link href={"/dashboard/qualidade"} className="flex items-center gap-3">
              <ChartNoAxesColumnIncreasing color="#a33900" />
              <h2>Qualidade</h2>
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Image
            src={"/athonfav.png"}
            width={20}
            height={20}
            alt="Athon Logo"
          />
          <span className="font-medium text-lg">Athon Telecom</span>
        </div>
      </div>
    </div>
  );
}
