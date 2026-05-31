<script setup lang='ts'>
import { useIO } from '~/composables/useIO';

const { ref: titleRef, isVisible: titleIsVisible } = useIO();
const { ref: imageRef, isVisible: imageIsVisible } = useIO();
</script>

<template>
    <section class="w-full flex flex-col items-center relative">
        <div class="w-screen absolute top-18 left-0 h-20 870:h-60 bg-linear-to-b from-text-green/20 gradient">
            <div class="w-full h-px bg-linear-to-r from-text-green/10 via-text-green to-text-green/10"></div>
        </div>

        <div class="w-full flex flex-col  overflow-hidden 870:gap-10 870:flex-row gap-20 justify-between pt-25 870:pt-50 max-w-400 px-5 mob:px-16">
            <div class="flex flex-col gap-7.5 w-80 xs:w-96 xl:w-140 1440:w-170! pt-5">
                <div>
                    <h1 :ref="titleRef"
                        class="font-roboto-con font-semibold text-3xl xs:text-4xl xl:text-5xl 1440:text-7xl! text-white transition duration-500 delay-100"
                        :class="{ 'translate-x-0 opacity-100': titleIsVisible, '-translate-x-20 opacity-0': !titleIsVisible }">
                        ПРОДУКТИВНОСТЬ

                    </h1>
                    <h2 :class="{ 'translate-x-0 opacity-100': titleIsVisible, '-translate-x-20 opacity-0': !titleIsVisible }"
                        class="font-roboto-con font-semibold text-3xl xs:text-4xl xl:text-5xl 1440:text-7xl! text-text-green transition duration-500 delay-200">
                        НА ОСНОВЕ СОБЫТИЙ
                    </h2>
                </div>

                <p :class="{ 'translate-x-0 opacity-100': titleIsVisible, '-translate-x-20 opacity-0': !titleIsVisible }"
                    class="text-sm xs:text-base xl:text-lg 1440:text-xl! text-text-light font-light leading-5.75 transition duration-500 delay-400 w-[90%]">
                    Традиционные ToDo-приложения застряли в синхронном прошлом.
                    Мы переосмыслили управление задачами, внедрив архитектуру, вдохновленную ядром Node.js.
                    Добро пожаловать в LoopIt.
                </p>
                <UButton
                    :class="{ 'translate-x-0 opacity-100': titleIsVisible, '-translate-x-20 opacity-0': !titleIsVisible }"
                    class="text-bg text-base xl:text-xl transition duration-500 delay-600"
                    to="/loop" >Попробовать</UButton>
            </div>

            <NuxtImg
                :class="{ 'translate-x-0 opacity-100': imageIsVisible, 'translate-x-20 opacity-0': !imageIsVisible }"
                :ref="imageRef" src="/interface.png"
                class="w-96 h-fit lg:w-110 xl:w-130 1440:w-150! object-cover rounded-xl transition duration-500 delay-800" />
        </div>
    </section>
</template>

