<!--
 * @Description:
 * @Version:
 * @Author: Linyer
 * @Date: 2023-02-17 14:09:09
 * @LastEditors: Linyer
 * @LastEditTime: 2023-02-20 10:26:38
-->
<script setup>
  import { ref } from 'vue'

  defineProps({ msg: String })
  const count = ref(10)
</script>

<template>
  {{ msg }}
</template>

<style lang="scss" scoped>
  p {
    a {
      color: #42b983;
    }

    code {
      background-color: #eee;
      padding: 2px 4px;
      border-radius: 4px;
      color: #304455;
    }
  }

  label {
    margin: 0 0.5em;
    font-weight: bold;
  }
</style>
