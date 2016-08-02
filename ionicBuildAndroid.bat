IF "%1"=="prod" (
	SET TARGET="prod"
	echo "######### Production Build ############"
) ELSE (
	SET TARGET="dev"
	echo "######### Development Build ############"
)
ionic build android