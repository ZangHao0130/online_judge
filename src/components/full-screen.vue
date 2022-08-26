<template>
    <button @click="toggle">全屏测试</button>
</template>
    
<script setup lang='ts'>
import { useFullscreen } from '@vueuse/core';
const { toggle } = useFullscreen()
</script>
    
<style>
</style>