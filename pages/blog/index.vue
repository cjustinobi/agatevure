<template>
    <div>
        <h1>My awesome posts</h1>
        <PostCard v-for="(blog, index) in blogList" :key="index" :articleInfo="blog"/>
    </div>
</template>

<script>

    import PostCard from '~/components/postCard'
    import blogs from '~/contents/blogs'

    export default {

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
        }
    }
</script>