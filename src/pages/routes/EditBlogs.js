import React, { useContext, useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { AuthContext } from "authProvider/ProviderContext";
import main_api from "../main_api";

const EditBlogs = ({ blogs: initialBlogs }) => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [loading, setLoading] = useState(false);
  const {user} = useContext(AuthContext)

  const handleRefresh = async () => {
    setLoading(true);
    const res = await fetch(`${main_api}/blogs/blogs`);
    const newBlogs = await res.json();
    setBlogs(newBlogs);
    setLoading(false);
  };

  useEffect(() => {
    setBlogs(initialBlogs);
  }, [initialBlogs]);

  const deleteBlog = (data) => {
    console.log(data);

    fetch(`${main_api}/blogs/deleteBlog?user=${user?.email}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          console.log(result);
          Swal.fire("deleted", "", "error");
        }
        handleRefresh();
      });
  };
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <h2 className="text-4xl font-bold font-serif mt-2  mx-auto w-[100%] text-center">
        {" "}
        Your Blogs{" "}
      </h2>
      <p className="text-slate-600">You delete any blog from the server</p>
      <main className="grid grid-cols-1  mt-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-3 ">
        {blogs?.map((blog, i) => {
          const { name, img, time, publisher, link, detail, date } = blog;
          return (
            <div
              key={i}
              className={`shadow-2xl rounded-xl p-2 block lg:flex gap-5 `}
            >
              <figure className="lg:w-[25%]">
                <img
                  className="w-full lg:w-[200px] mx-auto  rounded-[3%]"
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
                  <h6 className="text-[13px] font-[500] font-sans ">{date}</h6>
                  <button
                    onClick={() => deleteBlog(blog)}
                    className="bg-red-500 font-semibold rounded px-3 py-2 text-white"
                  >
                    Delete
                  </button>
                </aside>
              </section>
              <section>
                <button className=""></button>
              </section>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${main_api}/blogs/blogs`);
  const blogs = await res.json();
  // Pass data to the page via props
  return { props: { blogs } };
}

EditBlogs.propTypes = {
  blogs: PropTypes.array.isRequired,
};

export default EditBlogs;
