<template>
    <article class="article-card" >
        <h3>post card</h3>
        <nuxt-link :to="`/blog/${articleInfo.link}`">
            <div class="card-inner">
                <p class="type">
                    {{ capitalize(articleInfo.attributes.type) }}
                </p>
                <h4>{{ articleInfo.attributes.title }}</h4>
            </div>
        </nuxt-link>
    </article>
</template>

<script>
    export default {
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