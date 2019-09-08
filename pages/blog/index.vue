<template>
  <div class="blog">
    <div class="menu" v-if="!toggleSidebar">
      <i class="fa fa-bars fa-2x" @click="$store.dispatch('shared/toggleSidebar', true)"></i>
    </div>
    <h1>My awesome posts</h1>
    <p>I pen down my journey as e dey hot. Never forget to give me a clap if you find it enlightening.</p>
    <PostCard v-for="(blog, index) in blogList" :key="index" :articleInfo="blog"/>
  </div>
</template>

<script>

  import PostCard from '~/components/postCard'
  import blogs from '~/contents/blogs'

  export default {
    head() {
      return {
        title: 'Agatevure\'s blog',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: `I pen down my journey as e dey hot. Here is all about;  Java, Kotlin, Flutter, Android development
            and other related software development contents`
          }
        ]
      }
    },

    layout: 'blog',

    components: { PostCard },

    async asyncData({ app }) {
      async function awaitImport(blog) {
        const wholeMD = await import(`~/contents/blog/${blog.slug}.md`)
        if (wholeMD) {
          return {
            attributes: wholeMD.attributes,
            link: blog.slug
          }
        }
      }

      return await Promise.all(blogs.map(blog => awaitImport(blog))
      ).then(res => {
        return {
          blogList: res
        }
      })
    },

    computed: {
      toggleSidebar() {
        return this.$store.getters['shared/toggleSidebar']
      }
    }
  }
</script>

<style scoped>
  .blog{
    padding: 10px;
    display: grid;
    grid-gap: 24px;
    justify-items: center;
    color: #505050;
  }
  h1{
    margin-top: 60px;
    margin-bottom: 0;
  }
  /*.menu{*/
    /*position: absolute;*/
    /*top: 20px;*/
    /*left: 20px;*/
  /*}*/
  /*.fa{*/
    /*cursor: pointer;*/
  /*}*/
  @media (max-width: 767px) {
    h1{
      margin-top: 80px;
    }
  }
</style>