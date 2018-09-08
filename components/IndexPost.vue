<template>
  <div>
    <div>
      <time :datetime="post.sys.createdAt">{{ displayCreatedAt }}</time>
    </div>

    <h1>
      <nuxt-link :to="{ name: 'slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link>
    </h1>
  </div>
</template>

<script>
import moment from '~/plugins/moment'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    displayCreatedAt () {
      return moment(this.post.sys.createdAt).format('YYYY-MM-DD')
    },

    renderedContent () {
      return this.$md.render(this.post.fields.content)
    }
  }
}
</script>
