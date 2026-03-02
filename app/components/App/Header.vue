<script setup lang="ts">
const { locale } = useI18n();

const colorMode = useColorMode();

const toggleColorMode = () => {
	colorMode.preference =
		colorMode.preference === "light"
			? "dark"
			: colorMode.preference === "dark"
				? "system"
				: "light";
};

interface Props {
	isMenuOpen?: boolean;
}

defineProps<Props>();

type Emits = {
	(e: "toggleMenu" | "closeMenu"): void;
};

const emit = defineEmits<Emits>();
</script>

<template>
	<header
		class="sticky top-0 z-10 mx-auto mb-16 w-full max-w-6xl bg-white/75 px-4 pt-4 pb-4 text-black backdrop-blur sm:px-12 sm:pt-8 md:mb-28 lg:mb-36 dark:bg-black/75 dark:text-white"
	>
		<nav class="flex items-center justify-between">
			<!-- Logo -->
			<NuxtLinkLocale to="/" @click="emit('closeMenu')">
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
				<span class="sr-only">{{ $t("index") }}</span>
			</NuxtLinkLocale>

			<!-- Navigation links -->
			<div class="flex items-center gap-6 sm:gap-8">
				<NuxtLinkLocale
					to="/a-propos"
					class="relative hidden before:absolute before:top-6 before:left-0 before:block before:h-px before:w-full before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 sm:inline before:dark:bg-white"
				>
					{{ $t("about") }}
				</NuxtLinkLocale>
				<NuxtLinkLocale
					to="/projets"
					class="relative hidden before:absolute before:top-6 before:left-0 before:block before:h-px before:w-full before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 sm:inline before:dark:bg-white"
				>
					{{ $t("projects") }}
				</NuxtLinkLocale>
				<NuxtLinkLocale
					to="/contact"
					class="relative hidden before:absolute before:top-6 before:left-0 before:block before:h-px before:w-full before:scale-x-0 before:bg-black before:transition-transform before:duration-300 before:content-[''] hover:before:scale-x-100 sm:inline before:dark:bg-white"
				>
					{{ $t("contact") }}
				</NuxtLinkLocale>
			</div>

			<!-- Language and color mode switcher + mobile menu -->
			<div class="flex items-center gap-3 sm:gap-4">
				<NuxtLink
					:to="$switchLocalePath(locale === 'en' ? 'fr' : 'en')"
					class="rounded p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800"
				>
					<span class="flex size-5 items-center justify-center">
						<!-- eslint-disable-next-line @intlify/vue-i18n/no-raw-text -->
						{{ locale === "en" ? "EN" : "FR" }}
					</span>
				</NuxtLink>
				<button
					class="flex rounded p-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800"
					@click="toggleColorMode"
				>
					<Icon
						class="size-5"
						:name="
							colorMode.preference === 'system'
								? 'lucide:sun-moon'
								: colorMode.preference === 'light'
									? 'lucide:sun'
									: 'lucide:moon'
						"
					/>
					<span class="sr-only">
						{{
							colorMode.preference === "system"
								? $t("toggleLightMode")
								: colorMode.preference === "light"
									? $t("toggleDarkMode")
									: $t("toggleSystemMode")
						}}
					</span>
				</button>
				<button
					class="flex rounded p-1.5 hover:bg-neutral-100 sm:hidden dark:hover:bg-neutral-800"
					@click="emit('toggleMenu')"
				>
					<Icon
						class="size-5"
						:name="isMenuOpen ? 'lucide:x' : 'lucide:menu'"
					/>
					<span class="sr-only">
						{{
							isMenuOpen ? $t("closeNavigationMenu") : $t("openNavigationMenu")
						}}
					</span>
				</button>
			</div>
		</nav>
	</header>
</template>
