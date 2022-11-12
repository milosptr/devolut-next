interface Props {
  className?: string;
  value: string;
  href?: string;
  blank?: boolean;
}

export const Button = ({ className, value, href, blank = false }: Props) => {
  return (
    <a
      className={`main-btn ${className}`}
      target={blank ? '_blank' : '_self'}
      href={href || '#'}
    >
      { value }
    </a>
  )
}
