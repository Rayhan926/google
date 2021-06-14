function HeaderTab({ Icon, textValue, active }) {
  return (
    <span
      className={`flex items-center border-b-[3px] font-medium text-base sm:text-base py-3 cursor-pointer  ${
        active
          ? "text-blue-500 border-blue-500 hover:text-blue-500 hover:border-blue-500"
          : "text-gray-600 border-transparent hover:text-gray-800 hover:border-gray-400 "
      }`}
    >
      {Icon && <Icon className="hidden sm:block mr-1.5" />}
      <span>{textValue}</span>
    </span>
  );
}

export default HeaderTab;
