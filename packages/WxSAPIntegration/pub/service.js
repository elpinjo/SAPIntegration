app.service('myserv', function() {
          this.getServiceList = function () {
    return [];
}
this.getISEndpoint = function() { 
 return 'http://192.168.4.182:5555/';
}
this.getAPIList = function() { 
 return [];
}
this.getCreatedTime = function() { 
 return "29-11-2022 14:44:14 CET";
}
this.getPackageInfo = function(){
 return{"packageName":"WxSAPIntegration","version":"1.0"};
}
});
