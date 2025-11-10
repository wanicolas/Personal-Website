<script setup lang="ts">
useHead({
	title: $t("index.title"),
	meta: [
		{
			name: "description",
			content: $t("index.description"),
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
			<span>{{ $t("iAm") }}</span>
			<span class="md:ml-20">Nicolas Walter</span>
		</h1>
		<i18n-t
			tag="h2"
			keypath="index.text"
			class="text-xl font-medium sm:text-center"
		>
			<template #accessible>
				<NuxtLink
					to="/a-propos#accessibilite"
					class="group relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-black after:transition-[height] hover:after:h-full after:dark:bg-white"
				>
					<span
						class="relative z-10 group-hover:text-white group-hover:dark:text-black"
					>
						{{ $t("index.accessible") }}
					</span>
				</NuxtLink>
			</template>
		</i18n-t>
	</div>
</template>
