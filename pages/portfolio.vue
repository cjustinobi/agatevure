<template>
  <div class="theBall portfolio-container">
    <div class="go-home">
      <nuxt-link to="/"><i class="fa fa-angle-left fa-3x"></i></nuxt-link>
    </div>
    <div id="particles-js"></div>
    <h1 class="bounce-in-top">Awesome projects</h1>
    <p class="bounce-in-top">These are some large scale projects I have worked on with awesome teammates.</p>
    <div class="portfolio" v-for="(p, i) in portfolios" :key="i">
      <div class="content">
        <h1>{{ p.attributes.title }}</h1>
        <p>{{ p.attributes.description }}</p>
        <p class="stack">Tech: <span v-for="(t, i) in p.attributes.tech" :key="i">{{ t }}</span></p>
      </div>
      <a :href="p.attributes.link" target="_blank" title="link to the project">
        <img :src="p.attributes.image" alt="agatevure projects">
      </a>
    </div>
  </div>
</template>


<script>
  import portfolios from '~/contents/portfolios'
  export default {

    head () {
      return {
        title: 'Portfolio - Glory Agatevure',
        meta: [
          { hid: 'description', name: 'description', content: 'My recent projects' }
        ],
        script: [
          { src: 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'}
        ]
      }
    },

    async asyncData({ app }) {
      async function awaitImport(portfolio) {
        const wholeMD = await import(`~/contents/portfolio/${portfolio.slug}.md`)
        if (wholeMD) {
          return {
            attributes: wholeMD.attributes,
            link: portfolio.slug
          }
        }
      }

      return await Promise.all(portfolios.map(portfolio => awaitImport(portfolio))
      ).then(res => {
        return {
          portfolios: res
        }
      })
    },

    mounted() {

      typeof particlesJS ? particlesJS("particles-js", {
        "particles": {
          "number": {
            "value": 355,
            "density": {
              "enable": true,
              "value_area": 789.1476416322727
            }
          },
          "color": {
            "value": "#000"
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            },
            "image": {
              "src": "img/github.svg",
              "width": 100,
              "height": 100
            }
          },
          "opacity": {
            "value": 0.78927153781200905,
            "random": false,
            "anim": {
              "enable": true,
              "speed": 0.6,
              "opacity_min": 0,
              "sync": false
            }
          },
          "size": {
            "value": 2,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 0,
              "sync": false
            }
          },
          "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#000",
            "opacity": 0.3,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 0.8,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "bubble"
            },
            "onclick": {
              "enable": true,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 400,
              "line_linked": {
                "opacity": 1
              }
            },
            "bubble": {
              "distance": 83.91608391608392,
              "size": 1,
              "duration": 3,
              "opacity": 1,
              "speed": 3
            },
            "repulse": {
              "distance": 200,
              "duration": 0.4
            },
            "push": {
              "particles_nb": 4
            },
            "remove": {
              "particles_nb": 2
            }
          }
        },
        "retina_detect": true
      }) : '';
    }

  }
</script>

<style scoped>
  a{
    cursor: pointer;
  }
  canvas {
    display: block;
    vertical-align: bottom;
  }


  /* ---- particles.js container ---- */

  #particles-js {
    position: absolute;
    width: 100%;
    min-height: 100vh;
  }


  .portfolio{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 48px;
    width: 80%;
    margin: 70px auto;
    color: #7e7e7e;
  }
  .content h1:after{
    display: block;
    width: 100px;
    border-bottom: 3px solid #f9a825;
    margin-top: 20px;
    content: '';
  }
  .stack{
    font-weight: 700;
  }
  span{
    margin: 0 4px;
    padding: 3px 4px;
    border-radius: 5px;
    font-weight: 500;
    background: #f4f4f4;
  }
  img{
    max-width: 350px;
  }
  .bounce-in-top {
    text-align: center;
    color: #7e7e7e;
    -webkit-animation: bounce-in-top 1.1s both;
    animation: bounce-in-top 1.1s both;
  }
  /* ----------------------------------------------
   * Generated by Animista on 2019-8-6 17:59:6
   * w: http://animista.net, t: @cssanimista
   * ---------------------------------------------- */

  /**
   * ----------------------------------------
   * animation bounce-in-top
   * ----------------------------------------
   */
  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }

  @media(max-width: 767px) {
    .portfolio{
      grid-template-columns: 1fr;
      width: 90%;
    }
    .go-home{
      margin-left: 20px;
    }
  }
</style>