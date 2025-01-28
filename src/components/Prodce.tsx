import Image from 'next/image';
import React from 'react';

const Prodoce = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          
          {/* Firman's Section */}
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-4xl text-3xl font-semibold title-font mb-4 text-gray-900">
              About Firman
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600">
              Firman is a visionary entrepreneur with a passion for creating meaningful, impactful designs.
              With a strong background in both traditional craftsmanship and modern digital tools, Firman’s work
              is a fusion of art and technology, bringing forth creations that are timeless yet innovative.
            </p>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-600 mt-4">
              Whether it’s in the field of web development, architecture, or product design, Firman believes in
              pushing boundaries and redefining what’s possible. Discover the journey and philosophy behind each
              of Firman’s creations, where every design tells a story of creativity, dedication, and excellence.
            </p>
          </div>

          {/* Product Gallery */}
          <div className="flex flex-wrap -m-4">
            {[ 
              { title: "Shooting Stars", subtitle: "THE SUBTITLE", description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.", image: "https://i.pinimg.com/736x/a6/53/34/a65334311933936f0801b4134139810a.jpg" },
              { title: "The Catalyzer", subtitle: "THE SUBTITLE", description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.", image: "https://i.pinimg.com/736x/39/8d/fe/398dfebbd6dfe70237173502da09634b.jpg" },
              { title: "The 400 Blows", subtitle: "THE SUBTITLE", description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.", image: "https://i.pinimg.com/736x/03/cb/e1/03cbe180592098ff6e641616d0c78b92.jpg" },
              { title: "Neptune", subtitle: "THE SUBTITLE", description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.", image: "https://img.freepik.com/fotos-premium/dois-bombeiros-uniformizados-apagando-pessoas-irreconheciveis-ia-generativa_154515-9440.jpg?w=740" },
              { title: "Holden Caulfield", subtitle: "THE SUBTITLE", description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.", image: "https://i.pinimg.com/736x/54/0a/8e/540a8e22b34b7fcbba595e0760a4b6e8.jpg" },
              { title: "Alper Kamu", subtitle: "THE SUBTITLE", description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.", image: "https://i.pinimg.com/736x/4a/a1/42/4aa142b846719931564a5bc3ca4c812f.jpg" }
            ].map((item, index) => (
              <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="relative group overflow-hidden">
                  <Image
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-110"
                    src={item.image}
                    width={720}
                    height={400}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-transparent bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-105">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      {item.subtitle}
                    </h2>
                    <h1 className="title-font text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h1>
                    <p className="leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Prodoce;
