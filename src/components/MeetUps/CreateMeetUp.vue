<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm8 offset-sm2>
                <h1 class="headline deep-purple--text">Create new MeetUp</h1>
            </v-flex>
        </v-layout>
        <v-layout row>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetUp">
                    <v-layout>
                        <v-flex xs12 sm8 offset-sm2>
                            <v-text-field
                                    name="title"
                                    label="Title"
                                    id="title"
                                    v-model="title"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm8 offset-sm2>
                            <v-text-field
                                    name="location"
                                    label="Location"
                                    id="location"
                                    v-model="location"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm8 offset-sm2>
                            <v-text-field
                                    name="imageUrl"
                                    label="Image Url"
                                    id="image-url"
                                    v-model="imageUrl"
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm8 offset-sm2>
                            <img :src="imageUrl" alt="" style="height: 150px">
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm8 offset-sm2>
                            <v-text-field
                                    name="description"
                                    label="Description"
                                    id="description"
                                    v-model="description"
                                    multi-line
                                    light
                                    required></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row mb-2>
                        <v-flex sm8 offset-sm2>
                            <h2>Choose Date & Time</h2>
                        </v-flex>
                    </v-layout>
                    <v-layout row mb-2>
                        <v-flex xs12 sm4 offset-sm2>
                            <v-date-picker v-model="date"></v-date-picker>
                        </v-flex>
                        <v-flex xs12 sm4>
                            <v-time-picker v-model="time" format="24hr"></v-time-picker>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm8 offset-sm2>
                            <v-btn flat dark class="deep-purple"
                                   :disabled="!isValid"
                                   type="submit">Create a MeetUp</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                title: '',
                location: '',
                imageUrl: '',
                description: '',
                date: '',
                time: new Date()
            }
        },
        computed: {
            isValid() {
                return this.title !== '' && this.date !== '' &&
                    this.imageUrl !== '' && this.description !== '' &&
                    this.date !== '' && this.time
            },
            submittedDateTime() {
                if(this.date && this.time) {
                    const date = new Date(this.date)
                    const hours = this.time.match(/^(\d+)/)[1]
                    const minutes = this.time.match(/:(\d+)/)[1]
                    date.setHours(hours)
                    date.setMinutes(minutes)
                    console.log(date)
                    return date
                }
            }
        },
        methods: {
            onCreateMeetUp() {
                if(!this.isValid) {
                  return
                }
                const meetUp = {
                    title: this.title,
                    loacation: this.location,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    date: this.submittedDateTime
                }
                this.$store.dispatch('createMeetUp', meetUp)
                this.$router.push('/meetups')
            }
        }
    }
</script>