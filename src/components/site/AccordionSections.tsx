import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import promiseImg from "@/assets/promise.jpg";
import subImg from "@/assets/subscription.jpg";

const sections = [
  {
    title: "Product Description",
    body: () => (
      <p>Heyday Care Complete Comfort Sanitary Pads are ultra-thin, super soft, and toxic-free sanitary pads perfect for heavy, medium and light flow days. They're designed with a breathable top sheet and 50% wider back to promise Zero Irritation and ensure reliable leak protection.</p>
    ),
  },
  {
    title: "Know More About our Zero Irritation Promise",
    body: () => (
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img src={promiseImg} alt="Zero irritation promise" width={1024} height={1024} loading="lazy" className="rounded-lg w-full" />
        <div className="space-y-4 text-[15px]">
          <p>When your pad is irritating, everything feels irritating. And with cramps, bloating and nausea already in the mix, your pad shouldn't be one more thing to deal with.</p>
          <p>That's why we created Heyday Care's Complete Comfort Sanitary Pads, with the promise of Zero Irritation and 4-way Comfort.</p>
          <p>Here's why 15 lakh+ women love and trust our rash-free pads:</p>
          <ul className="space-y-2 list-disc pl-5">
            <li><strong>Super Soft & Breathable Top Layer:</strong> So you never have to deal with rashes, itchiness, or irritation on your period</li>
            <li><strong>50% Wider Back & Anti-Stain Wings:</strong> To ensure zero leak worries</li>
            <li><strong>Ultra-Thin & Super-Absorbent Design:</strong> For seamless coverage that feels invisible</li>
            <li><strong>100% Toxic-free Materials:</strong> Made without fragrances, dyes, phthalates, and other harmful chemicals, so they're safe for your skin</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Why Choose Our Auto-Repeat Plan",
    body: () => (
      <div className="grid md:grid-cols-2 gap-8 items-start">
        <img src={subImg} alt="Subscription" width={1024} height={768} loading="lazy" className="rounded-lg w-full" />
        <div className="space-y-3 text-[15px]">
          <p>Periods are stressful! And the Heyday Care Subscription Plan is designed to take that stress away.</p>
          <p className="font-semibold">Here's how:</p>
          <p><strong>Zero Compromise:</strong> Customise your pack to ensure you receive your desired quantity of the sizes you need.</p>
          <p><strong>Zero Planning:</strong> Choose your preferred delivery frequency & never stress about restocking.</p>
          <p><strong>Zero Commitment:</strong> Modify/Pause/Cancel your plan anytime.</p>
          <p><strong>Zero Worries:</strong> Never run out of sanitary pads again.</p>
        </div>
      </div>
    ),
  },
  { title: "How are Heyday Care's Complete Comfort Sanitary Pads better for me?", body: () => <p>Our pads use a dermatologically-tested top sheet, 50% wider back, and 100% toxic-free materials — a combination most mass-market brands don't offer.</p> },
  { title: "Why Heyday Care", body: () => <p>15 lakh+ women trust Heyday Care for safer periods. Toxic-free, rash-free, leak-free comfort designed by women, for women.</p> },
  { title: "Product Information", body: () => <p>Each pack contains 12 pads (assorted sizes). Made in India. Store in a cool, dry place. Dispose responsibly using included covers.</p> },
  {
    title: "Disclaimer",
    body: () => (
      <div className="space-y-3 text-[15px]">
        <p>*Based on dermatological evaluation conducted by ISO 9001 lab in 2025, tested for skin irritation. Results may vary based on sensitivity or any other pre-existing skin condition.</p>
        <p>Based on lab tests conducted as per ISO 14389 in 2023</p>
        <p>#Based on Lagom labs technical data 2025</p>
      </div>
    ),
  },
  {
    title: "FAQs",
    body: () => (
      <div className="space-y-3 text-[15px]">
        <p><strong>How many pads in one pack?</strong> 12 assorted pads.</p>
        <p><strong>Are these toxic-free?</strong> Yes, 100% free from fragrance, dyes and phthalates.</p>
        <p><strong>Can I cancel my subscription?</strong> Anytime, no questions asked.</p>
      </div>
    ),
  },
];

export function AccordionSections() {
  const [open, setOpen] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true, 6: true });
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1100px] mx-auto px-4 lg:px-8">
        <h2 className="text-center font-display text-4xl lg:text-5xl mb-12">
          Take a closer look, <span className="italic-accent">your comfort starts here</span>
        </h2>
        <div className="divide-y divide-border border-y border-border">
          {sections.map((s, i) => (
            <div key={s.title}>
              <button onClick={() => setOpen({ ...open, [i]: !open[i] })} className="w-full flex items-center justify-between py-6 text-left">
                <span className="text-lg font-semibold">{s.title}</span>
                {open[i] ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {open[i] && <div className="pb-8 text-[15px] leading-relaxed">{s.body()}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
