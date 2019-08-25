<template>
  <div :class="[{'blog-container': toggleSidebar}, {'small-blog-container': !toggleSidebar}]">
    <div>
      <BlogSidebar/>
    </div>
    <nuxt/>
  </div>
</template>

<script>

  import WindowWidth from '~/mixins/windowWidth'
  import BlogSidebar from '~/components/BlogSidebar'

  export default {

    mixins: [WindowWidth],

    components: { BlogSidebar },

    data() {
      return {
        blogContainer: true
      }
    },

    computed: {
      toggleSidebar() {
        return this.$store.getters['shared/toggleSidebar']
      }
    }
  }


</script>

<style>
  html,body {
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    height: 100%;
    scroll-behavior: smooth;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  h1,h2,h3,h4,h5,h6{
    font-weight: 500;
  }
  .menu{
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .fa{
    cursor: pointer;
  }
  .blog-container{
    display: grid;
    grid-template-columns: 20% 80%;
    transition: 1s ease-in-out;
  }
  .small-blog-container{
    display: grid;
    grid-template-columns: 100%;
    transition: 1s ease-in-out;
  }

  @media (max-width: 767px) {
    .blog-container{
      grid-template-columns: 100%;
    }
  }
</style>

