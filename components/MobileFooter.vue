<template>
    <div class="mobile-footer">
        <span class="about"><nuxt-link :to="homeAbout"><i :class="homeAboutIcon"></i></nuxt-link></span>
        <span class="portfolio"><nuxt-link to="/portfolio"><i class="fa fa-code"></i></nuxt-link></span>
        <span class="contactt"><nuxt-link to="/contact"><i class="fa fa-address-card"></i></nuxt-link></span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                homeAbout: '/about',
                homeAboutIcon: 'fa fa-user-circle'
            }
        },

        watch: {
            '$route': function(e) {
                if(e.path == '/') {
                    this.homeAbout = '/about'
                    this.homeAboutIcon = 'fa fa-user-circle'
                } else {
                    this.homeAbout = '/'
                    this.homeAboutIcon = 'fa fa-home'
                }
            }
        }
    }
</script>

<style scoped>
    .mobile-footer{
        display: -ms-grid;
        display: grid;
        -ms-grid-rows: 45px;
        -ms-grid-columns: (1fr)[3];
        grid-template: 45px / repeat(3, 1fr);
        text-align: center;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }
    .about{
        display: -ms-grid;
        display: grid;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: #FF4081;
    }
    .portfolio{
        display: -ms-grid;
        display: grid;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: #94cd14;
    }
    .contactt{
        display: -ms-grid;
        display: grid;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        background: #ffc100;
    }
</style>