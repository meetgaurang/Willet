#!/usr/bin/env node
if (process.env.TARGET!='"prod"') {
	var fs = require('fs');
	fs.rename("platforms/android/build/outputs/apk/android-debug.apk", "platforms/android/build/outputs/apk/willet-debug.apk", function(error) {
		if(error) {
			console.log("Error: " + error);
		}
	});
}