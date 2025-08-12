import Hero from "@/components/hero/Hero";
import HighlightGrid from "@/components/hightlightgrid/HightlightGrid";
import VideoBanner from "@/components/videobanner/VideoBanner";
import AboutTeaser from "@/components/aboutteaser/AboutTeaser";
import Gallery from "@/components/gallery/Gallery";
import Newsletter from "@/components/newsletter/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="container section">
        <HighlightGrid />
      </section>
      <VideoBanner />
      <section className="container section">
        <AboutTeaser />
      </section>
      <section className="section">
        <Gallery />
      </section>
      <section className="section">
        <Newsletter />
      </section>
    </>
  );
}