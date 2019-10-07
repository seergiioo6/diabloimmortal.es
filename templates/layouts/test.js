function invokeVideoPlayer(url) {
	bc("myVideo").ima3({
		serverUrl: url,
		debug: true,
		timeout: 5000,
		ima3SdkSettings: {
			"disableCustomPlaybackForIOS10Plus": true
		},
		adTechOrder: [
			"html5",
			"flash"
		],
	});
	videojs("myVideo").ready(function() {
		var myPlayer = this;
		myPlayer.catalog.getVideo("5276850149001", function (error, video) {
			myPlayer.catalog.load(video);
			if (error) {
				console.log("There was an error retrieving the media file: " + error);
			}
		});
		myPlayer.on("ima3error", function () {
			console.log("There was an ima3 error.");
		});
	})
}
