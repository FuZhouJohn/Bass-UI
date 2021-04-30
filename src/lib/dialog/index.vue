<template>
  <div class="dialog-overlay"></div>
  <div class="dialog-wrapper">
    <header>标题</header>
    <main>
      <p>内容 1</p>
      <p>内容 2</p>
    </main>
    <footer>
      <Button>OK</Button>
      <Button>Cancel</Button>
    </footer>
  </div>
</template>
<script lang="ts">
import Button from '../button/index.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    Button,
  },
});
</script>
