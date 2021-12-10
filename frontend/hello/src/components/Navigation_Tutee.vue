<template>
    <v-row>
        <div v-for='item in navigationItems' v-bind:key=item.id>
            <v-btn text :to=item.path class="ma-2" active-class="primary--text">
                {{ item.name }}
            </v-btn>
        </div>
        <v-btn v-if="message.count > 0" text :to=message.path class="ma-2" active-class="warning--text">
            <v-badge color=warning>
                <template v-slot:badge>{{ message.count }}</template>
                {{ message.text }}
            </v-badge>
        </v-btn>
        <v-btn text v-else :to=message.path class="ma-2" active-class="primary--text">
                {{ message.text }}
        </v-btn>
        <v-spacer></v-spacer>
        <notification-block></notification-block>
        <div v-for='item in iconItems' v-bind:key=item.id>
            <v-btn icon :to="item.path" active-class="primary--text">
                <v-icon class="mx-2">{{ item.iconNormal }}</v-icon>
            </v-btn>
        </div>
        <v-menu bottom offset-y transition="slide-y-transition" class="mx-2">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon>mdi-dots-vertical</v-icon>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for='item in menuItems' v-bind:key=item.id :to=item.path active-class="primary--text">
                    <v-list-item-title>{{ item.name }}</v-list-item-title>
                </v-list-item>
                <v-divider/>
                <v-list-item @click=afmelden()>
                    <v-list-item-title>Afmelden</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
import Notifications from '@/components/Notifications.vue';
import { getUnreadMessages } from '@/functions/notifications';
import { logout } from '@/functions/authorisatie';

@Component({
  components: {
    'notification-block': Notifications,
  },
})
export default class NavigationTutee extends Vue {
    navigationItems: object[] = [
      {
        name: 'Aanvragen',
        path: '/Aanvragen',
      },
      {
        name: 'Nieuwe aanvraag',
        path: '/NieuweAanvraag',
      },
    ];

    menuItems: object[] = [
      {
        name: 'Help',
        path: '/Help',
      },
      {
        name: 'Contacteer ons',
        path: '/Contact',
      },
    ];

    currentpath = '';

    interval;

    message = {
      text: 'Berichten',
      path: '/Berichten',
      count: 3,
    }

    iconItems = [
      {
        iconNormal: 'mdi-account',
        path: '/Profiel',
      },
    ];

    private async getMessagesCount() {
      const tmp = await getUnreadMessages();
      this.message.count = tmp.count;
    }

    private async created() {
      await this.getMessagesCount();
      this.interval = setInterval(() => this.getNewerMessages(), 5000);
    }

    @Watch('$route', { immediate: true, deep: true })
    onUrlChange(newVal: any) {
      this.currentpath = newVal.name;
      if (newVal.name === 'berichten' || newVal.name === 'berichtenid') {
        this.message.count = 0;
      } else this.getMessagesCount();
    }

    private getNewerMessages() {
      if (this.currentpath === 'berichten' || this.currentpath === 'berichtenid') return;
      this.getMessagesCount();
    }

    afmelden() {
      logout();
      this.$router.push('/Aanmelden');
      clearInterval(this.interval);
    }
}
</script>
