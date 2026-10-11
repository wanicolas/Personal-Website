<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
	description: t("indexPage.description"),
});

const emit = defineEmits(["cursorLeft", "cursorHovered"]);

onUnmounted(() => {
	emit("cursorLeft");
});
</script>

<template>
	<div>
		<h1
			class="mb-8 flex w-fit flex-col gap-4 text-4xl leading-none font-bold tracking-tight uppercase sm:text-6xl md:mx-auto md:text-7xl lg:mb-12 lg:p-4 lg:text-[6rem] xl:text-[8rem]"
			@mouseover="emit('cursorHovered')"
			@mouseleave="emit('cursorLeft')"
		>
			<span>{{ $t("indexPage.iAm") }}</span>
			<!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
			<span class="md:ml-20">Nicolas Walter</span>
		</h1>

		<div class="mx-auto max-w-5xl">
			<h2
				class="mb-4 text-2xl font-medium text-neutral-600 sm:mb-6 sm:text-3xl dark:text-neutral-300"
			>
				{{ $t("indexPage.title") }}
			</h2>

			<p class="text-neutral-600 sm:text-lg dark:text-neutral-300">
				{{ $t("indexPage.pitch") }}
				<i18n-t scope="global" tag="span" keypath="indexPage.cta">
					<template #projects>
						<NuxtLinkLocale
							to="/projets"
							class="group relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-neutral-900 after:transition-[height] hover:after:h-full dark:after:bg-neutral-100"
						>
							<span
								class="relative z-10 group-hover:text-white dark:group-hover:text-neutral-900"
							>
								{{ $t("indexPage.ctaProjects") }}
							</span>
						</NuxtLinkLocale>
					</template>
					<template #about>
						<NuxtLinkLocale
							to="/a-propos"
							class="group relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-neutral-900 after:transition-[height] hover:after:h-full dark:after:bg-neutral-100"
						>
							<span
								class="relative z-10 group-hover:text-white dark:group-hover:text-neutral-900"
							>
								{{ $t("indexPage.ctaAbout") }}
							</span>
						</NuxtLinkLocale>
					</template>
					<template #cv>
						<NuxtLink
							to="/CV_Nicolas-WALTER.pdf"
							target="_blank"
							external
							class="group relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-neutral-900 after:transition-[height] hover:after:h-full dark:after:bg-neutral-100"
						>
							<span
								class="relative z-10 group-hover:text-white dark:group-hover:text-neutral-900"
							>
								{{ $t("indexPage.ctaCv") }}
							</span>
						</NuxtLink>
					</template>
					<template #contact>
						<NuxtLinkLocale
							to="/contact"
							class="group relative inline-block after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-neutral-900 after:transition-[height] hover:after:h-full dark:after:bg-neutral-100"
						>
							<span
								class="relative z-10 group-hover:text-white dark:group-hover:text-neutral-900"
							>
								{{ $t("indexPage.ctaContact") }}
							</span>
						</NuxtLinkLocale>
					</template>
				</i18n-t>
			</p>
		</div>
	</div>
</template>
