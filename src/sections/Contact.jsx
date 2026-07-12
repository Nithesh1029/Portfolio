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
          subtitle="Let's trade ideas, collaborate on projects, or simply say hello."
          level={2}
        />

        <div id="contact-heading" className="sr-only" />

        {/* Village Notice Board */}
        <PixelCard
          className="
            relative
            mt-[var(--space-block-5)]
            max-w-5xl
            mx-auto
            bg-[var(--color-dirt)]
            border-4
            border-[var(--color-dirt-dark)]
            overflow-hidden
          "
        >
          {/* Wooden Planks */}
          <div className="absolute top-0 left-0 right-0 h-3 bg-[var(--color-dirt-light)] opacity-40" />
          <div className="absolute bottom-0 left-0 right-0 h-3 bg-[var(--color-dirt-dark)] opacity-50" />

          {/* Board Title */}
          <div className="text-center py-[var(--space-block-3)] border-b-2 border-[var(--color-dirt-dark)]">
            <h3 className="font-[family-name:var(--font-display)] text-sm text-[var(--color-gold)] tracking-widest">
              CONTACT DIARY
            </h3>
          </div>

          {/* Contact Options */}
          <ul className="grid sm:grid-cols-3 gap-[var(--space-block-4)] p-[var(--space-block-5)]">
            {socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="block group"
                >
                  <div
                    className="
                      bg-[var(--color-surface)]
                      border-4
                      border-[var(--color-stone-dark)]
                      p-[var(--space-block-4)]
                      text-center
                      transition-all
                      duration-200
                      group-hover:-translate-y-1
                    "
                  >
                    <social.icon
                      className="
                        mx-auto
                        text-3xl
                        text-[var(--color-diamond)]
                        mb-[var(--space-block-2)]
                      "
                    />

                    <h4 className="font-[family-name:var(--font-display)] text-sm text-[var(--color-parchment)]">
                      {social.label}
                    </h4>

                    <p className="mt-2 text-xs text-[var(--color-parchment-muted)] break-all leading-relaxed">
                      {social.display}
                    </p>
                  </div>
                </a>
              </li>
            ))}
          </ul>

          {/* Footer */}
          <div className="border-t-2 border-[var(--color-dirt-dark)] py-[var(--space-block-3)] text-center">
            <p className="font-[family-name:var(--font-display)] text-xs text-[var(--color-gold)] tracking-wide">
              Thanks for visiting my world.
            </p>
          </div>
        </PixelCard>
      </div>
    </section>
  );
};

export default Contact;