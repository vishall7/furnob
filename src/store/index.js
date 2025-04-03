import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useDropdownStore = create((set) => ({
  openCategory: null, // Store the currently open category

  setOpenCategory: (categoryId) =>
    set((state) => ({
      openCategory: state.openCategory === categoryId ? null : categoryId,
    })),
}));

export const useOpenFilterStore = create((set) => ({
  openFilter: false,
  setOpenFilter: () =>
    set((state) => ({
      openFilter: !state.openFilter,
    })),
}));

export const usePaginationStore = create((set) => ({
  pageIndexes: {},
  setCurrentPageIndex: (categoryId, index) =>
    set((state) => ({
      pageIndexes: {
        ...state.pageIndexes,
        [categoryId || "shop"]: index || 0,
      },
    })),
}));

export const useFilterStore = create((set) => ({
  filters: {},
  toggleFilters: (categoryId, filterType, { id, name }) =>
    set((state) => {
      const existedFilters = state.filters[categoryId] || {}; // of a category or shop
      const currentFilters = existedFilters[filterType] || {}; // of a filter type
      let updatedFilters = { ...currentFilters };
      if (filterType === "sort") {
        updatedFilters = { [id]: name };
      } else {
        if (updatedFilters[id]) {
          delete updatedFilters[id];
        } else {
          updatedFilters[id] = name;
        }
      }
      return {
        filters: {
          ...state.filters,
          [categoryId]: {
            ...existedFilters,
            [filterType]: updatedFilters,
          },
        },
      };
    }),
}));

export const useOpenCartDrawerStore = create((set) => ({
  openCartDrawer: false,
  setOpenCartDrawer: () =>
    set((state) => ({
      openCartDrawer: !state.openCartDrawer,
    })),
}));

export const useCartStore = create(
  persist(
    (set) => ({
      cart: [],
      shippingPrice: 0,

      addToCart: (product) =>
        set((state) => ({
          cart: [...state.cart, product],
          shippingPrice: Math.max(0, state.shippingPrice += product.discountedPrice),
        })),

      removeFromCart: (product) =>
        set((state) => ({
          cart: state.cart.filter((item) => item._id !== product._id),
          shippingPrice: Math.max(0, state.shippingPrice -= product.discountedPrice),
        })),

      increaseQuantity: (product) =>
        set((state) => {
          const updatedCart = state.cart.map((item) => {
            if (item._id === product._id) {
              return { ...item, quantity: Math.max(1, item.quantity + 1) };
            }
            return item;
          });
          return {
            cart: updatedCart,
            shippingPrice: Math.max(0, state.shippingPrice + product.discountedPrice),
          }
        }),

      decreaseQuantity: (product) =>
        set((state) => {
          const updatedCart = state.cart.map((item) => {
            if (item._id === product._id) {
              return { ...item, quantity: Math.max(1, item.quantity - 1) };
            }
            return item;
          });
          return {
            cart: updatedCart,
            shippingPrice: Math.max(0, state.shippingPrice - product.discountedPrice),
          }
        }),

      clearCart: () => set({ cart: [], shippingPrice: 0 }),
    }),
    {
      name: "cart-storage",
      getStorage: () => localStorage,
    }
  )
);


export const useSearchBoxOpenStore = create((set) => ({
  openSearchBox: false,
  setOpenSearchBox: () =>
    set((state) => ({
      openSearchBox: !state.openSearchBox,
    })),
})) 
