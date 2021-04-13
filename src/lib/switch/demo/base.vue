<template>
  <Switch v-model="checked"></Switch>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Switch } from 'bass-ui';
const checked = ref(true);
</script>
