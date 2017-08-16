(function(){

	angular.module('adMobFree', [])

	.provider('$AdMobFree', [function () 
	{
		var events = {
			'admob.banner.events.LOAD': '$AdMobFree:bannerLoad',
			'admob.banner.events.LOAD_FAIL': '$AdMobFree:bannerLoadFail',
			'admob.banner.events.OPEN': '$AdMobFree:bannerOpen',
			'admob.banner.events.CLOSE': '$AdMobFree:bannerClose',
			'admob.banner.events.EXIT_APP': '$AdMobFree:bannerExitApp',
			'admob.interstitial.events.LOAD': '$AdMobFree:interstitialLoad',
			'admob.interstitial.events.LOAD_FAIL': '$AdMobFree:interstitialLoadFail',
			'admob.interstitial.events.OPEN': '$AdMobFree:interstitialOpen',
			'admob.interstitial.events.CLOSE': '$AdMobFree:interstitialClose',
			'admob.interstitial.events.EXIT_APP': '$AdMobFree:interstitialExitApp',
			'admob.rewardvideo.events.LOAD': '$AdMobFree:rewardvideoLoad',
			'admob.rewardvideo.events.LOAD_FAIL': '$AdMobFree:rewardvideoLoadFail',
			'admob.rewardvideo.events.OPEN': '$AdMobFree:rewardvideoOpen',
			'admob.rewardvideo.events.CLOSE': '$AdMobFree:rewardvideoClose',
			'admob.rewardvideo.events.EXIT_APP': '$AdMobFree:rewardvideoExitApp',
			'admob.rewardvideo.events.START': '$AdMobFree:rewardvideoStart',
			'admob.rewardvideo.events.REWARD': '$AdMobFree:rewardvideoReward',
		};

		this.bannerConfig = function(options)
		{
			document.addEventListener('deviceready', function() 
			{
				admob.banner.config(options);
			});
		}

		this.interstitialConfig = function(options)
		{
			document.addEventListener('deviceready', function() 
			{
				admob.interstitial.config(options);
			});
		}

		this.rewardvideoConfig = function(options)
		{
			document.addEventListener('deviceready', function() 
			{
				admob.rewardvideo.config(options);
			});
		}



		this.$get = ['$q', '$rootScope', function ($q, $rootScope) 
		{
			angular.forEach(events, function(event, document_event) 
			{
				document.addEventListener(document_event, function() 
				{
					console.log('broadcast ', event);
					$rootScope.$broadcast(event, []);
				});
			});

			return {
				banner: typeof admob !== 'undefined' ? admob.banner : undefined,
				rewardvideo: typeof admob !== 'undefined' ? admob.rewardvideo : undefined,
				interstitial: typeof admob !== 'undefined' ? admob.interstitial : undefined
			};
		}];
	}])

})();