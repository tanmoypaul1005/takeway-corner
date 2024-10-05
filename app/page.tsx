import Banner from "@app/components/banner/Banner";
import Appointment from "@app/appointment/page";
import TestimonialSlider from "@app/components/testimonials/TestimonialSlider";

const Home: React.FC = () => {
  return (
  <main className="space-y-10">
      <Banner/>
      <Appointment/>
      <TestimonialSlider/>
      <div className="mb-10"></div>
    </main>
  );
}


export default Home;