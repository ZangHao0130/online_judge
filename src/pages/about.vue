<template>
    <h1>关于我们</h1>
    <h2>评分: {{ rate }}</h2>
    <MiniRate v-model="rate" />
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
import MiniRate from '../components/mini-rate.vue';
const rate = ref(3);

</script>
    
<style lang="less" scoped>
</style>