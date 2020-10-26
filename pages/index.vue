<template>
  <div>
    <IndexPost v-for="post in posts" :key="post.sys.id" :post="post" class="index-post"/>
  </div>
</template>

<script>
import IndexPost from '~/components/IndexPost'

export default {
  components: { IndexPost },

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
      .then(({ items, includes }) => {
        return {
          posts: items,
          includes
        }
      })
  },

  head () {
    return {
      titleTemplate: null
    }
  }
}
</script>

<style lang="scss" scoped>
.index-post {
  margin-top: 24px;
}
</style>
