<script setup lang="ts">
import { aboutData } from "~/assets/data/about";

const { locale, t } = useI18n();

const infos = computed(() => {
	const currentLocale = locale.value;
	return aboutData.map((section) => ({
		...section,
		title: section.title[currentLocale],
		content: section.content[currentLocale],
	}));
});

useSeoMeta({
	title: t("aboutPage.title"),
	description: t("aboutPage.description"),
});
</script>

<template>
	<div>
		<section class="relative mx-auto mb-10 max-w-3xl">
			<h1 class="mb-14 text-4xl font-black lg:text-5xl">
				{{ $t("aboutPage.h1") }}
			</h1>
			<div class="flex gap-4 sm:gap-8">
				<div class="w-px shrink-0 bg-neutral-900 dark:bg-neutral-100" />
				<div class="space-y-12">
					<div v-for="(info, index) in infos" :key="index" class="space-y-3">
						<div class="-ml-6 flex items-center gap-3 sm:-ml-10 sm:gap-6">
							<div
								class="size-4 rounded-full border-2 border-neutral-900 bg-white dark:border-neutral-100 dark:bg-neutral-900"
							/>
							<h2 :id="info.id" class="text-lg font-semibold lg:text-xl">
								{{ info.title }}
							</h2>
						</div>
						<p
							v-for="(paragraph, pIndex) in info.content"
							:key="pIndex"
							class="leading-relaxed text-neutral-600 lg:text-lg dark:text-neutral-300"
						>
							{{ paragraph }}
						</p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
