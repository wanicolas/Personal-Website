<script setup lang="ts">
const { locale } = useI18n();

defineOgImage("Template", {
	appLocale: locale.value,
});

const head = useLocaleHead();

const route = useRoute();
const routeBaseName = useRouteBaseName();
// Ensure route.name is defined before passing it to routeBaseName to satisfy TypeScript
const baseRouteNameString = computed(() =>
	route.name ? routeBaseName(route.name) : "",
);

const dialog = ref<HTMLDialogElement | null>(null);
const isMenuOpen = ref(false);

function openMenu() {
	if (dialog.value) {
		dialog.value.showModal();
		isMenuOpen.value = true;
	}
}

function closeMenu() {
	if (dialog.value) {
		dialog.value.close();
		isMenuOpen.value = false;
	}
}

function toggleMenu() {
	if (isMenuOpen.value) {
		closeMenu();
	} else {
		openMenu();
	}
}

const cursorPosition = ref({ x: -200, y: -200 });

const isHovered = ref(false);

let mediaQuery: MediaQueryList | null = null;

const pointerMoveHandler = (e: PointerEvent) => {
	cursorPosition.value = { x: e.clientX, y: e.clientY };
};

function updateCursorTracking() {
	if (!mediaQuery) {
		return;
	}

	const shouldTrackPointer = window.innerWidth > 1200 && !mediaQuery.matches;

	if (shouldTrackPointer) {
		document.addEventListener("pointermove", pointerMoveHandler);
	} else {
		document.removeEventListener("pointermove", pointerMoveHandler);
		cursorPosition.value = { x: -200, y: -200 };
	}
}

function handleReducedMotionChange() {
	updateCursorTracking();
}

onMounted(() => {
	mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

	updateCursorTracking();
	window.addEventListener("resize", updateCursorTracking);
	mediaQuery.addEventListener("change", handleReducedMotionChange);
});

onUnmounted(() => {
	document.removeEventListener("pointermove", pointerMoveHandler);
	window.removeEventListener("resize", updateCursorTracking);
	mediaQuery?.removeEventListener("change", handleReducedMotionChange);
});
</script>

<template>
	<Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
		<Head>
			<template v-for="link in head.link" :key="link.key">
				<Link
					:id="link.key"
					:rel="link.rel"
					:href="link.href"
					:hreflang="link.hreflang"
				/>
			</template>
			<template v-for="meta in head.meta" :key="meta.key">
				<Meta
					:id="meta.key"
					:property="meta.property"
					:content="meta.content"
				/>
			</template>
		</Head>
		<Body
			class="bg-white text-black selection:bg-black selection:text-white dark:bg-black dark:text-white dark:selection:bg-white dark:selection:text-black"
			:class="isMenuOpen ? 'overflow-hidden' : ''"
		>
			<!-- Custom cursor -->
			<div
				id="outerCursor"
				aria-hidden="true"
				class="pointer-events-none fixed z-9999 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black transition-all duration-250 ease-out motion-reduce:hidden dark:border-white"
				:class="{ 'size-32 bg-white mix-blend-difference': isHovered }"
				:style="{ left: cursorPosition.x + 'px', top: cursorPosition.y + 'px' }"
			/>
			<div
				id="innerCursor"
				aria-hidden="true"
				class="pointer-events-none fixed z-9998 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black motion-reduce:hidden dark:bg-white"
				:style="{ left: cursorPosition.x + 'px', top: cursorPosition.y + 'px' }"
			/>

			<!-- Accessible link to go to the content -->
			<a
				href="#contenu"
				class="absolute -top-80 -left-80 rounded-b-md bg-black p-1 text-white focus:top-0 focus:left-4"
			>
				{{ $t("goToContent") }}
			</a>

			<div class="flex min-h-dvh flex-col justify-between">
				<AppHeader
					:is-menu-open
					@toggle-menu="toggleMenu"
					@close-menu="closeMenu"
				/>

				<main id="contenu" class="mx-4 sm:mx-12">
					<dialog
						ref="dialog"
						closedby="any"
						class="size-full max-h-dvh max-w-dvw"
					>
						<div class="flex h-full flex-col">
							<AppHeader
								:is-menu-open
								@toggle-menu="toggleMenu"
								@close-menu="closeMenu"
							/>

							<nav
								class="flex flex-1 flex-col items-center justify-center gap-6 text-3xl"
							>
								<NuxtLinkLocale to="/a-propos" @click="closeMenu()">
									{{ $t("about") }}
								</NuxtLinkLocale>
								<NuxtLinkLocale to="/projets" @click="closeMenu()">
									{{ $t("projects") }}
								</NuxtLinkLocale>
								<NuxtLinkLocale to="/contact" @click="closeMenu()">
									{{ $t("contact") }}
								</NuxtLinkLocale>
							</nav>
						</div>
					</dialog>
					<NuxtPage
						@cursor-hovered="isHovered = true"
						@cursor-left="isHovered = false"
					/>
				</main>

				<footer
					class="z-10 mx-auto mt-20 mb-4 flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-4 sm:mb-8 sm:px-12 md:mt-32 lg:mt-40"
				>
					<NuxtLinkLocale
						:to="baseRouteNameString === 'a-propos' ? '/projets' : '/a-propos'"
						class="flex w-fit items-center"
					>
						<span
							class="mr-2 underline underline-offset-4 hover:underline sm:no-underline"
						>
							{{
								baseRouteNameString === "a-propos"
									? $t("lookAtMyProjects")
									: $t("learnMoreAboutMe")
							}}
						</span>
						<Icon
							name="lucide:move-right"
							class="animateSVG hidden size-6 sm:block"
						/>
					</NuxtLinkLocale>
					<div class="flex items-center gap-8">
						<NuxtLink
							class="size-6"
							to="https://www.linkedin.com/in/wanicolas/"
						>
							<Icon name="lucide:linkedin" class="size-6" />
							<span class="sr-only">{{ $t("visitMyLinkedInProfile") }}</span>
						</NuxtLink>
						<NuxtLink class="size-6" to="https://github.com/wanicolas">
							<Icon name="lucide:github" class="size-6" />
							<span class="sr-only">{{ $t("visitMyGitHubProfile") }}</span>
						</NuxtLink>
					</div>
				</footer>
			</div>
		</Body>
	</Html>
</template>

<style scoped>
/* Transition between pages */
.page-enter-active,
.page-leave-active {
	transition: opacity 0.5s;
}

.page-enter-from,
.page-leave-to {
	opacity: 0;
	filter: blur(0.1rem);
}

/* SVG animation */
.animateSVG {
	animation-name: backAndForth;
	animation-duration: 0.7s;
	animation-iteration-count: infinite;
	animation-direction: alternate;

	@media (prefers-reduced-motion) {
		animation: none;
	}
}

@keyframes backAndForth {
	0% {
		margin-left: 0rem;
	}

	100% {
		margin-left: 1rem;
	}
}
</style>
