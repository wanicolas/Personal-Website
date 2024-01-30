<template>
    <Body class="bg-white dark:bg-black ">
        <div class="bodyBackground" aria-hidden="true"></div>
        <Header />
        <main class=" max-w-4xl mb-16 mx-auto px-4">
            <NuxtPage />
        </main>
    </Body>
</template>

<style lang="css" scoped>
.page-enter-active,
.page-leave-active {
    transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0;
    filter: blur(1rem);
}

.bodyBackground::before {
    content: "";
    position: fixed;
    top: 0px;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-image:
        linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
    background-size: 90px 90px;
}

.bodyBackground::after {
    position: fixed;
    content: "";
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: radial-gradient(at 40% 40%, rgb(30, 144, 255) 0px, transparent 50%), radial-gradient(at 90% 10%, rgb(255, 105, 180) 0px, transparent 50%), radial-gradient(at 50% 95%, rgb(0, 255, 255) 0px, transparent 50%), radial-gradient(at 20% 30%, rgb(50, 205, 50) 0px, transparent 50%), radial-gradient(at 90% 90%, rgb(255, 255, 0) 0px, transparent 50%), radial-gradient(at 33% 50%, rgb(255, 69, 0) 0px, transparent 50%), radial-gradient(at 79% 53%, rgb(128, 0, 128) 0px, transparent 50%);
    filter: blur(100px) saturate(100%);
    top: 0px;
    opacity: 0.1;
    transform: translateZ(0px);
}
</style>