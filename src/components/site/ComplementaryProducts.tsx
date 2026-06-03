import { ChevronRight, ChevronLeft } from "lucide-react";
import { useRef } from "react";
import { cart } from "@/lib/cart-store";
import padMain from "@/assets/pad-main.jpg";
import padThin from "@/assets/pad-thin.jpg";
import padWrapped from "@/assets/pad-wrapped.jpg";
import subImg from "@/assets/subscription.jpg";

const products = [
  { id: "night-xxxl", name: "All Night Comfort Pads", subtitle: "XXXL | Essentials Pack", mrp: 649, price: 489, off: "25% off", rating: 4.4, badge: "18 pads", img: padMain },
  { id: "night-xxl", name: "All Night Comfort Pads", subtitle: "XXL | Essentials Pack", mrp: 469, price: 349, off: "26% off", rating: 4.5, badge: "30 pads", img: padThin, tag: "XXL Super Saver" },
  { id: "liners-long", name: "Everyday Comfort Panty Liners - Long", subtitle: "", mrp: 240, price: 240, off: "", rating: 4.3, badge: "40 liners", img: padWrapped },
  { id: "tampons", name: "Regular Flow Tampons", subtitle: "Applicator-free", mrp: 320, price: 249, off: "22% off", rating: 4.6, badge: "16 tampons", img: subImg },
  { id: "cup", name: "Reusable Menstrual Cup", subtitle: "Medium", mrp: 599, price: 449, off: "25% off", rating: 4.7, badge: "1 cup", img: padMain },
];

export function ComplementaryProducts() {
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => scroller.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="bg-mint/60 rounded-2xl px-6 py-5 flex items-center gap-4 mb-16">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-coral leading-tight text-center">Heyday Care<br/>CLUB</div>
          <p className="flex-1 text-lg">
            You're <span className="font-semibold">₹1000 away</span> <span className="italic-accent">from Silver!</span> Shop to <span className="font-semibold">unlock 5% off on every order</span>
          </p>
          <button className="w-10 h-10 rounded-md bg-white/70 flex items-center justify-center"><ChevronRight className="w-5 h-5" /></button>
        </div>

        <h2 className="text-center font-display text-4xl lg:text-5xl mb-10">
          To make your care <span className="italic-accent">feel complete</span>
        </h2>

        <div className="relative">
          <button onClick={() => scroll(-1)} className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center shadow hidden md:flex"><ChevronLeft className="w-5 h-5" /></button>
          <button onClick={() => scroll(1)} className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full border border-border bg-white flex items-center justify-center shadow hidden md:flex"><ChevronRight className="w-5 h-5" /></button>

          <div ref={scroller} className="flex gap-5 overflow-x-auto snap-x pb-4 scroll-smooth" style={{ scrollbarWidth: "none" }}>
            {products.map((p) => (
              <div key={p.id} className="min-w-[340px] flex-shrink-0 snap-start border border-border rounded-xl p-3 flex gap-3">
                <div className="relative w-32 h-36 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  {p.off && <span className="absolute top-2 left-2 z-10 bg-emerald-700 text-white text-[10px] px-2 py-1 rounded">{p.off}</span>}
                  {p.tag && <span className="absolute top-2 right-2 z-10 bg-white text-[9px] px-1.5 py-0.5 rounded font-semibold">{p.tag}</span>}
                  <img src={p.img} alt={p.name} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-yellow-400 text-white px-1.5 py-0.5 rounded">★ {p.rating}</span>
                    <span className="text-muted-foreground">{p.badge}</span>
                  </div>
                  <p className="text-sm font-medium mt-2 leading-snug">{p.name}</p>
                  {p.subtitle && <p className="text-xs text-muted-foreground">{p.subtitle}</p>}
                  <div className="mt-auto pt-2">
                    {p.off ? (
                      <div className="text-sm mb-2"><span className="line-through text-muted-foreground">₹{p.mrp}</span> <span className="font-semibold">₹{p.price}</span></div>
                    ) : (
                      <div className="text-sm mb-2 font-semibold">₹{p.price}</div>
                    )}
                    <button onClick={() => cart.add({ id: p.id, name: p.name, variant: p.subtitle, price: p.price })} className="w-full bg-foreground text-background text-xs font-semibold py-2.5 rounded-full hover:opacity-90">ADD TO CART</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
