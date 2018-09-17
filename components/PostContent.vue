<template>
  <div>
    <div>
      <time :datetime="post.sys.createdAt">{{ displayCreatedAt }}</time>
    </div>

    <h1>{{ post.fields.title }}</h1>

    <div v-html="renderedContent"></div>

    <hr />
    <AboutMe/>
  </div>
</template>

<script>
import dateformat from 'dateformat'
import AboutMe from './AboutMe'

export default {
  components: { AboutMe },

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
