<template>
  <div>
    <h1>{{ error.statusCode }} Error</h1>
    <p>{{ title }}</p>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Error,
      required: true
    }
  },

  head () {
    return {
      title: this.title
    }
  },

  computed: {
    title () {
      if (this.error.statusCode === 404) {
        return 'お探しのページは見つかりませんでした。'
      }

      return this.error.message || 'エラーが発生しました。'
    }
  }
}
</script>
