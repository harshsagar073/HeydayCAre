import { X, Plus, Minus } from "lucide-react";
import { useCart, cart, getCartState } from "@/lib/cart-store";

export function CartDrawer() {
  useCart();
  const { items, isOpen } = getCartState();
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);

  return (
    <>
      <div className={`fixed inset-0 bg-black/40 z-50 transition-opacity ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`} onClick={() => cart.close()} />
      <aside className={`fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-background z-50 shadow-2xl flex flex-col transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <h3 className="font-display text-xl">Your Cart ({items.length})</h3>
          <button onClick={() => cart.close()}><X className="w-5 h-5" /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 && <p className="text-center text-muted-foreground py-12">Your cart is empty</p>}
          {items.map((i) => (
            <div key={`${i.id}-${i.variant}`} className="flex gap-3 border-b border-border pb-4">
              <div className="w-20 h-20 bg-coral rounded-md flex items-center justify-center text-white font-display italic text-lg">heyday Care</div>
              <div className="flex-1">
                <p className="text-sm font-medium leading-tight">{i.name}</p>
                {i.variant && <p className="text-xs text-muted-foreground mt-1">{i.variant}</p>}
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center border border-border rounded-full">
                    <button onClick={() => cart.setQty(i.id, i.variant, i.qty - 1)} className="p-1.5"><Minus className="w-3 h-3" /></button>
                    <span className="text-sm px-2">{i.qty}</span>
                    <button onClick={() => cart.setQty(i.id, i.variant, i.qty + 1)} className="p-1.5"><Plus className="w-3 h-3" /></button>
                  </div>
                  <span className="font-semibold text-sm">₹{i.price * i.qty}</span>
                </div>
                <button onClick={() => cart.remove(i.id, i.variant)} className="text-xs text-muted-foreground hover:text-coral mt-2">Remove</button>
              </div>
            </div>
          ))}
        </div>

        {items.length > 0 && (
          <div className="border-t border-border p-5 space-y-3">
            <div className="flex justify-between text-sm"><span>Subtotal</span><span className="font-semibold">₹{subtotal}</span></div>
            <p className="text-xs text-muted-foreground">Shipping and taxes calculated at checkout</p>
            <button className="w-full bg-foreground text-background py-3.5 rounded-full font-semibold">CHECKOUT</button>
          </div>
        )}
      </aside>
    </>
  );
}
