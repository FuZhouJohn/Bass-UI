<template>
  <div class="item">
    <Button theme="primary" size="small">Small Button</Button>
    <Button theme="primary">Normal Button</Button>
    <Button theme="primary" size="large">Large Button</Button>
  </div>
  <div class="item">
    <Button size="small">Small Button</Button>
    <Button>Normal Button</Button>
    <Button size="large">Large Button</Button>
  </div>
  <div class="item">
    <Button theme="link" size="small">Small Button</Button>
    <Button theme="link">Normal Button</Button>
    <Button theme="link" size="large">Large Button</Button>
  </div>
  <div class="item">
    <Button theme="text" size="small">Small Button</Button>
    <Button theme="text">Normal Button</Button>
    <Button theme="text" size="large">Large Button</Button>
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
