<script setup lang='ts'>
</script>

<template>
    <div
        class="w-full h-screen p-[4vw] bg-linear-210 from-teal-800 to-backround flex flex-col  items-center font='Roboto'">
        <div class="w-full">
            <NuxtLink to="/"><img src="/public/logo.png" class="h-10" alt=""></NuxtLink>
        </div>

        <div class="flex w-full @container">
            <div class="w-full lg:w-1/2   mt-10 grid grid-cols-1 md:grid-cols-2  gap-[6cqw] lg:gap-[3cqw] items-center">
                <LoopMicrotasks />
                <LoopCallStack />
                <LoopMicrotasks />
                <LoopCallStack />
            </div>
        </div>
    </div>
</template>

<style></style>