export default function CardChart({ Icon, colorIcon, title }) {
  return (
    <div className="border border-gray-400 p-3 text-center rounded-lg max-[400px]">
      <div className="flex items-center justify-center gap-2 mb-10">
        <p className="text-lg">{title}</p>
        {Icon && <Icon color={colorIcon} size={24} />}
      </div>
      <span className="text-4xl font-bold">82</span>
    </div>
  );
}
