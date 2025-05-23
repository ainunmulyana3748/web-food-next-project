import Link from "next/link";

const Pagination = ({ currentPage, totalPages, query }) => {
  return (
    <div className="flex justify-center mt-12 space-x-4">
      <Link
        href={`?page=${currentPage - 1}${query ? `&q=${query}` : ""}`}
        className={`px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-600 transition ${
          currentPage === 1 ? "pointer-events-none opacity-50" : ""
        }`}
      >
        Previous
      </Link>

      <span className="px-4 py-2 text-green-700 font-semibold">
        Page {currentPage} of {totalPages}
      </span>

      <Link
        href={`?page=${currentPage + 1}${query ? `&q=${query}` : ""}`}
        className={`px-4 py-2 rounded-md bg-green-700 text-white hover:bg-green-600 transition ${
          currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        }`}
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;
