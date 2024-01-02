<template>
  <div>
    <h1 class="post-head">
      <nuxt-link :to="{ name: 'slug', params: { slug: post.fields.slug }}" class="post-head__title">{{ post.fields.title }}</nuxt-link>
    </h1>

    <div class="post-date">
      <time :datetime="post.sys.createdAt">{{ displayCreatedAt }}</time>
    </div>
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

<style scoped>
.post-head {
  font-size: 2rem;
  margin-bottom: 4px;
}

.post-head__title {
  color: inherit;
}

.post-head__title:hover {
  opacity: 0.8;
}
</style>
