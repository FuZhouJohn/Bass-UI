<template>
  <button
    class="bass-button"
    :class="{ [`bass-button-theme-${theme}`]: theme }"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

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
  setup(_, context) {},
});
</script>
<style lang="scss">
$h: 36px;
$border-color: #ced6e0;
$color: #2f3542;
$orange: #ffa502;
$radius: 5px;
$radius-top-right: $h/2;
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
  &.bass-button-theme-primary {
    border-color: $orange;
    background-color: $orange;
    box-shadow: none;
    color: #fff;
    &:hover,
    &:focus {
      background-color: lighten($orange, 10%);
    }
  }
  &.bass-button-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $orange;
    &:hover,
    &:focus {
      color: lighten($orange, 10%);
    }
  }
  &.bass-button-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }
}
</style>
