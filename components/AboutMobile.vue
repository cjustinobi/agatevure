<template>
    <div>
        <div class="services">
            <div class="go-home">
                <nuxt-link to="/"><i class="fa fa-angle-left fa-3x"></i></nuxt-link>
            </div>
            <div class="overlay"></div>
            <div class="inner">
                <h1 class="caption">Skills</h1>
                <h2>UI/UX Designer</h2>
                <h2>Mobile Developer</h2>
                <h2>Digital Marketer</h2>
                <h2>Community Builder</h2>
            </div>
        </div>
        <div class="contact">

            <form>
                <h1 class="caption">Let's meet</h1>
                <input type="text" v-model="details.fullname" placeholder="John Doe" id="fullname">
                <label class="sr-only" for="fullname">fullname</label>

                <input type="text" v-model="details.email" placeholder="johndoe@example.com" id="email">
                <label class="sr-only" for="email">email</label>

                <button class="business">For Project <span><i class="fa fa-facebook"></i></span></button>
                <button class="to-speak">Speak at an Event</button>

                <textarea v-model="details.message" rows="300px" id="message" placeholder="Hey Gconnect, Just passing by ..."></textarea>
                <button class="submit-btn">Shoot it</button>
            </form>
        </div>
        <div class="blog">
            <div class="overlay"></div>
            <div class="inner blog-inner">
                <h1 class="event-caption">Events</h1>
                <p>
                    I'm active in building tech community in Africa using WTM, Scratch
                    I'm active in building tech community in Africa using WTM, Scratch
                </p>
            </div>
        </div>
        <div class="socials">
            <div class="overlay"></div>
            <div class="inner socials-inner">
                <h1 class="caption">Socials</h1>
                <a href="https://github.com/agatevureglory" target="_blank"><i class="fa fa-github"></i></a>
                <a href="https://linked/in/agatevureglory.com/gconnect" target="_blank"><i class="fa fa-linkedin"></i></a>
                <a href="https://twitter.com/agatevureglory" target="_blank"><i class="fa fa-twitter"></i></a>
                <a href="https://facebook.com/agatevure.glory" target="_blank"><i class="fa fa-facebook"></i></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                details: {}
            }
        }
    }
</script>

<style scoped>
    .socials, .blog, .contact, .services{
        margin: 20px 0;
    }
</style>