<template>
  <Button loading>按钮禁用</Button>
  <Button loading level="primary">按钮禁用</Button>
  <Button loading level="danger">按钮禁用</Button>
  <Button theme="dashed" loading>虚线按钮禁用</Button>
  <Button theme="link" loading>链接按钮禁用</Button>
</template>
<script setup lang="ts">
import { Button } from 'bass-ui';
</script>
