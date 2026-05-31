<script setup lang='ts'>
defineProps<{
    task: Tasks
}>()
</script>

<template>
    <div class="flex flex-col w-full rounded-xl bg-white/3 border border-white/10 backdrop-blur-2xl p-4 gap-2
        transition duration-200 hover:scale-105">
        <div class="flex justify-between">
            <p class="font-roboto ">{{ task.name }}</p>

        </div>

        <span v-if="task.description" class="w-full h-px bg-white/10"></span>
        
        <p v-if="task.description" class="text-sm text-white/80  ">{{ task.description }}</p>
    </div>
</template>

<style scoped></style>