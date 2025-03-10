import { Headphones } from "lucide-react";

export default function CardChart({ Icon, colorIcon, title }) {
  return (
    <div className="border border-gray-400 p-10 text-center space-y-20 rounded-lg">
      <div className="flex items-center gap-4">
        <p className="text-2xl">{title}</p>
        {Icon && <Icon color={colorIcon} />}
      </div>
      <span className="text-5xl font-bold">82</span>
    </div>
  );
}
