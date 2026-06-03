import { Instagram, Facebook, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

const links = ["FAQS", "WHY HEYDAY CARE", "TERMS AND CONDITIONS", "RETURNS AND CANCELLATION POLICY", "CONTACT US", "PRIVACY POLICY", "SHIPPING POLICY"];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8 py-16 grid md:grid-cols-3 gap-12">
        <div>
          <div className="font-display text-4xl italic text-coral mb-6">heyday care<span className="text-base align-super">®</span></div>
          <div className="flex gap-4 text-foreground">
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Helpful Links</h3>
          <ul className="space-y-0">
            {links.map((l) => (
              <li key={l} className="border-b border-border">
                <a href="#" className="flex items-center justify-between py-3.5 text-sm hover:text-coral">
                  {l} <ArrowUpRight className="w-4 h-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <p>For customer support:</p>
            <a href="mailto:care@heydaycare.com" className="underline block">care@heydaycare.com</a>
            <p>For business and collaboration queries:</p>
            <a href="mailto:partnerships@heydaycare.com" className="underline block">partnerships@heydaycare.com</a>
            <p>For general queries:</p>
            <a href="mailto:service@heydaycare.com" className="underline block">service@heydaycare.com</a>
            <p className="pt-4">+91-80-470-93-155</p>
          </div>
        </div>
      </div>

      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Heyday Care. All rights reserved.
      </div>
    </footer>
  );
}
