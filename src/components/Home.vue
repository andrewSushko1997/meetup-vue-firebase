<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm6 class="text-xs-center text-sm-right">
                <v-btn large to="/meetups" class="info">Show all MeetUps</v-btn>
            </v-flex>
            <v-flex xs12 sm6 class="text-xs-center text-sm-left">
                <v-btn large to="/meetup/new" class="info">Create new MeetUp</v-btn>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 class="mt-2">
                <v-carousel style="cursor: pointer">
                    <v-carousel-item v-for="meetup in meetUps"
                                     :src="meetup.imageUrl"
                                     :key="meetup.id"
                                     @click="onMeetUpLoad(meetup.id)">
                        <div class="title">{{meetup.title}}</div>
                    </v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12 class="mt-2 text-xs-center">
                <p>Join for our MeetUps!</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {}
        },
        computed: {
          meetUps() {
            return this.$store.getters.featuredMeetUps
          }
        },
        methods: {
            onMeetUpLoad (id) {
                this.$router.push('/meetups/' + id)
            }
        }
    }
</script>

<style scoped>
    .title {
        position: absolute;
        bottom: 50px;
        padding: 20px 30px;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
    }
</style>