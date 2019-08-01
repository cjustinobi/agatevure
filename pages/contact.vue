<template>
    <div class="contact-container">
        <div class="contact-left">
            <Contact/>
        </div>
        <div class="contact-right">
            <h2>Phone</h2>
            <a href="tel:+2347032313948">+234 (0)703 231 3948</a>

            <h2>Mail</h2>
            <a href="mailto:contact@agatevure.com">contact@agatevure.com</a>

            <h2>Socials</h2>
            <div class="contact-socials">
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

    export default {

        components: { Contact },

        head () {
            return {
                title: 'Contact - Glory Agatevure',
                meta: [
                    { hid: 'description', name: 'description', content: 'Let\'s build that next big project together.' }
                ]
            }
        }

    }
</script>

<style scoped>
    @media(min-width: 768px) {
        .contact-container{
            display: grid;
            grid-template-columns: repeat(2, 50% 50%);
        }
        .contact-left{
            grid-column: 1 / 2;
        }

        .contact-right{
            display: grid;
            align-content: center;
            grid-column: 2 / 3;
            padding-left: 100px;
        }
        .contact-right a{
            font-weight: 700;
            color: rgba(38,69,178,.8);
            text-decoration: none;
            display: inline;
        }
    }

    @media(max-width: 767px) {
        .contact-container{
            display: grid;
            grid-template-columns: 1fr;
        }
        .contact-left{
            grid-column: 1 / -1;
            background: rgba(38,69,178,.8);
        }

        .contact-right{
            display: grid;
            align-content: center;
            grid-column: 1 / -1;
            padding-left: 30px;
        }
        .contact-right a{
            font-weight: 700;
            color: rgba(38,69,178,.8);
            text-decoration: none;
            display: inline;
        }
        .contact-socials{
            margin-bottom: 100px;
        }
    }
    .contact-socials a{
        margin-right: 20px;
    }
    h2{
        color: #333;
    }
</style>