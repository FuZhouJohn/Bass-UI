<template>
  <Dialog v-model:visible="visible" @ok="handleOk" style="color: red"></Dialog>
  <Button @click="toggleVisible">open Dialog</Button>
</template>

<script setup lang="ts">
import { Dialog } from 'bass-ui';
import { Button } from 'bass-ui';
import { ref } from 'vue';

const visible = ref(false);
const toggleVisible = () => {
  visible.value = !visible.value;
};
const handleOk = () => {
  visible.value = false;
};
</script>
