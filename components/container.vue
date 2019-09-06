<template>
  <div class="container">
    <slot />
    <nuxt-link to="/blog"><i class="fa fa-arrow-left"></i> All blogs</nuxt-link>
  </div>
</template>

<style scoped>
  a{
    margin: 12px 0;
    color: #2b2e4d;
    text-decoration: none;
  }
</style>
