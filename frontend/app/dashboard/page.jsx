import CardChart from "../ui/components/CardChart";
import { Headphones, Star, BadgeCheck, Clock } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-screen-2xl mx-auto px-5 lg:px-10">
      <div className="mb-5 md:mb-10">
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-medium">
          Dashboard Geral
        </h1>
        <p className="text-gray-400 text-lg md:text-xl xl:text-2xl">
          Visão geral de atendimentos
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-10 xl:gap-12">
        <CardChart Icon={Headphones} colorIcon={"#06fefa"} title={"Atendimentos em andamento"} />
        <CardChart Icon={Star} colorIcon={"#fee906"} title={"Média de avaliação"} />
        <CardChart Icon={BadgeCheck} colorIcon={"#0afe06"} title={"Total Finalizado"} />
        <CardChart Icon={Clock} colorIcon={"#fe6a39"} title={"Tempo Médio de Atendimento"} />
      </div>
    </div>
  );
}
