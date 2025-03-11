export default function CardChart({ Icon, colorIcon, title }) {
  return (
    <div className="border border-gray-400 p-3 text-center rounded-lg max-w-xs md:max-w-sm xl:max-w-md mx-auto">
      <div className="flex items-center justify-center gap-5">
        <p className="text-lg">{title}</p>
        {Icon && <Icon color={colorIcon} size={24} />}
      </div>
      <span className="text-4xl md:text-5xl xl:text-6xl font-bold mt-7">82</span>
    </div>
  );
}
