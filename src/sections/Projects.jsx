import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "../components/common/SectionTitle";
import PixelCard from "../components/common/PixelCard";
import PixelButton from "../components/common/PixelButton";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section relative bg-[var(--color-void)] overflow-hidden"
    >
      {/* Decorative Workshop Blocks */}
      <div className="absolute left-8 top-20 hidden xl:flex flex-col gap-4 opacity-25">
        <div className="w-16 h-16 border-pixel bevel-out bg-[var(--color-dirt)] flex items-center justify-center text-3xl">
          🪵
        </div>
        <div className="w-16 h-16 border-pixel bevel-out bg-[var(--color-stone)] flex items-center justify-center text-3xl">
          ⚒️
        </div>
      </div>

      <div className="absolute right-8 bottom-20 hidden xl:flex flex-col gap-4 opacity-25">
        <div className="w-16 h-16 border-pixel bevel-out bg-[var(--color-dirt-dark)] flex items-center justify-center text-3xl">
          📦
        </div>
        <div className="w-16 h-16 border-pixel bevel-out bg-[var(--color-stone)] flex items-center justify-center text-3xl">
          🛠️
        </div>
      </div>

      <div className="container">
        <SectionTitle
          eyebrow="🏗 Workshop"
          title="Projects"
          subtitle="Every build started with an empty inventory and a lot of curiosity."
          level={2}
        />

        {/* Workshop Info */}
        <div className="border-pixel bevel-out bg-[var(--color-surface)] p-4 mt-[var(--space-block-4)] mb-[var(--space-block-5)] flex flex-wrap justify-between gap-4">
          <div>
            <p className="font-[family-name:var(--font-display)] text-xs text-[var(--color-gold)]">
              Workshop Stats
            </p>
            <p className="text-sm text-[var(--color-parchment-muted)]">
              Projects Crafted: {projects.length}
            </p>
          </div>

          <div>
            <p className="font-[family-name:var(--font-display)] text-xs text-[var(--color-diamond)]">
              Current Quest
            </p>
            <p className="text-sm text-[var(--color-parchment-muted)]">
              Build reliable backend systems.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-[var(--space-block-5)]">
          {projects.map((project) => (
            <PixelCard
              key={project.id}
              hoverLift
              className="relative flex flex-col bg-[var(--color-surface)]"
            >
              {/* Wooden Pegs */}
              <span className="absolute left-3 top-3 w-2 h-2 bg-[var(--color-dirt-dark)] rounded-sm" />
              <span className="absolute right-3 top-3 w-2 h-2 bg-[var(--color-dirt-dark)] rounded-sm" />
              <span className="absolute left-3 bottom-3 w-2 h-2 bg-[var(--color-dirt-dark)] rounded-sm" />
              <span className="absolute right-3 bottom-3 w-2 h-2 bg-[var(--color-dirt-dark)] rounded-sm" />

              {/* Item Frame */}
              <div className="bg-[var(--color-dirt)] border-[6px] border-[var(--color-dirt-dark)] bevel-out p-2 mb-[var(--space-block-3)]">
                <div className="aspect-video border-pixel overflow-hidden bg-[var(--color-void)] flex items-center justify-center">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-parchment-muted)]">
                      Screenshot Coming Soon
                    </span>
                  )}
                </div>
              </div>

              
              <div className="flex items-center justify-between">
                <h3 className="font-[family-name:var(--font-display)] text-lg">
                  {project.title}
                </h3>

                {project.status && (
                  <span className="border-pixel bg-[var(--color-gold)] text-[var(--color-void)] px-2 py-1 text-[10px] font-[family-name:var(--font-display)]">
                    {project.status}
                  </span>
                )}
              </div>

              {/* Recipe */}
              <div className="mt-3 border-pixel bg-[var(--color-void)] p-3">
                <p className="font-[family-name:var(--font-display)] text-[10px] text-[var(--color-gold)] mb-2">
                  Crafting Recipe
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="border-pixel px-2 py-1 text-xs bg-[var(--color-surface)] text-[var(--color-diamond)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="flex-1 mt-4 text-sm text-[var(--color-parchment-muted)] leading-7">
                {project.description}
              </p>

              {/* Chest Toolbar */}
              <div className="mt-6 border-pixel bevel-in bg-[var(--color-void)] p-3">
                <div className="flex gap-2 justify-center">
                  <PixelButton
                    href={project.github}
                    external
                    variant="secondary"
                    size="sm"
                    icon={FaGithub}
                  >
                    GitHub
                  </PixelButton>

                  {project.demo && (
                    <PixelButton
                      href={project.demo}
                      external
                      variant="accent"
                      size="sm"
                      icon={FaExternalLinkAlt}
                    >
                      Live Demo
                    </PixelButton>
                  )}
                </div>
              </div>

              {/* Coordinates */}
              <div className="mt-4 text-[10px] text-[var(--color-parchment-muted)] font-[family-name:var(--font-display)]">
                X: {100 + project.id * 12} &nbsp; Y: 64 &nbsp; Z: {200 - project.id * 18}
              </div>
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;