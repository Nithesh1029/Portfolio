import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import PixelButton from './PixelButton';
import { socials } from '../../data/socials';
import { siteConfig } from '../../data/site';

const iconMap = {
  Email: FaEnvelope,
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-[var(--color-stone)] bg-[var(--color-surface)]">
      <div className="container py-[var(--space-block-6)] flex flex-col items-center gap-[var(--space-block-4)] text-center">
        <PixelButton
          href={siteConfig.resumeUrl}
          external
          variant="accent"
          size="sm"
          icon={FaFileAlt}
        >
          Resume
        </PixelButton>

        <ul className="flex items-center gap-[var(--space-block-4)]">
          {socials.map((social) => {
            const Icon = iconMap[social.label] || social.icon;
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  aria-label={social.label}
                  className="text-[var(--color-parchment-muted)] hover:text-[var(--color-diamond)] transition-colors text-xl"
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>

        <p className="font-[family-name:var(--font-body)] text-xs text-[var(--color-parchment-muted)]">
          © {year} {siteConfig.name}. Made with React + Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;