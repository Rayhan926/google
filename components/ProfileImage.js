import Image from "next/image";

function ProfileImage() {
  return (
    <div className="w-[30px] h-[30px] rounded-full overflow-hidden ring-1 ring-gray-500 cursor-pointer">
      <Image
        src="/img/small_profile.jpg"
        width="100px"
        height="100px"
        alt="Gmail Profile"
      />
    </div>
  );
}

export default ProfileImage;
