import teamImage from "./assets/Team.jpg";

export const AboutUs = () => {
  return (
    <div className="flex flex-col items-center py-32 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white ">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-semibold text-orange-600 mb-4">
          About Us
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300">
          Learn more about who we are, what we do, and how we strive to make an
          impact in the world of music.
        </p>
      </div>

      {/* Our Mission */}
      <div className="flex flex-col items-center mb-16 px-4 sm:px-16">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6">
            Our Mission
          </h2>
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300">
            We are passionate about bringing music enthusiasts, creators, and
            businesses together in a dynamic and vibrant community. Our goal is
            to empower individuals by providing a platform that fosters
            creativity, collaboration, and innovation.
          </p>
        </div>
      </div>

      {/* Our Team */}
      <div className="flex flex-col sm:flex-row items-center justify-center sm:px-16 mb-16 ">
        {/* Image container */}
        <div className="flex-1 max-w-[12rem] sm:max-w-[15rem] mx-auto sm:mx-0 mb-6 sm:mb-0">
          <div className="w-full h-[12rem] sm:h-[15rem] mx-auto overflow-hidden rounded-full shadow-xl">
            <img
              src={teamImage}
              alt="Basil Ramzi"
              className="w-full h-full object-cover transition-all duration-300 hover:scale-105"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="flex-1 text-center sm:text-left max-w-[600px] pl-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-4">
            Meet Basil Ramzi
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8">
            Basil Ramzi is the founder and driving force behind our platform.
            With a passion for music and a vision for bringing creators
            together, Basil combines expertise in technology and music to build
            a space where collaboration thrives. His goal is to empower
            musicians to connect, create, and innovate.
          </p>
        </div>
      </div>

      {/* Our Values */}
      <div className="flex flex-col items-center mb-16 px-4 sm:px-16">
        <div className="max-w-3xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6">
            Our Core Values
          </h2>
          <ul className="list-disc pl-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 space-y-4">
            <li>
              <strong>Innovation:</strong> We strive to provide the best tools
              for musical expression and collaboration.
            </li>
            <li>
              <strong>Integrity:</strong> We operate with honesty and
              transparency to build trust with our users.
            </li>
            <li>
              <strong>Accessibility:</strong> We want our platform to be
              available and inclusive for musicians of all backgrounds and skill
              levels.
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col items-center mb-16 px-4 sm:px-16">
        <h2 className="text-3xl sm:text-4xl font-semibold text-orange-600 mb-6 text-center">
          Get in Touch
        </h2>
        <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-6 text-center">
          Have questions or want to learn more about what we do? Feel free to
          reach out to us anytime!
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
