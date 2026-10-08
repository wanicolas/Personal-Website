<script setup lang="ts">
defineProps<{
	items: string[];
}>();
</script>

<template>
	<ul class="flex flex-wrap items-center gap-2 font-mono">
		<li
			v-for="(item, index) in items"
			:key="index"
			class="rounded-full bg-neutral-100 px-2.5 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200"
		>
			{{ item }}
		</li>
	</ul>
</template>
