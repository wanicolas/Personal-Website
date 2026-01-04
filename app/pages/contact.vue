<script setup lang="ts">
useHead({
	title: $t("contactPage.title"),
	meta: [
		{
			name: "description",
			content: $t("contactPage.description"),
		},
	],
});
</script>

<template>
	<div>
		<div
			aria-hidden="true"
			class="fixed bottom-0 -left-[8vmin] -z-10 hidden text-[22vmin] font-black text-[#EDEDED] select-none [writing-mode:vertical-lr] md:block dark:text-neutral-900"
		>
			{{ $t("contactPage.bgText") }}
		</div>

		<div class="mx-auto max-w-xl">
			<h1 class="mb-14 text-3xl font-black lg:text-4xl">
				{{ $t("contactPage.h1") }}
			</h1>

			<form action="" class="space-y-4">
				<div class="flex flex-col gap-4 md:flex-row">
					<FormInput
						id="nom"
						:label="$t('firstname')"
						type="text"
						class="grow"
					/>
					<FormInput
						id="prenom"
						:label="$t('lastname')"
						type="text"
						class="grow"
					/>
				</div>

				<FormInput id="email" :label="$t('email')" type="email" />
				<FormInput id="message" :label="$t('message')" textarea />

				<button
					type="submit"
					class="mt-2 rounded bg-black px-3 py-1 font-bold text-white dark:bg-white dark:text-black"
				>
					{{ $t("submit") }}
				</button>
			</form>
		</div>
	</div>
</template>
