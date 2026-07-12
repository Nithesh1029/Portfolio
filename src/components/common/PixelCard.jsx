const PADDING_CLASSES = {
  md: 'p-[var(--space-block-3)]',
  lg: 'p-[var(--space-block-4)] sm:p-[var(--space-block-6)] md:p-[var(--space-block-8)]',
};

const PixelCard = ({
  children,
  as: Tag = 'div',
  hoverLift = false,
  padding = 'md',
  className = '',
  ...props
}) => {
  const classes = [
    'bg-[var(--color-surface)] border-pixel bevel-out',
    PADDING_CLASSES[padding] || PADDING_CLASSES.md,
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