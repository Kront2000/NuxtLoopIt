<template>
    <div class="w-full pb-14 flex items-center flex-col relative">
        <div class="w-full h-px bg-linear-to-r from-teal-500/10 via-teal-500/30 to-teal-500/10"></div>
        <div class="w-full h-[9vw] bg-linear-to-b from-teal-500/25 to-teal-500/0 top-0 absolute"></div>
        <Container class="flex gap-[16vw] mt-[18vw]  md:gap-0 items-center flex-col-reverse md:flex-row z-10 md:mt-[6vw]">
            <div class="w-[95%] md:w-[60%] flex flex-col gap-[2.5cqw] md:gap-[1.5cqw] @container">
                <h1 class="font-roobert text-green-50/95 text-[9cqw] md:text-[7cqw]  font-extrabold leading-[10cqw]">
                    ПРОДУКТИВНОСТЬ<br />НА ОСНОВЕ СОБЫТИЙ</h1>
                <h2 class=" text-green-50/75 text-[5cqw] md:text-[3.6cqw] font-normal ">НЕ ПРОСТО СПИСОК ДЕЛ. ПОТОК
                    СОБЫТИЙ</h2>
                <p class=" text-green-50/60 text-[4cqw] md:text-[2.5cqw] md:w-[72%] font-normal ">Традиционные
                    ToDo-приложения
                    застряли в синхронном прошлом. Мы переосмыслили управление задачами, внедрив архитектуру,
                    вдохновленную ядром Node.js. Добро пожаловать в LoopIt.</p>
                <UButton to="/loop" variant="outline" class="w-fit text-[4cqw] md:text-[3cqw] mt-[1cqw]" trailing-icon="i-lucide-arrow-right">Попробовать</UButton>
            </div>
            <div class="w-[90%] md:w-[40%] bg-gray-600/20 h-fit rounded-[2cqw] p-[1cqw] scale-[6cqw] @container">
                <img src="/public/interface.png" alt=""  class="w-full rounded-[2cqw]">
            </div>


        </Container>
    </div>
</template>
