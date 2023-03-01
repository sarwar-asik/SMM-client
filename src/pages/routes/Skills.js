import React from "react";

const Skills = () => {
  const skills = [
    {
      name: "Content Writer",
      img: "https://cdn-icons-png.flaticon.com/512/1170/1170221.png?w=740&t=st=1677488419~exp=1677489019~hmac=7e117e72d0fdde64d2df538571896dcdc7c8008c091769c39d7d2b6715a3cc07",
      details: "Working as a Content writer , published some articles",
    },
    {
      name: "CV Writer",
      img: "https://img.freepik.com/free-icon/hand_318-871387.jpg?t=st=1677488419~exp=1677489019~hmac=cc363e3f7e8659fe8df8d165d5ae627d6e02bd97907034629637cf1e8f32d91a",
      details: "Working as a CV Writer , published some articles",
    },
    {
      name: "Smart Communication",
      img: "https://cdn-icons-png.flaticon.com/512/591/591792.png?w=740&t=st=1677488814~exp=1677489414~hmac=ea62f4166df3a7b65f1440308358189b27a680bee7e4bf839d4c4871d958d7ed",
      details: "Working as a Content writer , published some articles",
    },
    {
      name: "Content Writer",
      img: "https://cdn-icons-png.flaticon.com/512/1170/1170221.png?w=740&t=st=1677488419~exp=1677489019~hmac=7e117e72d0fdde64d2df538571896dcdc7c8008c091769c39d7d2b6715a3cc07",
      details: "Working as a Content writer , published some articles",
    },
  ];

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {skills?.map((skill) => {
          return (
            <div key={skill.name} className="px-[50px] text-center sm:px-0 hover:shadow-2xl ">
              <div className="flex items-center justify-center w-10 h-10 mx-auto mb-4 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
                <img
                  src={skill.img}
                  className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                  alt="skill"
                />
              </div>
              <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider uppercase">
                {skill.name}
              </h6>
              <div className="mb-2 text-gray-700">{skill.details}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
