<script setup lang='ts'>
import type { FormSubmitEvent } from '@nuxt/ui'

const state = reactive<Partial<LoginSchema>>({
    email: undefined,
    password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<LoginSchema>) {
    const response = await $fetch('/api/login', {
        method: 'post',
        body: event.data
    })
    if (response.status == 'success') {
        toast.add({ title: response.message, color: 'success' })
        await navigateTo('/loop')
    } else {
        toast.add({ title: response.message, color: 'error' })
    }
}
</script>

<template>
    <div class="w-screen h-screen bg-bg overflow-hidden relative">

        <SharedBackground />

        <div
            class="flex flex-col gap-4 w-65 items-center absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">

            <div class="flex gap-2 items-center">
                <h3 class="text-2xl">Вход</h3>
                <NuxtImg class="h-8" src="/logo.png" />
            </div>


            <UForm class=" space-y-4 bg-white/4 backdrop-blur-lg border border-white/10 px-4 py-6 rounded-xl w-full"
                :schema="loginSchema" :state="state" @submit="onSubmit">
                <UFormField label="Email" name="email" size="lg" class="w-full">
                    <UInput v-model="state.email" class="w-full"/>
                </UFormField>

                <UFormField label="Password" name="password" size="lg" class="w-full">
                    <UInput v-model="state.password" type="password" class="w-full"/>
                </UFormField>

                <UButton type="submit" class="text-bg">
                    Войти
                </UButton>
            </UForm>

            <div
                class="w-full p-2 gap-2 flex flex-col items-center rounded-xl border border-white/10 bg-white/4 backdrop-blur-lg">
                <p class='text-sm'>Ещё нет аккаунта?</p>
                <UButton to="/registration" variant="outline" trailing-icon="i-lucide-arrow-right">Регистрация</UButton>
            </div>
        </div>

    </div>
</template>

<style scoped></style>