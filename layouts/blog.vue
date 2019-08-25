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

<style scoped>

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

