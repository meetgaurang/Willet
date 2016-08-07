IF "%1"=="prod" (
	SET TARGET="prod"
	echo "######### Production Build ############"
	ionic build android --release
	jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk alias_name
	%ANDROID_HOME%/build-tools/24.0.0/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk platforms/android/build/outputs/apk/willet-release.apk
) ELSE (
	SET TARGET="dev"
	echo "######### Development Build ############"
	ionic build android
)
