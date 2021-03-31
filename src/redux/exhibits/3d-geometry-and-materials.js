const exhibit = {
	"id": "3d-geometry-and-materials",
	"title": "3d geometry & materials scripting",
	"tags": [
		{
			"icon": "category",
			"text": "geometry"
		},
		{
			"icon": "fingerprint",
			"text": "materials"
		},
		{
			"icon": "device_hub",
			"text": "Blender API"
		},
		{
			"icon": "code",
			"text": "Python"
		}
	],
	"overview": `
Blender is a 3D construction, animation & rendering tool.
Blender has an API that can be interacted with Python scripts to develop 3D geometry & scenes.
These scripts use the Blender API to create & edit geometry, script animations of 3D curves & apply emissive materials.
    `,
    "preview": {
		"thumbnails": {
			"webm": "exhibit-thumbnail-3d-geometry-and-materials.webm",
			"mp4": "exhibit-thumbnail-3d-geometry-and-materials.mp4"
		},
		"about": "Blender scripts exploring geometry creation & materials application",
        "images": [
            {
                "src": "https://i.imgur.com/IQfjqog.png",
                "alt": "Creating & updating sphere geometry & locations"
			},
            {
                "src": "https://i.imgur.com/l99rCwj.png",
                "alt": "3D curves with animation keyframes & emissive materials"
			}
		],
        "videos": [
            {
                "mp4": "https://i.imgur.com/f1BX1n0.mp4"
            }
        ],
	},
    "codeSnippets": [
        "https://gist.github.com/vitawebsitedesign/580c13e51eeb6d87d4bf847df4bd286d",
        "https://gist.github.com/vitawebsitedesign/4ffdffd900c484450c08f43c9f137dea"
    ],
	"learnt": [
    	"Programmatic application of materials & geometry",
		"Programmatic animation keyframe creation",
		"Python & using it to leverage the Blender API"
    ],
	"urlsByType": {
		"full source code": [
			"https://github.com/vitawebsitedesign/blender-python-scripts"
		]
	}
};

export default exhibit;
