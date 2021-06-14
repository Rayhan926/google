import { createContext } from "react";
import Head from "next/head";
import ResultPageHeader from "./../components/ResultPageHeader";
import ResultLists from "./../components/ResultLists";
import ResultPageFooter from "./../components/ResultPageFooter";
import ErrorHandle from "./../components/ErrorHandle";
import dummy_json_data from "../dummy_json_data";

const Query = createContext();

function search({ data }) {
  const searchTerm = data?.queries?.request[0]?.searchTerms;
  return (
    <>
      <Head>
        <title>{searchTerm} - Google Search | By Saymon</title>
      </Head>

      <div className="grid min-h-screen">
        <div className="self-start overflow-hidden">
          <Query.Provider value={searchTerm}>
            <ResultPageHeader />
          </Query.Provider>

          {Number(data?.searchInformation?.totalResults) > 0 ? (
            <ResultLists data={data} />
          ) : (
            <ErrorHandle data={data} />
          )}
        </div>
        <ResultPageFooter />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const api_key = process.env.API_KEY;
  const context_key = process.env.CONTEXT_KEY;

  const query = context?.query?.q;
  const useDemoData = true;
  const startIndex = context?.query?.start || "0";
  const urlToHit = `https://www.googleapis.com/customsearch/v1?key=${api_key}&cx=${context_key}&q=${query}&start=${startIndex}&gl=bd&hl=bn`;

  let data;
  if (useDemoData) {
    data = dummy_json_data;
  } else {
    const res = await fetch(urlToHit);
    data = await res.json();
  }

  return {
    props: {
      data: data,
    },
  };
}

export default search;
export { Query };
// AIzaSyCNcVgJCfmsYLLmy5PLGZ1gOyONydWZhpY
// ab3c335f52b95ee70

// https://www.googleapis.com/customsearch/v1?key=AIzaSyCNcVgJCfmsYLLmy5PLGZ1gOyONydWZhpY&cx=ab3c335f52b95ee70&q=Bangladesh&start=0
