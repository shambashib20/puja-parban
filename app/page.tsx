import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TrustBar } from "@/components/home/TrustBar";
import { PriestsCarousel } from "@/components/home/PriestsCarousel";
import { HowItWorks } from "@/components/home/HowItWorks";
import { ServicesCarousel } from "@/components/home/ServicesCarousel";
import { DivineCta } from "@/components/home/DivineCta";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { BlogTeaserGrid } from "@/components/home/BlogTeaserGrid";
import { FaqAccordion } from "@/components/home/FaqAccordion";
import { AboutStrip } from "@/components/home/AboutStrip";
import { FestivalsCarousel } from "@/components/home/FestivalsCarousel";
import { getBlogPostSummaries } from "@/lib/data/blogPosts";

export default async function HomePage() {
  const blogPosts = await getBlogPostSummaries();

  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <PriestsCarousel />
      <HowItWorks />
      <ServicesCarousel />
      <DivineCta />
      <TestimonialSlider />
      <BlogTeaserGrid posts={blogPosts} />
      <FaqAccordion />
      <AboutStrip />
      <FestivalsCarousel />
      <Footer />
    </>
  );
}
