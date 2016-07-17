#!/usr/bin/env node

var fs = require('fs');
fs.rename("platforms/android/build/outputs/apk/android-debug.apk", "platforms/android/build/outputs/apk/Willet.apk", function(error) {
	if(error) {
		console.log("Error: " + error);
	}
});