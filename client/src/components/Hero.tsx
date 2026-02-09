import { Link } from "wouter";

const Hero = () => {
  return (
    <section className="py-16 sm:py-20 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-semibold font-heading text-white mb-6 tracking-[0.2em]">
            Jupiter File Tools
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Convert, compress, and refine your files in a cosmic-inspired workspace. No account required.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#tools"
              className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors duration-300 shadow-lg shadow-black/30"
            >
              Get Started
            </a>
            <a
              href="#how-it-works"
              className="px-8 py-3 rounded-full border border-white/40 text-white font-medium hover:bg-white/10 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
