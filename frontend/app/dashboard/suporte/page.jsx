import CardChart from "../../ui/components/CardChart"
import { Headphones, Star, BadgeCheck, Clock } from 'lucide-react';

export default function Page() {
  return (
    <div>
      <div className="m-[5px]">
        <h1 className="text-4xl font-medium">Dasboard Suporte</h1>
        <p className="text-sky-400 text-xl">Visão geral de atendimentos</p>
      </div>
      <div className="flex items-center gap-10 flex-wrap">
        <CardChart Icon={Headphones} colorIcon={"#06fefa"} title={"Atendimentos em andamento"} />
        <CardChart Icon={Star} colorIcon={"#fee906"} title={"Média de avaliação"} />
        <CardChart Icon={BadgeCheck} colorIcon={"#0afe06"} title={"Total Finalizado"} />
        <CardChart Icon={Clock} colorIcon={"#fe6a39"} title={"Tempo Médio de Atendimento"} />
      </div>
    </div>
  );
}
