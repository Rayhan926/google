import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeForm from "../components/HomeForm";

export default function Home() {
  return (
    <>
      <div className="grid min-h-screen">
        <Header />
        <HomeForm />
        <Footer />
      </div>
    </>
  );
}
