<template>
	<Body class="bg-white p-3">
		<main
			id="contenu"
			class="flex min-h-dvh flex-col items-center justify-center gap-12"
		>
			<div>
				<h1 class="mb-3 text-3xl">{{ $t("somethingIsWrong") }}</h1>
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
