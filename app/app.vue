<script setup lang="ts">
const { locale } = useI18n();
const head = useLocaleHead();

const colorMode = useColorMode();

const toggleColorMode = () => {
	colorMode.preference =
		colorMode.preference === "light"
			? "dark"
			: colorMode.preference === "dark"
				? "system"
				: "light";
};

const route = useRoute();

const cursorPosition = ref({ x: -200, y: -200 });

const isHovered = ref(false);

onMounted(() => {
	// Add an event listener for mousemove event
	if (window.innerWidth > 1200) {
		document.addEventListener("pointermove", (e) => {
			cursorPosition.value = { x: e.clientX, y: e.clientY };
		});
	}
});
</script>

<template>
	<Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
		<Body
			class="bg-white text-black selection:bg-black selection:text-white dark:bg-black dark:text-white dark:selection:bg-white dark:selection:text-black"
		>
			<!-- Custom cursor -->
			<div
				id="outerCursor"
				aria-hidden="true"
				class="pointer-events-none fixed z-[9999] size-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black transition-all duration-[250ms] ease-out dark:border-white"
				:class="{ 'size-32 bg-white mix-blend-difference': isHovered }"
				:style="{ left: cursorPosition.x + 'px', top: cursorPosition.y + 'px' }"
			/>
			<div
				id="innerCursor"
				aria-hidden="true"
				class="pointer-events-none fixed z-[9998] size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black dark:bg-white"
				:style="{ left: cursorPosition.x + 'px', top: cursorPosition.y + 'px' }"
			/>

			<!-- Accessible link to go to the content -->
			<a
				href="#contenu"
				class="absolute -left-80 -top-80 rounded-b-md bg-black p-1 text-white focus:left-4 focus:top-0"
			>
				Aller au contenu
			</a>

			<div
				class="flex min-h-dvh flex-col justify-between px-4 pb-6 pt-8 sm:px-12"
			>
				<header
					class="mx-auto mb-20 w-full max-w-6xl text-black md:mb-32 lg:mb-40 dark:text-white"
				>
					<nav class="flex items-center justify-between">
						<NuxtLinkLocale to="/">
							<svg
								aria-hidden="true"
								class="h-8 w-auto fill-black dark:fill-white"
								width="101"
								height="54"
								viewBox="0 0 101 54"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M35.3845 54C37.3164 54 39 52.9331 39.8822 51.3543L60.4625 21.6646V48.7135C60.4619 48.7614 60.4619 48.8092 60.4626 48.8571C60.4778 51.7001 62.779 54 65.6155 54C67.5474 54 69.2311 52.9331 70.1132 51.3543L100.077 8.12819C101.702 5.78362 101.125 2.56077 98.7892 0.929764C96.453 -0.701243 93.2416 -0.122784 91.6164 2.22179L70.7685 32.2975V5.24853C70.7905 3.58918 70.0179 1.94878 68.5582 0.929764C66.222 -0.701243 63.0106 -0.122784 61.3854 2.22179L40.5375 32.2975L40.5375 5.21652C40.5375 2.36043 38.2304 0.0451218 35.3845 0.0451217C32.5386 0.0451216 30.2315 2.36043 30.2315 5.21652L30.2315 32.2944L9.38361 2.21865C7.7584 -0.125921 4.54701 -0.70438 2.21077 0.926627C0.751195 1.9456 -0.0214849 3.5859 0.000454599 5.24517L0.000456497 48.8286C0.000456622 51.6847 2.30754 54 5.15347 54C7.9994 54 10.3065 51.6847 10.3065 48.8286L10.3065 21.6614L30.8779 51.3384C31.7577 52.9259 33.4461 54 35.3845 54Z"
									fill="current"
								/>
							</svg>
							<span class="sr-only">Accueil</span>
						</NuxtLinkLocale>
						<div class="flex items-center gap-6 sm:gap-8">
							<NuxtLinkLocale
								to="/a-propos"
								title="À propos"
								class="relative before:absolute before:left-0 before:top-6 before:block before:h-px before:w-full before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 before:dark:bg-white"
							>
								A propos
							</NuxtLinkLocale>
							<NuxtLinkLocale
								to="/projets"
								title="Blog"
								class="relative before:absolute before:left-0 before:top-6 before:block before:h-px before:w-full before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 before:dark:bg-white"
							>
								Projets
							</NuxtLinkLocale>
							<NuxtLink v-if="locale === 'en'" :to="$switchLocalePath('fr')">
								FR
							</NuxtLink>
							<NuxtLink v-else :to="$switchLocalePath('en')">EN</NuxtLink>
							<button class="size-6" @click="toggleColorMode">
								<Icon
									v-if="colorMode.preference === 'system'"
									class="size-6"
									name="i-lucide:sun-moon"
								></Icon>
								<Icon
									v-else-if="colorMode.preference === 'light'"
									class="size-6"
									name="i-lucide:sun"
								></Icon>
								<Icon v-else class="size-6" name="i-lucide:moon"></Icon>

								<span class="sr-only">Activer/Désactiver le mode sombre</span>
							</button>
						</div>
					</nav>
				</header>

				<main id="contenu" class="mx-auto">
					<NuxtPage
						@cursor-hovered="isHovered = true"
						@cursor-left="isHovered = false"
					/>
				</main>

				<footer
					class="z-10 mx-auto mt-20 flex w-full max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-4 md:mt-32 lg:mt-40"
				>
					<NuxtLinkLocale
						:to="route.name === 'a-propos' ? '/projets' : '/a-propos'"
						class="flex w-fit items-center"
					>
						<span
							class="mr-2 underline underline-offset-4 hover:underline sm:no-underline"
						>
							{{
								route.name === "a-propos"
									? "Voir mes projets"
									: "En apprendre plus sur moi"
							}}
						</span>
						<Icon
							name="i-lucide:move-right"
							class="animateSVG hidden size-6 sm:block"
						></Icon>
					</NuxtLinkLocale>
					<div class="flex items-center gap-8">
						<NuxtLink
							class="size-6"
							to="https://www.linkedin.com/in/wanicolas/"
						>
							<Icon name="i-lucide:linkedin" class="size-6"></Icon>
							<span class="sr-only">Accédez à mon profil LinkedIn.</span>
						</NuxtLink>
						<NuxtLink class="size-6" to="https://github.com/wanicolas">
							<Icon name="i-lucide:github" class="size-6"></Icon>
							<span class="sr-only">Accédez à mon profil GitHub.</span>
						</NuxtLink>
						<NuxtLink class="size-6" to="mailto:contact@nicolaswalter.fr">
							<Icon name="i-lucide:mail" class="size-6"></Icon>
							<span class="sr-only">Contactez-moi par email !.</span>
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
