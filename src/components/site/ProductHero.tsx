import { useState, useEffect } from "react";
import { Check, X, ChevronLeft, ChevronRight, Shield, Heart, MoveHorizontal, ArrowDownToLine, PackageCheck, Star, ChevronDown } from "lucide-react";
import heroPad from "@/assets/hero-pad.jpg";
import padMain from "@/assets/pad-main.jpg";
import padThin from "@/assets/pad-thin.jpg";
import lifestyle from "@/assets/lifestyle.jpg";
import padWrapped from "@/assets/pad-wrapped.jpg";
import { cart } from "@/lib/cart-store";

const sizes = [
  { id: "3xxl-5xl-4l", label: "3 XXL  •  5 XL  •  4 L", dots: ["#e74c3c", "#f5a3b8", "#fce4ec"] },
  { id: "5xxl-7xl", label: "5 XXL  •  7 XL", dots: ["#e74c3c", "#f5a3b8"] },
  { id: "12-xxl", label: "12 XXL", dots: ["#e74c3c"] },
];

const quantities = [
  { id: "1", label: "1 Pack", mrp: 239, price: 199, off: "16% Off" },
  { id: "3", label: "3 Pack", mrp: 717, price: 549, off: "23% Off" },
  { id: "6", label: "6 Pack", mrp: 1434, price: 999, off: "30% Off" },
];

const slides = [
  { bg: "bg-coral", img: padMain, label: "feature" },
  { bg: "bg-[#fce4ec]", img: padThin, label: "ultra-thin" },
  { bg: "bg-white", img: padWrapped, label: "wrapped" },
];

export function ProductHero() {
  const [size, setSize] = useState(sizes[0]);
  const [qty, setQty] = useState(quantities[1]);
  const [orderType, setOrderType] = useState<"once" | "sub">("sub");
  const [frequency, setFrequency] = useState("3 Months");
  const [sizeOpen, setSizeOpen] = useState(false);
  const [qtyOpen, setQtyOpen] = useState(false);
  const [slide, setSlide] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setSlide((prev) => (prev + 1) % slides.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);

  const finalPrice = orderType === "sub" ? qty.price : Math.round(qty.price * 1.09);

  const addToCart = () => {
    cart.add({
      id: `pads-${size.id}-${qty.id}-${orderType}`,
      name: "Complete Comfort Sanitary Pads",
      variant: `${qty.label} • ${size.label}${orderType === "sub" ? ` • Subscribe (${frequency})` : ""}`,
      price: finalPrice,
      image: heroPad,
    });
  };

  return (
    <section className="max-w-[1400px] mx-auto px-4 lg:px-8 py-8 grid lg:grid-cols-2 gap-12">
      {/* Gallery */}
     {/* Gallery */}
<div>
  <div className="grid grid-cols-2 gap-4">
    
    {/* Fixed Image */}
    <div className="aspect-square rounded-lg overflow-hidden border border-border">
      <img
        src={lifestyle}
        alt="Lifestyle"
        className="w-full h-full object-cover"
      />
    </div>

    {/* Slider */}
    <div>
      <div
        className={`relative aspect-square rounded-lg overflow-hidden ${slides[slide].bg} flex items-center justify-center`}
      >
        <img
          src={slides[slide].img}
          alt="Product"
          className="w-full h-full object-cover"
        />

        <button
          onClick={() =>
            setSlide((slide - 1 + slides.length) % slides.length)
          }
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setSlide((slide + 1) % slides.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white shadow flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="flex gap-2 mt-3">
        {slides.map((s, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`relative flex-1 aspect-square rounded-md overflow-hidden ${
              slide === i
                ? "ring-2 ring-coral"
                : "ring-1 ring-border"
            }`}
          >
            <img
              src={s.img}
              alt={`View ${i + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>

  </div>
</div>

      {/* Buy Box */}
      <div>
        <h1 className="font-display text-4xl lg:text-5xl leading-tight">Complete Comfort Sanitary Pads</h1>

        <div className="flex flex-wrap gap-2 mt-5">
          {[
            { icon: <Heart className="w-3.5 h-3.5" />, label: "Softest top sheet" },
            { icon: <Shield className="w-3.5 h-3.5" />, label: "100% toxic-free" },
            { icon: <MoveHorizontal className="w-3.5 h-3.5" />, label: "50% wider back" },
            { icon: <ArrowDownToLine className="w-3.5 h-3.5" />, label: "Ultra-thin" },
            { icon: <PackageCheck className="w-3.5 h-3.5" />, label: "With covers" },
          ].map((b) => (
            <span key={b.label} className="inline-flex items-center gap-1.5 bg-mint text-mint-foreground text-xs px-3 py-1.5 rounded-full">
              {b.icon} {b.label}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-end gap-1 mt-4 text-sm">
          {[1,2,3,4,5].map((i) => <Star key={i} className={`w-4 h-4 ${i<5?"fill-yellow-400 text-yellow-400":"fill-yellow-400/60 text-yellow-400/60"}`} />)}
          <span className="ml-1 underline">4.6/5 (1,514)</span>
        </div>

        <hr className="my-5" />

        {/* Size */}
        <div className="flex items-center justify-between text-sm mb-2">
          <span>Choose your size</span>
          <button className="underline text-sm">Size Guide</button>
        </div>
        <div className="relative">
          <button onClick={() => setSizeOpen(!sizeOpen)} className="w-full flex items-center justify-between border border-border rounded-md px-4 py-3.5 text-left">
            <span className="flex items-center gap-2 text-sm">
              {size.dots.map((d, i) => <span key={i} className="w-3 h-3 rounded-full inline-block" style={{ background: d }} />)}
              <span className="ml-1">{size.label}</span>
            </span>
            <ChevronDown className={`w-4 h-4 transition ${sizeOpen ? "rotate-180" : ""}`} />
          </button>
          {sizeOpen && (
            <div className="absolute z-10 left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg">
              {sizes.map((s) => (
                <button key={s.id} onClick={() => { setSize(s); setSizeOpen(false); }} className="w-full flex items-center gap-2 px-4 py-3 text-sm hover:bg-muted text-left">
                  {s.dots.map((d, i) => <span key={i} className="w-3 h-3 rounded-full" style={{ background: d }} />)}
                  <span className="ml-1">{s.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Quantity */}
        <div className="text-sm mt-5 mb-2">
          Choose your quantity <span className="text-muted-foreground">(1 Pack consists of 12 pads)</span>
        </div>
        <div className="relative">
          <button onClick={() => setQtyOpen(!qtyOpen)} className="w-full flex items-center justify-between border border-border rounded-md px-4 py-3.5 text-left text-sm">
            <span>{qty.label} • MRP <span className="line-through text-muted-foreground">₹{qty.mrp}</span> <span className="font-semibold ml-1">₹{qty.price}</span> <span className="text-success ml-1">({qty.off})</span></span>
            <ChevronDown className={`w-4 h-4 transition ${qtyOpen ? "rotate-180" : ""}`} />
          </button>
          {qtyOpen && (
            <div className="absolute z-10 left-0 right-0 mt-1 bg-card border border-border rounded-md shadow-lg">
              {quantities.map((q) => (
                <button key={q.id} onClick={() => { setQty(q); setQtyOpen(false); }} className="w-full text-left px-4 py-3 text-sm hover:bg-muted">
                  {q.label} • MRP <span className="line-through text-muted-foreground">₹{q.mrp}</span> <span className="font-semibold ml-1">₹{q.price}</span> <span className="text-success ml-1">({q.off})</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <p className="text-xs text-muted-foreground mt-2">MRP inclusive of all taxes</p>

        {/* Order type */}
        <div className="text-sm mt-5 mb-2">Choose your order type</div>
        <label className="flex items-center justify-between border border-border rounded-md px-4 py-3.5 cursor-pointer">
          <span className="flex items-center gap-3 text-sm">
            <input type="radio" name="order" checked={orderType === "once"} onChange={() => setOrderType("once")} className="accent-coral w-4 h-4" />
            Buy once
          </span>
          <span className="text-sm">₹{Math.round(qty.price * 1.09)} <span className="text-success">(9% Off)</span></span>
        </label>

        <div className={`mt-3 border-2 rounded-md overflow-hidden ${orderType === "sub" ? "border-coral" : "border-border"}`}>
          <div className="bg-amber-50 text-amber-900 text-sm px-4 py-2 flex items-center gap-2">
            ⚡ Save 23% each time
          </div>
          <label className="flex items-center justify-between px-4 py-3.5 cursor-pointer bg-mint/30">
            <span className="flex items-center gap-3 text-sm font-medium">
              <input type="radio" name="order" checked={orderType === "sub"} onChange={() => setOrderType("sub")} className="accent-coral w-4 h-4" />
              Subscribe & Save
            </span>
            <span className="text-sm">₹{qty.price} <span className="text-success">(23% Off)</span></span>
          </label>
          {orderType === "sub" && (
            <div className="px-4 pb-4 bg-mint/30">
              <div className="flex items-center justify-between text-sm">
                <span>Delivered & Billed every</span>
                <select value={frequency} onChange={(e) => setFrequency(e.target.value)} className="border border-border rounded-md px-3 py-2 bg-white">
                  <option>1 Month</option><option>2 Months</option><option>3 Months</option><option>6 Months</option>
                </select>
              </div>
              <a href="#" className="text-coral text-sm font-medium mt-3 inline-flex items-center gap-1">How subscription works? →</a>
            </div>
          )}
        </div>

        <button onClick={addToCart} className="mt-6 w-full bg-foreground text-background py-4 rounded-full text-base font-semibold hover:opacity-90 transition">
          ADD TO CART — ₹{finalPrice}
        </button>

        <div className="grid grid-cols-3 gap-3 mt-5 text-xs text-center text-muted-foreground">
          <div className="border border-border rounded-md p-3"><div className="text-2xl mb-1">🚚</div>Free shipping over ₹399</div>
          <div className="border border-border rounded-md p-3"><div className="text-2xl mb-1">🔄</div>Easy returns</div>
          <div className="border border-border rounded-md p-3"><div className="text-2xl mb-1">🌿</div>Toxic-free</div>
        </div>
      </div>
    </section>
  );
}
