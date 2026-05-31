<script setup lang='ts'>
import Background from '~/components/shared/Background.vue'

const {data: listOfTasks} = await useFetch<Tasks[]>('/api/tasks', {key: 'list-of-tasks'});

const columns = [{ type: 'stack', name: 'Стек задач' }, { type: 'macro', name: 'Макрозадачи' },
 { type: 'micro', name: 'Микрозадачи' }, { type: 'api', name: 'api' },]

definePageMeta({
    middleware: ['authenticated'],
})

const { loggedIn, session, user, clear, fetch } = useUserSession()
const router = useRouter()

async function logout() {
    await clear()
    router.push('/')
}
</script>

<template>
    <div class="flex flex-col w-screen h-screen bg-bg overflow-hidden pl-17.5 relative">
        <!-- Задний фон -->
        <SharedBackground />
        <!-- Боковое меню  -->
        <LoopSideBar :logout="clear" />

        <div class="flex flex-col gap-8 p-8">
            <p class="text-4xl font-roboto">{{ user?.name }}</p>
            <div class="flex gap-10 flex-wrap 1720:justify-between">
                <LoopColumn v-for="value in columns" :type="value.type" :name="value.name" :tasks="listOfTasks"/>
            </div>
        </div>


    </div>
</template>

<style scoped></style>