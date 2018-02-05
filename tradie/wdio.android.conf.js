const merge = require('deepmerge');
const baseConf = require('../shared/wdio.android.conf.js');
const tradieConf = require('./wdio.tradie.conf.js');
const baseTradie = merge(baseConf, tradieConf);
exports.config = merge(baseTradie.config, {
  specs: ['./specs/*.js'],
  suites: {
    sanity: [
      // './specs/consumer_feedback_spec.js',
      // './specs/lead_price_feedback/lead_price_feedback_spec.js',
      // '../shared/specs/message_centre/messaging_spec.js',
      // '../shared/specs/message_centre/attachment_spec.js',
      //'./specs/login/successful_login_spec.js'
        './specs/login/unsuccessful_login_spec.js'
     //'./specs/invites_accept_spec.js'

    ],
    login: ['./specs/login_system_spec.js'],
    messageCentre: ['../shared/specs/message_centre/attachment_spec.js',
      '../shared/spçecs/message_centre/messaging_spec.js'],
    paywall: ['./specs/paywall_spec.js'],
    oldSanity: ['./specs/1_sanity_spec.js'],
    leadPriceFeedback: ['./specs/lead_price_feedback/lead_price_feedback_spec.js'],
    consumerFeedback: ['./specs/consumer_feedback_spec.js']
  },

  capabilities: [{
    app: `${__dirname}/tradie.apk`
    // appPackage: 'com.hip.tradie.android',
    // appActivity: '.ui.SplashActivity'
  }],

  appPackage: 'com.hip.tradie.android',
  appActivity: '.ui.MainActivity',
  onPrepare(config, capabilities) {
    var AppiumpCloudy = require('./connector');
    instance = new AppiumpCloudy();
    instance.appiumInterface(__dirname + '/configs/config-android.json').then(function(appiumInitResp){
      console.log("appiumInitResp received  in wdio.android.conf : "+JSON.stringify(appiumInitResp));
    },function(appiumInitRespError){
      console.log(" appiumInitRespError received in wdio.android.conf : "+JSON.stringify(appiumInitRespError));
    });
    //try commenting other parts wait till u get any of this response after that you decide what to do...
    //instance.appiumInterface(__dirname + '/wdio.conf.pcloudy.js');
    //this instance has to be saved and used to release in onComplete.
  },
  before(capabilities, specs) {
    /*const custComs = require('../shared/lib/custom_commands.js');
    custComs.addCustCommands('android', process.cwd());*/
    console.log("on before ...");
  },
  onComplete() {
    /*const AppiumpCloudy = require('./sampleTest');
    instance = new AppiumpCloudy();
    instance.releasePCloudy();*/
      console.log("on complete ...");
  }
});
