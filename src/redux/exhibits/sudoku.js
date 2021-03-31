const exhibit = {
	"id": "sudoku",
	"title": "Sudoku",
	"tags": [
		{
			"icon": "android",
			"text": "Algorithms"
		},
		{
			"icon": "sd_storage",
			"text": "Redux"
		},
		{
			"icon": "code",
			"text": "Typescript"
		},
		{
			"icon": "code",
			"text": "ReactJS"
		}
	],
	"overview": `
Well-formed Sudoku puzzles have a solution that can be determined via algorithms.
This project explores the application of depth-first tree searching (in combination with back-stepping) to brute-force sudoku puzzles.
Due to the space complexity, this product prioritises memory efficiency during solution generation.
    `,
    "preview": {
		"thumbnails": {
			"webm": "sudoku.webm",
			"mp4": "sudoku.mp4"
		},
		"about": "Memory-efficient Sudoku solution generation via depth-first algorithm"
	},
    "codeSnippets": [
        "https://gist.github.com/vitawebsitedesign/76789de05b13c396c507d0a95e1fad3d",
        "https://gist.github.com/vitawebsitedesign/8044492ca11e88e67ede06edd9d931de",
        "https://gist.github.com/vitawebsitedesign/3e571d18bbca97576f95f17a26cfb1c2",
        "https://gist.github.com/vitawebsitedesign/c720f79be20527226f07dc35b1b07ee9"
    ],
	"learnt": [
    "The mathematics to retrieve & manipulate sudoku data as a 1D array",
		"The application of depth-first tree searching in a memory-efficient way",
		"The leveraging of actions for Redux reducers"
    ],
	"urlsByType": {
		"full source code": [
			"https://github.com/vitawebsitedesign/sudoku"
		]
	}
};

export default exhibit;
