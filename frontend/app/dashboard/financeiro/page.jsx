import CardChart from '../../ui/components/CardChart'

export default function Page() {
  return (
      <div>
      <div className="m-10">
        <h1 className="text-4xl font-medium">Dasboard Suporte N1</h1>
        <p className="text-gray-400 text-xl">Visão geral do atendimento</p>
      </div>
      <div className="flex items-center gap-10 flex-wrap">
        <CardChart />
        <CardChart />
        <CardChart />
        <CardChart />
        <CardChart />
        <CardChart />
      </div>
    </div>

  )
}