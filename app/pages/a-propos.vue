<script setup lang="ts">
const { locale } = useI18n();
const data = await import(`~/assets/data/about/${locale.value}.json`);
const infos = computed(() => data.default);

useHead({
	title: $t("about.title"),
	meta: [
		{
			name: "description",
			content: $t("about.description"),
		},
	],
});
</script>

<template>
	<div>
		<div
			aria-hidden="true"
			class="fixed -left-4 bottom-12 select-none text-7xl font-black text-[#EDEDED] sm:text-[8rem] md:-left-8 md:text-[11rem] lg:-left-12 lg:text-[15rem] xl:text-[18rem] dark:text-neutral-900"
		>
			{{ $t("about.bgText") }}
		</div>
		<section class="relative mx-auto mb-10 max-w-3xl">
			<h1 class="mb-14 text-3xl font-black lg:text-4xl">
				{{ $t("about.h1") }}
			</h1>
			<div class="flex gap-4 sm:gap-8">
				<div class="w-px shrink-0 bg-black dark:bg-white"></div>
				<div class="space-y-12">
					<div v-for="(info, index) in infos" :key="index">
						<div class="-ml-6 mb-3 flex items-center gap-3 sm:-ml-10 sm:gap-6">
							<div
								class="flex size-4 items-center justify-center rounded-full bg-black dark:bg-white"
							>
								<div class="size-3 rounded-full bg-white dark:bg-black"></div>
							</div>
							<h2 :id="info.id" class="text-lg font-semibold lg:text-xl">
								{{ info.title }}
							</h2>
						</div>
						<p
							v-for="(paragraph, pIndex) in info.content"
							:key="pIndex"
							class="mb-3 leading-relaxed text-neutral-600 lg:text-lg dark:text-neutral-300"
							v-html="paragraph"
						></p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
