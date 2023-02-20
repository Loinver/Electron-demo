<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2023-02-17 14:09:09
 * @LastEditors: Linyer
 * @LastEditTime: 2023-02-20 09:07:01
-->
<script setup>
import HelloWorld from './components/HelloWorld.vue';
const platform = window.electronAPI.platform;
</script>

<template>

  <HelloWorld msg="111213123123121" />
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
