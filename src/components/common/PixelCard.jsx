const PixelCard = ({
  children,
  as: Tag = 'div',
  hoverLift = false,
  className = '',
  ...props
}) => {
  const classes = [
    'bg-[var(--color-surface)] border-pixel bevel-out',
    'p-[var(--space-block-3)]',
    hoverLift &&
      'transition-transform duration-200 ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default PixelCard;