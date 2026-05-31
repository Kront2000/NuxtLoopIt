<script setup lang='ts'>
const props = defineProps<{
    tasks: Tasks[] | undefined,
    type: string,
    name: string,
}>()
const currentTasks = computed(() => {
    if(!props.tasks){
        return []
    } else {
        return props.tasks.filter((item) => item.type == props.type)
    }
}) 
const isMenuOpen = ref(false)
</script>

<template>
    <div v-if="currentTasks && currentTasks.length > 0 " class="flex flex-col gap-4 w-96 min-h-40">
        <div class="flex justify-between mr-2 items-center">
            <p class="text-2xl font-roboto">{{ name }}</p>
        </div>

        <LoopTasksCard :task="value" v-for="value in currentTasks" />

    </div>
</template>

<style scoped></style>