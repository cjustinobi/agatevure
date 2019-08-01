<template>
    <div class="about-container">
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

        <Contact/>

        <div class="events">
            <div class="overlay"></div>
            <div class="inner events-inner">
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
    import Contact from '../components/Contact'
    import AboutMobile from '../components/AboutMobile'

    export default {

        components: { AboutMobile, Contact },

        head () {
            return {
                title: 'About - Glory Agatevure',
                meta: [
                    { hid: 'description', name: 'description', content: 'I\'m a tech lover. I blog on https://medium.com/@agatevureglory' }
                ]
            }
        }

    }
</script>

<style>

    .inner{
        z-index: 1000;
    }
    .caption:after{
        content:'';
        display: block;
        width: 50px;
        height: 5px;
        border-bottom:3px solid #FF4081;
        border-radius: 1px;
    }
    .event-caption{
        position: relative;

    }
    .event-caption:after{
        content:'';
        display: block;
        width: 50px;
        height: 5px;
        position: absolute;
        right: 0;
        border-bottom:3px solid #FF4081;
        border-radius: 1px;
    }
    .inner h2{
        font-size: 1rem;
    }
    .services{
        background: url('../assets/img/services.jpg');
        background-position: center bottom;
        grid-column: 1 / 2;
        grid-row: 1 / -1;
        min-height: 100vh;
        margin: 10px;
        display: grid;
        align-content: center;
        padding-left: 24px;
        position: relative;
    }

    .socials{
        background: url('../assets/img/pycon.jpg');
        background-position: center center;
        position: relative;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        min-height: 50vh;
        margin: 10px 0;
        display: grid;
        align-content: center;
        padding-left: 24px;
    }
    .contact{
        background: rgba(38,69,178,.8);
        grid-column: 3 / 4;
        grid-row: 1 / -1;
        min-height: 100vh;
        margin: 10px;
        display: grid;
        align-content: center;
        position: relative;
    }
    .events{
        background: url('../assets/img/events.jpg');
        background-size: cover;
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        min-height: 50vh;
        margin-top: 10px;
        display: grid;
        grid-template-columns: 40% 60%;
        align-content: center;
        position: relative;
    }
    .events-inner{
        grid-column: 2 / 3;
        text-align: right;
        padding-right: 24px;
        font-weight: 700;
    }
    .overlay{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(38,69,178,.8);
        z-index: 1;
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
    .business span {
        opacity: 0;
    }
    .business:hover span {
        opacity: 1;
        transform: rotate(135deg);
        transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
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
    .socials-inner a{
        color: #fefefe;
        margin-right: 15px;
    }
    .empty-purpose{
        background: rgba(255, 67, 120, 0.53);
    }
    @media(min-width: 768px) {
        html, body{
            overflow: hidden;
        }
        .about-container{
            display: grid;
            grid-template: 1fr 1fr / repeat(3, 30% 40% 30%);
            color: #fafafa;
        }
        .go-home{
            position: absolute;
            left: 20px;
            top: 20px;
            cursor: pointer;
            z-index: 100;
        }
        .go-home a{
            color: #FF4081;
        }
    }

    @media(max-width: 767px) {
        .about-container{
            color: #fefefe;
        }
        .services{
            margin: 0 0 5px 0;
        }
        .contact{
            margin: 5px 0 5px 0;
        }
        .events{
            margin: 5px 0 5px 0;
        }
        .socials{
            margin: 5px 0 0 0;
        }
        .services{
            background: url('../assets/img/services.jpg');
            background-position: center center;
            background-size: cover;
        }
    }
</style>