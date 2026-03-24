<script setup lang="ts">
const { locale } = useI18n();
const data = await import(`~/assets/data/about/${locale.value}.json`);
const infos = computed(() => data.default);

useSeoMeta({
	title: $t("aboutPage.title"),
	ogTitle: $t("aboutPage.title"),
	description: $t("aboutPage.description"),
	ogDescription: $t("aboutPage.description"),
});
</script>

<template>
	<div>
		<div
			aria-hidden="true"
			class="fixed bottom-12 -left-4 text-7xl font-black text-[#EDEDED] select-none sm:text-[8rem] md:-left-8 md:text-[11rem] lg:-left-12 lg:text-[15rem] xl:text-[18rem] dark:text-neutral-900"
		>
			{{ $t("aboutPage.bgText") }}
		</div>
		<section class="relative mx-auto mb-10 max-w-3xl">
			<h1 class="mb-14 text-3xl font-black lg:text-4xl">
				{{ $t("aboutPage.h1") }}
			</h1>
			<div class="flex gap-4 sm:gap-8">
				<div class="w-px shrink-0 bg-black dark:bg-white" />
				<div class="space-y-12">
					<div v-for="(info, index) in infos" :key="index" class="space-y-3">
						<div class="-ml-6 flex items-center gap-3 sm:-ml-10 sm:gap-6">
							<div
								class="size-4 rounded-full border-2 border-black bg-white dark:border-white dark:bg-black"
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
