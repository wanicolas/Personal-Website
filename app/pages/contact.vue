<script setup lang="ts">
useSeoMeta({
	title: $t("contactPage.title"),
	description: $t("contactPage.description"),
});

const localePath = useLocalePath();

const runtimeConfig = useRuntimeConfig();
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

			<form
				action="https://formsubmit.co/86eb2118aa51923deba24b44f7e34fd1"
				method="POST"
				class="space-y-4"
			>
				<div class="flex flex-col gap-4 md:flex-row">
					<FormInput
						id="Nom"
						:label="$t('firstname')"
						type="text"
						class="grow"
					/>
					<FormInput
						id="Prenom"
						:label="$t('lastname')"
						type="text"
						class="grow"
					/>
				</div>

				<FormInput id="Email" :label="$t('email')" type="email" />
				<FormInput id="Message" :label="$t('message')" textarea />

				<!-- Utilisation du template "box" pour le mail de soumission -->
				<input type="hidden" name="_template" value="box" />
				<!-- Redirige vers la page de remerciement après envoi -->
				<input
					type="hidden"
					name="_next"
					:value="runtimeConfig.public.i18n.baseUrl + localePath('/merci')"
				/>
				<!-- Permet d'éviter le spam -->
				<input type="text" name="_honey" class="hidden" />

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
