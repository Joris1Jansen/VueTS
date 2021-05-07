import { Module, Mutation, MutationTree, Action, ActionTree } from "vuex";

export interface isLoadingState {
  loadingStatus: boolean;
}

export interface isLoadingMutations extends MutationTree<isLoadingState> {
  setLoading: Mutation<isLoadingState>;
}

export interface isLoadingActions
  extends ActionTree<isLoadingState, RootStore> {
  setLoading: Action<isLoadingState, RootStore>;
}

export interface RootStore {
  isLoading: Module<isLoadingState, RootStore> & isLoadingState;
}
