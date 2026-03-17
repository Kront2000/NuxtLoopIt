<script setup lang='ts'>
</script>

<template>
    <div class="w-full h-screen p-[4vw] bg-linear-210 from-teal-800 to-backround flex flex-col  items-center font='Roboto'">
        <div class="w-full"><NuxtLink to="/"><img src="/public/logo.png" class="h-10" alt=""></NuxtLink></div>

        <div class="w-full mt-10 flex flex-col gap-[6vw] items-center ">
            <LoopMicrotasks />
            <LoopCallStack />
        </div>
    </div>
</template>

<style></style>