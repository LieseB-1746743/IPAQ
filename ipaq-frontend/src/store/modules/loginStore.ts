import { Module, MutationTree, GetterTree } from 'vuex';
import LoginState from "./types";
import { RootState } from '../types';

const mutations: MutationTree<LoginState> = {
   
    setUser(state: any, user:LoginState) {
      state.first_name = user.first_name ;
      state.last_name = user.last_name;
      state.age = user.age;
      state.gender = user.gender;
      state.email = user.email;
      state.tel = user.tel;
      state.formtype = user.formtype;
  
    },
  
  };
  
  const getters = <GetterTree<LoginState, any>> {
    getUser(state: any): LoginState {
      return state;
    },
  };

  

export const state: LoginState = {
    first_name: '',
    last_name: '',
    age: 0,
    email: '',
    tel: '',
    gender: '',
    formtype: ''
  };

  
  
  export const app: Module<LoginState, RootState> = {
    namespaced: true,
    state,
    mutations,
    getters
  };
  