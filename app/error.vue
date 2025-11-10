<script setup lang="ts">
import { useError } from "#app";

const error = useError();
</script>

<template>
	<Body class="bg-white p-3">
		<main
			id="contenu"
			class="flex min-h-dvh flex-col items-center justify-center gap-12"
		>
			<div>
				<h1 class="mb-3 text-3xl">{{ $t("somethingIsWrong") }}</h1>
				<p v-if="error" class="text-xl">{{ error.message }}</p>
			</div>
			<NuxtLink
				to="/"
				class="rounded-sm bg-black px-4 py-2 text-lg font-medium text-white"
			>
				{{ $t("backToHome") }}
			</NuxtLink>
		</main>
	</Body>
</template>
