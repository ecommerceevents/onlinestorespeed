module.exports = {
	name: "SSG", // optional, falls back to object key
	description: "Static Site Generator web sites",
	options: {
		frequency: 60 * 23, // 24 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://www.skims.com/",
		"https://stevemadden.com",
		"https://sanrio.com",
		"https://bodybuilding.com",
		"https://glossier.com",
		"https://rarebeauty.com",
		"https://mccormick.com",
		"https://manscaped.com",
		"https://neweracap.com",
		"https://goodamerican.com",
		"https://flexsealproducts.com",
		"https://bareminerals.com",
	]
};
