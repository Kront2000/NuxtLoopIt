<script setup lang='ts'>


import type { FormSubmitEvent } from '@nuxt/ui'

const router = useRouter()

const state = reactive<Partial<RegisSchema>>({
    email: undefined,
    password: undefined,
    name: undefined,
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<RegisSchema>) {
    const response = await $fetch('/api/registration', {
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
                <h3 class="text-2xl">Создание аккаунта</h3>
            </div>


            <UForm class=" space-y-4 bg-white/4 backdrop-blur-lg border border-white/10 px-4 py-6 rounded-xl w-full"
                :schema="regisSchema" :state="state" @submit="onSubmit">
                <UFormField label="Email" name="email" class="w-full">
                    <UInput v-model="state.email" class="w-full"/>
                </UFormField>

                <UFormField label="Name" name="name" class="w-full">
                    <UInput v-model="state.name" class="w-full"/>
                </UFormField>

                <UFormField label="Password" name="password" class="w-full">
                    <UInput v-model="state.password" type="password" class="w-full"/>
                </UFormField>

                <UButton type="submit" class="text-bg">
                    Создать
                </UButton>
            </UForm>

            <div
                class="w-full p-2 gap-2 flex flex-col items-center rounded-xl border border-white/10 bg-white/4 backdrop-blur-lg">
                <p class='text-sm'>Уже есть аккаунт?</p>
                <UButton to="/login" variant="outline" trailing-icon="i-lucide-arrow-right">Войти</UButton>
            </div>
        </div>

    </div>
</template>

<style scoped></style>