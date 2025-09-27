<script setup lang="ts">
useHead({
	title: $t("home.title"),
	meta: [
		{
			name: "description",
			content: $t("home.description"),
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
			class="mx-auto mb-8 flex w-fit flex-col gap-4 text-5xl font-bold uppercase leading-none tracking-tight sm:text-7xl lg:mb-12 lg:p-4 lg:text-[6rem] xl:text-[8rem]"
			@mouseover="$emit('cursor-hovered')"
			@mouseleave="$emit('cursor-left')"
		>
			<span>Hey, {{ $t("iAm") }}</span>
			<span class="md:ml-20">Nicolas Walter</span>
		</h1>
		<h2 class="text-xl font-medium sm:text-center">
			{{ $t("home.text") }}
			<NuxtLink
				to="/a-propos#accessibilite"
				class="link relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black after:text-white after:transition-[height] hover:after:h-full hover:after:content-['accessibles.'] after:dark:bg-white after:dark:text-black"
			>
				{{ $t("accessible") }}.
			</NuxtLink>
			<!-- WIP hover effect -->
		</h2>
	</div>
</template>
