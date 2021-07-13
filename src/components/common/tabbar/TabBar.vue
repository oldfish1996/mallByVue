<template>
  <div id="tabbar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: "TabBar"
};
</script>

<style>
#tabbar {
  display: flex;
  background-color: #eee;
}
</style>