import Head from "next/head";
import ResultPageHeader from "./../components/ResultPageHeader";
import ResultLists from "./../components/ResultLists";
import ResultPageFooter from "./../components/ResultPageFooter";
import ErrorHandle from "./../components/ErrorHandle";
import dummy_json_data from "../dummy_json_data";
import axios from "axios";

function search({ data }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <title>{data.meta.query} - Google Search | By Saymon</title>
      </Head>

      <div className="grid min-h-screen">
        <div className="self-start overflow-hidden">
          <ResultPageHeader query={data.meta.query} />
          {Number(data?.meta?.results) > 0 ? (
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
  const query = context?.query?.q;
  const page = context.query.page || "1";

  let apiKeys = [
    "366e2efc91msh7ade64d1c78c515p1e57c1jsne92da62459df",
    "9892dfbcc2mshab4b6ed46c31531p18dd3cjsnfd91ccf14073",
    "6aa13efb47msh874e3a534b195e8p1e532cjsne78cf256591c",
  ];
  let pickAKey = Math.floor(Math.random(0, apiKeys.length) * apiKeys.length);

  const options = {
    method: "GET",
    url: "https://google-search5.p.rapidapi.com/google-serps/",
    params: {
      q: query,
      page: page,
      gl: "us",
      hl: "en",
    },
    headers: {
      "x-rapidapi-key": apiKeys[pickAKey],
      "x-rapidapi-host": "google-search5.p.rapidapi.com",
    },
  };
  const dummy = false;

  let data;
  if (dummy) {
    data = dummy_json_data;
  } else {
    const req = await axios.request(options);
    data = await req.data.data;
  }

  return {
    props: {
      data: data,
    },
  };
}

export default search;
