const exhibit = {
    "id": "sql-keyword-formatter",
    "title": "SQL Keyword Formatter",
	"tags": [
		{
			"icon": "emoji_events",
			"text": "Microsoft Store"
        },
		{
			"icon": "code",
			"text": "Universal Windows Platform"
		},
		{
			"icon": "pie_chart",
			"text": "T-SQL"
        },
		{
			"icon": "search",
			"text": "Regex"
		}
	],
    "overview": `
In ASP.NET architectures, raw T-SQL can be an attractive alternative to Entity Framework statements (Dapper/ADO.NET).
This is especially true when it comes to expensive bulk operations.

However raw T-SQL (declared as multi-line strings) can sometimes have all-lowercase casing. Some developers prefer uppercase T-SQL keywords for readability.

SQL Keyword Formatter is a modern UWP Windows app that allows a developer to move to the later keyword format productively.
Specifically, one can now just copy & paste entire T-SQL snippets, and immediately retrieve the functional equivalent with uppercase keywords.
The significant productivity boost enabled by this app proves valuable.
    `,
    "preview": {
		"thumbnails": {
			"webm": "sql-keyword-formatter.webm",
			"mp4": "sql-keyword-formatter.mp4"
		},
        "about": "Automatically uppercase T-SQL keywords in multi-line strings",
        "images": [
            {
                "src": "https://i.imgur.com/WxfoIFD.jpg",
                "alt": "Example of the SQL Keyword Formatter in action"
            }
        ]
    },
    "codeSnippets": [
        "https://gist.github.com/vitawebsitedesign/a4bc1a4004d88dfe34c5daab3bb9dfbe",
        "https://gist.github.com/vitawebsitedesign/b9ff00fc48308aa5f7c678bc970834d7"
    ],
    "learnt": [
        "The different scenarios T-SQL keywords may be used in, then translating those into regex patterns",
        "Thorough use of fixtures in automated parallelable nUnit tests to minimize regressions",
        "How to develop with the UWP framework & passing Microsoft Store audits to enable publishment to the store"
    ],
    "urlsByType": {
        "full source code": [
            "https://github.com/vitawebsitedesign/sql-keyword-formatter"
        ],
        "product": [
            "https://www.microsoft.com/en-au/p/sql-keyword-formatter/9mv09gl7hrt1?cid=msft_web_chart&activetab=pivot:overviewtab"
        ]
    }
};

export default exhibit;
