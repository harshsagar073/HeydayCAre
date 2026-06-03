import { useState } from "react";
import { Search, User, ShoppingBag, ChevronDown, Menu, X } from "lucide-react";
import { cart } from "@/lib/cart-store";

const menuData = {
  "Shop All Products": [
    {
      title: "PERIOD CARE - PADS",
      items: ["All Products", "Sanitary Pads", "Sanitary Pads Bulk Packs", "Sanitary Pads Super Saver Pack", "Night Pads", "Night Pads XXL Super Saver", "Day & Night Sanitary Pads", "MyWave Pads"],
    },
    {
      title: "PERIOD CARE - PANTIES, CUPS, TAMPONS",
      items: ["All Products", "Disposable Period Panties", "Tampons", "Menstrual Cups", "Panty Liners"],
    },
    {
      title: "SHOP TEENS",
      items: ["Period Care for Teens", "First Period Starter Kit", "Teen Comfort Pack", "How I got my belly button", "Period Quiz For Teens"],
    },
    {
      title: "SHOP MATERNITY",
      items: ["Maternity Care", "Maternity Pads", "Maternity Panties", "Stretch Marks Oil", "Nipple Butter", "Nursing Pads", "Postpartum Flow Combo", "Nursing Essentials Combo"],
    },
    {
      title: "INTIMATE HYGIENE",
      items: ["Intimate Hygiene Combos", "Panty Liners", "Deodorant Roll-On (Sage)", "Deodorant Roll-On (Rose)", "Intimate Wash", "Intimate Wipes"],
    },
    {
      title: "CRAMPS AND PMS",
      items: ["Cramp Care Combos", "Cramp Comfort Heat Patch", "Cramp Relief Roll-on"],
    },
    {
      title: "SKIN",
      items: ["All Skin", "Sheet Mask", "Pimple Patch", "Nose Strips", "Ultimate Skin Care Duo"],
    },
    {
      title: "COMBOS AND EXTRAS",
      items: ["Heyday Care Single Store", "All Combos", "Build Your Own Box", "Maternity", "Day & Night Combo", "Family Packs", "Disposal Covers", "Summer Tote Bag"],
    },
  ],
  "Period Care": [
    { title: "PADS", items: ["Sanitary Pads", "Night Pads", "Maternity Pads"] },
    { title: "ALTERNATIVES", items: ["Menstrual Cups", "Tampons", "Period Panties"] },
  ],
  "Shop by Needs": [
    { title: "BY FLOW", items: ["Light Flow", "Medium Flow", "Heavy Flow"] },
    { title: "BY CONCERN", items: ["Rash Free", "Leak Proof", "Toxic Free"] },
  ],
  "Heyday Care Exclusives": [
    { title: "EXCLUSIVE", items: ["Comfort Club", "Build Your Own Box", "Subscription Plan"] },
  ],
} as const;

type MenuKey = keyof typeof menuData;

export function Header() {
  const [openMenu, setOpenMenu] = useState<MenuKey | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems: (MenuKey | "Blog" | "About Heyday Care" | "My Heyday Care Plan")[] = [
    "Shop All Products", "Period Care", "Shop by Needs", "Heyday Care Exclusives", "Blog", "About Heyday Care", "My Heyday Care Plan",
  ];

  return (
    <header className="sticky top-0 z-40 bg-coral text-coral-foreground" onMouseLeave={() => setOpenMenu(null)}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="font-display text-3xl font-bold tracking-tight italic">Heyday Care</a>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navItems.map((label) => {
            const hasMenu = label in menuData;
            return (
              <button
                key={label}
                onMouseEnter={() => setOpenMenu(hasMenu ? (label as MenuKey) : null)}
                className="flex items-center gap-1 py-5 hover:opacity-80 relative"
              >
                {label}
                {hasMenu && <ChevronDown className="w-3.5 h-3.5" />}
                {openMenu === label && hasMenu && <span className="absolute bottom-3 left-0 right-0 h-px bg-coral-foreground" />}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <button aria-label="Search" className="hidden sm:block hover:opacity-80"><Search className="w-5 h-5" /></button>
          <button aria-label="Account" className="hidden sm:block hover:opacity-80"><User className="w-5 h-5" /></button>
          <button aria-label="Cart" onClick={() => cart.open()} className="hover:opacity-80"><ShoppingBag className="w-5 h-5" /></button>
          <button aria-label="Menu" className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {openMenu && menuData[openMenu] && (
        <div className="absolute left-0 right-0 top-full bg-background text-foreground shadow-2xl border-t border-border hidden lg:block">
          <div className="max-w-[1400px] mx-auto px-8 py-10 grid grid-cols-4 gap-x-8 gap-y-10">
            {menuData[openMenu].map((col) => (
              <div key={col.title}>
                <h3 className="text-sm font-semibold text-coral mb-4 tracking-wide">{col.title}</h3>
                <ul className="space-y-2.5">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[15px] text-foreground hover:text-coral transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {mobileOpen && (
        <div className="lg:hidden bg-coral border-t border-coral-foreground/20 px-4 py-4 space-y-3">
          {navItems.map((l) => (
            <a key={l} href="#" className="block py-2 text-sm">{l}</a>
          ))}
        </div>
      )}
    </header>
  );
}
