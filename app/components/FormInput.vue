<script setup lang="ts">
defineProps<{
	type?: string;
	label: string;
	id: string;
	textarea?: boolean;
	placeholder?: string;
}>();
</script>

<template>
	<div class="flex flex-col gap-1.5">
		<label :for="id" class="font-medium">
			{{ label }}
		</label>
		<component
			:is="textarea ? 'textarea' : 'input'"
			:id
			required
			:type="textarea ? undefined : type"
			:name="id"
			:rows="textarea ? 3 : undefined"
			:placeholder
			class="w-full appearance-none rounded border px-2 py-1 focus-visible:outline focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100"
		/>
	</div>
</template>
