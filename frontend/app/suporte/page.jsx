'use client'

import { useEffect, useState } from "react"
import CardChart from '../ui/components/CardChart'
import { Headphones, Star, BadgeCheck, Clock } from 'lucide-react'

export default function DashboardClient() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://10.28.18.58:7200/get_total", {
          cache: "no-store"
        });
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    }

    fetchData(); // chamada inicial imediata

    const interval = setInterval(() => {
      fetchData();
    }, 5000); // chama a API a cada 5 segundos

    return () => clearInterval(interval); // limpa o intervalo ao desmontar
  }, []);

  return (
    <div>
      <div className="m-10">
        <h1 className="text-2xl font-medium">Dashboard Suporte</h1>
        <p className="text-sky-400 text-lg">Visão geral de atendimentos</p>
      </div>

      <div className="flex items-center justify-center gap-5 flex-wrap">
        <CardChart Icon={Headphones} colorIcon={"#06fefa"} title={"Atendimentos em andamento"} value={data?.[7]?.Suporte ?? "Carregando..."} />
        <CardChart Icon={Star} colorIcon={"#fee906"} title={"Média de avaliação"} value={"4.5"} />
        <CardChart Icon={BadgeCheck} colorIcon={"#0afe06"} title={"Total Finalizado"} value={"23"} />
        <CardChart Icon={Clock} colorIcon={"#fe6a39"} title={"Tempo Médio de Atendimento"} value={"1.7 minutos"} />
      </div>
    </div>
  )
}
