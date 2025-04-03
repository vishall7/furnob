import axiosInstance from "./config";

export const fetchProducts = async ({ queryKey }) => {
  try {
    console.log("fetchProducts");
    const [_key, filters, _, categoryId] = queryKey;
    const { page, limit, ...withoutPageAndLimit } = filters;
    const filterObj = Object.fromEntries(
      Object.entries(withoutPageAndLimit).map(([key, value]) => [
        key,
        Object.keys(value),
      ]),
    );
    const params = new URLSearchParams({
      page,
      limit,
      ...filterObj,
    }).toString();
    const url = categoryId ? `/product/category/${categoryId}` : `/product`;
    const response = await axiosInstance.get(`${url}?${params}`);
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchSingleProduct = async ({ queryKey }) => {
  try {
    console.log("fetchSingleProduct");
    const [_key, productId] = queryKey;
    const response = await axiosInstance.get(`/product/${productId}`);
    return response;
  } catch (err) {
    throw err;
  }
}

export const fetchRelatedProducts = async ({ queryKey }) => {
  try {
    console.log("fetchRelatedProducts");
    const [_key, matchQuery] = queryKey;
    const matchCriteria = new URLSearchParams(matchQuery).toString();
    console.log(matchCriteria)
    const response = await axiosInstance.get(`/product/related?${matchCriteria}`);
    return response;
  } catch (err) {
    throw err;
  }
}

export const fetchFilters = async ({ queryKey }) => {
  try {
    console.log("fetchFilters");
    const [_key, query] = queryKey;
    const params = new URLSearchParams(query).toString();
    const response = await axiosInstance.get(`/product/filter?${params}`);
    return response;
  } catch (err) {
    throw err;
  }
};

export const fetchCategories = async () => {
  try {
    console.log("fetchCategories");
    const response = await axiosInstance.get("/category");
    return response;
  } catch (error) {
    throw error;
  }
};

export const serverHealthStatus = async () => {
  try {
    console.log("serverHealthStatus");
    const response = await axiosInstance.get("/health");
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchWishList = async () => {
  try {
    console.log("fetchWishList");
    const response = await axiosInstance.get("/wishlist");
    return response;
  } catch (error) {
    throw error;
  }
};

export const addToWishList = async (productId) => {
  try {
    console.log("addToWishList");
    const response = await axiosInstance.post("/wishlist", {productId});
    return response
  } catch (error) {
    throw error;
  }
};

export const removeFromWishList = async (productId) => {
  try {
    console.log("removeFromWishList");
    const response = await axiosInstance.delete(`/wishlist/${productId}`);
    return response
  } catch (error) {
    throw error;
  }
}

export const signup = async (userData) => {
  try {
    console.log("signup");
    const response = await axiosInstance.post("/user/signup", userData);
    return response;
  } catch (error) {
    throw error;
  }
};

export const login = async (userData) => {
  try {
    console.log("login");
    const response = await axiosInstance.post("/user/login", userData, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    console.log("logout");
    const response = await axiosInstance.post("/user/logout");
    return response;
  } catch (error) {
    throw error;
  }
};

export const getCurrentUser = async () => {
  try {
    console.log("request user");
    const response = await axiosInstance.get("/user/current");
    console.log(response)
    return response;
  } catch (error) {
    throw error;
  }
};

export const sendOrderEmail = async (data) => {
  try {
    console.log("sendOrderEmail");
    const response = await axiosInstance.post("/user/order", {order: data}, {
      withCredentials: true,
    });
    return response;
  } catch (error) {
    throw error;
  }
}

export const searchProducts = async ({queryKey}) => {
  try {
    console.log("searchProducts");
    const [_key, query] = queryKey;
    const response = await axiosInstance.get(`/product/search?query=${query}`);
    return response;
  } catch (error) {
    throw error;
  }
}
