export default defineI18nConfig(() => {
	return {
		datetimeFormats: {
			fr: {
				short: {
					year: "numeric",
					month: "short",
					day: "numeric",
				},
				numericDateTime: {
					year: "numeric",
					month: "numeric",
					day: "numeric",
					hour: "numeric",
					minute: "numeric",
				},
			},
		},
		numberFormats: {
			fr: {
				currency: {
					style: "currency",
					currency: "EUR",
					notation: "standard",
				},
			},
		},
	};
});
