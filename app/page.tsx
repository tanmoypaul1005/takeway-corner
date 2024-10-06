import Banner from "@app/components/banner/Banner";
import TestimonialSlider from "@app/components/testimonials/TestimonialSlider";
import Food from "./shop/page";
import Offers from "./offers/page";

const Home: React.FC = () => {
  return (
    <main className="space-y-10">
      <Banner />
      <div className="flex items-center justify-center">
        <Offers />
      </div>
      <Food />
      <TestimonialSlider />
      <div className="mb-10"></div>
    </main>
  );
};

export default Home;
