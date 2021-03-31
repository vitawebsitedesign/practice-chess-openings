const exhibit = {
	"id": "agile-aes",
	"title": "Agile AES",
	"tags": [
		{
			"icon": "lock",
			"text": "Encryption"
		},
		{
			"icon": "verified",
			"text": "Nuget"
		},
		{
			"icon": "inventory_2",
			"text": ".NET Standard"
		},
		{
			"icon": "code",
			"text": "C#"
		}
	],
	"overview": `
.NET provides AES encryption functionality to developers, but usage involves a large code footprint.
Thus, a library that delivers the same functionality with lesser footprint via abstraction would be incredibly valuable.
Developers no longer need to know exact encryption implementation details, and allows them to obtain the same encryption/decryption functionality in a stateless manner.
Hence, AgileAES is a library that productively abstracts AES through a series of 1-liners.
    `,
    "preview": {
		"thumbnails": {
			"webm": "agile-aes.webm",
			"mp4": "agile-aes.mp4"
		},
		"about": "Easily do AES encryption and/or ciphering between clear text & SecureString"
	},
    "codeSnippets": [
        "https://gist.github.com/vitawebsitedesign/64e4721caca03209cc2c4052f67f293d",
        "https://gist.github.com/vitawebsitedesign/d2d0a104cfdd10e906f4c802b2742d17"
    ],
	"learnt": [
		"The usage of the System.Security.Cryptography.Aes class",
		"The semantics between MemoryStream, CryptoStream & StreamWriter to ensure operation scalability.",
		"The .NET SecureString security limitations. Specifically, how contents are protected in memory across different platforms"
    ],
	"urlsByType": {
		"full source code": [
			"https://github.com/vitawebsitedesign/AgileAES",
			"https://github.com/vitawebsitedesign/SecureStringCharacters"
		],
		"product": [
			"https://www.nuget.org/packages/MichaelNguyen.AgileAES/",
			"https://www.nuget.org/packages/MichaelNguyen.Utility.SecureStringCharacters/"
		]
	}
};

export default exhibit;
