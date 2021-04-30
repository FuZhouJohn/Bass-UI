<template>
  <template v-if="visible">
    <div class="bass-dialog-overlay"></div>
    <div class="bass-dialog-wrapper">
      <div class="bass-dialog">
        <header>
          <span>标题</span>
          <span class="bass-dialog-close"></span>
        </header>
        <main>
          <p>内容 1</p>
          <p>内容 2</p>
        </main>
        <footer>
          <Button level="primary">OK</Button>
          <Button>Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>
<script lang="ts">
import Button from '../button/index.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Button,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.bass-dialog {
  background: white;
  border-radius: $radius;
  border-top-right-radius: 24px;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 50vw;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  > main {
    padding: 12px 16px;
  }
  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>
