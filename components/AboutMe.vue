<template>
  <div>
    <div class="profile-head">About me</div>
    <div class="profile-body">名古屋でWebエンジニアやっています。</div>

    <ul class="profile-links">
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

<style lang="scss" scoped>
.profile-head {
  font-size: 2rem;
}

.profile-body {
  margin-top: 6px;
}

.profile-links {
  margin-top: 6px;
  padding-left: 6px;
  list-style-position: inside;
  list-style-type: square;

  > li {
    margin-bottom: 3px;
  }
}
</style>
