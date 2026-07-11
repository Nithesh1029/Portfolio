import SectionTitle from '../components/common/SectionTitle';
import PixelCard from '../components/common/PixelCard';

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section bg-[var(--color-void)]"
    >
      <div className="container">
        <SectionTitle
          eyebrow="🌲 Forest — The Cabin"
          title="About Me"
          level={2}
        />

        <div id="about-heading" className="sr-only" />

        <PixelCard className="mt-[var(--space-block-4)] max-w-2xl">
          <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-parchment-muted)]">
            I'm a software developer with a strong interest in backend
            development, scalable systems, and REST APIs. I work primarily
            with Java and the MERN stack, and I enjoy the craft of building
            things that are reliable under the hood, not just polished on
            the surface.
          </p>

          <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-parchment-muted)] mt-[var(--space-block-3)]">
            Right now I'm deepening my backend skills with Spring Boot,
            while continuing to build full-stack projects that combine
            clean APIs with practical, usable interfaces.
          </p>

          <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-parchment-muted)] mt-[var(--space-block-3)]">
            My developer story is still being written one project at a
            time — this portfolio included, built block by block with
            engineering discipline and an eye for detail.
          </p>
        </PixelCard>
      </div>
    </section>
  );
};

export default About;