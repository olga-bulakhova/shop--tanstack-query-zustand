import type { Product } from '@/features/products/types/products.types';
import type { ICartItem, ICartResponse } from '../types/cart.types';
import { create, type StateCreator } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { useShallow } from 'zustand/shallow';

interface IInitialCartState {
  cart: ICartItem[];
}

interface ICartActions {
  addProduct: (product: Product) => void;
  removeProduct: (productId: number) => void;
  incrementQuantity: (productId: number) => void;
  decrementQuantity: (productId: number) => void;
  clear: () => void;
}

interface ICartState extends IInitialCartState, ICartActions {}

const initialState: IInitialCartState = {
  cart: [],
};

const cartStore: StateCreator<
  ICartState,
  [['zustand/devtools', never], ['zustand/persist', unknown]]
> = (set) => ({
  ...initialState,

  addProduct: (product) =>
    set(
      (state) => {
        const exists = state.cart.find((item) => item.id === product.id);

        if (exists) {
          return {
            cart: state.cart.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            ),
          };
        }

        return {
          cart: [
            ...state.cart,
            {
              id: product.id,
              title: product.title,
              price: product.price,
              quantity: 1,
              total: product.price,
              thumbnail: product.thumbnail,
            },
          ],
        };
      },
      false,
      'cart/addProduct',
    ),

  removeProduct: (productId) =>
    set(
      (state) => ({
        cart: state.cart.filter((item) => item.id !== productId),
      }),
      false,
      'cart/removeProduct',
    ),

  incrementQuantity: (productId) =>
    set(
      (state) => ({
        cart: state.cart.map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      }),
      false,
      'cart/incrementQuantity',
    ),

  decrementQuantity: (productId) =>
    set(
      (state) => {
        const item = state.cart.find((item) => item.id === productId);

        if (!item) return { cart: state.cart };

        if (item.quantity <= 1) {
          return { cart: state.cart.filter((i) => i.id !== productId) };
        }

        return {
          cart: state.cart.map((i) =>
            i.id === productId ? { ...i, quantity: i.quantity - 1 } : i,
          ),
        };
      },
      false,
      'cart/decrementQuantity',
    ),

  clear: () => set({ cart: [] }, false, 'cart/clear'),
});

const useCartStore = create<ICartState>()(
  devtools(
    persist(cartStore, {
      name: 'shopping-cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ cart: state.cart }),
    }),
  ),
);

export const useCartList = () => useCartStore((state) => state.cart);

export const useCartMetrics = (): ICartResponse => {
  return useCartStore(
    useShallow((state) => {
      let total = 0;
      let totalQuantity = 0;

      state.cart.forEach((item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 0;
        total += price * quantity;
        totalQuantity += quantity;
      });

      return {
        total: Number(total.toFixed(2)) || 0,
        totalProducts: state.cart.length || 0,
        totalQuantity: totalQuantity || 0,
      };
    }),
  );
};

export const cartActions = {
  addProduct: (product: Product) => useCartStore.getState().addProduct(product),
  removeProduct: (productId: number) =>
    useCartStore.getState().removeProduct(productId),
  incrementQuantity: (productId: number) =>
    useCartStore.getState().incrementQuantity(productId),
  decrementQuantity: (productId: number) =>
    useCartStore.getState().decrementQuantity(productId),
  clear: () => useCartStore.getState().clear(),
};
