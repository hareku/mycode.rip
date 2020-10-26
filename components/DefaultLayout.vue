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

      <hr />
      <AboutMe/>

      <p><a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</a>.</p>
      <p>This blog's source code is published on <a href="https://github.com/hareku/mycode.rip" target="_blank" rel="nofollow noreferrer">GitHub</a>.</p>
    </main>
  </div>
</template>

<script>
import AboutMe from '~/components/AboutMe'

export default {
  components: { AboutMe },
}
</script>

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
