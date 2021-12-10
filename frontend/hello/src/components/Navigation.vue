<template>
    <v-app-bar app color=accent dense>
      <v-img
          alt="Logo of Student Teach"
          src="@/assets/student_teach_logo_medium.png"
          contain
          max-height=48
          max-width=200
          transition="scale-transition"
          class="mx-10"
      />
      <v-container>
        <Navigation-Tutee ></Navigation-Tutee>
  
      </v-container>
    </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import store from '../store/index';
import NavigationTutee from './Navigation_Tutee.vue';



@Component({
  components: {
    'Navigation-Tutee': NavigationTutee,
   
  },
})

export default class Navigation extends Vue {
  role: string | null = store.getters['app/getRole'];

  created() {
    this.$store.watch(() => store.getters['app/getRole'], () => this.updateRole());
  }

  updateRole() {
    this.role = store.getters['app/getRole'];
  }
}
</script>
