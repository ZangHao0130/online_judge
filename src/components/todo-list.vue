<template>
    <div class="todo-list">
        <input type="text" v-model="title" @keydown.enter="addTodo">
        <button v-if="active < all" @click="clear">清理已完成</button>
        <ul>
            <li v-for="todo in todoList">
                <input type="checkbox" v-model="todo.done">
                <span :class="{ done: todo.done }">{{ todo.title }}</span>
            </li>
        </ul>

        <div>
            <p>
                全选
                <input type="checkbox" v-model="allDone">
            </p>
            <p>待处理{{active}} / 总数{{all}}</p>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { ref, computed } from 'vue';

const title = ref('');
const todoList = ref([{ title: '学习', done: false }])

const active = computed(() => {
    return todoList.value.filter(todo => !todo.done).length
})

const all = computed(() => {
    return todoList.value.length
})

const allDone = computed({
    get() {
        return active.value === 0;
    },
    set(value: boolean) {
        todoList.value.forEach(todo => {
            todo.done = value;
        })
    }
})

/**
 * 添加todo
 */
const addTodo = () => {
    todoList.value.push({
        title: title.value,
        done: false,
    })
}

/**
 * 移除已办事项
 */
const clear = () => {
    todoList.value = todoList.value.filter(todo => !todo.done);
}



</script>
    
<style lang="less" scoped>
.todo-list {
    .done {
        text-decoration: line-through;
        color: aquamarine;
    }
}
</style>