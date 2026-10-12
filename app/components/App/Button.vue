<script setup lang="ts">
import { NuxtLink } from "#components";

const props = withDefaults(
	defineProps<{
		to?: string;
		icon?: string;
		trailingIcon?: string;
		label?: string;
		color?: "primary" | "neutral";
	}>(),
	{
		to: undefined,
		icon: undefined,
		trailingIcon: undefined,
		label: undefined,
		color: "primary",
	},
);

const colorClass = computed(() => {
	switch (props.color) {
		case "primary":
			return "bg-black text-neutral-100 dark:bg-white dark:text-neutral-900 border-black dark:border-white hover:bg-neutral-800 dark:hover:bg-neutral-100";
		case "neutral":
			return "bg-white text-neutral-900 dark:bg-black dark:text-neutral-100 border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900";
		default:
			return "";
	}
});
</script>

<template>
	<component
		:is="to ? NuxtLink : 'button'"
		:type="to ? undefined : 'button'"
		:to
		class="colors flex items-center gap-2 rounded border px-4 py-2 font-medium"
		:class="colorClass"
	>
		<Icon v-if="icon" :name="icon" class="size-4" />

		<slot>
			<span>{{ label }}</span>
		</slot>

		<Icon v-if="trailingIcon" :name="trailingIcon" class="size-4" />
	</component>
</template>
