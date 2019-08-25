<template>
  <div :class="[{'blog-sidebar-container': toggleSidebar}, {'hide-sidebar': !toggleSidebar}]">
    <div class="menu" v-if="toggleSidebar">
      <i class="fa fa-bars fa-2x" @click="$store.dispatch('shared/toggleSidebar', false)"></i>
    </div>
    <img src="~/assets/img/face.jpg" alt="agatevure image">
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/portfolio">Portfolio</nuxt-link>
    <nuxt-link to="/contact">Contact</nuxt-link>
  </div>
</template>

<script>
  export default {
    mounted() {
      this.$nextTick(() => {
        if (
            this.windowWidth && this.windowWidth < 768 ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        ) {
          this.$store.dispatch('shared/toggleSidebar', false)
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
  .blog-sidebar-container{
    position: fixed;
    top: 0;
    height: 100%;
    width: 300px;
    background: #eeeeee;
    display: grid;
    grid-template-rows: 130px 30px 30px 30px 30px;
    grid-gap: 30px;
    justify-items: center;
    padding: 60px 0;
    transition: 1s ease-in-out;
  }
  .blog-sidebar-container a{
    display: block;
    text-decoration: none;
  }
  .menu{
    display: none;
  }
  .hide-sidebar{
    display: none;
  }
  img{
    border-radius: 50%;
    width: 130px;
  }
  @media (max-width: 767px) {
    .blog-sidebar-container{
      width: 100%;
      transition: 1s ease-in-out;
    }
    .menu{
      display: block;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    .fa{
      cursor: pointer;
    }
  }
</style>