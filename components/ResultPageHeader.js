import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import ProfileImage from "./ProfileImage";
import { CgMenuGridO } from "react-icons/cg";
import ResultPageSearchBar from "./ResultPageSearchBar";
import { BsSearch } from "react-icons/bs";
import { CgPlayButtonR } from "react-icons/cg";
import { BiImage, BiNews } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FiMoreVertical } from "react-icons/fi";
import HeaderTab from "./HeaderTab";
import { useRouter } from "next/router";

function ResultPageHeader() {
  const router = useRouter();
  return (
    <>
      <div className="p-4 pb-2 sm:py-7 sm:pb-3 sm:px-5">
        <div className="flex justify-between items-center">
          <GiHamburgerMenu className="w-5 h-5 text-gray-500 mr-1 cursor-pointer leading-[0px] sm:hidden" />
          <div className="flex items-center">
            <div
              className="w-24 leading-[0px] cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image
                src="/img/google_logo.png"
                width="272"
                height="92"
                alt="Google"
              />
            </div>
            <div className="ml-5 sm:ml-6 md:ml-7 lg:ml-8 hidden sm:block">
              <ResultPageSearchBar />
            </div>
          </div>
          <div className="flex items-center">
            <CgMenuGridO className="cursor-pointer w-6 h-6 text-gray-600 mr-4 hidden sm:block" />
            <ProfileImage />
          </div>
        </div>
        <div className="mt-3 sm:hidden">
          <ResultPageSearchBar />
        </div>
      </div>
      <div className="border-b border-gray-200">
        <div className="flex justify-between items-center flex-wrap google_container">
          <div className="flex items-center space-x-6 sm:space-x-5 overflow-auto scrollbar-hide">
            {/* overflow-hidden overflow-x-auto  */}
            <HeaderTab textValue="All" Icon={BsSearch} active />
            <HeaderTab textValue="Images" Icon={BiImage} />
            <HeaderTab textValue="Videos" Icon={CgPlayButtonR} />
            <HeaderTab textValue="Maps" Icon={GoLocation} />
            <HeaderTab textValue="News" Icon={BiNews} />
            <HeaderTab textValue="More" Icon={FiMoreVertical} />
          </div>
          <div className="space-x-4 hidden sm:flex items-center">
            <HeaderTab textValue="Settings" />
            <HeaderTab textValue="Tools" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ResultPageHeader;
