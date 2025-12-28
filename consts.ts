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
		// リリースノート（ヘッダーのリボン用）
		releaseNotes: '#',
		twitter: '#',
		discord: '#',
		github: 'https://github.com/Aelo-vid',
	},
	// ダウンロードカードのサイズと更新日時（consts から変更可能）
	downloadMeta: {
		windows: { size: '234 MB', updated: 'Dec 28, 2024' },
		mac: { size: '248 MB', updated: 'Dec 28, 2024' },
		linux: { size: '215 MB', updated: 'Dec 28, 2024' },
	},
	nightly: {
		enabled: true,
		version: 'nightly-0.0.1',
		downloads: {
			windows: { url: '#', enabled: true },
			mac: { url: '#', enabled: false, label: 'Coming soon' },
			linux: { url: '#', enabled: false, label: 'Coming soon' },
		},
		// Nightly ビルドのサイズと更新日時
		downloadMeta: {
			windows: { size: '256 MB', updated: 'Dec 28, 2024' },
			mac: { size: '265 MB', updated: 'Dec 28, 2024' },
			linux: { size: '228 MB', updated: 'Dec 28, 2024' },
		},
	},
} as const;
