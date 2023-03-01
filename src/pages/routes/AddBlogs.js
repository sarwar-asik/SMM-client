import React from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddBlogs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    Swal.fire("sent", "", "success");
  };

  return (
    <div>
      <h2 className="text-4xl font-bold font-serif my-2  mx-auto w-[100%] text-center"> Add a Blogs </h2>
      <section className="py-3 lg:px-[40px] px-3 lg:w-[80%] mx-auto">
        <form action="" onSubmit={handleSubmit(onSubmit)}>

          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
          <div className="">
            <label htmlFor="" className="text-slate-700 my-2 ">
             Name
            </label>
            <input
              type="text"
              {...register("name")}
              className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
              required
              placeholder="Your name"
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-slate-700 my-2 ">
             Publication
            </label>
            <input
              type="text"
              {...register("publication")}
              className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
              required
              placeholder="Your publication"
            />
          </div>
         
          </section>
          {/* section-2 */}
          <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3 mt-3">
          <div className="">
            <label htmlFor="" className="text-slate-700 my-2 ">
             Published Time
            </label>
            <input
              type="time"
              {...register("time")}
              className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
              required
              
            />
          </div>
          <div className="">
            <label htmlFor="" className="text-slate-700 my-2 ">
             Published Date
            </label>
            <input
              type="date"
              {...register("date")}
              className="w-full rounded  mt-2 outline-none py-3 bg-slate-300 px-3"
              required
            />
          </div>
         
          </section>
          <div className="mt-5">
            <label htmlFor="" className="text-slate-700 my-2 ">
              Blog Link
            </label>
            <input
              type="url"
              className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300"
              {...register("link")}
              required
              placeholder="paste link "
            />
          </div>
          <div className="mt-5">
            <label htmlFor="" className="text-slate-700 my-2 ">
              Your Message
            </label>
            <textarea
              type="email"
              className="w-full rounded px-5 mt-2 outline-none py-3 bg-slate-300"
              {...register("message")}
              required
              placeholder="Your Message"
            />
          </div>
          <div className="">
            <input
              type="submit"
              className="bg-[#41a3e5] lg:px-5 px-3 py-2 text-[18px] rounded text-white font-bold "
              value="Add a blogs"
            />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddBlogs;
