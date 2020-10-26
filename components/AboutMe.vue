<template>
  <div>
    <div class="profile-head">About me</div>

    <ul>
      <li v-for="link in LINKS" :key="link.url">
        <a :href="link.url" target="_blank" rel="nofollow noreferrer">{{ link.text }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
const LINKS = [
  {
    url: 'https://twitter.com/hareku908',
    text: 'Twitter'
  },
  {
    url: 'https://github.com/hareku',
    text: 'GitHub'
  },
  {
    url: 'https://atcoder.jp/users/hareku',
    text: 'AtCoder'
  },
  {
    url: 'https://qiita.com/hareku',
    text: 'Qiita'
  }
]

export default {
  data() {
    return {
      LINKS
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-head {
  font-size: 2rem;
  font-weight: bold;
}
</style>
