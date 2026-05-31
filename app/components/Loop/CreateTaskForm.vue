<script setup lang='ts'>
import type { FormSubmitEvent } from '@nuxt/ui'
import { FetchError } from 'ofetch'
import { CalendarDate } from '@internationalized/date'



const open = ref(false)

const items = ref(['micro', 'macro', 'api', 'stack'])

const state = reactive<Partial<TaskSchema>>({
    name: '',
    description: '',
    finalTime: undefined,
    finalType: undefined,
    type: 'macro',
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<TaskSchema>) {
    console.log('fetch')
    try {
        await $fetch('/api/tasks', {
            method: 'post',
            body: event.data
        })
    } catch (err) {
        if (err instanceof FetchError) {
            toast.add({ title: err.message, color: 'error' })
        }
    }
    open.value = false;
    await refreshNuxtData('list-of-tasks')
}
</script>

<template>
    <UModal v-model:open="open" class="w-fit">
        <UTooltip text="Выйти из аккаунта">
            <UButton icon="i-lucide-square-plus" variant="ghost" size="xl" color="neutral" />
        </UTooltip>
        <template #content>
            <div class="flex flex-col items-center p-4 gap-4">
                <p>Добавить задачу</p>
                <UForm class=" space-y-4 bg-white/4 backdrop-blur-lg border border-white/10 px-4 py-6 rounded-xl w-full"
                    :schema="taskSchema" :state="state" @submit="onSubmit">
                    <UFormField label="Название" name="name" size="lg" class="w-full">
                        <UInput v-model="state.name" class="w-full" />
                    </UFormField>

                    <UFormField label="Описание" name="description" size="lg" class="w-full">
                        <UInput v-model="state.description" class="w-full" />
                    </UFormField>

                    <UFormField label="Тип" name="type" size="lg" class="w-full">
                        <USelectMenu v-model="state.type" :items="items" class="w-full" />
                    </UFormField>

                    <div class="flex">
              
                    </div>

                    <UButton type="submit" class="text-bg">
                        Создать
                    </UButton>
                </UForm>
            </div>
        </template>
    </UModal>
</template>

<style scoped></style>