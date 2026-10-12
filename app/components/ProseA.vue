<script setup lang="ts">
const props = defineProps<{
	href?: string;
	target?: string;
}>();

const isExternal = computed(() => {
	if (!props.href) return false;
	return (
		props.href.startsWith("http://") ||
		props.href.startsWith("https://") ||
		props.href.startsWith("mailto:") ||
		props.href.endsWith(".pdf")
	);
});
</script>

<template>
	<NuxtLink
		:to="props.href"
		:target="props.target ?? (isExternal ? '_blank' : undefined)"
		:rel="isExternal ? 'noopener noreferrer' : undefined"
		:external="isExternal"
	>
		<slot />
	</NuxtLink>
</template>
