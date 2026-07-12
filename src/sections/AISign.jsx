const AISign = () => {
  return (
    <section
      aria-labelledby="ai-sign-heading"
      className="section pt-0 bg-[var(--color-void)]"
    >
      <div className="container flex justify-center">
        <div className="relative inline-block">

          {/* Chains */}
          <div className="absolute left-10 -top-10 w-1 h-10 bg-[#787878]" />
          <div className="absolute right-10 -top-10 w-1 h-10 bg-[#787878]" />

          {/* Top Beam */}
          <div
            className="absolute -top-2 left-0 right-0 h-2"
            style={{
              background: "#7a5a34",
            }}
          />

          {/* Wooden Board */}
          <div
            className="relative w-[680px] overflow-hidden border-[6px]"
            style={{
              background: "#c79b5b",
              borderColor: "#6d4f2b",
              imageRendering: "pixelated",
              boxShadow:
                "0 8px 0 #5c4224, inset 0 4px 0 #ddb679, inset 0 -4px 0 #9b6f39",
            }}
          >
            {/* Wood Planks */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute left-0 w-full h-[2px] opacity-25"
                style={{
                  top: `${40 + i * 45}px`,
                  background: "#6d4f2b",
                }}
              />
            ))}

            {/* Corner Bolts */}
            {[
              "top-4 left-4",
              "top-4 right-4",
              "bottom-4 left-4",
              "bottom-4 right-4",
            ].map((pos) => (
              <div
                key={pos}
                className={`absolute ${pos} w-3 h-3`}
                style={{
                  background: "#444",
                  boxShadow: "inset 2px 2px 0 #777",
                }}
              />
            ))}

            <div className="px-10 py-8 relative z-10">
              <h2 id="ai-sign-heading" className="sr-only">
                AI Collaboration Notice
              </h2>

              <div className="text-center mb-5">
                <h3
                  className="text-xl tracking-widest"
                  style={{
                    color: "#4d3014",
                    textShadow: "2px 2px 0 #ddb679",
                  }}
                >
                  INFORMATION BOARD
                </h3>

                <div className="w-40 h-1 mx-auto mt-3 bg-[#7a5a34]" />
              </div>

              <p
                className="text-center leading-8"
                style={{
                  color: "#4b3116",
                }}
              >
                This portfolio demonstrates my ability to collaborate with
                AI-assisted development tools. I planned the architecture,
                designed the interface, and customized every feature while
                using AI to speed up development. Every project showcased here
                represents my own learning, experimentation, and hands-on
                programming experience rather than AI-generated templates.
              </p>
            </div>
          </div>

          {/* Wooden Post */}
          <div
            className="absolute left-1/2 top-full -translate-x-1/2 w-10 h-24"
            style={{
              background: "#7b5b34",
              boxShadow:
                "inset 4px 0 0 #9d7643, inset -4px 0 0 #5c4224",
            }}
          />

          {/* Stone Base */}
          <div
            className="absolute left-1/2 top-[calc(100%+96px)] -translate-x-1/2 w-20 h-8 border-2"
            style={{
              background: "#7a7a7a",
              borderColor: "#555",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AISign;