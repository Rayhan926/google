function ErrorHandle({ data }) {
  return (
    <>
      <div className="google_container">
        <div className="text-gray-800 text-base my-8">
          {data?.error?.code === 400 ? (
            <>
              <h3 className="text-black text-lg font-semibold mb-3">
                Something went wrong!
              </h3>
              <ul className="list-disc pl-7">
                <li>Maybe there is no data left to show</li>
                <li>Try different keywords to search</li>
              </ul>
            </>
          ) : (
            <>
              <p className="mb-3">
                Your search -{" "}
                <span className="font-bold text-black">
                  {data?.queries?.request[0]?.searchTerms}
                </span>{" "}
                - did not match any documents.
              </p>
              <p className="mb-3">Suggestions:</p>
              <ul className="list-disc pl-7">
                <li> Make sure that all words are spelled correctly.</li>
                <li>Try different keywords.</li>
                <li>Try more general keywords.</li>
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default ErrorHandle;
