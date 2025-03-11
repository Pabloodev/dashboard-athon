export default function CardChart({ Icon, colorIcon, title }) {
  return (
    <div className="border border-gray-400 p-5 md:p-8 xl:p-5 text-center rounded-lg max-w-xs md:max-w-sm xl:max-w-md mx-auto">
      <div className="flex items-center justify-center gap-2 xl:gap-4">
        <p className="text-lg md:text-xl xl:text-2xl">{title}</p>
        {Icon && <Icon color={colorIcon} size={24} />}
      </div>
      <span className="text-4xl md:text-5xl xl:text-6xl font-bold">82</span>
    </div>
  );
}
