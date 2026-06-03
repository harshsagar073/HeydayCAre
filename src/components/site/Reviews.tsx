import { Star } from "lucide-react";

const reviews = [
  { name: "Ritu Chopra", color: "bg-rose-200", text: "It's a revolution in the pads industry. Best product I have used so far." },
  { name: "Saltanat Iqbal", color: "bg-amber-200", text: "I have extremely sensitive skin but after moving to Heyday Care, I've never had rashes or itchiness. It doesn't feel like I'm wearing a pad at all!" },
  { name: "Sushmita P Mishra", color: "bg-emerald-200", text: "I've been using Heyday Care for more than a year and love it. I can easily dispose of my pad anywhere and don't have to worry about leakage while sleeping." },
  { name: "Debalina Gupta", color: "bg-sky-200", text: "Heyday Care made me realise the comfort I deserve during my periods. The pads are comfortable, the disposal is super easy and it's easy to carry while travelling." },
];

export function Reviews() {
  return (
    <section className="bg-mint relative">
      <div className="absolute top-0 left-0 right-0 h-16 bg-background" style={{ clipPath: "ellipse(70% 100% at 50% 0%)" }} />
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 pt-28 pb-28">
        <h2 className="text-center font-display text-4xl lg:text-5xl mb-12">
          Customer <span className="italic-accent">reviews</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, i) => (
            <div key={r.name} className={`${i > 0 ? "lg:border-l border-foreground/10 lg:pl-8" : ""}`}>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-full ${r.color}`} />
                <div>
                  <p className="font-semibold text-sm">{r.name}</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map((s) => <Star key={s} className="w-3 h-3 fill-yellow-500 text-yellow-500" />)}
                  </div>
                </div>
              </div>
              <p className="text-[15px] leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SeoText() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-[1100px] mx-auto px-4 lg:px-8 space-y-8 text-[15px] leading-relaxed">
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop online for the Best Sanitary Pads in India</h3>
          <p>Every woman's period is unique, but there's one thing that's common — periods can be quite challenging to deal with. From cramps, to rashes, to mood swings — the list of issues and challenges is endless. On top of all this, dealing with a damp and itchy pad can make things so much worse. Which is why, selecting the right pad for your needs is very important — ideally, you need to opt for an ultra-thin pad that is free from chemicals and fragrances, rash-free, and prevents leakage. With all these features and more to offer, Heyday Care's Complete Comfort Sanitary Pads are here to help you manage your periods with ease!</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Why do I need to use a Sanitary Pad?</h3>
          <p>From the creation of the very first sanitary napkin to the present day, menstrual care products have seen immense development over the years. Through consistent innovation and frequent upgrades, we now have access to menstrual pads in various shapes and sizes, for every type of flow you might experience. Thanks to the availability of maxi period pads, ultra-thin pads, XXL overnight pads, rash-free pads, and even rapid-absorbency pads, you have more options available than you could ever have imagined. With Heyday Care's best sanitary pads offering all these features and more, you can rest assured that your menstrual cycle will be taken care of, no matter what it looks like.</p>
          <button className="text-coral font-medium mt-2">Read More</button>
        </div>
      </div>
    </section>
  );
}
