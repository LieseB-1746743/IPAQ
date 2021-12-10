/* eslint no-param-reassign: ["error", { "props": true, "ignorePropertyModificationsFor": ["state"] }] */
import { Module, MutationTree, GetterTree } from 'vuex';
import { RootState } from '../types';
import { LoginState } from './types';

const mutations: MutationTree<LoginState> = {
  auth_request(state:any) {
    state.status = 'loading';
  },
  auth_success(state:any, user:any) {
    state.status = 'success';
    state.token = user.token;
    state.refreshToken = user.refreshToken;
    state.username = user.name;
    state.role = user.role;
    state.authenticated = true;
  },
  auth_error(state:any) {
    state.status = 'error';
  },
  logout(state:any) {
    state.status = '';
    state.token = '';
    state.username = '';
    state.role = '';
    state.authenticated = false;
    state.refreshToken = '';
  },
  auth_refresh(state:any, newtoken) {
    state.token = newtoken;
  },
};

const getters = <GetterTree<LoginState, any>> {
  getRole(state: LoginState): string {
    return state.role;
  },
  getAccesToken(state: LoginState): string {
    return state.token;
  },
  getAuthenticated(state: LoginState): boolean {
    return state.authenticated;
  },
  getRefreshToken(state: LoginState): string {
    return state.refreshToken;
  },
};

export const state: LoginState = {
  status: '',
  token: '',
  refreshToken: '',
  username: '',
  role: '',
  authenticated: false,
};


export const app: Module<LoginState, RootState> = {
  namespaced: true,
  state,
  mutations,
  getters,
};
