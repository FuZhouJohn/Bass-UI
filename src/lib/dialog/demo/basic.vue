<template>
  <Dialog :visible="visible"></Dialog>
  <Button @click="toggleVisible">toggle</Button>
</template>

<script setup lang="ts">
import { Dialog } from 'bass-ui';
import { Button } from 'bass-ui';
import { ref } from 'vue';

const visible = ref(false);
const toggleVisible = () => {
  visible.value = !visible.value;
};
</script>
