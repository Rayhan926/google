import { useContext, useEffect, useRef, useState } from "react";
import { Query } from "../pages/search";
import { IoMdClose } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { useRouter } from "next/router";

function ResultPageSearchBar() {
  const [defaultQuery, setDefaultQuery] = useState("");
  const router = useRouter();
  const queryValue = useContext(Query);
  const searchInputRef = useRef("");
  const [trackValue, setTrackValue] = useState(true);

  useEffect(() => {
    setDefaultQuery(queryValue || "");
  }, [queryValue]);
  console.log(queryValue);

  const searchGoogle = (e) => {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    if (!searchTerm) return;
    let plusify = searchTerm.split(" ").join("+");
    router.push(`/search?q=${plusify}`);
  };

  const clearSearchField = () => {
    searchInputRef.current.value = "";
    setTrackValue(false);
  };

  return (
    <div className="w-full sm:w-[420px] md:w-[550px] lg:w-[670px]">
      <form className="w-full" onSubmit={(e) => searchGoogle(e)}>
        <label className="flex items-center rounded-full px-4 shadow-md hover:shadow-lg  focus-within:shadow-lg h-[46px] py-1 border border-gray-200">
          <BsSearch className="text-gray-500 sm:hidden " />
          <input
            type="text"
            className="w-full focus:outline-none px-3 sm:mt-[-4px] leading-[0px] text-gray-800 text-lg"
            ref={searchInputRef}
            onChange={() =>
              searchInputRef.current.value
                ? setTrackValue(true)
                : setTrackValue(false)
            }
            defaultValue={defaultQuery}
          />

          {trackValue && (
            <div className=" sm:border-r border-gray-300 h-full sm:pr-2 flex items-center">
              <IoMdClose
                className="text-gray-500 w-5 h-full cursor-pointer"
                onClick={() => clearSearchField()}
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
