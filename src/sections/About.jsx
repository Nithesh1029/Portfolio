import SectionTitle from "../components/common/SectionTitle";
import PixelCard from "../components/common/PixelCard";

const About = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section relative bg-[var(--color-void)] overflow-hidden"
    >
      {/* Torches */}
      <div className="absolute left-8 top-20 hidden lg:flex flex-col items-center">
        <div className="w-3 h-6 bg-amber-400 shadow-[0_0_25px_10px_rgba(255,180,40,.45)] animate-pulse" />
        <div className="w-2 h-8 bg-[var(--color-dirt)]" />
      </div>

      <div className="absolute right-8 top-20 hidden lg:flex flex-col items-center">
        <div className="w-3 h-6 bg-amber-400 shadow-[0_0_25px_10px_rgba(255,180,40,.45)] animate-pulse" />
        <div className="w-2 h-8 bg-[var(--color-dirt)]" />
      </div>

      <div className="container">
        <SectionTitle
          eyebrow="🌲 Forest — The Cabin"
          title="About Me"
          level={2}
        />

        <div id="about-heading" className="sr-only" />

        <PixelCard
          padding="lg"
          className="relative mt-[var(--space-block-4)] max-w-3xl bg-[var(--color-surface)]"
        >
          {/* Wooden Pegs */}
          <span className="absolute left-3 top-3 w-2 h-2 bg-[var(--color-dirt-dark)] rounded-sm" />
          <span className="absolute right-3 top-3 w-2 h-2 bg-[var(--color-dirt-dark)] rounded-sm" />
          <span className="absolute left-3 bottom-3 w-2 h-2 bg-[var(--color-dirt-dark)] rounded-sm" />
          <span className="absolute right-3 bottom-3 w-2 h-2 bg-[var(--color-dirt-dark)] rounded-sm" />

          {/* Minecraft Achievement */}
          <div className="mb-6 border-pixel bevel-out bg-[var(--color-void)] px-4 py-3">
            <p className="font-[family-name:var(--font-display)] text-[var(--color-gold)] text-xs tracking-wide">
              🏆 Achievement Unlocked!
            </p>
            <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-parchment)] mt-1">
              Began crafting scalable backend applications.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-5 px-2">
            <p className="font-[family-name:var(--font-body)] text-base leading-8 text-[var(--color-parchment-muted)]">
              I'm a software developer with a strong interest in backend
              development, scalable systems, and REST APIs. I work primarily
              with Java and the MERN stack, and I enjoy building software that
              is reliable under the hood, not just polished on the surface.
            </p>

            <p className="font-[family-name:var(--font-body)] text-base leading-8 text-[var(--color-parchment-muted)]">
              Right now I'm deepening my backend skills with Spring Boot while
              continuing to build full-stack projects that combine clean APIs
              with practical, usable interfaces.
            </p>

            <p className="font-[family-name:var(--font-body)] text-base leading-8 text-[var(--color-parchment-muted)]">
              My developer story is still being written one project at a time —
              this portfolio included, built block by block with engineering
              discipline and an eye for detail.
            </p>
          </div>

          {/* Minecraft Hotbar */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              "☕ Java",
              "🟢 Node",
              "⚛ React",
              "🍃 MongoDB",
              "🐬 MySQL",
              "🌱 Spring",
            ].map((item) => (
              <div
                key={item}
                className="border-pixel bevel-out bg-[var(--color-void)] px-3 py-2 font-[family-name:var(--font-display)] text-xs text-[var(--color-parchment)]"
              >
                {item}
              </div>
            ))}
          </div>

          {/* XP Bar */}
          <div className="mt-8">
            <div className="flex justify-between mb-2 text-xs font-[family-name:var(--font-display)] text-[var(--color-parchment-muted)]">
              <span>Developer XP</span>
              <span>Level 23</span>
            </div>

            <div className="h-4 border-pixel bg-[var(--color-void)] overflow-hidden">
              <div className="h-full w-[78%] bg-[var(--color-grass)]" />
            </div>
          </div>
        </PixelCard>
      </div>
    </section>
  );
};

export default About;