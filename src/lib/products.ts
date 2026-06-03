import ultra from "@/assets/product-ultra.jpg";
import overnight from "@/assets/product-overnight.jpg";
import liners from "@/assets/product-liners.jpg";
import tea from "@/assets/product-tea.jpg";
import rollon from "@/assets/product-rollon.jpg";

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  mrp: number;
  image: string;
  category: "pads" | "wellness";
  badge?: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    slug: "ultra-thin-pads",
    name: "Ultra-Thin Day Pads",
    tagline: "Featherlight comfort for everyday flow",
    price: 299,
    mrp: 399,
    image: ultra,
    category: "pads",
    badge: "Bestseller",
    description:
      "Breathable, dermatologically tested cotton-soft pads with leak-lock channels for confident day wear. 240mm length, individually wrapped.",
    features: ["100% rash-free cotton top", "Leak-lock side channels", "Toxin-free & biodegradable wrapper", "Pack of 15"],
  },
  {
    slug: "overnight-pads",
    name: "Overnight Heavy Flow Pads",
    tagline: "12-hour protection while you sleep",
    price: 349,
    mrp: 449,
    image: overnight,
    category: "pads",
    description:
      "Extra-long 320mm pads with wider back coverage so you can move freely through the night without worry.",
    features: ["320mm extra length", "Wider back coverage", "Super-absorbent core", "Pack of 12"],
  },
  {
    slug: "panty-liners",
    name: "Daily Panty Liners",
    tagline: "Light, breathable, every-day fresh",
    price: 199,
    mrp: 249,
    image: liners,
    category: "pads",
    description:
      "Whisper-thin liners for spotting, discharge, or extra freshness on light days. Designed to disappear under anything.",
    features: ["Ultra-thin 1.5mm", "Breathable cotton cover", "Curved fit", "Pack of 30"],
  },
  {
    slug: "cramp-tea",
    name: "Cramp Comfort Tea",
    tagline: "Warm calm for tough days",
    price: 449,
    mrp: 549,
    image: tea,
    category: "wellness",
    badge: "New",
    description:
      "A herbalist-blended tea with chamomile, fennel, and ginger to soothe cramps and bloating. 20 biodegradable sachets.",
    features: ["Caffeine-free", "Doctor-recommended blend", "20 pyramid sachets", "Naturally calming"],
  },
  {
    slug: "cramp-rollon",
    name: "Cramp Relief Roll-On",
    tagline: "Targeted relief in 10 minutes",
    price: 399,
    mrp: 499,
    image: rollon,
    category: "wellness",
    description:
      "A warming roll-on with menthol, lavender, and clove oils to ease cramping right where you need it.",
    features: ["10ml glass roll-on", "Steroid-free", "Vegan & cruelty-free", "Dermatologist tested"],
  },
];

export const findProduct = (slug: string) => products.find((p) => p.slug === slug);
