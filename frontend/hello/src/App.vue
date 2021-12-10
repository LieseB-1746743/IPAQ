<template>
  <v-app>
    <navigation></navigation>

    <!-- Snackbar notifications -->
    <v-snackbar
        v-model="showSnackBar"
        :timeout="timeout"
        bottom
        :color="type"
    >
        {{ message }}
        <v-btn
            icon
            @click="showSnackBar = false"
        >
            <v-icon>mdi-close</v-icon>
        </v-btn>
    </v-snackbar>

    <v-content transition="slide-x-transition">
        <router-view></router-view>
    </v-content>

  </v-app>
<script>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Mutation } from 'vuex-class';
import { mapState } from 'vuex';
import Navigation from './components/Navigation.vue';
import { SnackBarSate } from './store/modules/types';


@Component({
  components: {
    navigation: Navigation,
  },
})


export default class App extends Vue {
  timeout: number = 3000

  type: string = ''

  showSnackBar: boolean = false

  message: string = ''

  @State('snackbar') snackbar!: SnackBarSate;

  created() {
    this.setStoreWatchers();
  }

  setStoreWatchers() {
    this.$store.watch(state => state.snackbar.snackbarMessage, () => {
      const snackbarStore = this.$store.state.snackbar;
      const msg = snackbarStore.snackbarMessage;
      if (msg !== '') {
        this.type = snackbarStore.snackbarType;
        this.message = snackbarStore.snackbarMessage;
        this.showSnackBar = true;
        this.$store.commit('snackbar/setSnackBarMessage', { message: '', type: '' });
      }
    });
  }
}

</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
