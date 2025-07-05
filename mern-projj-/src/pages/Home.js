import Header from "../components/Header";
import WelcomeSection from "../homecomponent/WelcomeSection";
import NewArrivalsSection from "../homecomponent/NewArrivalsSection";
import BlogBanner from "../homecomponent/BlogBanner";
import Testimonial from "../homecomponent/Testimonial";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <WelcomeSection />
      <NewArrivalsSection />
      <BlogBanner />
      <Testimonial />
      <Footer />
    </div>
  );
}
