import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import VuexPersistence from 'vuex-persist';
import { RootState } from './types';
import { app } from './modules/loginStore';
import { snackbar } from './modules/snackbar';


Vue.use(Vuex);
const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage,
});

const store: StoreOptions<RootState> = {
  modules: {
    app,
    snackbar,
  },
  plugins: [vuexLocal.plugin],
};

export default new Vuex.Store<RootState>(store);
