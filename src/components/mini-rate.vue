<template>
    <div class="mini-rate">
        <div class="rate-wrapper" @mouseout="mouseOut">
            <span v-for="num in 5" :key="num" @mouseover="mouseOver(num)">☆</span>
            <span class="hollow" :style="fontWidth">
                <span @click="update(num)" v-for="num in 5" :key="num" @mouseover="mouseOver(num)">★</span>
            </span>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { computed, ref } from 'vue';

const props = defineProps({
    modelValue: {
        type: Number,
        default: 0,
    },
})

const width = ref(props.modelValue);

const emits = defineEmits(['update:modelValue']);

const fontWidth = computed(() => {
    return `width: ${width.value}em;`
})

const mouseOver = (num: number) => {
    console.log(num)
    width.value = num;
}

const mouseOut = () => {
    width.value = props.modelValue;
}

const update = (num: number) => {
    emits('update:modelValue', num)
}
</script>
    
<style lang="less" scoped>
.mini-rate {
    font-size: 50px;

    .rate-wrapper {
        position: relative;
        display: inline-block;
        cursor: pointer;
        -webkit-text-size-adjust: none;

        .hollow {
            position: absolute;
            display: inline-block;
            top: 0;
            left: 0;
            width: 0;
            overflow: hidden;
        }

        span {
            // display: inline-block;
            width: 50px;
        }
    }
}
</style>