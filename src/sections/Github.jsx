import { FaGithub } from 'react-icons/fa';
import SectionTitle from '../components/common/SectionTitle';
import PixelCard from '../components/common/PixelCard';
import PixelButton from '../components/common/PixelButton';

const GITHUB_USERNAME = 'nithesh1029';
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;

const Github = () => {
  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="section bg-[var(--color-surface)]"
    >
      <div className="container">
        <SectionTitle eyebrow="⛏ Cave — GitHub Hub" title="GitHub" level={2} />

        <div id="github-heading" className="sr-only" />

        <div className="grid md:grid-cols-[auto_1fr] gap-[var(--space-block-4)] mt-[var(--space-block-4)] items-start">
          <PixelCard className="flex flex-col items-center text-center gap-[var(--space-block-3)] w-fit mx-auto md:mx-0">
            <img
              src={`https://github.com/${GITHUB_USERNAME}.png`}
              alt={`${GITHUB_USERNAME} GitHub avatar`}
              width={96}
              height={96}
              loading="lazy"
              className="border-pixel bevel-out pixelated"
            />
            <p className="font-[family-name:var(--font-display)] text-xs text-[var(--color-parchment)]">
              @{GITHUB_USERNAME}
            </p>
            <PixelButton href={GITHUB_URL} external variant="secondary" size="sm" icon={FaGithub}>
              Full Profile
            </PixelButton>
          </PixelCard>

          <div className="flex flex-col gap-[var(--space-block-4)]">
            <PixelCard className="overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${GITHUB_USERNAME}&show_icons=true&theme=dark&bg_color=1f2417&title_color=e3b23c&text_color=f1ead9&icon_color=5fd8d0&border=0`}
                alt="GitHub contribution and repository stats"
                loading="lazy"
                className="w-full h-auto"
              />
            </PixelCard>

            <PixelCard className="overflow-hidden">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GITHUB_USERNAME}&layout=compact&theme=dark&bg_color=1f2417&title_color=e3b23c&text_color=f1ead9&border=0`}
                alt="Most used programming languages"
                loading="lazy"
                className="w-full h-auto"
              />
            </PixelCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;