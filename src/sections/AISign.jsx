const AISign = () => {
  return (
    <section aria-labelledby="ai-sign-heading" className="section pt-0 bg-[var(--color-void)]">
      <div className="container flex justify-center">
        <div
          className="relative max-w-xl w-full bg-[var(--color-dirt)] border-pixel bevel-out p-[var(--space-block-4)]"
          style={{ borderColor: 'var(--color-dirt-dark)' }}
        >
          <h2 id="ai-sign-heading" className="sr-only">
            AI Collaboration Notice
          </h2>
          <p className="font-[family-name:var(--font-body)] text-sm text-[var(--color-parchment)] leading-relaxed">
            <strong className="font-[family-name:var(--font-display)] text-xs block mb-[var(--space-block-2)] text-[var(--color-gold)]">
              Note:
            </strong>
            This portfolio was created as a demonstration of my ability to
            collaborate with AI-assisted development tools. I directed the
            design, architecture, and customization while using AI to
            accelerate the development process. The projects showcased here
            represent my own learning journey and hands-on programming
            experience and were not built as AI-generated templates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AISign;