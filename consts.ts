export const APP_CONFIG = {
	version: 'v0.0.1a',

	links: {
		downloadPrimary: '#download',
		downloads: {
			windows: { url: '#', enabled: true },
			mac: { url: '#', enabled: false, label: 'Coming soon' },
			linux: { url: '#', enabled: false, label: 'Coming soon' },
		},
		learnMore: '#features',
		twitter: '#',
		discord: '#',
		github: 'https://github.com/Aelo-vid',
	},
} as const;
