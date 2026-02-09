import { Link } from "wouter";
import { FileText, Image, FileDown, UserRound, IterationCcw, Scissors } from "lucide-react";

const tools = [
  {
    id: "pdf-to-image",
    title: "PDF to Image",
    description: "Convert PDF documents to JPG, PNG, or other image formats with high quality.",
    icon: <Image className="text-primary text-xl" />,
    link: "/pdf-to-image",
  },
  {
    id: "image-to-pdf",
    title: "Image to PDF",
    description: "Turn your JPG, PNG, or other image formats into PDF documents quickly.",
    icon: <FileText className="text-primary text-xl" />,
    link: "/image-to-pdf",
  },
  {
    id: "compress-pdf",
    title: "PDF Compression",
    description: "Reduce PDF file size while maintaining quality for easier sharing.",
    icon: <FileDown className="text-primary text-xl" />,
    link: "/compress-pdf",
  },
  {
    id: "resume-builder",
    title: "Resume Builder",
    description: "Create professional resumes with customizable templates and easy editing.",
    icon: <UserRound className="text-primary text-xl" />,
    link: "/resume-builder",
  },
  {
    id: "merge-pdfs",
    title: "Merge PDFs",
    description: "Combine multiple PDF files into a single document quickly and easily.",
    icon: <IterationCcw className="text-primary text-xl" />,
    link: "/merge-pdfs",
  },
  {
    id: "split-pdf",
    title: "Split PDF",
    description: "Extract pages or split PDF documents into multiple files as needed.",
    icon: <Scissors className="text-primary text-xl" />,
    link: "/split-pdf",
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold font-heading text-white mb-4 tracking-[0.2em]">
            Our Tools
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Choose from our wide range of file conversion and editing tools
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="rounded-2xl border border-white/10 bg-white/5 shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="h-1 bg-gradient-to-r from-primary/80 via-fuchsia-500/80 to-primary/80"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                    {tool.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{tool.title}</h3>
                </div>
                <p className="text-white/70 mb-6">{tool.description}</p>
                <Link
                  href={tool.link}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80"
                >
                  Use Tool <span className="ml-2">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
