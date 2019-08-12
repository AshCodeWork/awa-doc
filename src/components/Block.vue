<template>
  <div class="awa-doc-block">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'awa-doc-block'
};
</script>

<style lang="scss" >
@import '../style/variable';
// @import "../style/index";

.awa-doc-block {
  display: flex;
  margin-bottom: 20px;

  .highlight {
    flex: 1;
    box-sizing: border-box;

    pre {
      word-break: break-all;
    }
  }
}
</style>
