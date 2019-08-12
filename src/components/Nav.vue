<template>
  <div class="awa-doc-nav" :style="style">
    <div class="awa-doc-nav__item" v-for="(item, index) in navConfig" :key="index">
      <awa-doc-nav-link :item="item" :base="base" />
      <div v-if="item.children">
        <div class="nav-item" v-for="(navItem, index) in item.children" :key="index">
          <awa-doc-nav-link :item="navItem" :base="base" />
        </div>
      </div>
      <div v-for="(group, index) in item.groups" :key="index">
        <div v-if="item.groups">
          <div class="awa-doc-nav__group-title">{{ group.groupName }}</div>
          <div v-if="group.list.length">
            <div :key="index" class="awa-doc-nav__subitem" v-for="(navItem, index) in group.list">
              <awa-doc-nav-link :item="navItem" :base="base" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLink from "./NavLink.vue";

export default {
  name: "awa-doc-nav",

  components: {
    [NavLink.name]: NavLink
  },

  props: {
    navConfig: Array,
    base: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      top: 60,
      bottom: 0
    };
  },

  computed: {
    style() {
      return {
        top: this.top + "px",
        bottom: this.bottom + "px"
      };
    }
  },

  created() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },

  methods: {
    onScroll() {
      const { pageYOffset: offset } = window;
      this.top = Math.max(0, 60 - offset);
    }
  }
};
</script>

<style lang="scss" >
@import "../style/variable";
// @import "../style/index";

.awa-doc-nav {
  left: 0;
  top: 60px;
  bottom: 0;
  z-index: 1;
  position: fixed;
  overflow-y: scroll;
  padding: 25px 0 75px;
  background-color: rgb(24, 22, 22);
  min-width: $awa-doc-nav-width;
  max-width: $awa-doc-nav-width;
  box-shadow: 0 8px 12px #ebedf0;
  border-right: 1px solid $awa-doc-border-color;

  @media (min-width: $awa-doc-row-max-width) {
    left: 50%;
    margin-left: calc(-#{$awa-doc-row-max-width}/2);
  }

  &::-webkit-scrollbar {
    height: 6px;
    width: 6px;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: transparent;
  }

  &:hover::-webkit-scrollbar-thumb {
    background-color: rgba(100, 69, 83, 0.2);
  }

  &__item,
  &__subitem {
    a {
      margin: 0;
      display: block;
      color: #ffffff;
      font-size: 16px;
      padding: 10px 10px 10px $awa-doc-padding;
      line-height: 24px;
      transition: all 0.3s;

      &.active {
        color: $awa-doc-blue;
      }
    }
  }

  &__item {
    > a {
      font-weight: bold;
    }
  }

  &__subitem {
    a {
      font-size: 14px;

      &:hover {
        color: $awa-doc-blue;
      }
    }

    span {
      font-size: 13px;
    }
  }

  &__group-title {
    font-size: 12px;
    line-height: 40px;
    padding-left: $awa-doc-padding;
    color: $awa-doc-text-light-blue;
  }

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;

    &__item,
    &__subitem {
      a {
        line-height: 22px;
      }
    }

    &__subitem {
      a {
        font-size: 13px;
      }
    }
  }
}
</style>
