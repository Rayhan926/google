import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { useRouter } from "next/router";

function HomeForm() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const searchGoogle = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    let plusify = searchTerm.split(" ").join("+");
    router.push(`/search?q=${plusify}`);
  };

  return (
    <div className="flex flex-col items-center mt-8">
      <div className="w-[40%] mx-auto flex justify-center">
        <Image
          src="/img/google_logo.png"
          width="272"
          height="92"
          alt="Google"
        />
      </div>
      <div className="w-[96%] mx-auto mt-5 sm:w-[80%] lg:w-[45%]">
        <form className="w-full" onSubmit={(e) => searchGoogle(e)}>
          <label className="flex items-center border border-gray-300 rounded-full px-3.5 py-1 hover:shadow-lg hover:border-gray-200 focus-within:border-gray-200 focus-within:shadow-lg sm:py-2 ">
            <BsSearch className="text-gray-500" />
            <input
              type="text"
              className="flex-grow focus:outline-none px-3 py-1 sm:mt-[-4px] leading-[0px]"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <IoMdClose
                onClick={() => setSearchTerm("")}
                className="text-gray-500 w-5 h-5 cursor-pointer"
              />
            )}
            {!searchTerm && (
              <BiMicrophone className="text-gray-500 w-5 h-5 sm:hidden cursor-pointer" />
            )}
          </label>

          <div className="flex justify-center w-full mt-5 flex-wrap">
            <button className="focus:outline-none px-4 py-1.5 rounded border border-transparent text-gray-700 my-1 mx-1 hover:border-gray-300 bg-white text-sm sm:text-base">
              Google Search
            </button>
            <button className="focus:outline-none px-4 py-1.5 rounded border border-transparent text-gray-700 my-1 mx-1 hover:border-gray-300 bg-white text-sm sm:text-base">
              I'm Felling Lucky
            </button>
          </div>
          <p className="text-center text-gray-700 text-sm mt-5">
            Google Offered in{" "}
            <span className="text-blue-700 cursor-pointer hover:underline hover:text-blue-900">
              বাংলা
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default HomeForm;
