const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  level = 2,
  className = '',
}) => {
  const Tag = `h${level}`;

  const wrapperClasses = [
    'max-w-2xl',
    align === 'center' && 'mx-auto text-center',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapperClasses}>
      {eyebrow && (
        <p className="font-[family-name:var(--font-display)] text-xs text-[var(--color-diamond)] mb-[var(--space-block-2)] tracking-wide">
          {eyebrow}
        </p>
      )}
      <Tag className="font-[family-name:var(--font-display)] text-[var(--text-display-md)] text-[var(--color-parchment)]">
        {title}
      </Tag>
      {subtitle && (
        <p className="font-[family-name:var(--font-body)] text-[var(--color-parchment-muted)] mt-[var(--space-block-2)] text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;