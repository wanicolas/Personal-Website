<script setup lang="ts">
useSeoMeta({
	title: $t("merciPage.title"),
	description: $t("merciPage.description"),
});
</script>

<template>
	<div>
		<div
			aria-hidden="true"
			class="fixed bottom-0 -left-[8vmin] -z-10 hidden text-[22vmin] font-black text-[#EDEDED] select-none [writing-mode:vertical-lr] md:block dark:text-neutral-900"
		>
			{{ $t("merciPage.bgText") }}
		</div>

		<div class="mx-auto max-w-2xl text-center">
			<div class="mb-14 flex items-center justify-center gap-4">
				<h1 class="text-3xl font-black lg:text-4xl">
					{{ $t("merciPage.h1") }}
				</h1>
				<Icon name="lucide:send" class="size-8 shrink-0 lg:size-12" />
			</div>
			<p class="lg:text-lg">
				{{ $t("merciPage.p") }}
			</p>
			<button class="mt-2 underline underline-offset-4 hover:no-underline">
				<NuxtLinkLocale to="/">{{ $t("goBackToHomePage") }}</NuxtLinkLocale>
			</button>
		</div>
	</div>
</template>
