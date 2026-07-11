import SectionTitle from '../components/common/SectionTitle';
import PixelCard from '../components/common/PixelCard';
import { socials } from '../data/socials';

const Contact = () => {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section bg-[var(--color-void)]"
    >
      <div className="container">
        <SectionTitle
          eyebrow="🏘 Village"
          title="Get In Touch"
          subtitle="Open to opportunities, collaborations, and good conversations."
          level={2}
        />

        <div id="contact-heading" className="sr-only" />

        <ul className="grid sm:grid-cols-3 gap-[var(--space-block-3)] mt-[var(--space-block-4)]">
          {socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.external ? '_blank' : undefined}
                rel={social.external ? 'noopener noreferrer' : undefined}
                className="block"
              >
                <PixelCard
                  hoverLift
                  className="flex flex-col items-center text-center gap-[var(--space-block-2)]"
                >
                  <social.icon
                    aria-hidden="true"
                    className="text-2xl text-[var(--color-diamond)]"
                  />
                  <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-parchment)]">
                    {social.label}
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[var(--color-parchment-muted)] break-all">
                    {social.display}
                  </span>
                </PixelCard>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Contact;