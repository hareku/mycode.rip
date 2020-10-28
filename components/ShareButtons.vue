<template>
  <client-only>
    <div class="share-buttons">
      <div>
        <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-size="large" :data-text="shareText" data-related="hareku908" data-show-count="false">Tweet</a>
      </div>

      <div>
        <a href="https://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label" data-hatena-bookmark-lang="ja" data-hatena-bookmark-height="28" title="このエントリーをはてなブックマークに追加">
          <img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" />
        </a>
      </div>
    </div>
  </client-only>
</template>

<script>
export default {
  props: {
    shareText: {
      type: String,
      required: true
    }
  },

  mounted() {
    const links = [
      'https://platform.twitter.com/widgets.js',
      'https://b.st-hatena.com/js/bookmark_button.js',
    ]

    const body = document.querySelector('body')
    if(body) {
      links.forEach(link => {
        const script = document.createElement('script')
        script.setAttribute('src', link)
        script.setAttribute('async', 'async')
        body.appendChild(script)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.share-buttons {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  > * {
    margin-right: 6px;
  }
}
</style>
