<template>
  <Button level="primary" @click="handleClick" loading>主要按钮</Button>
  <Button>默认按钮</Button>
  <Button level="danger">危险按钮</Button>
  <Button theme="dashed">虚线按钮</Button>
  <Button theme="link">链接按钮</Button>
</template>
<script lang="ts" setup>
import { Button } from 'bass-ui';
const handleClick = (e: MouseEvent) => {
  console.log(e);
};
</script>
