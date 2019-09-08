<template>
  <section class="post">
    <div class="menu" v-if="!toggleSidebar">
      <i class="fa fa-bars fa-2x" @click="$store.dispatch('shared/toggleSidebar', true)"></i>
    </div>
    <Container class="meta-section">
      <h1>{{ title }}</h1>
      <small>{{ formatDate(updated)}}</small>
      <div class="html" v-html="html"></div>
    </Container>
  </section>
</template>

<script>
  import FormatDate from '~/mixins/formatDate'
  import Container from '~/components/container'

  export default {

    mixins: [FormatDate],

    layout: 'blog',

    components: { Container },

    head() {
      return {
        title: `${this.title} | Agatevure Glory`,
        meta: [
          { hid: 'description', name: 'description', content: this.description },
          { hid: 'article:published_time', property: 'article:published_time', content: this.date },
          { hid: 'article:modified_time', property: 'article:modified_time', content: this.update },
          { hid: 'og:updated_time', property: 'og:updated_time', content: this.update },
          { hid: 'og:url', property: 'og:url', content: `https://agatevure.com/blog/${this.slug}` },
          { hid: 'og:title', property: 'og:title', content: `${this.title} | Agatevure Glory` },
          { hid: 'og:description', property: 'og:description', content: this.description },
          { hid: 'og:image', property: 'og:image', content: `/static/icon.png` },
          { hid: 'og:image:alt', property: 'og:image:alt', content: this.title },
          { hid: 'og:type', property: 'og:type', content: 'article' },
          { hid: 'og:article:author', property: 'og:article:author', content: 'Agatevure Glory' },
          { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
          { hid: 'twitter:title', name: 'twitter:title', content: this.title },
          { hid: 'twitter:site', name: 'twitter:site', content: '@agatevureglory' },
          { hid: 'twitter:description', name: 'twitter:description', content: this.description },
          { hid: 'twitter:image', name: 'twitter:image', content: `/static/icon.png` }
        ]
      }
    },
    async asyncData({ params }) {
      const post = await import(`~/contents/blog/${params.slug}.md`)
      const attr = post.attributes
      console.log(JSON.stringify(post))
      const slug = params.slug
      const {description, title, date, update} = attr
      const dateOptions = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'}
      const publishedDate = new Date(date)
      const updatedDate = new Date(update)
      const published = publishedDate.toLocaleDateString('en-GB', dateOptions)
      const updated = updatedDate.toLocaleDateString('en-GB', dateOptions)
      return {
        title,
        date,
        update,
        published,
        updated,
        description,
        slug,
        html: post.default.html
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
  .post{
    display: grid;
    /*justify-content: center;*/
    padding: 10px;
    color: #505050;
  }
  .html, p{
    line-height: 1.5;
    font-weight: 500;
  }
  @media (max-width: 767px) {
    .meta-section{
      margin-top: 40px;
      overflow-x: hidden;
    }
  }
  @media (min-width: 768px) {
    .menu{
      display: none;
    }
    .meta-section{
      margin-top: 50px;
      margin-left: 60px;
      width: 60%;
    }
  }
</style>