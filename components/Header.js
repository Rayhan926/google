import { CgMenuGridO } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import ProfileImage from "./ProfileImage";
function Header() {
  return (
    <header className="flex justify-between sm:justify-end py-3 px-4 self-start">
      <div className="flex items-start space-x-5 sm:hidden">
        <GiHamburgerMenu className="w-5 h-5 text-gray-500 mr-1 cursor-pointer " />
        <span className="uppercase pb-[10px] border-b-2 text-sm font-semibold text-blue-600 mt-[-2px] cursor-pointer border-blue-600">
          All
        </span>
        <span className="uppercase pb-[10px] text-sm font-semibold text-gray-500 mt-[-2px] cursor-pointer">
          Images
        </span>
      </div>
      <div className="flex items-center space-x-4">
        <span className="hidden sm:block cursor-pointer text-sm text-gray-700 hover:underline  ">
          Gmail
        </span>
        <span className="hidden sm:block cursor-pointer text-sm text-gray-700 hover:underline  ">
          Images
        </span>
        <CgMenuGridO className="cursor-pointer w-6 h-6 text-gray-600" />
        <ProfileImage />
      </div>
    </header>
  );
}

export default Header;
