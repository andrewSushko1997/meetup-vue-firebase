import Vue from 'vue'

import {
    Vuetify,
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    VGrid,
    VCard,
    VToolbar,
    VCarousel,
    VTextField,
    VDatePicker,
    VTimePicker,
    VAlert,
    transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'
import './assets/main.css'
import App from './App'
import router from './router'
import {store} from './store/store'
import * as firebase from 'firebase'
import DateFilter from './filters/date'
import AlertComponent from './components/shared/Alert.vue'

Vue.use(Vuetify, {
    components: {
        VApp,
        VNavigationDrawer,
        VFooter,
        VList,
        VBtn,
        VIcon,
        VGrid,
        VToolbar,
        VCard,
        VCarousel,
        VTextField,
        VDatePicker,
        VTimePicker,
        VAlert,
        transitions
    },
    theme: {
        primary: '#5E35B1',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
    }
})

Vue.config.productionTip = false
Vue.filter('date', DateFilter)
Vue.component('app-alert', AlertComponent)
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDxBmZzb-ZlCBQlEpvP2HBN7tNTien6_lk',
            authDomain: 'meetups-b93a8.firebaseapp.com',
            databaseURL: 'https://meetups-b93a8.firebaseio.com',
            projectId: 'meetups-b93a8',
            storageBucket: 'meetups-b93a8.appspot.com',
            messagingSenderId: '571118700168'
        })
    }
})
