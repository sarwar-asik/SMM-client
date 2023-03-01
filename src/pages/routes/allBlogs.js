import Link from 'next/link';
import React from 'react';

const allProjects = () => {
    const blogs = [
        {
          name: "",
          img: "https://img.freepik.com/free-photo/freelancer-working-outdoors_144627-43331.jpg?w=1060&t=st=1677487417~exp=1677488017~hmac=d4cf971db5b76557e9c99d74fe356886c5c5d3e2ee18f6ada9a5bdbafa77be41",
          time: "4 Dec 2022",
          publisher: "Prothom Alo",
          detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
          link: "",
        },
        {
          name: "",
          img: "https://img.freepik.com/free-photo/workspace-workplace-office-table_144627-40148.jpg?w=1060&t=st=1677487460~exp=1677488060~hmac=0455190b58338b6e999bd57bee423915f7a16824962582469382fb9d8f6d8147",
          time: "45 Jan 2023",
          publisher: "Daily Star",
          detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
          link: "",
        },
        {
          name: "",
          img: "https://img.freepik.com/free-photo/notepad-pen-magnifier-coffee-cup-blue-background-flat-lay_169016-17996.jpg?w=1060&t=st=1677487523~exp=1677488123~hmac=4ab8e6e16c56774c07e9027ffa674e89c9f5ea6c0d5bfc5348c35990e9167ab8",
          time: "4 Dec 2021",
          publisher: "The Jugantor",
          detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
          link: "",
        },
        {
          name: "",
          img: "https://img.freepik.com/free-photo/blogger-writing-down-ideas_1098-19894.jpg?w=1060&t=st=1677487586~exp=1677488186~hmac=3184645642781afb27386eb76ebd42aaede545d3315ac55b8022423fb600d27d",
          time: "4 Dec 20222",
          publisher: "The Inkilab",
          detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
          link: "",
        },
        {
          name: "",
          img: "https://img.freepik.com/free-photo/freelancer-working-outdoors_144627-43331.jpg?w=1060&t=st=1677487417~exp=1677488017~hmac=d4cf971db5b76557e9c99d74fe356886c5c5d3e2ee18f6ada9a5bdbafa77be41",
          time: "4 Dec 20222",
          publisher: "Bangladesh News",
          detail: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
          link: "",
        },
      ];
      return (
        <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 text-center">
          <h2 className="mt-1 text-3xl font-bold font-serif">MY Latest Blogs</h2>
          <p className="text-slate-700 mt-1 mb-4">There are some latest blogs of mine .
          You can Explore my blogs from here .
          </p>
    
          <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {/*  */}
    
            {blogs?.map((blog) => {
              return (
                <div key={blog.name} className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                  <Link href="/" aria-label="Article">
                    <img
                      src={blog.img}
                      className="object-cover w-full h-64 rounded"
                      alt=""
                    />
                  </Link>
                  <div className="py-5">
                    <section className="flex justify-between">
                    <p className="mb-2 text-xs  font-semibold text-gray-600 uppercase">
                      {blog.time}
                    </p>
                    <h5 className="text-[24px] text-[#3594d3] font-semibold font-mono"> {blog.publisher}</h5>
                    </section>
                    <Link
                      href="/"
                      aria-label="Article"
                      className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                    >
                      <p className="text-2xl font-bold leading-5">
                        {blogs.name}
                      </p>
                    </Link>
                    <p className="mb-4  text-slate-600">
                      {blog.detail}
                    </p>
                  <section className="flex justify-between">
                  <button   className="bg-[#41a3e5] px-5 py-2 text-[18px] rounded text-white font-bold ">See Details</button>
                  <button   className="bg-[#41a3e5] px-5 py-2 text-[18px] rounded text-white font-bold ">
                    Visit 
                  </button>
                  </section>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
};

export default allProjects;