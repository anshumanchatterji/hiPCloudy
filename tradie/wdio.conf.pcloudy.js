const merge = require('deepmerge');
const baseConf = require('../shared/wdio.android.conf.js');
const tradieConf = require('./wdio.tradie.conf.js');
const baseTradie = merge(baseConf, tradieConf);
var Promise = require('promise');

exports.config = merge(baseTradie.config, {
  pCloudyUserName: 'shibu.prasad@sstsinc.com',
  pCloudyApiKey: '5vgzqqp4zrd2hdrgymbqz8yq',
  specs: ['./specs/*.js'],
  suites: {
    smoke: ['./specs/login/successful_login_spec.js'],
    sanity: [
      './specs/login/unsuccessful_login_spec.js'],
    login: ['./specs/login_system_spec.js']
  },
  capabilities: [{
    launchTimeout: 90000,
    CommandTimeout: 600,
    appPackage: 'com.hip.tradie.android',
    appActivity: '.ui.MainActivity',
    rotatable: true
  }],
  logLevel: 'verbose',
  logOutput: './log/',
  protocol: 'https',
  host: 'device.pcloudy.com',
  port: 443,
  coloredLogs: true,
  bail: 0,
  screenshotPath: './errorShots/',
  appname: 'tradie.apk',
  oSversion: '6.0.1',
  count: 1,
  platform: '1',
  os: 'android',
  framework: 'jasmine',
  onPrepare(config, capabilities) {
    	console.log("on prepare Start...");
	var AppiumpCloudy = require('./pCloudySample/sampleTest.js');
  	var promise = new Promise(function (resolve, reject) {
	instance = new AppiumpCloudy();

	var pCloudyConfigs = {
	  "protocol" : config.protocol,
	  "host" : config.host,
	  "port" : config.port,
	  "username" : config.pCloudyUserName,
	  "password" : config.pCloudyApiKey,
	  "appname" : config.appname,
	  "oSversion": config.oSversion,
	  "count":config.count,
	  "platform":config.platform,
	  "os" :config.os
	}

	     instance.appiumInterface(pCloudyConfigs).then(function(appiumInterfaceResp) {
    	   	console.log("appiumInitResp received  in wdio.android.conf "+JSON.stringify(appiumInterfaceResp));
    			config.host = appiumInterfaceResp.endpoint.split("https://")[1]+"/wd/hub";
    			capabilities.browserName = appiumInterfaceResp.capabilities.browserName;
    			capabilities.deviceName = appiumInterfaceResp.capabilities.deviceName;
          var hubUrl = endPoint.endpoint + '/wd/hub',
            p = config.protocol + "://" + config.host;
            config.path = hubUrl.split(p)[1];
            resolve({'status':'onpreparedone'});
    		},function(appiumInterfaceRespErr){
    		    	console.log("appiumInterfaceRespErr received  "+JSON.stringify(appiumInterfaceRespErr));
              reject({'status':'onpreparedoneErr'});
    		});
     	});
	console.log("on prepare End...");
	return promise;
  },
  before(capabilities, specs) {
    const custComs = require('../shared/lib/custom_commands.js');
    custComs.addCustCommands('android', process.cwd());
  },
  onComplete() {
    console.log("on complete ...");
  }
});
