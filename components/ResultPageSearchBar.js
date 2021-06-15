import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";

function ResultPageSearchBar({ query }) {
  const router = useRouter();
  const [inputQuery, setInputQuery] = useState("");

  useEffect(() => {
    setInputQuery(query);
  }, [query]);

  const searchGoogle = (e) => {
    e.preventDefault();
    if (!inputQuery) return;
    let plusify = inputQuery.split(" ").join("+");
    router.push(`/search?q=${plusify}`);
  };

  const handleChange = (e) => {
    const inpVal = e.target.value;
    setInputQuery(inpVal);
  };

  return (
    <div className="w-full sm:w-[420px] md:w-[550px] lg:w-[670px]">
      <form className="w-full" onSubmit={(e) => searchGoogle(e)}>
        <label className="flex items-center rounded-full px-4 shadow-md hover:shadow-lg  focus-within:shadow-lg h-[46px] py-1 border border-gray-200">
          <BsSearch className="text-gray-500 sm:hidden " />
          <input
            type="text"
            className="w-full focus:outline-none px-3 sm:mt-[-4px] leading-[0px] text-gray-800 text-lg"
            onChange={(e) => handleChange(e)}
            value={inputQuery}
          />

          {inputQuery && (
            <div className=" sm:border-r border-gray-300 h-full sm:pr-2 flex items-center">
              <IoMdClose
                className="text-gray-500 w-5 h-full cursor-pointer"
                onClick={() => setInputQuery(false)}
              />
            </div>
          )}

          <button
            type="submit"
            className="hidden sm:block focus:outline-none bg-white border-none h-full cursor-pointer "
          >
            <div className="flex items-center h-full ">
              <BsSearch className="text-blue-500 ml-3" />
            </div>
          </button>
        </label>
      </form>
    </div>
  );
}

export default ResultPageSearchBar;
