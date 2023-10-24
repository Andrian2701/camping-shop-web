const mobileMenu = {
  menu: false,
};

export const OPEN_MOBILE_MENU = "OPEN_MOBILE_MENU";
export const CLOSE_MOBILE_MENU = "CLOSE_MOBILE_MENU";

export const mobileMenuReducer = (state = mobileMenu, action) => {
  switch (action.type) {
    case OPEN_MOBILE_MENU:
      return { ...state, menu: true };
    case CLOSE_MOBILE_MENU:
      return { ...state, menu: false };
    default:
      return state;
  }
};

export const openMobMenuAction = () => ({
  type: OPEN_MOBILE_MENU,
});

export const closeMobMenuAction = () => ({
  type: CLOSE_MOBILE_MENU,
});
