import SectionTitle from "../components/common/SectionTitle";
import InventorySlot from "../components/common/InventorySlot";
import { skills } from "../data/skills";
import { FaJava, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiMongodb, SiMysql, SiSpring, SiPostman } from "react-icons/si";
const equippedTools = [
  FaJava,
  FaNodeJs,
  FaReact,
  SiMongodb,
  SiMysql,
  SiSpring,
  FaGitAlt,
  SiPostman,
];
const Skills = () => {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section relative bg-[var(--color-surface)] overflow-hidden"
    >
      {/* Decorative Crafting Table */}
      <div className="absolute left-8 bottom-10 hidden xl:block opacity-70">
        <div className="w-20 h-20 border-pixel bevel-out bg-[var(--color-dirt)] flex items-center justify-center">
          <span className="text-3xl">🪵</span>
        </div>
      </div>

      {/* Decorative Chest */}
      <div className="absolute right-8 bottom-10 hidden xl:block opacity-70">
        <div className="w-20 h-20 border-pixel bevel-out bg-[var(--color-dirt-dark)] flex items-center justify-center">
          <span className="text-3xl">🧰</span>
        </div>
      </div>

      <div className="container">
        <SectionTitle
          eyebrow="🎒 Inventory"
          title="Skills"
          subtitle="Hover over an item to inspect it."
          level={2}
        />

        <div id="skills-heading" className="sr-only" />

        {/* Inventory Window */}
        <div className="mt-[var(--space-block-5)] border-pixel bevel-out bg-[var(--color-void)] p-6 max-w-6xl mx-auto">
          {/* Window Header */}
          <div className="flex justify-between items-center mb-5 border-b border-[var(--color-stone)] pb-3">
            <span className="font-[family-name:var(--font-display)] text-sm text-[var(--color-parchment)]">
              Player Inventory
            </span>

            <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-parchment-muted)]">
              Level 23 Developer
            </span>
          </div>

          {/* Inventory Grid */}
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 justify-items-center"
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

          {/* Hotbar */}
          <div className="mt-8 border-pixel bevel-in bg-[var(--color-surface)] p-3">
            <p className="font-[family-name:var(--font-display)] text-xs text-center text-[var(--color-parchment-muted)] mb-3">
              Equipped Tools
            </p>

            <div className="flex justify-center gap-3">
              {equippedTools.map((Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 border-pixel bevel-out bg-[var(--color-void)] flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Icon className="text-2xl text-[var(--color-parchment)]" />
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mt-8">
            <div className="flex justify-between mb-2 text-xs font-[family-name:var(--font-display)] text-[var(--color-parchment-muted)]">
              <span>Skill Progress</span>
              <span>78%</span>
            </div>

            <div className="h-4 border-pixel bg-[var(--color-void)] overflow-hidden">
              <div className="h-full w-[78%] bg-[var(--color-grass)] anim-fill-bar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
