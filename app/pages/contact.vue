<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	title: t("contactPage.title"),
	description: t("contactPage.description"),
});

const localePath = useLocalePath();

const runtimeConfig = useRuntimeConfig();
</script>

<template>
	<div class="mx-auto max-w-xl">
		<h1 class="mb-14 text-4xl font-black lg:text-5xl">
			{{ $t("contactPage.h1") }}
		</h1>

		<form
			action="https://formsubmit.co/86eb2118aa51923deba24b44f7e34fd1"
			method="POST"
			class="space-y-4"
		>
			<FormInput id="NomPrenom" :label="$t('name')" type="text" />
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

			<AppButton
				type="submit"
				trailing-icon="lucide:send"
				:label="$t('submit')"
				class="mt-2"
			/>
		</form>
	</div>
</template>
