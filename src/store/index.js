import { create } from "zustand";

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

