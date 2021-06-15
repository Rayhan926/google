import { useRouter } from "next/router";
import Link from "next/link";

function Pagination() {
  const router = useRouter();
  const currentPage = router.query.start || 1;
  const currentQuery = router.query.q;
  let plusify = currentQuery.split(" ").join("+");
  let pagination = [];
  let loopStartFrom = currentPage >= 6 ? currentPage - 4 : 1;
  for (var i = loopStartFrom; i <= loopStartFrom + 9; i++) {
    pagination.push(i);
  }
  return (
    <div className="google_container flex justify-center items-center pt-4">
      {pagination.map((eachPage, index) => (
        <div key={index}>
          {currentPage == eachPage ? (
            <span className="inline-block py-1 mx-1.5 text-[#000]">
              {eachPage}
            </span>
          ) : (
            <Link href={`/search?q=${plusify}&page=${eachPage}`}>
              <a className="inline-block py-1 cursor-pointer mx-1.5 hover:underline text-blue-500">
                {eachPage}
              </a>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}

export default Pagination;
