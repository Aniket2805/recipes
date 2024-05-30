"use client";
import FeaturedSection from "@/components/FeaturedSection";
import GlobalFav from "@/components/GlobalFav";
import SparklesPreview from "@/components/SparklesPreview";
import Teams from "@/components/Teams";
import Testimonial from "@/components/Testimonial";
import { WhyChooseUs } from "@/components/WhyChooseUs";

const page = () => {
  return (
    <div>
      <SparklesPreview />
      <FeaturedSection />
      <WhyChooseUs />
      <Testimonial />
      <GlobalFav />
      <Teams />
    </div>
  );
};

export default page;
