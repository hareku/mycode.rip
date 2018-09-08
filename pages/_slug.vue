<template>
  <PostContent :post="post"/>
</template>

<script>
import h2p from 'html2plaintext'
import PostContent from '~/components/PostContent'

export default {
  components: { PostContent },

  async asyncData ({ app, params }) {
    const posts = await app.$contentful.getEntries({
      content_type: 'post',
      'fields.slug[in]': params.slug,
      limit: 1
    })

    return {
      post: posts.items[0]
    }
  },

  head () {
    const description = h2p(this.$md.render(this.post.fields.content)).replace(/\r?\n/g, '')

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
