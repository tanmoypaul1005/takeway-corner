
import Banner from "./components/Banner";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <main className="common-class">
      <div className="mb-[120px]">
         <Header/>
      </div>
      <Banner/>
    </main>
  );
}
