import Appointment from '@app/appointment/page';
import Banner from '@app/components/banner/Banner';
import TestimonialSlider from '@app/components/testimonials/TestimonialSlider';
import Doctor from '@app/doctor/page';

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