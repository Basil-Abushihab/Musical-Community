import { useState } from "react";

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is your mission?",
      answer:
        "Our mission is to bring music enthusiasts, creators, and businesses together in a dynamic community, fostering creativity, collaboration, and innovation.",
    },
    {
      question: "How can I get involved?",
      answer:
        "You can join our platform by signing up and becoming a part of our community. We welcome all levels of creators!",
    },
    {
      question: "Is your platform free to use?",
      answer:
        "Yes, our platform is free to use with optional premium features for advanced functionalities.",
    },
    {
      question: "How can I contact you?",
      answer:
        "You can contact us through the 'Get in Touch' section, or email us directly at Basilabushihab_02@outlook.com.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center py-32 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-semibold text-orange-600 mb-4">
          Frequently Asked Questions
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Get answers to some of the most commonly asked questions about our
          platform and services.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="flex flex-col items-center mb-16 px-4 sm:px-16 max-w-3xl">
        {faqs.map((faq, index) => (
          <div key={index} className="w-full mb-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full text-left p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <h2 className="text-2xl text-gray-900 dark:text-white font-semibold">
                {faq.question}
              </h2>
            </button>
            {activeIndex === index && (
              <p className="text-lg text-gray-700 dark:text-gray-300 mt-4 px-4">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center mb-16 px-4 sm:px-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6 text-center">
          Have More Questions?
        </h2>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 text-center">
          If you need further assistance, feel free to reach out to us!
        </p>
        <a
          href="mailto:Basilabushihab_02@outlook.com"
          className="px-6 py-3 text-lg text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300"
        >
          Email Us
        </a>
      </div>
    </div>
  );
};
