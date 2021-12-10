import { Module, MutationTree, GetterTree } from 'vuex';
import { RootState } from '../types';
import { SnackBarSate } from './types';


const mutations: MutationTree<SnackBarSate> = {
  setSnackBarMessage(state: SnackBarSate, message: any) {
    state.snackbarType = message.type;
    state.snackbarMessage = message.message;
  },
};

export const state: SnackBarState = {
  snackbarMessage: '',
  snackbarType: '',
};

export const snackbar: Module<SnackBarSate, RootState> = {
  namespaced: true,
  state,
  mutations,
};
