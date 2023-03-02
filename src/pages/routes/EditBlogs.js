import React from "react";

const EditBlogs = () => {
  const blogs = [
    {
      name: "Current Global",
      img: "https://img.freepik.com/free-photo/freelancer-working-outdoors_144627-43331.jpg?w=1060&t=st=1677487417~exp=1677488017~hmac=d4cf971db5b76557e9c99d74fe356886c5c5d3e2ee18f6ada9a5bdbafa77be41",
      time: "4 Dec 2022",
      publisher: "Prothom Alo",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
      link: "",
    },
    {
      name: "Global Warming",
      img: "https://img.freepik.com/free-photo/workspace-workplace-office-table_144627-40148.jpg?w=1060&t=st=1677487460~exp=1677488060~hmac=0455190b58338b6e999bd57bee423915f7a16824962582469382fb9d8f6d8147",
      time: "45 Jan 2023",
      publisher: "Daily Star",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
      link: "",
    },
    {
      name: "Chine vs USA",
      img: "https://img.freepik.com/free-photo/notepad-pen-magnifier-coffee-cup-blue-background-flat-lay_169016-17996.jpg?w=1060&t=st=1677487523~exp=1677488123~hmac=4ab8e6e16c56774c07e9027ffa674e89c9f5ea6c0d5bfc5348c35990e9167ab8",
      time: "4 Dec 2021",
      publisher: "The Jugantor",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
      link: "",
    },
    {
      name: "Russia Ukrain",
      img: "https://img.freepik.com/free-photo/blogger-writing-down-ideas_1098-19894.jpg?w=1060&t=st=1677487586~exp=1677488186~hmac=3184645642781afb27386eb76ebd42aaede545d3315ac55b8022423fb600d27d",
      time: "4 Dec 20222",
      publisher: "The Inkilab",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
      link: "",
    },
    {
      name: "Modern Economy",
      img: "https://img.freepik.com/free-photo/freelancer-working-outdoors_144627-43331.jpg?w=1060&t=st=1677487417~exp=1677488017~hmac=d4cf971db5b76557e9c99d74fe356886c5c5d3e2ee18f6ada9a5bdbafa77be41",
      time: "4 Dec 20222",
      publisher: "Bangladesh News",
      detail:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt voluptas excepturi velit, nobis nemo tenetur at exercitationem? Minus.",
      link: "",
    },
  ];
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 className="text-4xl font-bold font-serif my-2  mx-auto w-[100%] text-center">
        {" "}
        Your Blogs{" "}
      </h2>
     <main className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3 ">
     {blogs?.map((blog, i) => {
        const {name,img,time,publisher,link,detail} =blog
        return (
            <div key={i} className={`shadow-2xl rounded-xl p-2 flex gap-5 `}>
              <figure className="w-[25%]">
                <img
                  className="w-[200px] mx-auto h-[100px] rounded-[3%]"
                  src={img}
                  alt="img"
                />
              </figure>
              <section className="flex flex-col gap-2 w-[75%]">
                <h3 className="font-bold text-2xl font-serif">{name}</h3>
                <p className="text-[14px] font-[600] text-slate-500">
                {detail}
                </p>
                <aside className="flex justify-between">
                  <h6 className="text-[13px] font-[500] font-sans ">
                    {time}
                  </h6>
                  <button className="bg-red-500 font-semibold rounded px-3 py-2 text-white">
                    Delete 
                  </button>
                </aside>
              </section>
              <section>
                <button className=""></button>
              </section>
            </div>
        )
      })}
     </main>
    </div>
  );
};

export default EditBlogs;
