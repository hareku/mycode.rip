<template>
  <div>
    <div class="profile-head">
      <nuxt-link :to="{ name: 'profile' }">About me</nuxt-link>
    </div>
    <div class="profile-body">{{ aboutMe }}</div>

    <ul>
      <li>
        <a href="https://qiita.com/hareku" target="_blank" rel="nofollow noreferrer">Qiita @hareku</a>
      </li>
      <li>
        <a href="https://github.com/hareku" target="_blank" rel="nofollow noreferrer">GitHub @hareku</a>
      </li>
      <li>
        <a href="https://twitter.com/hareku908" target="_blank" rel="nofollow noreferrer">Twitter @hareku908</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    aboutMe () {
      return { name: 'hareku', job: 'Software Engineer' }
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-head {
  font-size: 2rem;
}

.profile-body {
  margin-top: 6px;
}
</style>
