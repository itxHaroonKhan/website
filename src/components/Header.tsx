import React from 'react';

const Header = () => {
  const navLinks = ['Home', 'About', 'Projects', 'Contact'];

  return (
    <header className="bg-gradient-to-r from-teal-400 to-blue-500 text-white body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
       
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navLinks.map((link, index) => (
            <a
              key={index}
              className="mr-5 hover:text-gray-200 transition duration-300"
            >
              {link}
            </a>
          ))}
        </nav>
        <button className="inline-flex items-center bg-transparent border-2 border-white py-1 px-6 focus:outline-none hover:bg-white hover:text-teal-500 rounded-full text-base mt-4 md:mt-0 transition duration-300">
          Get in Touch
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
