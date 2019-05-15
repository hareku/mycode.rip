<template>
  <div>
    <h1>About me</h1>
    <div class="profile-descriptions">
      <div>Name: hareku</div>
      <div>Job: Software Engineer</div>
    </div>

    <h2>Loves</h2>
    <div class="profile-descriptions">
      <ul>
        <li>Go</li>
        <li>Kubernetes</li>
        <li>Terraform</li>
        <li>AWS</li>
      </ul>
    </div>

    <h2>Links</h2>
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

    <p>This blog source code is on GitHub (<a href="https://github.com/hareku/mycode.rip" target="_blank" rel="nofollow noopener">hareku/mycode.rip</a>)</p>

  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About me',
      meta: [
        { hid: 'og:title', property: 'og:title', content: 'About me' },
        { hid: 'og:description', property: 'og:description', content: 'About me' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.profile-descriptions {
  margin-bottom: 20px;
  > * {
    margin-bottom: 8px;
  }
}
</style>
