import { Module } from "vuex";
import {
  isLoadingActions,
  isLoadingMutations,
  isLoadingState,
  RootStore,
} from "../../interfaces/store";

const state: isLoadingState = {
  loadingStatus: false,
};

const mutations: isLoadingMutations = {
  setLoading(state) {
    state.loadingStatus = !state.loadingStatus;
  },
};

const actions: isLoadingActions = {
  setLoading(context) {
    context.commit("setLoading");
  },
};

const module: Module<isLoadingState, RootStore> = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default module;
