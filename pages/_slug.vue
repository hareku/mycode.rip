<template>
  <div>
    <PostContent :post="post" />

    <ShareButtons class="page-share-buttons"/>
  </div>
</template>

<script>
import strLimit from '~/utils/str-limit'
import h2p from 'html2plaintext'
import PostContent from '~/components/PostContent'
import ShareButtons from '~/components/ShareButtons'

export default {
  components: { PostContent, ShareButtons },

  asyncData ({ app, params, error }) {
    const select = [
      'sys.createdAt',
      'fields.title',
      'fields.slug',
      'fields.content',
    ]

    return app.$contentful.getEntries({
        content_type: 'post',
        select: select.join(','),
        'fields.slug': params.slug,
        limit: 1
      }).then(({ items }) => {
        if (items.length === 0) {
          return error({ statusCode: 404 })
        }

        return {
          post: items[0]
        }
      }).catch(error => {
        return error({ statusCode: 500 })
      })
  },

  head () {
    const description = strLimit(h2p(this.$md.render(this.post.fields.content)).replace(/\r?\n/g, ''), 400)

    return {
      title: this.post.fields.title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'og:title', property: 'og:title', content: this.post.fields.title },
        { hid: 'og:description', property: 'og:description', content: description }
      ]
    }
  }
}
</script>

<style>
.page-share-buttons {
  margin-top: 70px;
}
</style>
