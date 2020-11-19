<template>
  <div>
    <h1 class="post-title">{{ post.fields.title }}</h1>

    <div>Posted: <time :datetime="post.sys.createdAt">{{ displayCreatedAt }}</time></div>

    <hr class="post-top-hr" >

    <div v-html="renderedContent"></div>
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
  margin-bottom: 12px;
}

.post-top-hr {
  margin-top: 16px;
  margin-bottom: 28px;
}
</style>
