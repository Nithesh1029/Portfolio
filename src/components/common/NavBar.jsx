import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaFileAlt } from 'react-icons/fa';
import PixelButton from './PixelButton';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

const RESUME_URL = '/resume.pdf';
const GITHUB_URL = 'https://github.com/';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-[var(--z-navbar)] bg-[var(--color-void)]/95 backdrop-blur-sm border-b-2 border-[var(--color-stone)]"
      style={{ height: 'var(--navbar-height)' }}
    >
      <nav
        aria-label="Primary"
        className="container h-full flex items-center justify-between"
      >
        <a
        
          href="#hero"
          className="font-[family-name:var(--font-display)] text-sm text-[var(--color-parchment)] hover:text-[var(--color-gold)] transition-colors"
        >
          Nithesh<span className="text-[var(--color-gold)]">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-[var(--space-block-4)]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
                <a
              
                href={link.href}
                className="font-[family-name:var(--font-body)] text-sm text-[var(--color-parchment-muted)] hover:text-[var(--color-parchment)] transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-[var(--space-block-2)]">
          <PixelButton
            href={GITHUB_URL}
            external
            variant="secondary"
            size="sm"
            icon={FaGithub}
          >
            GitHub
          </PixelButton>
          <PixelButton
            href={RESUME_URL}
            external
            variant="accent"
            size="sm"
            icon={FaFileAlt}
          >
            Resume
          </PixelButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          className="md:hidden text-[var(--color-parchment)] p-2 bevel-out bg-[var(--color-surface)] border-pixel"
        >
          {isOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={[
          'md:hidden absolute top-full inset-x-0 bg-[var(--color-void)] border-b-2 border-[var(--color-stone)]',
          'transition-all duration-300 ease-out overflow-hidden',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none',
        ].join(' ')}
      >
        <ul className="container flex flex-col gap-[var(--space-block-3)] py-[var(--space-block-4)]">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
                <a
              
                href={link.href}
                onClick={closeMenu}
                className="font-[family-name:var(--font-body)] text-base text-[var(--color-parchment)] block py-[var(--space-block)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="flex gap-[var(--space-block-2)] pt-[var(--space-block-2)]">
            <PixelButton
              href={GITHUB_URL}
              external
              variant="secondary"
              size="sm"
              icon={FaGithub}
              className="flex-1"
            >
              GitHub
            </PixelButton>
            <PixelButton
              href={RESUME_URL}
              external
              variant="accent"
              size="sm"
              icon={FaFileAlt}
              className="flex-1"
            >
              Resume
            </PixelButton>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;