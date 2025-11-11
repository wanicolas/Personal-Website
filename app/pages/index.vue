<script setup lang="ts">
useHead({
	title: $t("indexPage.title"),
	meta: [
		{
			name: "description",
			content: $t("indexPage.description"),
		},
	],
});

const emit = defineEmits(["cursor-left", "cursor-hovered"]);

onUnmounted(() => {
	emit("cursor-left");
});
</script>

<template>
	<div class="mx-auto w-fit">
		<h1
			class="mx-auto mb-8 flex w-fit flex-col gap-4 text-5xl leading-none font-bold tracking-tight uppercase sm:text-7xl lg:mb-12 lg:p-4 lg:text-[6rem] xl:text-[8rem]"
			@mouseover="$emit('cursor-hovered')"
			@mouseleave="$emit('cursor-left')"
		>
			<span>{{ $t("indexPage.iAm") }}</span>
			<span class="md:ml-20">Nicolas Walter</span>
		</h1>
		<i18n-t
			tag="h2"
			keypath="indexPage.text"
			class="text-xl font-medium sm:text-center"
		>
			<template #accessible>
				<NuxtLinkLocale
					to="/a-propos#accessibilite"
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
