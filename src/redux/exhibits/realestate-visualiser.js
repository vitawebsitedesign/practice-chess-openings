const exhibit = {
    "id": "rea-crawler-and-visualizer",
    "title": "Realestate.com.au crawler",
    "tagsByType": {
        "product": ["Realestate.com.au", "Data scraping", "Data post-processing", "API integration"],
        "programming": ["Google Maps API", "PHP"]
    },
	"tags": [
		{
			"icon": "search",
			"text": "Data scraping"
		},
		{
			"icon": "explore",
			"text": "Google Maps API"
        },
		{
			"icon": "home",
			"text": "Realestate.com.au"
        },
		{
			"icon": "code",
			"text": "PHP"
        }
	],
    "overview": `
Realestate.com.au is a website that advertises rental listings for tenants.
In early 2017, the website did not yet have a feature to visualize rent locations on a map. Rather, listings were only displayed in a table format. There was no productive way for users to identify precise location & rent prices for multiple REA listings across all Sydney suburbs.
Visualization through an interactive & filterable map would prove extremely valuable in allowing tenants to find the listings best for them.
Hence, this web suite was created to:
• Data scrape listings from REA HTML webpages
• Post-process HTML data into JSON through Regex
• Deliver PHP endpoints to provide JSON data to a responsive user interface
    `,
    "preview": {
		"thumbnails": {
			"webm": "realestate-visualiser.webm",
			"mp4": "realestate-visualiser.mp4"
		},
        "about": "Mine & view realestate.com.au listings as pins on an interactive Google map"
    },
    "codeSnippets": [
        "https://gist.github.com/vitawebsitedesign/415a9b4fbf631eb21690cd18d4f1f238",
        "https://gist.github.com/vitawebsitedesign/fff9e3c8cb22410c5b15a78e2c10411d"
    ],
    "learnt": [
        "Developing a PHP web crawler to fetch raw data",
        "Determining Regex patterns to extract key information from large raw HTML webpages",
        "Leveraging CURL in PHP to efficiently & scalably fetch large amounts of data across multiple request calls",
        "Integrating with the Google Maps API"
    ],
    "urlsByType": {
        "source code": [
            "https://github.com/vitawebsitedesign/real-estate-website-crawler"
        ]
    }
};

export default exhibit;
