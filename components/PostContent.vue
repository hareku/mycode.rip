<template>
  <div>
    <div class="post-info">
      <time :datetime="post.sys.createdAt">{{ displayCreatedAt }}</time>

      <span class="grey-text">{{ category.fields.title }}</span>
    </div>

    <h1 class="post-title">{{ post.fields.title }}</h1>

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
    },

    includes: {
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
    },

    category () {
      const categoryId = this.post.fields.category.sys.id
      return this.includes.Entry.find(entry => {
        return entry.sys.id === categoryId
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.post-info {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: flex-start;

  > *:first-child {
    margin-right: 12px;
  }
}

.post-title {
  margin-top: 6px;
}
</style>
