import { updateSize } from "./productSlice";

export const updateSizeToLS = (selection) => {
  return (dispatch) => {
    if (selection) {
      // if 'selection' available update sessionStorage and then update the store
      sessionStorage.setItem("sizeSel", selection);
    } else {
      // if 'selection' is not present check sessionStorage for 'selection' and update the store with same other wise update empty
      const sS = sessionStorage.getItem("sizeSel");
      selection = sS ? sS : "";
    }
    dispatch(updateSize(selection));
  };
};
