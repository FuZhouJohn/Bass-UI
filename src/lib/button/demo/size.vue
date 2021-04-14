<template>
  <div class="item">
    <Button size="small">Small Button</Button>
    <Button level="primary">Normal Button</Button>
    <Button size="large" level="danger">Large Button</Button>
  </div>
  <div class="item">
    <Button theme="link" size="small">Small Button</Button>
    <Button theme="link">Normal Button</Button>
    <Button theme="link" size="large">Large Button</Button>
  </div>
  <div class="item">
    <Button theme="dashed" size="small">Small Button</Button>
    <Button theme="dashed">Normal Button</Button>
    <Button theme="dashed" size="large">Large Button</Button>
  </div>
</template>
<script setup lang="ts">
import { Button } from 'bass-ui';
</script>

<style lang="scss" scoped>
.item {
  & + .item {
    margin-top: 10px;
  }
}
</style>
