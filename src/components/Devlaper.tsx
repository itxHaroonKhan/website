import Image from 'next/image';
import React from 'react';

const Developer = () => {
  const teamMembers = [
    {
      name: "Alper Kamu",
      role: "UI Developer",
      description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://i.pinimg.com/736x/b5/b0/7c/b5b07cde6a151c407d2ffc21c0661e30.jpg"
    },
    {
      name: "Holden Caulfield",
      role: "UI Developer",
      description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://i.pinimg.com/736x/c0/3c/05/c03c05aa3a1f003b1b2647235ec147d6.jpg"
    },
    {
      name: "Atticus Finch",
      role: "UI Developer",
      description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://i.pinimg.com/736x/3c/4e/d9/3c4ed95b13625b8c9e61eda981b828d9.jpg"
    },
    {
      name: "Henry Letham",
      role: "UI Developer",
      description: "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
      image: "https://i.pinimg.com/736x/07/2c/06/072c06cfc34b20f3358cce892a4d73b9.jpg"
    }
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center w-full mb-20">
          <h1 className="text-3xl font-semibold title-font mb-4 text-gray-900">
            Meet Our Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Our team consists of experienced professionals working together to deliver the best.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-4 lg:w-1/4 md:w-1/2">
              <div className="h-full flex flex-col items-center text-center bg-white rounded-lg shadow-lg p-6">
                <Image
                  alt="team"
                  className="flex-shrink-0 rounded-full w-32 h-32 object-cover object-center mb-4"
                  src={member.image}
                  width={128}
                  height={128}
                />
                <h2 className="title-font font-medium text-lg text-gray-900">
                  {member.name}
                </h2>
                <h3 className="text-gray-500 mb-3">{member.role}</h3>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <span className="inline-flex">
                  <a className="text-gray-500 hover:text-teal-500 transition duration-300">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500 hover:text-teal-500 transition duration-300">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500 hover:text-teal-500 transition duration-300">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developer;
