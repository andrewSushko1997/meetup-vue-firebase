import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        meetUps: [
            {
                imageUrl: 'https://thenypost.files.wordpress.com/2017/04/new-york.jpg?quality=90&strip=all&w=1200',
                title: 'MeetUp in New York',
                id: 'dasfag123asdf',
                date: new Date(),
                location: 'New York',
                description: 'Awesome New York'
            },
            {
                imageUrl: 'http://europeanbusinessmagazine.com/wp-content/uploads/2017/07/paris.jpg',
                title: 'MeetUp in Paris',
                id: 'afasdf1234asdfa',
                date: new Date(),
                location: 'Paris',
                description: 'Awesome Paris'
            },
            {
                imageUrl: 'https://sendflowers.by/system/images/1462/thumb/minsk1.jpg',
                title: 'MeetUp in Minsk',
                id: 'adgg4g2fasd',
                date: new Date(),
                location: 'Minsk',
                description: 'Awesome Minsk'
            }
        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        createMeetUp(state, payload) {
            state.meetUps.push(payload)
        },
        setUser(state, payload) {
            state.user = payload
        },
        setLoading(state, payload) {
            state.loading = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        clearError(state) {
            state.error = null
        }
    },
    actions: {
        createMeetUp({commit}, payload) {
            const meetUp = {
                title: payload.title,
                location: payload.location,
                imageUrl: payload.imageUrl,
                description: payload.description,
                date: payload.date
            }
            commit('createMeetUp', meetUp)
        },
        signUserUp({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const newUser = {
                            id: user.uid,
                            registeredMeetUps: []
                        }
                        commit('setUser', newUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        signUserIn({commit}, payload) {
            commit('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(
                    user => {
                        commit('setLoading', false)
                        const oldUser = {
                            id: user.uid,
                            registeredMeetUps: []
                        }
                        commit('setUser', oldUser)
                    }
                )
                .catch(
                    error => {
                        commit('setLoading', false)
                        commit('setError', error)
                        console.log(error)
                    }
                )
        },
        clearError({commit}) {
            commit('clearError')
        }
    },
    getters: {
        loadedMeetUps(state) {
            return state.meetUps.sort((stateA, stateB) => {
                return stateA.date > stateB.date
            })
        },
        featuredMeetUps(state, getters) {
            return getters.loadedMeetUps.slice(0, 5)
        },
        loadedMeetUp(state, getters) {
            return (meetUpId) => {
                return getters.loadedMeetUps.find( meetUp => {
                    return meetUp.id === meetUpId
                })
            }
        },
        user(state) {
            return state.user
        },
        loading(state) {
            return state.loading
        },
        error(state) {
            return state.error
        }
    }
})
