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

  asyncData ({ app }) {
    const select = [
      'sys.createdAt',
      'fields.title',
      'fields.slug'
    ]

    return app.$contentful.getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
        select: select.join(',')
      })
      .then(({ items }) => {
        return { posts: items }
      })
  },

  head () {
    return {
      titleTemplate: null
    }
  }
}
</script>
