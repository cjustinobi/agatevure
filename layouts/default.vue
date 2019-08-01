<template>
    <div class="app-main">
        <div>
            <!--<transition name="router-anim" enter-active-class="animated fadeInDown" leave-active-class="animated fadeOutDown">-->
                <nuxt/>
            <!--</transition>-->
        </div>
        <div class="mobile-version">
            <MobileFooter/>
        </div>
    </div>
</template>

<script>
    import MobileFooter from '../components/MobileFooter'

    export default {

        components: { MobileFooter }

    }
</script>

<style>
    @import '../assets/font-awesome/css/font-awesome.min.css';

    /* Transitions using the page hook */
    /*page-enter-active, .page-leave-active {
        transition: all .30s ease-out;
    }
    .page-enter, .page-leave-active {
        opacity: 0;
        transform-origin: 50% 50%;
    }*/

    .page-enter-active {
        animation: acrossIn .40s ease-out both;
    }
    .page-leave-active {
        animation: acrossOut .60s ease-in both;
    }
    @keyframes acrossIn {
        0% {
            transform: translate3d(-100%, 0, 0);
        }
        100% {
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes acrossOut {
        0% {
            transform: translate3d(0, 0, 0);
        }
        100% {
            transform: translate3d(100%, 0, 0);
        }
    }

    html, body{
        height: 100%;
        margin: 0;
        font-family: 'Quicksand', 'Open Sans', sans-serif;
    }
    * {
        outline: none;
    }
    .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        -webkit-clip-path: inset(50%);
        clip-path: inset(50%);
        border: 0;
    }
    img{
      height: auto;
      width: 100%;
    }
    select > option, input, textarea{
        padding-left: 15px;
        height: 40px;
        border: 1px #e8e8e8 solid;
        border-radius: 4px;
    }
    button{
        cursor: pointer;
    }
    @media(min-width: 768px) {
        .mobile-version{
            display: none;
        }
        .app-main{
            display: grid;
            grid-auto-rows: 1fr auto;
        }
    }

    @media(max-width: 767px) {
        .app-main{
            display: grid;
            grid-auto-rows: 1fr auto;
        }
    }

    .router-anim-enter-active {
        animation: coming 1s;
        animation-delay: .5s;
        opacity: 0;
    }
    .router-anim-leave-active {
        animation: going 1s;
    }

    @keyframes going {
        from {
            transform: translateX(0);
        }
        to {
            transform: translateX(-50px);
            opacity: 0;
        }
    }
    @keyframes coming {
        from {
            transform: translateX(-50px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

</style>
