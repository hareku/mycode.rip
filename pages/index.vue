<template>
  <div>
    <IndexPost v-for="post in posts" :key="post.sys.id" :post="post"/>

    <hr />
    <AboutMe/>
  </div>
</template>

<script>
import IndexPost from '~/components/IndexPost'
import AboutMe from '~/components/AboutMe'

export default {
  components: { IndexPost, AboutMe },

  async asyncData ({ app }) {
    const posts = await app.$contentful.getEntries({
        order: '-sys.createdAt'
      })
      .then(({ items }) => items)

    return { posts }
  },

  head () {
    return {
      titleTemplate: null
    }
  }
}
</script>
