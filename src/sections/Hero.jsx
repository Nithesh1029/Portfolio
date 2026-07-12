import { FaGithub, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import PixelButton from '../components/common/PixelButton';
import ScrollIndicator from '../components/common/ScrollIndicator';
import Clouds from '../components/effects/Clouds';
import Mountains from '../components/effects/Mountains';
import Grass from '../components/effects/Grass';
import Stars from '../components/effects/Stars';

const RESUME_URL = '/resume.pdf';
const GITHUB_URL = 'https://github.com/Nithesh1029';

const Hero = () => {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-diamond-dark)]/20 via-[var(--color-void)] to-[var(--color-void)]"
    >
      <Clouds className='opacity-20' />
      <Stars/>
      <Mountains className="opacity-20" />
      

      <div className="container relative z-10 flex flex-col items-center text-center gap-[var(--space-block-4)] pb-[var(--space-block-8)]">
        <p className="font-[family-name:var(--font-display)] text-xs text-[var(--color-diamond)] tracking-wide">
          🌱 Plains
        </p>

        <h1 className="font-[family-name:var(--font-display)] text-[var(--text-display-xl)] text-[var(--color-parchment)]">
          Nithesh B Poojary

        </h1>

        <p className="font-[family-name:var(--font-body)] text-lg text-[var(--color-parchment-muted)]">
          Software Developer
        </p>

        <p className="font-[family-name:var(--font-body)] text-base text-[var(--color-parchment-muted)] max-w-xl">
          I build backend systems, REST APIs, and full-stack applications with
          Java and the MERN stack — crafting software, one block at a time.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-[var(--space-block-3)] mt-[var(--space-block-2)]">

          <PixelButton href="#projects"  variant="primary">
            View Projects
            
          </PixelButton>
          <PixelButton href={GITHUB_URL} external variant="secondary" icon={FaGithub}>
            GitHub
          </PixelButton>
          <PixelButton href={RESUME_URL} external variant="accent" icon={FaFileAlt}>
            Resume
          </PixelButton>
          <PixelButton href="#contact" variant="ghost" icon={FaEnvelope}>
            Contact
          </PixelButton>
        </div>
      </div>

      <div className="absolute bottom-[var(--space-block-4)] left-1/2 -translate-x-1/2 z-10">
        <ScrollIndicator targetId="about" />
      </div>
    </section>
  );
};

export default Hero;