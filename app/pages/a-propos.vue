<script setup lang="ts">
const { locale } = useI18n();
const data = await import(`~/assets/data/about/${locale.value}.json`);
const infos = computed(() => data.default);

useHead({
	title: $t("aboutPage.title"),
	meta: [
		{
			name: "description",
			content: $t("aboutPage.description"),
		},
	],
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
				<div class="w-px shrink-0 bg-black dark:bg-white"></div>
				<div class="space-y-12">
					<div v-for="(info, index) in infos" :key="index" class="space-y-3">
						<div class="-ml-6 flex items-center gap-3 sm:-ml-10 sm:gap-6">
							<div
								class="flex size-4 items-center justify-center rounded-full bg-black dark:bg-white"
							>
								<div class="size-3 rounded-full bg-white dark:bg-black"></div>
							</div>
							<h2 :id="info.id" class="text-lg font-semibold lg:text-xl">
								{{ info.title }}
							</h2>
						</div>
						<template v-if="info.cvLink">
							<p
								class="leading-relaxed text-neutral-600 lg:text-lg dark:text-neutral-300"
							>
								{{ info.content[0] }}
								<NuxtLink
									:to="info.cvLink"
									target="_blank"
									class="underline underline-offset-4"
								>
									{{ info.content[1] }}
								</NuxtLink>
								{{ info.content[2] }}
							</p>
						</template>
						<template v-else>
							<p
								v-for="(paragraph, pIndex) in info.content"
								:key="pIndex"
								class="leading-relaxed text-neutral-600 lg:text-lg dark:text-neutral-300"
							>
								{{ paragraph }}
							</p>
						</template>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>
