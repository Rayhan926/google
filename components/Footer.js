import ResultPageFooter from "./ResultPageFooter";
function Footer() {
  return (
    <div className="self-end">
      <footer className="text-gray-500 text-sm sm:text-base">
        <div className="pb-3 px-7">
          <p className="text-center sm:text-left">Bangladesh</p>
        </div>
        <div className="border-t border-gray-300 google_footer_bottom px-7 py-1">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
            <li>
              <a href="#">Business</a>
            </li>
            <li>
              <a href="#">How Search works</a>
            </li>
          </ul>

          <ul>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Settings</a>
            </li>
          </ul>
        </div>
      </footer>
      <ResultPageFooter mt0 />
    </div>
  );
}

export default Footer;
