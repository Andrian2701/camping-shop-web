import { createStore, combineReducers } from "redux";
import { mobileMenuReducer } from "./reducers/mobileMenuReducer";
import { shopCartReducer } from "./reducers/shopCartReducer";
import { cartProductsReducer } from "./reducers/cartProductsReducer";

const reducers = combineReducers({
  mobMenu: mobileMenuReducer,
  shopCart: shopCartReducer,
  cartProducts: cartProductsReducer,
});

export const store = createStore(reducers);
