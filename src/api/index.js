import { useMutation, useQuery } from "@tanstack/react-query";
import { queryClient } from "./queryClient";
import {
  addToWishList,
  fetchCategories,
  fetchRelatedProducts,
  removeFromWishList,
  searchProducts,
  sendOrderEmail,
  signup,
} from "../axios/requests";
import { fetchFilters } from "../axios/requests";
import { fetchProducts } from "../axios/requests";
import { serverHealthStatus } from "../axios/requests";
import { fetchWishList } from "../axios/requests";
import { login } from "../axios/requests";
import { getCurrentUser } from "../axios/requests";
import { logout } from "../axios/requests";
import { fetchSingleProduct } from "../axios/requests";

const LONG_CACHE_OPTIONS = {
  staleTime: 1000 * 60 * 30,
  gcTime: 1000 * 60 * 30,
};

export const useCategories = (queryOptions = {}) => {
  return useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
    ...LONG_CACHE_OPTIONS,
    ...queryOptions,
  });
};

export const useFilters = (query = {}, queryOptions = {}) => {
  return useQuery({
    queryKey: ["filters", query],
    queryFn: fetchFilters,
    ...LONG_CACHE_OPTIONS,
    ...queryOptions,
  });
};

export const useProducts = (
  { categoryId, filters = {} } = {},
  queryOptions = {},
) => {
  return useQuery({
    queryKey: categoryId
      ? ["products", filters, "category", categoryId]
      : ["products", filters, "all"],
    queryFn: fetchProducts,
    initialData: () => {
      const isPaginationOnly =
        Object.keys(filters).length === 2 &&
        "page" in filters &&
        "limit" in filters;
      if (!categoryId && isPaginationOnly && filters.page === 1) {
        const cachedProducts = queryClient.getQueryData([
          "products",
          {},
          "all",
        ]);
        return cachedProducts || undefined;
      }
    },
    ...LONG_CACHE_OPTIONS,
    ...queryOptions,
  });
};

export const useSingleProduct = (productId, queryOptions = {}) => {
  return useQuery({
    queryKey: ["singleProduct", productId],
    queryFn: fetchSingleProduct,
    ...LONG_CACHE_OPTIONS,
    ...queryOptions,
  });
};

export const useRelatedProduct = (query = {}, queryOptions = {}) => {
  return useQuery({
    queryKey: ["relatedProducts", query],
    queryFn: fetchRelatedProducts,
    ...LONG_CACHE_OPTIONS,
    ...queryOptions,
  });
};

export const useServerCheckStatus = (queryOptions = {}) => {
  const serverStatus = queryClient.getQueryData(["serverStatus"]);
  return useQuery({
    queryKey: ["serverStatus"],
    queryFn: serverHealthStatus,
    ...LONG_CACHE_OPTIONS,
    refetchInterval: 1000 * 60 * 10,
    retry: false,
    refetchOnWindowFocus: !serverStatus,
    ...queryOptions,
  });
};

export const useWishList = (queryOptions = {}) => {
  const currentUser = queryClient.getQueryData(["currentUser"]);
  return useQuery({
    queryKey: ["wishList"],
    queryFn: fetchWishList,
    enabled: !!currentUser,
    ...LONG_CACHE_OPTIONS,
    ...queryOptions,
  });
};

export const useWishListMutation = (queryOptions = {}) => {
  return useMutation({
    mutationFn: ({ product, wasInWishlist }) => {
      return wasInWishlist
        ? removeFromWishList(product._id)
        : addToWishList(product._id);
    },
    onMutate: ({ product, wasInWishlist }) => {
      queryClient.cancelQueries(["wishList"]);
      const previousWishList = queryClient.getQueryData(["wishList"]) || [];
      queryClient.setQueryData(["wishList"], (oldWishList = []) => {
        wasInWishlist
          ? oldWishList.filter(({ _id }) => _id !== product._id)
          : [...oldWishList, product];
      });
      return { previousWishList };
    },
    onError: (error, product, context) => {
      if (context?.previousWishList) {
        queryClient.setQueryData(["wishList"], context.previousWishList);
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishList"],
        exact: true,
      });
    },
    ...queryOptions,
  });
};

export const useLoginMutation = (queryOptions = {}) => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      queryClient.setQueryData(["currentUser"], data);
    },
    ...queryOptions,
  });
};

export const useLogoutMutation = (queryOptions = {}) => {
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries(["currentUser"]);
      queryClient.removeQueries(["wishList"]);
    },
    ...queryOptions,
  });
};

export const useSignupMutation = (queryOptions = {}) => {
  return useMutation({
    mutationFn: signup,
    ...queryOptions,
  });
};

export const useGetCurrentUser = (queryOptions = {}) => {
  const cachedUser = queryClient.getQueryData(["currentUser"]);
  return useQuery({
    queryKey: ["currentUser"],
    queryFn: getCurrentUser,
    ...LONG_CACHE_OPTIONS,
    retry: false,    
    enabled: queryOptions?.ifUser ? !!cachedUser : true,
    ...queryOptions,
  });
};

export const useSendOrderEmailMutation = (queryOptions = {}) => {
  return useMutation({
    mutationFn: sendOrderEmail,
    ...queryOptions,
  });
}

export const useSearch = (searchQuery = "", queryOptions = {}) => {
  return useQuery({
    queryKey: ["search", searchQuery],
    queryFn: searchProducts,
    ...LONG_CACHE_OPTIONS,
    ...queryOptions,
  });
};
