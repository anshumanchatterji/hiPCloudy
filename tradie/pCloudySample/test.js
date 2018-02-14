var AppiumpCloudy = require('./sampleTest.js');
   
instance = new AppiumpCloudy();

var configs = {
  "desiredCapabilities": {
    "launchTimeout" : 90000,
    "CommandTimeout" : 600,
    "appPackage": "com.hip.tradie.android",
    "appActivity": ".ui.MainActivity",
    "rotatable" : true
  },
  "logLevel" : "verbose",
  "logOutput" : "./log/",
  "protocol" : "https",
  "host" : "device.pcloudy.com",
  "port" : 443,
  "coloredLogs" : true,
  "bail" : 0,
  "screenshotPath" : "./errorShots/",
  "username" : "shibu.prasad@sstsinc.com",
  "password" : "5vgzqqp4zrd2hdrgymbqz8yq",
  "appname" : "tradie.apk",
  "oSversion":"6.0.1",
  "count":1,
  "platform":"1",
  "os" :""
}

instance.appiumInterface(configs).then(function(appiumInterfaceResp) {
   		console.log("appiumInitResp received  in wdio.android.conf "+JSON.stringify(appiumInterfaceResp));
  
	},function(appiumInterfaceRespErr){
	    	console.log("appiumInterfaceRespErr received  "+JSON.stringify(appiumInterfaceRespErr));
	});
