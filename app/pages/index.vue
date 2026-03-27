<script setup lang="ts">
useSeoMeta({
	title: "",
	description: $t("indexPage.description"),
});

const emit = defineEmits(["cursorLeft", "cursorHovered"]);

onUnmounted(() => {
	emit("cursorLeft");
});
</script>

<template>
	<div class="mx-auto w-fit">
		<h1
			class="mx-auto mb-8 flex w-fit flex-col gap-4 text-5xl leading-none font-bold tracking-tight uppercase sm:text-7xl lg:mb-12 lg:p-4 lg:text-[6rem] xl:text-[8rem]"
			@mouseover="emit('cursorHovered')"
			@mouseleave="emit('cursorLeft')"
		>
			<span>{{ $t("indexPage.iAm") }}</span>
			<!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
			<span class="md:ml-20">Nicolas Walter</span>
		</h1>
		<i18n-t
			scope="global"
			tag="h2"
			keypath="indexPage.text"
			class="text-xl font-medium sm:text-center"
		>
			<template #accessible>
				<NuxtLinkLocale
					to="/a-propos#accessibility"
					class="group relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black after:transition-[height] hover:after:h-full after:dark:bg-white"
				>
					<span
						class="relative z-10 group-hover:text-white group-hover:dark:text-black"
					>
						{{ $t("indexPage.accessible") }}
					</span>
				</NuxtLinkLocale>
			</template>
		</i18n-t>
	</div>
</template>
