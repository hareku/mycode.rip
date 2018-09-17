<template>
  <div>
    <div class="post-date">
      <time :datetime="post.sys.createdAt">{{ displayCreatedAt }}</time>
    </div>

    <h1>
      <nuxt-link :to="{ name: 'slug', params: { slug: post.fields.slug }}" class="post-title">{{ post.fields.title }}</nuxt-link>
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
    displayCreatedAt () {
      return dateformat(new Date(this.post.sys.createdAt), 'yyyy-mm-dd')
    },

    renderedContent () {
      return this.$md.render(this.post.fields.content)
    }
  }
}
</script>

<style lang="scss" scoped>
.post-title {
  color: inherit;

  &:hover {
    opacity: 0.8;
  }
}
</style>
