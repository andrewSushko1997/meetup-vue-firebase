<template>
    <v-app>
        <v-toolbar dark class="deep-purple darken-1">
            <v-toolbar-side-icon class="hidden-sm-and-up"
                                 @click.stop="showDrawer"></v-toolbar-side-icon>
            <v-toolbar-title>
               <router-link to="/" tag="span" style="cursor:pointer">MeetUps</router-link>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items class="hidden-xs-only">
                <v-btn flat
                       v-for="item in createMenu"
                       :key="item.title"
                        :to="item.link">
                    <v-icon left>{{item.icon}}</v-icon>
                    {{item.title}}
                </v-btn>
            </v-toolbar-items>
        </v-toolbar>
        <v-navigation-drawer v-model="drawer" temporary absolute>
            <v-list>
                <v-list-tile v-for="item in createMenu"
                             :key="item.title"
                             @click=""
                             :to="item.link">
                    <v-list-tile-action>
                        <v-icon>{{item.icon}}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>{{item.title}}</v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <router-view></router-view>
    </v-app>
</template>

<script>
    export default {
        data() {
            return {
                drawer: false,
            }
        },
        computed: {
          createMenu() {
              let menuItems = [
                  { icon: 'face', title: 'Sign Up', link: '/signup'},
                  { icon: 'lock_open', title: 'Sign In', link: '/signin'},
                  { icon: '', title: 'Test.vue', link: '/test'}
              ]
              if(this.isAuth) {
                  menuItems = [
                      { icon: 'group', title: 'View MeetUps', link: '/meetups'},
                      { icon: 'room', title: 'Organize MeetUp', link: '/meetup/new'},
                      { icon: 'person', title: 'Profile', link: '/profile'}
                  ]
              }
              return menuItems
          },
          isAuth() {
              return this.$store.getters.user !== null && this.$store.getters.user !== undefined
          }
        },
        methods: {
            showDrawer() {
                this.drawer = !this.drawer
            }
        }
    }
</script>
