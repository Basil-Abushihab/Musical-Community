import React from "react";
import termsImage from "./assets/terms-image.jpg";

const TermsOfService = () => {
  return (
    <div className="flex flex-col items-center py-32 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-semibold text-orange-600 mb-4">
          Terms of Service
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Please review our Terms of Service, which govern the use of our
          platform and services.
        </p>
      </div>

      {/* Terms Image */}
      <div className="max-w-4xl mx-auto mb-12">
        <img
          src={termsImage}
          alt="Terms of Service"
          className="w-full h-auto object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Section 1: Introduction */}
      <div className="max-w-3xl mx-auto mb-16 px-4 sm:px-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6">
          Introduction
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Welcome to our platform! By accessing or using our website and
          services, you agree to comply with the following Terms of Service.
          These terms are legally binding and govern your use of the site.
        </p>
      </div>

      {/* Section 2: User Responsibilities */}
      <div className="max-w-3xl mx-auto mb-16 px-4 sm:px-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6">
          User Responsibilities
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          As a user of our platform, you agree to provide accurate and complete
          information when registering for an account. You are responsible for
          maintaining the confidentiality of your account and are liable for any
          activities that occur under your account.
        </p>
      </div>

      {/* Section 3: Prohibited Activities */}
      <div className="max-w-3xl mx-auto mb-16 px-4 sm:px-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6">
          Prohibited Activities
        </h2>
        <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 space-y-4">
          <li>Engaging in any illegal activity or violation of laws</li>
          <li>Uploading harmful content, including malware or viruses</li>
          <li>Disrupting or damaging the platform or services</li>
        </ul>
      </div>

      {/* Section 4: Disclaimers and Limitation of Liability */}
      <div className="max-w-3xl mx-auto mb-16 px-4 sm:px-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6">
          Disclaimers and Limitation of Liability
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          We provide our services "as is" and make no warranties or
          representations of any kind. We are not liable for any damages or
          losses that may arise from the use of our platform.
        </p>
      </div>

      {/* Section 5: Modifications to the Terms */}
      <div className="max-w-3xl mx-auto mb-16 px-4 sm:px-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6">
          Modifications to the Terms
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          We reserve the right to modify or update these Terms of Service at any
          time. Changes will be posted on this page, and your continued use of
          the platform will constitute your acceptance of the updated terms.
        </p>
      </div>

      {/* Section 6: Contact Information */}
      <div className="max-w-3xl mx-auto mb-16 px-4 sm:px-16 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6">
          Contact Us
        </h2>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          If you have any questions about these Terms of Service, please feel
          free to contact us via email at:
        </p>
        <a
          href="mailto:Basilabushihab_02@outlook.com"
          className="mt-4 inline-block text-lg text-orange-500 hover:text-orange-600"
        >
          Basilabushihab_02@outlook.com
        </a>
      </div>
    </div>
  );
};

export default TermsOfService;
