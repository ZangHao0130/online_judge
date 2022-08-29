<template>
    <div class="editor" ref="editor">

    </div>
</template>
    
<script setup lang='ts'>
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import { onMounted, ref } from 'vue';

const editor = ref<HTMLElement>();

onMounted(() => {
    if (!editor.value) return;
    monaco.editor.create(editor.value, {
        value: "function hello() {\n\talert('Hello world!');\n}",
        language: 'typescript',
        theme: 'vs-dark'
    });
})

</script>
<style lang="less" scoped>
.editor {
    display: flex;
    justify-content: center;
    height: 100vh;
    width: 100vw;
}
</style>