<template>
  <div class="blog-container">
    <div style="background: green;">
      <BlogSidebar/>
    </div>
    <nuxt/>
  </div>
</template>

<script>

  import BlogSidebar from '~/components/BlogSidebar'

  export default {

    components: { BlogSidebar }

  }


</script>

<style scoped>
  .blog-sidebar-container{
    /*position: fixed;*/
    /*top: 0;*/
    /* height: 100%;
     background: #eeeeee;
     display: grid;
     grid-template-rows: 130px 30px 30px 30px 30px;
     grid-gap: 30px;
     justify-items: center;
     padding: 60px 0;*/
  }
  .blog-container{
    /*position: relative;*/
    display: grid;
    grid-template-columns: 25% 75%;
  }
</style>

