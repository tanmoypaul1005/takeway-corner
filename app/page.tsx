import Banner from "@app/components/banner/Banner";
import Appointment from "@app/appointment/page";
import TestimonialSlider from "@app/components/testimonials/TestimonialSlider";
import Food from "./food/page";

const Home: React.FC = () => {
  return (
  <main className="space-y-10">
      <Banner/>
      <Food/>
      <Appointment/>
      <TestimonialSlider/>
      <div className="mb-10"></div>
    </main>
  );
}


export default Home;