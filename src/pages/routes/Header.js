import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
            <div className="max-w-xl mb-6">
              <div>
                <p className="inline-block px-3 py-px mb-4 text-[18px] font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                  Introduction
                </p>
              </div>
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-[#49a5e2] sm:text-4xl sm:leading-none">
                Abdullah Ahmed
              </h2>
              <p className="text-base text-gray-700 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo.
              </p>
            </div>

            
            <div className="flex flex-col items-center md:flex-row gap-3">
            <Link
                href="/"
                aria-label=""
                className="bg-[#41a3e5] px-5 py-2 text-[18px] rounded text-white font-bold "
              >
                My CV
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
               <span>Content Writer</span>
              </Link>

             <section className='flex gap-3'>
              <Link
                href="/"
                aria-label=""
                className="bg-[#41a3e5] px-5 py-2 text-[18px] rounded text-white font-bold "
              >
                About Me 
              </Link>
             </section>
            </div>
          </div>
          <div className="relative lg:w-1/2">
         

            <img src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="mihanImg" />

          </div>
        </div>
      </div>
  
    );
};

export default Header;