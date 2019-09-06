<template>
  <article class="article-card">
    <small>{{ formatDate(articleInfo.attributes.update) }}</small>
    <nuxt-link :to="`/blog/${articleInfo.link}`">
      <div class="card-inner">
        <h2>{{ articleInfo.attributes.title }}</h2>
        <p>{{ articleInfo.attributes.description }}</p>
      </div>
    </nuxt-link>
  </article>
</template>

<script>
  import FormatDate from '~/mixins/formatDate'
  export default {
    mixins: [FormatDate],
    props: {
    articleInfo: {
      type: Object,
    default: () => {}
    },
    index: {
      type: Number,
    default: 0
    }
  },

  methods: {
    capitalize(s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
  }
</script>

<style scoped>

  .article-card a{
    text-decoration: none;
    cursor: pointer;
    color: #505050;
  }
  h2{
    margin: 18px 0;
  }
  p{
    margin-bottom: 20px;
  }
  .article-card:not(:last-child){
    border-bottom: 1px solid #ccc;
  }
  img{
    max-width: 350px;
  }
  @media (min-width: 768px) {
    .article-card{
      width: 60%;
    }
  }
</style>