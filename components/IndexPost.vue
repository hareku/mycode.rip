<template>
  <div>
    <div>
      <time :datetime="post.sys.updatedAt">{{ displayUpdatedAt }}</time>
    </div>

    <h1>
      <nuxt-link :to="{ name: 'slug', params: { slug: post.fields.slug }}">{{ post.fields.title }}</nuxt-link>
    </h1>
  </div>
</template>

<script>
import dateformat from 'dateformat'

export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },

  computed: {
    displayUpdatedAt () {
      return dateformat(new Date(this.post.sys.updatedAt), 'yyyy-mm-dd')
    },

    renderedContent () {
      return this.$md.render(this.post.fields.content)
    }
  }
}
</script>
