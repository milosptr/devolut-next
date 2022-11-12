interface Props {
  icon?: { url: string, id: string, fileName: string };
  title: string;
  description: string;
  bigIcon?:boolean;
  index?: number;
}

export const Card = ({ icon, title, description, bigIcon = false, index = 0 }: Props) => {
  return (
    <div className="feature-card relative">
      { bigIcon && <div className="our-process-number">{ index }</div>}
      {bigIcon && (
        <div>
          <img src={icon?.url} alt={icon?.fileName} width="80" />
          <div className="text-xl font-semibold mt-3">
            {title}
          </div>
        </div>
      )}
      {!bigIcon && (
        <div className="flex items-center gap-5">
          <img src={icon?.url} alt={icon?.fileName} width="50" />
          <div className="text-xl font-semibold">
            {title}
          </div>
        </div>
      )}
      <p className="text-sm mt-4">{ description }</p>
    </div>
  )
}
