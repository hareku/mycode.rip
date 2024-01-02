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
    url: 'https://github.com/hareku',
    text: 'GitHub @hareku'
  },
  {
    url: 'https://atcoder.jp/users/hareku',
    text: 'AtCoder @hareku'
  },
]

export default {
  data() {
    return {
      LINKS
    }
  }
}
</script>

<style scoped>
.profile-head {
  font-size: 2rem;
  font-weight: bold;
}
</style>
