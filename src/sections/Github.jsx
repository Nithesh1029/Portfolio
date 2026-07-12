import { useEffect, useState } from "react";
import { FaGithub, FaStar, FaCodeBranch } from "react-icons/fa";
import SectionTitle from "../components/common/SectionTitle";
import PixelCard from "../components/common/PixelCard";
import PixelButton from "../components/common/PixelButton";

const GITHUB_USERNAME = "nithesh1029";
const GITHUB_URL = `https://github.com/${GITHUB_USERNAME}`;
const REPO_LIMIT = 4;

const Github = () => {
  const [repos, setRepos] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;

    fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
    )
      .then((res) => {
        if (!res.ok) throw new Error("GitHub API error");
        return res.json();
      })
      .then((data) => {
        if (cancelled) return;

        const featured = [...data]
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, REPO_LIMIT);

        setRepos(featured);
        setStatus("success");
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      id="github"
      aria-labelledby="github-heading"
      className="section bg-[var(--color-surface)]"
    >
      <div className="container">
        <SectionTitle
          eyebrow="⛏ Deep Cave"
          title="GitHub"
          subtitle="Mining recent repositories from my workshop."
          level={2}
        />

        <div id="github-heading" className="sr-only" />

        {/* Cave Decoration */}
        <div className="flex justify-center gap-6 mb-[var(--space-block-5)] text-3xl opacity-70 select-none">
          🪨 💎 ⛏ 💎 🪨
        </div>

        <div className="grid md:grid-cols-[280px_1fr] gap-[var(--space-block-5)] items-start">
          
          <PixelCard
            className="
              relative
              overflow-hidden
              flex
              flex-col
              items-center
              text-center
              gap-[var(--space-block-3)]
              bg-[var(--color-stone)]
              border-4
              border-[var(--color-stone-dark)]
            "
          >
            <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--color-stone-light)] opacity-40" />

            <div className="w-full py-2 bg-[var(--color-void)] border-b-2 border-[var(--color-stone-dark)]">
              <span className="font-[family-name:var(--font-display)] text-xs text-[var(--color-gold)] tracking-wider">
                PLAYER PROFILE
              </span>
            </div>

            <img
              src={`https://github.com/${GITHUB_USERNAME}.png`}
              alt={`${GITHUB_USERNAME} GitHub avatar`}
              width={96}
              height={96}
              loading="lazy"
              className="
                pixelated
                p-2
                bg-[var(--color-dirt)]
                border-4
                border-[var(--color-gold-dark)]
              "
            />

            <h3 className="font-[family-name:var(--font-display)] text-xs text-[var(--color-parchment)] break-all">
              @{GITHUB_USERNAME}
            </h3>

            <p className="text-sm text-[var(--color-parchment-muted)] leading-relaxed">
              Backend-focused developer building Java, Spring Boot and MERN
              applications. Explore some of my featured repositories below.
            </p>

            <PixelButton
              href={GITHUB_URL}
              external
              variant="secondary"
              size="sm"
              icon={FaGithub}
            >
              Full Profile
            </PixelButton>

            <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--color-stone-dark)] opacity-40" />
          </PixelCard>

          {/* Repository Grid */}
          <div>
            {status === "loading" && (
              <p className="font-[family-name:var(--font-display)] text-sm text-[var(--color-gold)]">
                Mining repositories...
              </p>
            )}

            {status === "error" && (
              <PixelCard className="bg-[var(--color-stone)]">
                <p className="text-sm text-[var(--color-parchment-muted)]">
                  The cave collapsed before the repositories could be loaded.
                  Visit my GitHub profile to explore them directly.
                </p>
              </PixelCard>
            )}

            {status === "success" && (
              <ul className="grid sm:grid-cols-2 gap-[var(--space-block-4)]">
                {repos.map((repo) => (
                  <li key={repo.id}>
                    <PixelCard
                      hoverLift
                      className="
                        relative
                        h-full
                        flex
                        flex-col
                        bg-[var(--color-surface)]
                        border-4
                        border-[var(--color-dirt-dark)]
                        overflow-hidden
                      "
                    >
                      <div className="absolute top-0 left-0 right-0 h-2 bg-[var(--color-dirt)]" />
                      <div className="absolute bottom-0 left-0 right-0 h-2 bg-[var(--color-dirt)]" />

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          font-[family-name:var(--font-display)]
                          text-sm
                          text-[var(--color-gold)]
                          hover:text-[var(--color-diamond)]
                          transition-colors
                        "
                      >
                        {repo.name}
                      </a>

                      <p className="mt-[var(--space-block-2)] flex-1 text-sm leading-relaxed text-[var(--color-parchment-muted)]">
                        {repo.description || "No description provided."}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-[var(--space-block-3)]">
                        {repo.language && (
                          <span className="px-2 py-1 text-xs bg-[var(--color-grass-dark)] border border-[var(--color-grass)] text-[var(--color-parchment)]">
                            {repo.language}
                          </span>
                        )}

                        <span className="px-2 py-1 text-xs bg-[var(--color-void)] border border-[var(--color-stone-light)] flex items-center gap-1">
                          <FaStar />
                          {repo.stargazers_count}
                        </span>

                        <span className="px-2 py-1 text-xs bg-[var(--color-void)] border border-[var(--color-stone-light)] flex items-center gap-1">
                          <FaCodeBranch />
                          {repo.forks_count}
                        </span>
                      </div>
                    </PixelCard>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex  justify-center mt-8">
              <PixelButton
                href={`${GITHUB_URL}/?tab=repositories`}
                external
                variant="primary"
                icon={FaGithub}
              >
                View More →
              </PixelButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Github;
