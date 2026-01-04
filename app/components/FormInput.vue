<script setup lang="ts">
defineProps<{
	type?: string;
	label: string;
	id: string;
	textarea?: boolean;
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
			class="w-full rounded border px-2 py-1"
		/>
	</div>
</template>
