<template>
  <button
    class="bass-switch"
    :class="{ 'bass-checked': checked }"
    @click="toggle"
  >
    <span></span>
  </button>
</template>
<script lang="ts">
import { defineComponent, toRefs, computed } from 'vue';

export default defineComponent({
  name: 'b-switch',
  props: {
    modelValue: {
      type: [String, Boolean],
      default: false,
    },
  },
  emit: ['update:modelValue'],
  setup(props, context) {
    const { modelValue } = toRefs(props);
    const checked = computed({
      get(): boolean {
        return modelValue.value === true || modelValue.value === 'true';
      },
      set(value: boolean) {
        context.emit('update:modelValue', value);
      },
    });
    const toggle = () => {
      checked.value = !checked.value;
    };
    return {
      checked,
      toggle,
    };
  },
});
</script>
<style lang="scss">
$h: 24px;
$h2: $h - 6px;
.bass-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #a4b0be;
  border-radius: $h/2;
  border: 2px solid #a4b0be;
  position: relative;
  > span {
    position: absolute;
    top: 1px;
    left: 1px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms, width 250ms;
  }
  &:hover {
    border-color: lighten(#a4b0be, 10%);
    background-color: lighten(#a4b0be, 10%);
  }
  &:active {
    > span {
      width: calc(#{$h2} + 6px);
    }
  }
  &.bass-checked {
    background: #ffa502;
    border-color: #ffa502;
    > span {
      left: calc(100% - #{$h2} - 1px);
    }
    &:active {
      > span {
        left: calc(100% - #{$h2} - 7px);
      }
    }
    &:hover {
      border-color: lighten(#ffa502, 10%);
      background-color: lighten(#ffa502, 10%);
    }
  }
}
</style>
