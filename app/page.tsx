import Appointment from "./appointment/page";
import Banner from "./components/banner/Banner";
import TestimonialSlider from "./components/testimonials/TestimonialSlider";
import Doctor from "./doctor/page";

const Home: React.FC = () => {
  return (
  <main className="space-y-10">
      <Banner/>
      <Appointment/>
      <Doctor/>
      <TestimonialSlider/>
      <div className="mb-10"></div>
    </main>
  );
}


export default Home;