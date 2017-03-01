module.exports = function ( app, server_detail ) {
	console.log("app:: ", app);
	console.log("server_detail:: ", server_detail);
    var host = server_detail.host;
    var self_port = server_detail.self_port;
    var env = server_detail.env;
    var protocol = server_detail.protocol;

	return {
		login: function ( req, res ) {
			console.log("Log-in Invoked");
			var request = require('request');
			var body = req.body;
			var username = body.username;
			var password = body.password;
			var chalkToken;
			var responseProfile;
			var chalkLoginURL = '';

			function callback(error, response, body) {
				console.log("Login Response", body);
				if (!error && response.statusCode == 200) {
					if (toString.call(body) === "[object Object]") {
						responseProfile = body;
					}
					else {
						responseProfile = JSON.parse(body);
					}
					console.log(responseProfile);
					if (responseProfile.status == 0) {
						console.log('the value for host in callback function-> ', host);

						chalkToken = responseProfile.response.token;
						res.json({
							"status": "success",
							"message": "",
							"userProfile": responseProfile.profile,
							"auth_token": chalkToken
						});

					} else {
						res.json({
							"status": "failure",
							"message": "Error while logging in, Please try again later",
							"errorcode": responseProfile.ec
						});
					}


				} else {
					res.json({
						"status": "failure",
						"message": "Error while logging in, Please try again later",
						"errorcode": 500
					});
				}
			}

			var appname = "Hsf";

			chalkLoginURL = {
				url: protocol + host + ":" + self_port + "/bh/login/v1",
				method: 'post',
				json: {"username": username, "password": password, "appname": appname },
				headers: {'Content-Type': 'application/json'}
			};
			console.log("Login Options", chalkLoginURL);
			//Other login process ends here (with password)
			request(chalkLoginURL, callback);
		}
	}
}