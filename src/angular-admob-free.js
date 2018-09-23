(function(){

	angular.module('adMobFree', [])

	.provider('$adMobFree', [function () 
	{
		var events = {
			'admob.banner.events.LOAD': '$adMobFree:bannerLoad',
			'admob.banner.events.LOAD_FAIL': '$adMobFree:bannerLoadFail',
			'admob.banner.events.OPEN': '$adMobFree:bannerOpen',
			'admob.banner.events.CLOSE': '$adMobFree:bannerClose',
			'admob.banner.events.EXIT_APP': '$adMobFree:bannerExitApp',
			'admob.interstitial.events.LOAD': '$adMobFree:interstitialLoad',
			'admob.interstitial.events.LOAD_FAIL': '$adMobFree:interstitialLoadFail',
			'admob.interstitial.events.OPEN': '$adMobFree:interstitialOpen',
			'admob.interstitial.events.CLOSE': '$adMobFree:interstitialClose',
			'admob.interstitial.events.EXIT_APP': '$adMobFree:interstitialExitApp',
			'admob.rewardvideo.events.LOAD': '$adMobFree:rewardvideoLoad',
			'admob.rewardvideo.events.LOAD_FAIL': '$adMobFree:rewardvideoLoadFail',
			'admob.rewardvideo.events.OPEN': '$adMobFree:rewardvideoOpen',
			'admob.rewardvideo.events.CLOSE': '$adMobFree:rewardvideoClose',
			'admob.rewardvideo.events.EXIT_APP': '$adMobFree:rewardvideoExitApp',
			'admob.rewardvideo.events.START': '$adMobFree:rewardvideoStart',
			'admob.rewardvideo.events.REWARD': '$adMobFree:rewardvideoReward',
		};

		this.bannerConfig = function(options)
		{
			document.addEventListener('deviceready', function() 
			{
				admob.banner.config(options);
			});
		};

		this.interstitialConfig = function(options)
		{
			document.addEventListener('deviceready', function() 
			{
				admob.interstitial.config(options);
			});
		};

		this.rewardvideoConfig = function(options)
		{
			document.addEventListener('deviceready', function() 
			{
				admob.rewardvideo.config(options);
			});
		};



		this.$get = ['$q', '$rootScope', function ($q, $rootScope) 
		{
			angular.forEach(events, function(event, document_event) 
			{
				document.addEventListener(document_event, function() 
				{
					$rootScope.$broadcast(event, []);
				});
			});

			return {
				banner: {
					prepare: function () {admob.banner.prepare();},
					show: function () {admob.banner.show();},
					hide: function () {admob.banner.hide();},
					remove: function () {admob.banner.remove();},
				},
				rewardvideo: {
					prepare: function () {admob.rewardvideo.prepare();},
					show: function () {admob.rewardvideo.show();},					
				},
				interstitial: {
					prepare: function () {admob.interstitial.prepare();},
					show: function () {admob.interstitial.show();},
				}
			};
		}];
	}]);

})();