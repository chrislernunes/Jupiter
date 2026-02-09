import { Link } from "wouter";
import { Github, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black/40 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
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
              <span className="text-xl sm:text-2xl font-semibold font-heading tracking-[0.35em]">
                Jupiter
              </span>
            </div>
            <p className="text-white/60 mb-4">
              Free online tools for all your file conversion needs. Process PDFs,
              images, and documents directly in your browser without sacrificing
              privacy.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://github.com/chrislernunes"
                className="text-white/50 hover:text-white transition-colors duration-200"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">Tools</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/pdf-to-image"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  PDF to Image
                </Link>
              </li>
              <li>
                <Link
                  href="/image-to-pdf"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Image to PDF
                </Link>
              </li>
              <li>
                <Link
                  href="/compress-pdf"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Compress PDF
                </Link>
              </li>
              <li>
                <Link
                  href="/resume-builder"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Resume Builder
                </Link>
              </li>
              <li>
                <Link
                  href="/merge-pdfs"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Merge PDFs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-lg mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/#how-it-works"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="/#faq"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              {/* Contact removed */}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/60">
            Designed and Developed by{" "}
            <a
              href="https://github.com/chrislernunes"
              className="text-primary hover:text-primary/70 transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chrisler Nunes
            </a>
          </p>
          <p className="text-white/50 text-sm mt-2">
            &copy; {new Date().getFullYear()} Jupiter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
