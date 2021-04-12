<template>
  <Switch v-model="checked"></Switch>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Switch } from 'bass-ui';
export default defineComponent({
  components: { Switch },
  setup() {
    const checked = ref(true)
    return {
      checked
    }
  }
});
</script>
