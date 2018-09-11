<template>
  <div>
    <div>
      <time :datetime="post.sys.updatedAt">{{ displayUpdatedAt }}</time>
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
    displayUpdatedAt () {
      return dateformat(new Date(this.post.sys.updatedAt), 'yyyy-mm-dd')
    },

    renderedContent () {
      return this.$md.render(this.post.fields.content)
    }
  }
}
</script>
