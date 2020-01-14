var themes = [
		{
			"colours":[
				"1c2939",
				"253447",
				"263546",
				"233040",
				"1b2531",
				"3c4a59",
				"707e8b",
				"707e8b",
			]
		},
		{
			"colours":[
				"fff",
				"fff",
				"fff",
				"fff",
				"000",
				"000",
				"000",
				"fff",
			]
		}
	
]

getPreferences();

function getPreferences() {

	chrome.storage.sync.get('tabPrefs', function(object) {

		console.log(object.tabPrefs);
		
		if (object.tabPrefs == undefined) {
			chrome.storage.sync.set(
				{ 	'tabPrefs': {
						'theme': 0
					}
				}
			);
			setTheme(0);
		} else {
			setTheme(object.tabPrefs.theme);
		}
	});

}

/*  --bg-colour : #fff;
  --header-colour :#fff;
  --settings-bg-colour :#fff;
  --settings-well-colour :#fff;
  --settings-button-colour: #000;
  --settings-outline-colour: #000;
  --font-colour : #000;
  --font-light-colour : #fff;*/

function setTheme(themeIndex) {
	document.documentElement.style.setProperty('--bg-colour', "#" + themes[themeIndex].colours[0]);
	document.documentElement.style.setProperty('--header-colour', "#" + themes[themeIndex].colours[1]);
	document.documentElement.style.setProperty('--settings-bg-colour', "#" + themes[themeIndex].colours[2]);
	document.documentElement.style.setProperty('--settings-well-colour', "#" + themes[themeIndex].colours[3]);
	document.documentElement.style.setProperty('--settings-button-colour', "#" + themes[themeIndex].colours[4]);
	document.documentElement.style.setProperty('--settings-outline-colour', "#" + themes[themeIndex].colours[5]);
	document.documentElement.style.setProperty('--font-colour', "#" + themes[themeIndex].colours[6]);
	document.documentElement.style.setProperty('--font-light-colour', "#" + themes[themeIndex].colours[7]);
}