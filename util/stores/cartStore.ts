import { create } from "zustand";

interface CartState {
  cartData: string;
  setCartData: (value: string) => void;
}

const useCartStore = create<CartState>((set) => ({
  cartData: "",
  setCartData: (value) => set({ cartData: value }),
}));

export default useCartStore;