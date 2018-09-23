# angular-admob-free
AngularJS module for Cordova Admob Free Plugin

## Requirements
cordova plugin: cordova-plugin-admob-free

## Installation
```shell
bower install angular-admob-free --save
```

## Usage
```html
<script src="lib/angular-admob-free/src/angular-admob-free.js"></script>
```

```javascript
angular.module('myapp', ['adMobFree'])

.config(($adMobFreeProvider) =>
{
	if (window.cordova)
	{
		$adMobFreeProvider.bannerConfig({id: 'ca-app-pub-xxx/xxx'});
		$adMobFreeProvider.rewardvideoConfig({id: 'ca-app-pub-xxx/xxx', isTesting: true});
		$adMobFreeProvider.interstitialConfig({id: 'ca-app-pub-xxx/xxx', isTesting: true});
	}
})

.run($AdMobFree, $rootScope)
{
	document.addEventListener('deviceready', function() 
	{
		$adMobFree.banner.prepare();
		$adMobFree.banner.show();
	  
		$adMobFree.rewardvideo.prepare();
	});

	$rootScope.$on('$AdMobFree:rewardvideoLoad', function()
	{
		$AdMobFree.rewardvideo.show();
	});
}

```
## Signals
* admob.banner.events.LOAD: $adMobFree:bannerLoad
* admob.banner.events.LOAD_FAIL: $adMobFree:bannerLoadFail
* admob.banner.events.OPEN: $adMobFree:bannerOpen
* admob.banner.events.CLOSE: $adMobFree:bannerClose
* admob.banner.events.EXIT_APP: $adMobFree:bannerExitApp
* admob.interstitial.events.LOAD: $adMobFree:interstitialLoad
* admob.interstitial.events.LOAD_FAIL: $adMobFree:interstitialLoadFail
* admob.interstitial.events.OPEN: $adMobFree:interstitialOpen
* admob.interstitial.events.CLOSE: $adMobFree:interstitialClose
* admob.interstitial.events.EXIT_APP: $adMobFree:interstitialExitApp
* admob.rewardvideo.events.LOAD: $adMobFree:rewardvideoLoad
* admob.rewardvideo.events.LOAD_FAIL: $adMobFree:rewardvideoLoadFail
* admob.rewardvideo.events.OPEN: $adMobFree:rewardvideoOpen
* admob.rewardvideo.events.CLOSE: $adMobFree:rewardvideoClose
* admob.rewardvideo.events.EXIT_APP: $adMobFree:rewardvideoExitApp
* admob.rewardvideo.events.START: $adMobFree:rewardvideoStart
* admob.rewardvideo.events.REWARD: $adMobFree:rewardvideoReward

## Documentation
[https://github.com/ratson/cordova-plugin-admob-free]
