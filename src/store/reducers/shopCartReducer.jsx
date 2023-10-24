const shopCart = {
  cart: false,
};

export const OPEN_SHOP_CART = "OPEN_SHOP_CART";
export const CLOSE_SHOP_CART = "CLOSE_SHOP_CART";

export const shopCartReducer = (state = shopCart, action) => {
  switch (action.type) {
    case OPEN_SHOP_CART:
      return { ...state, cart: true };
    case CLOSE_SHOP_CART:
      return { ...state, cart: false };
    default:
      return state;
  }
};

export const openShopCartAction = () => ({
  type: OPEN_SHOP_CART,
});

export const closeShopCartAction = () => ({
  type: CLOSE_SHOP_CART,
});
