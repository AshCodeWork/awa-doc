<template>
  <div class="awa-doc-container awa-doc-row" :class="{ 'awa-doc-container--with-simulator': hasSimulator }">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'awa-doc-container',

  props: {
    hasSimulator: Boolean
  }
};
</script>

<style lang="scss" >
@import '../style/variable';
// @import "../style/index";

.awa-doc-container {
  overflow: hidden;
  box-sizing: border-box;
  padding-left: $awa-doc-nav-width;

  &--with-simulator {
    padding-right: calc(#{$awa-doc-simulator-width} + #{$awa-doc-padding});

    @media (max-width: 1300px) {
      padding-right: calc(#{$awa-doc-simulator-small-width} + #{$awa-doc-padding});
    }
  }
}
</style>
