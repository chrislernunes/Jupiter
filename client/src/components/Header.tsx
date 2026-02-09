import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "./ui/theme-provider";
import { Sun, Moon, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [location] = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#12061c]/80 backdrop-blur">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 64 64"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="32" cy="32" r="18" />
                <circle cx="32" cy="32" r="28" opacity="0.5" />
              </svg>
            </div>
            <Link href="/" className="text-xl sm:text-2xl font-semibold font-heading text-white tracking-[0.35em]">
              Jupiter
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/#tools"
              className={`font-medium ${
                location === "/#tools"
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              Tools
            </a>
            <a
              href="/#how-it-works"
              className={`font-medium ${
                location === "/#how-it-works"
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              How It Works
            </a>
            <a
              href="/#faq"
              className={`font-medium ${
                location === "/#faq"
                  ? "text-primary"
                  : "text-white/70 hover:text-white"
              }`}
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-white/70 hover:text-white focus:outline-none"
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="md:hidden p-2 rounded-full text-white/70 hover:text-white focus:outline-none"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-3">
              <a
                href="/#tools"
                className="text-white/70 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </a>
              <a
                href="/#how-it-works"
                className="text-white/70 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </a>
              <a
                href="/#faq"
                className="text-white/70 hover:text-white font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
