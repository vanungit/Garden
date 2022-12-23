;/*FB_PKG_DELIM*/

__d("isHorizonDotMetaDotComURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)horizon\\.meta\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}f["default"]=a}),66);
__d("isSparkDotMetaDotComURI",[],(function(a,b,c,d,e,f){var g=new RegExp("(^|\\.)spark\\.meta\\.com$","i"),h=["https"];function a(a){if(a.isEmpty()&&a.toString()!=="#")return!1;return!a.getDomain()&&!a.getProtocol()?!1:h.indexOf(a.getProtocol())!==-1&&g.test(a.getDomain())}f["default"]=a}),66);
__d("fbjs/lib/emptyFunction",["emptyFunction"],(function(a,b,c,d,e,f){"use strict";e.exports=b("emptyFunction")}),null);