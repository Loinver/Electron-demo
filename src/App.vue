<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2023-02-17 14:09:09
 * @LastEditors: Linyer
 * @LastEditTime: 2023-02-20 09:55:52
-->
<script setup>
import HelloWorld from './components/HelloWorld.vue';
const platform = window.electronAPI.platform;

</script>

<template>

  <HelloWorld msg="1112221" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
