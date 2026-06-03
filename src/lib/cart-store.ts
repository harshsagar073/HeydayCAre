import { useSyncExternalStore } from "react";

export type CartItem = {
  id: string;
  name: string;
  variant?: string;
  price: number;
  qty: number;
  image?: string;
};

let items: CartItem[] = [];
let isOpen = false;
const listeners = new Set<() => void>();

function emit() { listeners.forEach((l) => l()); }
function subscribe(l: () => void) { listeners.add(l); return () => listeners.delete(l); }

export const cart = {
  add(item: Omit<CartItem, "qty"> & { qty?: number }) {
    const qty = item.qty ?? 1;
    const existing = items.find((i) => i.id === item.id && i.variant === item.variant);
    if (existing) existing.qty += qty;
    else items = [...items, { ...item, qty }];
    isOpen = true;
    emit();
  },
  remove(id: string, variant?: string) {
    items = items.filter((i) => !(i.id === id && i.variant === variant));
    emit();
  },
  setQty(id: string, variant: string | undefined, qty: number) {
    items = items.map((i) => (i.id === id && i.variant === variant ? { ...i, qty: Math.max(1, qty) } : i));
    emit();
  },
  open() { isOpen = true; emit(); },
  close() { isOpen = false; emit(); },
};

export function useCart() {
  return useSyncExternalStore(
    subscribe,
    () => JSON.stringify({ items, isOpen }),
    () => JSON.stringify({ items: [], isOpen: false }),
  );
}

export function getCartState() { return { items, isOpen }; }
