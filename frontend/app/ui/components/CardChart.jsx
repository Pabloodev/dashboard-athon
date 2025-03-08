import { Headphones } from "lucide-react";

export default function CardChart() {
  return (
    <div className="border-1 border-gray-400 p-10 text-center space-y-20 rounded-lg">
      <div className="flex items-center gap-4">
        <p className="text-2xl">Total de clientes em atendimento</p>
        <Headphones color="#0065d1"/>
      </div>
      <span className="text-5xl font-bold">82</span>
    </div>
  );
}
