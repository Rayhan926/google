import Pagination from "./Pagination";

const createBreadcrump = (url) => {
  let urlOrigin = new URL(url).origin;
  let originLessUrl = url.replace(urlOrigin, "");
  let parts = originLessUrl.split("/").join(" > ").trim();
  let breadcrumb = urlOrigin + "  " + parts;
  let lastChar = breadcrumb.charAt(breadcrumb.length - 1);
  if (lastChar == ">") {
    breadcrumb = breadcrumb.slice(0, -1);
  } else {
    breadcrumb = breadcrumb;
  }
  return breadcrumb;
};

function ResultLists({ data }) {
  const items = data.items;
  const total_results =
    data.searchInformation.totalResults || data.queries.request[0].totalResults;
  const time_taken = data.searchInformation.formattedSearchTime;

  return (
    <>
      <div className="google_container py-3 hidden sm:block ">
        <p className="m-0 text-sm text-gray-500">
          About {total_results} results ({time_taken} seconds)
        </p>
      </div>
      <div
        className="google_container pt-[7px] sm:pt-0 bg-gray-200 sm:bg-white"
        style={{ paddingLeft: "0", paddingRight: "0" }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="mt-2 px-4 bg-white py-3 sm:py-0 sm:px-8 sm:mt-8 first:mt-0 sm:first:mt-2"
          >
            <div>
              <a href={item.link} className="group inline-block">
                <p className="text-[#18191b] text-[15px] line_clamp">
                  {createBreadcrump(item.formattedUrl)}
                </p>
                <h3 className="text-[#1a0dab] text-xl group-hover:underline font-medium ">
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
