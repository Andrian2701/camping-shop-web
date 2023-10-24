const cartProducts = {
  products: [],
};

export const ADD_PRODUCTS = "ADD_PRODUCTS";
export const ROMOVE_PRODUCTS = "ROMOVE_PRODUCTS";
export const ADD_ONE_ITEM = "ADD_ONE_ITEM";
export const ROMOVE_ONE_ITEM = "ROMOVE_ONE_ITEM";

export const cartProductsReducer = (state = cartProducts, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: [...state.products, ...action.payload] };
    case ROMOVE_PRODUCTS:
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.payload),
      };
    case ADD_ONE_ITEM:
      return { ...state, products: [...state.products, action.payload] };
    case ROMOVE_ONE_ITEM:
      return { ...state, products: [...action.payload] };
    default:
      return state;
  }
};

export const addProductsAction = (payload) => ({
  type: ADD_PRODUCTS,
  payload,
});

export const removeProductsAction = (payload) => ({
  type: ROMOVE_PRODUCTS,
  payload,
});

export const addOneItemAction = (payload) => ({
  type: ADD_ONE_ITEM,
  payload,
});

export const removeOneItemAction = (payload) => ({
  type: ROMOVE_ONE_ITEM,
  payload,
});
