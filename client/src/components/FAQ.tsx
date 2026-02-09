import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    id: "faq1",
    question: "Is Jupiter really free to use?",
    answer:
      "Yes, Jupiter is completely free to use. We don't have any hidden fees or subscription plans. All our tools are accessible without any payment requirements.",
  },
  {
    id: "faq2",
    question: "How secure is my data when using Jupiter?",
    answer:
      "Jupiter processes all files directly in your browser. Your files never leave your device or get uploaded to any server. This ensures complete privacy and security for all your documents.",
  },
  {
    id: "faq3",
    question: "What's the maximum file size I can process?",
    answer:
      "The maximum file size depends on your device's memory and processing power. Generally, most tools can handle files up to 100MB, but this may vary. For optimal performance, we recommend files under 50MB.",
  },
  {
    id: "faq4",
    question: "Do I need to create an account to use Jupiter?",
    answer:
      "No, Jupiter doesn't require any account creation or login. You can use all our tools without registration, making it quick and convenient to process your files.",
  },
  {
    id: "faq5",
    question: "Which file formats are supported?",
    answer:
      "Jupiter supports a wide range of file formats. For images, we support JPG, PNG, WebP, GIF, and TIFF. For documents, we support PDF, DOCX, and more. Check each specific tool for format compatibility details.",
  },
];

const FAQ = () => {
  const [openFaq, setOpenFaq] = useState("faq1");

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? "" : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold font-heading text-white mb-4 tracking-[0.2em]">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Find answers to common questions about our file conversion tools
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5"
              >
                <button
                  className="w-full px-6 py-4 text-left bg-transparent hover:bg-white/5 focus:outline-none transition-colors duration-200"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="font-medium text-white">
                      {faq.question}
                    </h3>
                    {openFaq === faq.id ? (
                      <ChevronUp className="text-white/60" size={16} />
                    ) : (
                      <ChevronDown className="text-white/60" size={16} />
                    )}
                  </div>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 py-4 border-t border-white/10 bg-white/5">
                    <p className="text-white/70">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
