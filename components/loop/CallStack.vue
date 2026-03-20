<script setup lang='ts'>
import type { microTasks } from 'hub:db:schema';


const { data: tasks, refresh } = await useFetch('/api/todos/microTasks', {
    method: 'GET',
    query: { id: 1 }
})

type microTask = typeof microTasks.$inferSelect;


</script>



<template>
    <div
        class="w-full flex flex-col gap-[2cqw] md:gap-[1cqw] lg:gap-[0.5cqw] rounded-2xl bg-linear-210 from-teal-500/5 to-cyan-500/5 border-[0.5px] p-[4cqw] md:p-[2cqw] lg:p-[1cqw] border-white/30  @container">
        <div class="flex justify-between items-center mb-[5cqw]">
            <h4 class="font-medium text-[7cqw] font-roobert text-teal-50">CALL STACK</h4>
            <UIcon name="i-lucide-ellipsis-vertical" class="h-[8cqw] w-[8cqw] bg-teal-50" />
        </div>

        <div v-for="todo in tasks"
            class="w-full flex flex-col p-[3cqw] bg-gray-900/30 border border-gray-50/5 rounded-[5cqw] @container">
            <h5 class="font-roobert w-full text-[7cqw] text-teal-50">
                {{ todo.content }}
            </h5>
        </div>

    </div>
</template>

<style></style>