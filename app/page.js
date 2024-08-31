
import Banner from "./components/Banner";
import Category from "./components/category/Category";
import TestimonialSlider from "./components/testimonials/TestimonialSlider";


export default function Home() {
  return (
  <main className="space-y-10">
      <Banner/>
      <Category/>
      <TestimonialSlider/>
    </main>
  );
}
