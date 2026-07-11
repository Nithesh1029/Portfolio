import SectionTitle from '../components/common/SectionTitle';
import InventorySlot from '../components/common/InventorySlot';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section bg-[var(--color-surface)]"
    >
      <div className="container">
        <SectionTitle
          eyebrow="🎒 Inventory"
          title="Skills"
          subtitle="Hover or focus a slot to see what's inside."
          level={2}
        />

        <div id="skills-heading" className="sr-only" />

        <ul
          className="flex flex-wrap gap-[var(--space-block-3)] mt-[var(--space-block-4)]"
          aria-label="Skills inventory"
        >
          {skills.map((skill) => (
            <li key={skill.name}>
              <InventorySlot
                icon={skill.icon}
                label={skill.name}
                status={skill.status}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;