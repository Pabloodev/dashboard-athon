import CardChart from "../ui/components/CardChart";
import { Headphones, Star, BadgeCheck, Clock } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-screen-2xl mx-auto p-5 lg:p-10">
      <div className="mb-10">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-medium">
          Dashboard Geral
        </h1>
        <p className="text-gray-400 text-lg lg:text-xl xl:text-2xl">
          Visão geral de atendimentos
        </p>
      </div>
      
      {/* Layout flexível para telas menores, grid para TVs grandes */}
      <div className="flex flex-wrap justify-center gap-10 xl:grid xl:grid-cols-4 xl:gap-16">
        <CardChart Icon={Headphones} colorIcon={"#06fefa"} title={"Atendimentos em andamento"} />
        <CardChart Icon={Star} colorIcon={"#fee906"} title={"Média de avaliação"} />
        <CardChart Icon={BadgeCheck} colorIcon={"#0afe06"} title={"Total Finalizado"} />
        <CardChart Icon={Clock} colorIcon={"#fe6a39"} title={"Tempo Médio de Atendimento"} />
      </div>
    </div>
  );
}
