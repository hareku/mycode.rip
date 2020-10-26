<template>
  <div class="app-container">
    <header>
      <div class="site-title">
        <nuxt-link :to="{ name: 'index' }" exact class="site-title__link">mycode.rip</nuxt-link>
      </div>
      <div class="site-description grey-text">エンジニアのブログです。</div>
    </header>

    <main class="main">
      <slot/>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-container {
  max-width: 720px;
  margin-right: auto;
  margin-left: auto;
  padding: 20px;
}

.site-title {
  font-size: 4.6rem;
  line-height: 1.3;
  font-weight: bold;
  text-align: center;

  &__link {
    color: inherit;
    opacity: 1;

    &:hover {
      opacity: .9;
    }
  }
}

.site-description {
  margin-top: 6px;
  text-align: center;
}

.main {
  margin-top: 30px;
}
</style>
