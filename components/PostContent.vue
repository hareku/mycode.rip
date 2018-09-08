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
import moment from '~/plugins/moment'
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
      return moment(this.post.sys.createdAt).format('YYYY-MM-DD')
    },

    renderedContent () {
      return this.$md.render(this.post.fields.content)
    }
  }
}
</script>
