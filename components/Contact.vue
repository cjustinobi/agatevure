<template>
    <div class="contact-page" :class="[{ 'contact-caption': contactCaption }, {'contact': isAboutRoute}]">
        <div class="go-home1">
            <nuxt-link to="/"><i class="fa fa-angle-left fa-3x"></i></nuxt-link>
        </div>
        <!--<form>
            <h1 class="caption">Let's meet</h1>

            <span v-show="allFieldsRequired">All Fields are required</span>

            <input type="text" @input="allFieldsRequired = false" v-model="details.fullname" placeholder="John Doe" id="fullname">
            <label class="sr-only" for="fullname">fullname</label>

            <input type="email" @input="allFieldsRequired = false" v-model="details.email" placeholder="johndoe@example.com" id="email">
            <label class="sr-only" for="email">email</label>

            <button class="business" @click.prevent="addPurpose('For project')">
                For Project <span v-if="businessIcon"><i class="fa fa-thumbs-up"></i></span>
            </button>
            <button class="to-speak" @input="allFieldsRequired = false" @click.prevent="addPurpose('Speak at an Event')">
                Speak at an Event <span v-if="eventIcon"><i class="fa fa-thumbs-up"></i></span>
            </button>

            <textarea
                    v-model="details.message"
                    @input="allFieldsRequired = false"
                    rows="300px" id="message"
                    placeholder="Hey Gconnect, Just passing by ...">
                </textarea>

            <button class="submit-btn empty-purpose" @click.prevent="emptyPurpose" v-show="details.purpose == ''">{{ purposeAlert }}</button>
            <button v-show="details.purpose" class="submit-btn" @click.prevent="sendEmail">Shoot it</button>-->
        </form>
    </div>
</template>

<script>

    import _ from 'lodash'

    export default {

        data() {
            return {
                contact: 'contact-page',
                isAboutRoute: false,
                isContactRoute: 'contact-route',
                purposeAlert: 'Shoot it',
                allFieldsRequired: false,
                show: false,
                contactCaption: false,
                businessIcon: false,
                eventIcon: false,
                details: {
                    fullname: '',
                    email: '',
                    purpose: '',
                    message: ''
                }
            }
        },

        methods: {

            clearWarning: _.debounce(() => {
                this.allFieldsRequired === true ? false : ''
            }, 1000),

            sendEmail() {
                if(
                    this.details.fullname !== '' &&
                    this.details.email !== '' &&
                    this.details.purpose !== '' &&
                    this.details.message !== ''
                ) {


                } else {

                    return this.allFieldsRequired = true

                }
            },

            addPurpose(purpose) {
                if(purpose == 'For project') {
                    this.businessIcon = true
                    this.eventIcon = false
                }
                if(purpose == 'Speak at an Event') {
                    this.eventIcon = true
                    this.businessIcon = false
                }
                this.purposeAlert = 'Shoot it'
                this.details.purpose = purpose
            },

            emptyPurpose() {
                this.purposeAlert = 'Kindly enter purpose for reaching out.'
            },
            watchRoute() {
                if(this.$route.path === '/contact') {
                    this.contactCaption = true
                }

                if(this.$route.path === '/about') {
                    this.isAboutRoute = true
                }
            }
        },

        mounted() {
            this.watchRoute()
        }
    }
</script>

<style scoped>

    .contact-caption{
        color: #fefefe !important;
    }
    .caption:after{
        content:'';
        display: block;
        width: 50px;
        height: 5px;
        border-bottom:3px solid #FF4081;
        border-radius: 1px;
    }

    form{
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(12, 1fr);
    }
    #email, #fullname, #message, .submit-btn, form h1, form span{
        grid-column: 2 / 12;
    }
    form span{
        color: #fefefe;
        padding: 2px;
        border-radius: 5px;
    }

    .business{
        grid-column: 2 / 7;
        background: #94cd14;
        padding: 10px;
        outline: none;
        border: none;
        color: #fefefe;
        font-weight: 700;
    }
    .submit-btn{
        padding-left: 15px;
        height: 35px;
        background: #FF4081;
        border: none;
        outline: none;
        color: #fefefe;
        font-weight: 700;
    }
    .empty-purpose{
        background: rgba(255, 67, 120, 0.53);
    }


    .to-speak{
        grid-column: 7 / 12;
        padding: 10px;
        outline: none;
        border: none;
        color: #fefefe;
        font-weight: 700;
    }
    #message{
        height: 100px;
    }

    .to-speak{
        background: #ffc100;
    }
    @media(max-width: 767px) {
        .contact-page{
            margin: 0 0 5px 0;
            padding-bottom: 50px;
        }
        .go-home1{
            display: none;
        }
    }
    @media(min-width: 768px) {
        .go-home1{
            position: absolute;
            left: 20px;
            top: 20px;
            cursor: pointer;
            z-index: 100;
        }
        .go-home1 a{
            color: #FF4081;
        }
        .contact-page{
            background: rgba(38,69,178,.8);
            grid-column: 3 / 4;
            grid-row: 1 / -1;
            min-height: 100vh;
            display: grid;
            align-content: center;
            position: relative;
        }
    }

</style>