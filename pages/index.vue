<template>
    <div class="home-container">
        <div class="left">
            <h1>
                <span class="i-m">I'm</span>
                Glory <br>
                Agatevure
            </h1>
            <p>
                Hi there. My name is Glory Agatevure. I double as the Community manager and Digital marketer
                at <a class="kh" href="https://kodehauz.com" target="_blank">KodeHauz</a>
            </p>
            <p>
                I got plenty love for community building. I encourage the female folks to fall in love with programing
                by organizing periodic Django Girls Meetup, hence, you can call me Django Mama.
                I have raised potential vibrant teenagers to the concept of
                programming using Scratch under the auspices of ScratchEd.
            </p>
        </div>
        <div class="right"></div>

        <transition name="slide-fade">
            <div v-if="show" class="sidenav">
                <transition-group name="list-complete" tag="ul">
                    <li class="sidenav-link" v-for="route in routes" v-bind:key="route.name">
                        <a href="#" @click.prevent="goTo(route)">{{ route.name }}</a>
                    </li>
                </transition-group>
            </div>
        </transition>

        <button id="actionBtn" class="center-button" @click.prevent="show = !show">
            <span class="first-bar"></span>
            <span class="second-bar"></span>
            <span class="third-bar"></span>
        </button>

        <div class="mobile-home">
            <img src="../assets/img/face.jpg" alt="Agatevure image">
            <h1>
                <span class="i-m">I'm</span>
                Glory <br>
                Agatevure
            </h1>
            <p>
                Hi there. My name is Glory Agatevure. I double as the Community manager and Digital marketer
                at <a class="kh" href="https://kodehauz.com" target="_blank">KodeHauz</a>
            </p>
        </div>

    </div>
</template>

<script>

    export default {

        head () {
            return {
                title: 'Glory Agatevure',
                meta: [
                    { hid: 'description', name: 'description', content: 'Welcome to my Portfolio site.' }
                ]
            }
        },

        data() {
            return {
                show: false,
                showSideBar: 'show-side-bar',
                hideSideBar: 'hide-side-bar',
                routes: [
                    { name: 'About', link: '/about' },
                    { name: 'Portfolio', link: '/portfolio' },
                    { name: 'Blog', link: 'https://medium.com/@agatevureglory' },
                    { name: 'Contact', link: '/contact' },
                ]
            }
        },
        methods: {
            goTo(item) {
                if(item.name === 'Blog') {
                    return window.open(item.link, '_blank')
                }
                this.$router.push(item.link)
            },


            dragButton(elmnt) {

                let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0

                // otherwise, move the DIV from anywhere inside the DIV:
                elmnt.onmousedown = dragMouseDown

                function dragMouseDown(e) {
                    e = e || window.event
                    e.preventDefault()
                    // get the mouse cursor position at startup:
                    pos3 = e.clientX
                    pos4 = e.clientY
                    document.onmouseup = closeDragElement
                    // call a function whenever the cursor moves:
                    document.onmousemove = elementDrag
                }

                function elementDrag(e) {
                    e = e || window.event
                    e.preventDefault()
                    // calculate the new cursor position:
                    pos1 = pos3 - e.clientX
                    pos2 = pos4 - e.clientY
                    pos3 = e.clientX
                    pos4 = e.clientY
                    // set the element's new position:
                    elmnt.style.top = (elmnt.offsetTop - pos2) + "px"
                    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px"
                }

                function closeDragElement() {
                    // stop moving when mouse button is released:
                    document.onmouseup = null
                    document.onmousemove = null
                }

            }
        },

        mounted() {
            this.dragButton(document.getElementById('actionBtn'))
        }
    }

</script>

<style scoped>
    .home-container{
        display: grid;
        grid-template-columns: 50% 50%;

    }
    .kh{
        color: rgba(220, 226, 255, 0.66);
        text-decoration: none;
    }
    h1, p{
        color: #fefefe;
    }
    .left h1{
        font-size: 5em;
    }
    .left p{
        font-size: 1.077em;
        font-weight: 700;
    }

    .i-m{
        display: block;
        color: rgba(220, 226, 255, 0.66);
    }
    /*.sidenav-backdcolor: rgba(220, 226, 255, 0.66);rop {
        width: 50%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        position: absolute;
        top: 0;
        left: 0;
    }*/
    .sidenav {
        height: 100%;
        width: 50%;
        background-color: #121178;
        z-index: 10000;
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        padding: 30px;
        -webkit-transition: all 0.5s;
        -moz-transition: all 0.5s;
        transition: all 0.5s;
        display: grid;
        align-content: center;
        justify-items: center;
    }
    .sidenav-link{
        margin: 24px 0;
        list-style: none;
    }
    .sidenav-link a{
        color: #fefefe;
        font-size: 4em;
        font-weight: 700;
        text-decoration: none;
    }
    .left{
        background: #1a237e;
        color: #fefefe;
        padding-left: 40px;
        padding-right: 40px;
        display: grid;
        align-content: center;
    }
    .right{
        background: url('../assets/img/agate.png');
        background-size: cover;
        background-position: center top;
        background-color: rgba(220, 226, 255, 0.66);
    }

    .center-button{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 60px;
        height: 60px;
        border-radius: 50%;
        border: none;
        z-index: 10000;
        cursor: pointer;
        background: linear-gradient(to left, #1a237e 50%, #fefefe 50%);
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
        /*transition: 0.3s;*/
    }
    .center-button:hover{
        box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
    }
    .center-button span{

    }

    .first-bar{
        background: linear-gradient(to left, #fefefe 50%, #1a237e 50%);
        width: 30px;
        height: 3px;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20000;
    }
    .second-bar{
        background: linear-gradient(to left, #fefefe 50%, #1a237e 50%);
        width: 30px;
        height: 3px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20000;
    }
    .third-bar{
        background: linear-gradient(to left, #fefefe 50%, #1a237e 50%);
        width: 30px;
        height: 3px;
        position: absolute;
        top: 60%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 20000;
    }

    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(-110px);
        opacity: 0;
    }

    .list-complete-item {
        transition: all 9s;
        margin-right: 10px;
    }
    .list-complete-enter, .list-complete-leave-to
        /* .list-complete-leave-active below version 2.1.8 */ {
        opacity: 0;
        transform: translateY(30px);
    }
    .list-complete-leave-active {
        position: absolute;
    }

    .mobile-home{
        background: url('../assets/img/landing.jpg');
        background-position: center bottom;
        background-size: cover;
        display: grid;
        align-content: center;
        justify-items: center;
        padding: 24px;
    }
    .mobile-home img{
        border-radius: 50%;
        width: 40%;
    }
    .mobile-home h1{
        justify-self: start;
    }

    @media (min-width: 768px) {
        .mobile-home{
            display: none;
        }
        .home-container .left, .home-container .right{
            min-height: 100vh;
        }
    }

    @media(max-width: 399px) {
        .left, .right, .sidenav, .center-button{
            display: none;
            transition: all .3s ease;
        }
        .home-container{
            grid-template-columns: 1fr;
        }
        .mobile-home{
            min-height: 100vh;
        }
    }

    @media(max-width: 767px) and (min-width: 480px) {
        .left, .right, .sidenav, .center-button{
            display: none;
            transition: all .3s ease;
        }
        .home-container{
            grid-template-columns: 1fr;
        }
        .mobile-home{
            padding-bottom: 100px;
            min-height: 100vh;
        }
        .mobile-home img{
            border-radius: 50%;
            width: 20%;
        }
    }
</style>
