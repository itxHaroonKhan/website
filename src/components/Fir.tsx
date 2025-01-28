import React from 'react';

const Fir = () => {
  return (
    <div>
      
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
      Asim Parvez: Expert in Construction Solutions
      <br className="hidden sm:block" />
      Delivering Quality, Precision, and Innovation
    </h1>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
      {[
        {
          title: "Expert Construction Solutions",
          description: "With years of experience, Asim Parvez specializes in providing top-notch construction solutions, ensuring every project is completed with precision and attention to detail."
        },
        {
          title: "Precision & Quality",
          description: "Our focus is on delivering high-quality construction services with a commitment to precision and client satisfaction."
        },
        {
          title: "Innovative Solutions",
          description: "We strive to bring innovative ideas to every project, ensuring that each client receives the best possible solution tailored to their needs."
        }
      ].map((item, index) => (
        <div key={index} className="p-4 md:w-1/3 flex">
          <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="text-gray-900 text-lg title-font font-medium mb-2">
              {item.title}
            </h2>
            <p className="leading-relaxed text-base">{item.description}</p>
            <a className="mt-3 text-indigo-500 inline-flex items-center">
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}

export default Fir;
