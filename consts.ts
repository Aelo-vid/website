export const APP_CONFIG = {
	version: 'stable-1.0.0',

	links: {
		downloadPrimary: '#download',
		downloads: {
			windows: { url: '#', enabled: false, label: 'Coming soon'},
			mac: { url: '#', enabled: false, label: 'Coming soon' },
			linux: { url: '#', enabled: false, label: 'Coming soon' },
		},
		learnMore: '#features',
		twitter: '#',
		discord: '#',
		github: 'https://github.com/Aelo-vid',
	},
		nightly: {
			enabled: true,
			version: 'nightly-0.0.1',
			downloads: {
				windows: { url: '#', enabled: true },
				mac: { url: '#', enabled: false, label: 'Coming soon' },
				linux: { url: '#', enabled: false, label: 'Coming soon' },
			},
		},
} as const;
