<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                <v-card>
                    <v-card-title class="deep-purple--text">
                        <h2>{{meetUp.title}}</h2>
                    </v-card-title>
                    <v-card-media
                            :src="meetUp.imageUrl"
                            height="400px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text">{{meetUp.date | date}} - {{meetUp.location}}</div>
                        <div>{{meetUp.description}}</div>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="deep-purple white--text">Register</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            meetUp() {
                return this.$store.getters.loadedMeetUp(this.id)
            }
        }
    }
</script>