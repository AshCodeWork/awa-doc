<template>
  <section class="awa-doc-demo-block">
    <h2 class="awa-doc-demo-block__title">{{ title }}</h2>
    <slot />
  </section>
</template>

<script>
export default {
  name: 'awa-doc-demo-block',

  props: {
    title: String
  }
};
</script>

<style lang="scss" >
@import '../style/variable';

.awa-doc-demo-block {
  &__title {
    margin: 0;
    font-weight: normal;
    font-size: 14px;
    color: $awa-doc-dark-grey;
    padding: 35px 15px 15px;
  }

  &:first-of-type {
    .awa-doc-demo-block__title {
      padding-top: 20px;
    }
  }
}
</style>
