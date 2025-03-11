export default function CardChart({ Icon, colorIcon, title }) {
  return (
    <div className="border border-gray-400 p-3 text-center rounded-lg max-w-xs md:max-w-sm xl:max-w-md mx-auto">
      <div className="flex items-center justify-center gap-5 mb-10">
        <p className="text-lg">{title}</p>
        {Icon && <Icon color={colorIcon} size={15} />}
      </div>
      <span className="text-4xl font-bold">82</span>
    </div>
  );
}
