<template>
    <div class="blog-sidebar-containerx">
        <img src="~/assets/img/face.jpg" alt="agatevure image">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/portfolio">Portfolio</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
    </div>
</template>

<script>
    export default {


    }
</script>

<style scoped>
    .blog-sidebar-containerx{
        position: fixed;
        top: 0;
        height: 100%;
        background: #eeeeee;
        display: grid;
        grid-template-rows: 130px 30px 30px 30px 30px;
        grid-gap: 30px;
        justify-items: center;
        padding: 60px 0;
    }
    .blog-sidebar-container a{
        display: block;
        text-decoration: none;
    }
    img{
        border-radius: 50%;
        width: 130px;
    }
</style>