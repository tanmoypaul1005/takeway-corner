import Banner from "@app/components/banner/Banner";
import TestimonialSlider from "@app/components/testimonials/TestimonialSlider";
import Food from "./shop/page";
import Offers from "./offers/page";
import Cuisines from "./cuisines/page";

const Home: React.FC = () => {
  return (
    <main className="space-y-10">
      <Banner />
      <div className="">
      <div className='text-[32px] font-semibold leading-10 text-white mb-5'>Your daily deals</div>
        <Offers />
      </div>
      <Cuisines/>
      <Food />
      <TestimonialSlider />
      <div className="mb-10"></div>
    </main>
  );
};

export default Home;
