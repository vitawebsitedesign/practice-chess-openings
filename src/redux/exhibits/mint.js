const exhibit = {
    "id": "mint",
    "title": "Mint",
	"tags": [
		{
			"icon": "code",
			"text": "Lua"
		},
		{
			"icon": "device_hub",
			"text": "API integration"
		},
		{
			"icon": "code",
			"text": "ReactJS"
		},
		{
			"icon": "dashboard",
			"text": "Bootstrap"
		}
	],
    "overview": `
Certain asset prices are determined by supply and demand.
In 2004, Blizzard Entertainment released WoW, which featured an auction house system comprised of real bidders & sellers that influence prices.
Like the real world, assets would periodically fluctuate & cause temporary underpriced & overpriced assets. In other words: opportunities to buy, sell & flip.

Productively data mining & deriving calculated information for the assets, would allow one to take advantage of both situations.
Hence, "Mint" is a valuable suite to achieve this.

Calculations work by diffing datafiles and calculating differences weighted by market liquidity & purchasing power available.
This suite was implemented with Lua (for datamining), ES6 for calculations, & ReactJS for responsive UI's
    `,
    "preview": {
		"thumbnails": {
			"webm": "mint.webm",
			"mp4": "mint.mp4"
		},
        "about": "Lua & ReactJS suite that performs calculations on profit/loss data",
        "youtubes": [
            "https://www.youtube.com/embed/En_9xQfm8Cg"
        ],
        "videos": [
            {
                "webm": "https://giant.gfycat.com/AdeptBlaringAmazondolphin.webm",
                "mp4": "https://thumbs.gfycat.com/AdeptBlaringAmazondolphin-mobile.mp4"
            }
        ],
    },
    "codeSnippets": [
        "https://gist.github.com/vitawebsitedesign/36e7fc168dfbf0c9c520b65ddd4e8b81",
        "https://gist.github.com/vitawebsitedesign/a2dcb6ca0e1510393fe5421b16b7952e",
        "https://gist.github.com/vitawebsitedesign/5d0231ddcc5dc665ef9a3c3a76fd826e",
        "https://gist.github.com/vitawebsitedesign/18f44ec2e9542e9cb7b2e5a6012a0e11"
    ],
    "learnt": [
        "Constructing different data structures in the Lua programming language",
        "Blizzard's third-party API",
        "The Pseudocode Programming Process & applying it to safely translate requirements into reality",
        "Replicating computer interaction through user32.dll"
    ],
    "urlsByType": {
        "full source code": [
            "https://github.com/vitawebsitedesign/mint",
            "https://github.com/vitawebsitedesign/mint-web-suite",
            "https://github.com/vitawebsitedesign/mint-button-masher"
        ],
        "demo in-action (timelapsed)": [
            "https://www.youtube.com/watch?v=En_9xQfm8Cg"
        ]
    }
};

export default exhibit;
