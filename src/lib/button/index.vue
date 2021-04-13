<template>
  <button class="bass-button" :class="classes">
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
  props: {
    theme: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'normal',
    },
  },
  setup(props) {
    const { theme, size } = props;
    const classes = computed(() => ({
      [`bass-theme-${theme}`]: theme,
      [`bass-size-${size}`]: size,
    }));
    return {
      classes,
    };
  },
});
</script>
<style lang="scss">
$h: 36px;
$border-color: #ced6e0;
$color: #2f3542;
$orange: #ffa502;
$radius: 5px;
$radius-top-right: $h/2 + 6px;
.bass-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 18px 0 16px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  font-size: 16px;
  border: 1px solid $border-color;
  border-radius: $radius;
  border-top-right-radius: $radius-top-right;
  box-shadow: 0 1px 0 fade-out(#2f3542, 0.95);
  & + & {
    margin-left: 8px;
  }
  &:hover,
  &:focus {
    color: $orange;
    border-color: $orange;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  &.bass-theme-button {
    border-color: $border-color;
    background-color: white;
    box-shadow: 0 1px 0 fade-out(#2f3542, 0.95);
    color: $color;
    &:hover,
    &:focus {
      color: $orange;
      border-color: $orange;
    }
  }
  &.bass-theme-primary {
    border-color: $orange;
    background-color: $orange;
    box-shadow: none;
    color: #fff;
    &:hover,
    &:focus {
      background-color: lighten($orange, 10%);
    }
  }
  &.bass-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $orange;
    &:hover,
    &:focus {
      color: lighten($orange, 10%);
    }
  }
  &.bass-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
  &.bass-size-small {
    height: $h - 10px;
    padding: 0 8px 0 6px;
    font-size: 14px;
    border-radius: $radius - 2px;
    border-top-right-radius: ($h - 10px) / 2 + 3px;
  }
  &.bass-size-large {
    height: $h + 10px;
    padding: 0 24px 0 22px;
    font-size: 18px;
    border-radius: $radius + 2px;
    border-top-right-radius: ($h + 10px) / 2 + 9px;
  }
}
</style>
