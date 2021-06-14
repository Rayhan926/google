import { useRouter } from "next/router";
import Link from "next/link";

function Pagination() {
  const router = useRouter();
  const currentPage = router.query.start || 0;
  const currentQuery = router.query.q;
  let plusify = currentQuery.split(" ").join("+");
  let pagination = [];
  let loopStartFrom = currentPage >= 60 ? currentPage / 10 - 4 : 1;
  for (var i = loopStartFrom; i <= loopStartFrom + 9; i++) {
    pagination.push(i);
  }
  return (
    <div className="google_container flex justify-center items-center pt-4">
      {pagination.map((eachPage, index) => (
        <Link
          href={`/search?q=${plusify}&start=${eachPage * 10 - 10}`}
          key={index}
        >
          <a
            className={`inline-block py-1 cursor-pointer mx-1.5 ${
              currentPage == eachPage * 10 - 10
                ? "text-[#000] cursor-default hover:no-underline"
                : "hover:underline text-blue-500"
            }`}
          >
            {eachPage}
          </a>
        </Link>
      ))}
    </div>
  );
}

export default Pagination;
