
// import Banner from "./components/Banner";
// import Category from "./components/category/Category";
import Banner from "./components/Banner";
import TestimonialSlider from "./components/testimonials/TestimonialSlider";


const Home: React.FC = () => {
  return (
  <main className="space-y-10">
      <Banner/>
      {/* <Category/> */}
      <TestimonialSlider/>
    </main>
  );
}


export default Home;