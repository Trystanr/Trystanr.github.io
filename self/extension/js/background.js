const CLIENT_ID = encodeURIComponent("rjlwvply0wcb3r9uygb5m5ly1o31tx");
const REDIRECT_URI = encodeURIComponent("https://mjefmmgpdalfommpehabccnhodbppfje.chromiumapp.org/");
const RESPONSE_TYPE = encodeURIComponent("token id_token");
const SCOPE = encodeURIComponent("openid user:read:email");
const CLAIMS = encodeURIComponent(
	JSON.stringify({
		id_token: { email: null, email_verified: null }
	})
);
const STATE = encodeURIComponent('meet' + Math.random().toString(36).substring(2, 15));

let user_signed_in = false;
let ACCESS_TOKEN = null;
let interval_id = null;

function create_twitch_endpoint() {
	let nonce = encodeURIComponent(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));

	let openid_url =
		`https://id.twitch.tv/oauth2/authorize
?client_id=${CLIENT_ID}
&redirect_uri=${REDIRECT_URI}
&response_type=${RESPONSE_TYPE}
&scope=${SCOPE}
&claims=${CLAIMS}
&state=${STATE}
&nonce=${nonce}
`;

	return openid_url;
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
	if (request.message === "login") {
		if (user_signed_in) {
			console.log("User is already signed in.");
		} else {
			// sign user in with Twitch
			chrome.identity.launchWebAuthFlow({
				url: create_twitch_endpoint(),
				interactive: true
			}, function (redirect_url) {
				console.log(redirect_url)
				if (chrome.runtime.lastError || redirect_url.includes('error=access_denied')) {
					sendResponse({ message: 'fail' });
				} else {
					let id_token = redirect_url.substring(redirect_url.indexOf('id_token=') + 9);
					id_token = id_token.substring(0, id_token.indexOf('&'));
					ACCESS_TOKEN = redirect_url.substring(redirect_url.indexOf('access_token=') + 13);
					ACCESS_TOKEN = ACCESS_TOKEN.substring(0, ACCESS_TOKEN.indexOf('&'));
					const user_info = KJUR.jws.JWS.readSafeJSONString(b64utoutf8(id_token.split(".")[1]));

					if (user_info.iss === 'https://id.twitch.tv/oauth2' && user_info.aud === CLIENT_ID) {
						user_signed_in = true;

						interval_id = setInterval(() => {
							fetch('https://id.twitch.tv/oauth2/validate', {
								headers: {
									'Authorization': 'OAuth ' + ACCESS_TOKEN
								}
							})
								.then(res => {
									console.log(res.status)
									if (res.status === 401) {
										user_signed_in = false;
										clearInterval(interval_id);
									}
								})
								.catch(err => console.log(err))
						}, 3600000);

						chrome.browserAction.setPopup({ popup: "./popup-signed-in.html" }, () => {
							sendResponse({ message: "success" });
						});
					}
				}
			});
		}
		return true;
	} else if (request.message === "logout") {
		user_signed_in = false;
		chrome.browserAction.setPopup({ popup: "./popup.html" }, () => {
			sendResponse({ message: "success" });
		});
		return true;
	}
});