<template>
  <div class="share-buttons">
    <div>
      <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-related="hareku908" data-show-count="false">Tweet</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </div>

    <div>
      <a href="http://b.hatena.ne.jp/entry/" class="hatena-bookmark-button" data-hatena-bookmark-layout="vertical-normal" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加">
        <img src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style="border: none;" />
      </a>
      <script type="text/javascript" src="https://b.st-hatena.com/js/bookmark_button.js" charset="utf-8" async="async"></script>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.share-buttons {
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  > * {
    margin-right: 6px;
  }
}
</style>
