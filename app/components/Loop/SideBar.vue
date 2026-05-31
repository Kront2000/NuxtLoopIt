<script setup lang='ts'>


const props = defineProps<{
    logout: () => Promise<void>
}>()


</script>

<template>
    <div
        class="flex flex-col items-center p-2 pt-8 h-screen w-17.5 border-r border-white/20 bg-white/4 gap-8 absolute top-0 left-0">
        <NuxtImg src="/favicon.png" class="w-full" />

        <UModal class="w-fit " :ui="{body: 'bg-black'}">
            <UTooltip text="Выйти из аккаунта">
                <UButton icon="i-lucide-log-out" variant="ghost" size="xl" color="neutral" />
            </UTooltip>
            <template #content>
                <div class="flex flex-col items-center p-4 gap-4">
                    <p>Вы увурены что хотите выйти?</p>
                    <UButton @click="() => { logout(); navigateTo('/') }">Выйти</UButton>
                </div>
            </template>
        </UModal>

        <LoopCreateTaskForm />

    </div>
</template>

<style scoped></style>