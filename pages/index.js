import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeForm from "../components/HomeForm";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google | By Saymon</title>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <div className="grid min-h-screen">
        <Header />
        <HomeForm />
        <Footer />
      </div>
    </>
  );
}
