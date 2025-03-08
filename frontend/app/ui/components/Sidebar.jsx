import { ChartColumn, PhoneCall, DollarSign, Users, HandHeart, ChartNoAxesColumnIncreasing } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="flex flex-col h-screen border border-gray-600 px-6">
      <div className="flex items-center gap-4 border-b border-gray-600 p-5">
        <ChartColumn />
        <h1 className="font-medium">Dashboard</h1>
      </div>
      <div className="flex flex-col p-5 justify-between flex-1">
        <ul className="flex flex-col space-y-8">
          <li className="flex items-center gap-3">
            <PhoneCall color="#0fafff" />
            <h2>Atendimento N1</h2>
          </li>
          <li className="flex items-center gap-3">
            <DollarSign color="#93ff0f" />
            <h2>Financeiro</h2>
          </li>
          <li className="flex items-center gap-3">
            <Users color="#7000a3" />
            <h2>Comercial</h2>
          </li>
          <li className="flex items-center gap-3">
            <ChartNoAxesColumnIncreasing color="#a33900" />
            <h2>Comercial</h2>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <Image src={'/athonfav.png'} width={20} height={20} alt="Athon Logo"/>
          <span className="font-medium text-lg">Athon Telecom</span>
        </div>
      </div>
    </div>
  );
}
