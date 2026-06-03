import { createFileRoute } from "@tanstack/react-router";
import { AnnouncementBar } from "@/components/site/AnnouncementBar";
import { Header } from "@/components/site/Header";
import { ProductHero } from "@/components/site/ProductHero";
import { ComplementaryProducts } from "@/components/site/ComplementaryProducts";
import { AccordionSections } from "@/components/site/AccordionSections";
import { Reviews, SeoText } from "@/components/site/Reviews";
import { Footer } from "@/components/site/Footer";
import { CartDrawer } from "@/components/site/CartDrawer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Complete Comfort Sanitary Pads — Heyday Care" },
      { name: "description", content: "Ultra-thin, 100% toxic-free sanitary pads with 50% wider back. Zero irritation, zero leaks. Subscribe & save 23%." },
      { property: "og:title", content: "Complete Comfort Sanitary Pads — Heyday Care" },
      { property: "og:description", content: "Ultra-thin, 100% toxic-free sanitary pads. Zero irritation, zero leaks." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AnnouncementBar />
      <Header />
      <main>
        <ProductHero />
        <ComplementaryProducts />
        <AccordionSections />
        <Reviews />
        <SeoText />
      </main>
      <Footer />
      <CartDrawer />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />
    </div>
  );
}

