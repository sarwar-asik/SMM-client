import Image from "next/image";
import Link from "next/link";
import React from "react";
import error from "../assets/eeeeerrr.png";

const ErrorPage = () => {
  return (
    <div className="max-w-[80%] mx-auto text-center">
      <Link href="/">
        <button className="bg-blue-300 font-bold text-white rounded py-3 px-4 mx-auto">
          Back to Home
        </button>
      </Link>
      <Image className="w-[70%] mx-auto" src={error} height={300} width={"100%"} alt="error img" />
    </div>
  );
};

export default ErrorPage;
