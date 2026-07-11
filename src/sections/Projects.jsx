import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import SectionTitle from '../components/common/SectionTitle';
import PixelCard from '../components/common/PixelCard';
import PixelButton from '../components/common/PixelButton';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="section bg-[var(--color-void)]"
    >
      <div className="container">
        <SectionTitle
          eyebrow="🏗 Workshop"
          title="Projects"
          subtitle="Item frames from the workshop — hands-on work, not templates."
          level={2}
        />

        <div id="projects-heading" className="sr-only" />

        <div className="grid sm:grid-cols-2 gap-[var(--space-block-4)] mt-[var(--space-block-4)]">
          {projects.map((project) => (
            <PixelCard key={project.id} hoverLift className="flex flex-col">
              <div className="aspect-video bg-[var(--color-surface)] border-pixel mb-[var(--space-block-3)] flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-parchment-muted)]">
                    Screenshot coming soon
                  </span>
                )}
              </div>

              <div className="flex items-start justify-between gap-[var(--space-block-2)]">
                <h3 className="font-[family-name:var(--font-display)] text-[var(--text-display-sm)] text-[var(--color-parchment)]">
                  {project.title}
                </h3>
                {project.status && (
                  <span className="font-[family-name:var(--font-display)] text-[0.6rem] bg-[var(--color-gold)] text-[var(--color-void)] px-1.5 py-1 whitespace-nowrap">
                    {project.status}
                  </span>
                )}
              </div>

              <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-parchment-muted)] mt-[var(--space-block-2)] flex-1">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-[var(--space-block)] mt-[var(--space-block-3)]" aria-label="Technologies used">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="font-[family-name:var(--font-body)] text-xs text-[var(--color-diamond)] border border-[var(--border-light)] px-2 py-0.5"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="flex gap-[var(--space-block-2)] mt-[var(--space-block-4)]">
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
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;