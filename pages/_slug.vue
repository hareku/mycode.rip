<template>
  <PostContent :post="post"/>
</template>

<script>
import strLimit from '~/utils/str-limit'
import h2p from 'html2plaintext'
import PostContent from '~/components/PostContent'

export default {
  components: { PostContent },

  asyncData ({ app, params, error }) {
    return app.$contentful.getEntries({
        content_type: 'post',
        'fields.slug[in]': params.slug,
        limit: 1
      }).then(entries => {
        if (entries.items.length === 0) {
          return error({ statusCode: 404 })
        }

        return {
          post: entries.items[0]
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
        { hid: 'og:description', property: 'og:description', content: description },
        { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://mycode.rip/logo.png' }
      ]
    }
  }
}
</script>
