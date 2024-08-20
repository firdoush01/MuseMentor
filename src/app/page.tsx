import HeroSection from "@/components/HeroSection";
import FeaturedSection from "@/components/FeaturedSection"
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicSchoolTestimonials from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    
    <main className="main-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      
      <HeroSection/>
      <FeaturedSection/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
      
    </main>     
     
    
  );
}
