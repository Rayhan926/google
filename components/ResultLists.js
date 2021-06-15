import Pagination from "./Pagination";

const createBreadcrump = (url) => {
  let urlOrigin = new URL(url).origin;
  let originLessUrl = url.replace(urlOrigin, "");
  let parts = originLessUrl.split("/").join(" > ").trim();
  let lastChar = parts.charAt(parts.length - 1);
  if (lastChar == ">") {
    parts = parts.slice(0, -1);
  } else {
    parts = parts;
  }
  return (
    <>
      <span className="text-[#000000]">{urlOrigin}</span> {parts}
    </>
  );
};

function ResultLists({ data }) {
  const items = data.results.organic;
  const total_results = Math.floor(Math.random(0, 1) * 999999999);
  const time_taken = data.meta.time_taken.toFixed(2);

  return (
    <>
      <div className="google_container py-3 hidden sm:block ">
        <p className="m-0 text-sm text-gray-500">
          About {total_results} results ({time_taken} seconds)
        </p>
      </div>
      <div
        className="google_container pt-[7px] sm:pt-0 bg-[#ebebeb] sm:bg-white"
        style={{ paddingLeft: "0", paddingRight: "0" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="mt-2 px-4 bg-white py-3 sm:py-0 sm:px-8 sm:mt-8 first:mt-0 sm:first:mt-2"
          >
            <div>
              <a href={item.url} className="group inline-block mb-1.5 sm:mb-1">
                <p className="text-gray-600 text-[15px] w-[80%] sm:w-auto line_clamp mb-1.5 sm:mb-1">
                  {createBreadcrump(item.url)}
                </p>
                <h3 className="text-blue-700 md:text-[#1a0dab] text-xl group-hover:underline">
                  {item.title}
                </h3>
              </a>
            </div>
            <div>
              <p className="text-base text-gray-700">{item.snippet}</p>
            </div>
          </div>
        ))}
      </div>
      <Pagination />
    </>
  );
}

export default ResultLists;
