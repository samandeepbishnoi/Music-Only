import HeroSection from "@/components/HeroSection"
import FeaturedCources from "@/components/FeaturedCources";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import Instructors from "@/components/Instructors";


export default function Home() {
  return ( 
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
    {/* <h1 className="text-2xl text-center ">samam</h1> */}
    <HeroSection/>
    <FeaturedCources/>
    <WhyChooseUs/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Instructors/>
    
      </main>
    </>
  );
}
