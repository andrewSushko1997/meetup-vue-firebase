import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MeetUps from '@/components/MeetUps/MeetUps'
import CreateMeetUp from '@/components/MeetUps/CreateMeetUp'
import Profile from '@/components/User/Profile'
import SignIn from '@/components/User/SignIn'
import SignUp from '@/components/User/SignUp'
import MeetUp from '@/components/MeetUps/MeetUp'
import Test from '@/components/Test'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/meetups',
            name: 'MeetUps',
            component: MeetUps
        },
        {
            path: '/meetup/new',
            name: 'CreateMeetup',
            component: CreateMeetUp
        },
        {
            path: '/meetups/:id',
            name: 'MeetUp',
            props: true,
            component: MeetUp
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/signin',
            name: 'SignIn',
            component: SignIn
        },
        {
            path: '/signup',
            name: 'SignUp',
            component: SignUp
        },
        {
            path: '/test',
            name: 'Test',
            component: Test
        }
    ],
    mode: 'history'
})
