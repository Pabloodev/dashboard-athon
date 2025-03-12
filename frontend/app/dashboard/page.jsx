import CardChart from "../ui/components/CardChart";
import { Headphones, Star, BadgeCheck, Clock } from "lucide-react";

export default function Page() {
  return (
    <div className="">
      <div className="">
      <h1 className="">Dashboard Geral</h1>
      <p className="">Visão geral de atendimentos</p>
      </div>

      <div className="">
        <CardChart Icon={Headphones} colorIcon={"#06fefa"} title={"Atendimentos em andamento"} />
        <CardChart Icon={Star} colorIcon={"#fee906"} title={"Média de avaliação"} />
        <CardChart Icon={BadgeCheck} colorIcon={"#0afe06"} title={"Total Finalizado"} />
        <CardChart Icon={Clock} colorIcon={"#fe6a39"} title={"Tempo Médio de Atendimento"} />
      </div>
    </div>
  );
}
