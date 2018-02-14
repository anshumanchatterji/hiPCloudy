var AppiumpCloudy = require('./sampleTest.js');
   
instance = new AppiumpCloudy();

var configs = {
  "protocol" : "https",
  "host" : "device.pcloudy.com",
  "port" : 443,
  "username" : "shibu.prasad@sstsinc.com",
  "password" : "5vgzqqp4zrd2hdrgymbqz8yq",
  "appname" : "tradie.apk",
  "oSversion":"6.0.1",
  "count":1,
  "platform":"1",
  "os" :"android"
}

instance.appiumInterface(configs).then(function(appiumInterfaceResp) {
   		console.log("appiumInitResp received  in wdio.android.conf "+JSON.stringify(appiumInterfaceResp));
  
	},function(appiumInterfaceRespErr){
	    	console.log("appiumInterfaceRespErr received  "+JSON.stringify(appiumInterfaceRespErr));
	});
