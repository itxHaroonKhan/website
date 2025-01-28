import Devlaper from '@/components/Devlaper';
import Fir from '@/components/Fir';

import Prodoce from '@/components/Prodce';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import React from 'react';

interface HomeData {
  title: string;
  description: string;
  image: {
    asset: {
      url: string;
    };
  };
}

async function getdata(): Promise<HomeData[]> {
  const fetchedData = await client.fetch(`*[_type == "home"] {
    title,
    description,
    image {
      asset -> {
        url
      }
    }
  }`);
  return fetchedData;
}

const Hero = async () => {
  const data = await getdata();

  return (
    <>


      <div className="h-auto lg:py-40 px-4 sm:px-6 md:px-8 mx-auto bg-white">
        <div className="max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between mx-auto gap-8 lg:gap-0">
          {data?.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row items-center lg:items-start">
              {/* Text Content */}
              <div className="flex-1 flex flex-col gap-5 text-center lg:text-left">
                <h1 className="text-xl md:text-5xl font-bold leading-tight text-gray-800">
                  {item.title}
                </h1>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
                {/* Button Section */}
                <div className="flex gap-4 justify-center lg:justify-start mt-6">
                  <button className="px-6 py-3 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none">
                    Learn More
                  </button>
                  <button className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 focus:outline-none">
                    Get Started
                  </button>
                </div>
              </div>

              {/* Image */}
              <div className="flex-1 flex justify-center lg:justify-end">
                {item.image?.asset?.url && (
                  <Image
                    src={item.image.asset.url}
                    alt={item.title}
                    width={400}
                    height={400}
                    className="rounded-full border shadow-2xl shadow-slate-700 border-slate-950 max-w-[90%] sm:max-w-[400px] object-cover mt-6 sm:mt-0 mb-6 sm:mb-0"
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <Prodoce />
        <Devlaper />
        <Fir />
       
      </div>
    </>
  );
};

export default Hero;
