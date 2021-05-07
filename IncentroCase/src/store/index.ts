import { createStore } from "vuex";

import isLoading from "./modules/isLoading";

export const store = createStore({
  modules: {
    isLoading,
  },
});

export const useStore = () => {
  return store;
};
