;/*FB_PKG_DELIM*/

__d("PolarisFollowListActionConstants",[],(function(a,b,c,d,e,f){"use strict";a=12;f.PAGE_SIZE=a}),66);
__d("PolarisfollowListSelectors",["PolarisPaginationUtils"],(function(a,b,c,d,e,f,g){"use strict";function h(a,b,c){return(a=a.followLists.get(b))==null?void 0:a[c]}function i(a,b,c){return(a=h(a,b,c))==null?void 0:a.pagination}function a(a,b,c){return d("PolarisPaginationUtils").getEndCursor((a=i(a,b,c))!=null?a:void 0)}g.getFollowListPagination=i;g.getFollowListPaginationCursor=a}),98);
__d("PolarisFollowListActions",["PolarisFollowListActionConstants","PolarisInstapi","PolarisMonitorErrors","PolarisPaginationUtils","PolarisRelationshipActionGetRelationshipInfoForUserIds","PolarisfollowListSelectors","regeneratorRuntime"],(function(a,b,c,d,e,f,g){"use strict";var h="follow_list_page";function a(a,b,c,e){c===void 0;e===void 0&&(e=!1);return function(c,f){var g;b==="admins"?g="groupAdmins":g=b==="followers"?e?"inboundMutual":"inbound":"outbound";f=d("PolarisfollowListSelectors").getFollowListPagination(f(),a,g);if(f!=null)return;["followers","members"].includes(b)?e?c(l(a)):c(i(a)):b==="admins"?c(j(a)):c(m(a))}}function c(a,b,c){c===void 0&&(c=!1);if(b==="admins")return j(a);return b==="followers"?c?l(a):i(a):m(a)}function i(a,c){c===void 0&&(c=d("PolarisFollowListActionConstants").PAGE_SIZE);return function(e,f){var g,i,j,k,l,m;return b("regeneratorRuntime").async(function(n){while(1)switch(n.prev=n.next){case 0:e({type:"FOLLOW_LIST_FOLLOWERS_REQUEST",userId:a});g=d("PolarisfollowListSelectors").getFollowListPaginationCursor(f(),a,"inbound");n.prev=2;n.next=5;return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiGet("/api/v1/friendships/{user_id}/followers/",{path:{user_id:a},query:{count:c,max_id:(i=g)!=null?i:void 0,search_surface:h}}));case 5:k=n.sent;l=k.data;m=((j=l.users)!=null?j:[]).map(function(a){return String(a.pk)});n.next=10;return b("regeneratorRuntime").awrap(e(d("PolarisRelationshipActionGetRelationshipInfoForUserIds").getRelationshipInfoForUserIds(m)));case 10:e({response:l,type:"FOLLOW_LIST_FOLLOWERS_SUCCESS",userId:a});n.next=16;break;case 13:n.prev=13,n.t0=n["catch"](2),d("PolarisMonitorErrors").logError(n.t0);case 16:case"end":return n.stop()}},null,this,[[2,13]])}}function j(a,c){c===void 0&&(c=d("PolarisFollowListActionConstants").PAGE_SIZE);return function(e,f){var g,h,i,j,k,l;return b("regeneratorRuntime").async(function(m){while(1)switch(m.prev=m.next){case 0:e({type:"FOLLOW_LIST_ADMINS_REQUEST",userId:a});g=d("PolarisfollowListSelectors").getFollowListPaginationCursor(f(),a,"groupAdmins");m.prev=2;m.next=5;return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiGet("/api/v1/friendships/{group_id}/group_admins/",{path:{group_id:a},query:{count:c,max_id:(h=g)!=null?h:void 0}}));case 5:j=m.sent;k=j.data;l=((i=k.users)!=null?i:[]).map(function(a){return String(a.pk)});m.next=10;return b("regeneratorRuntime").awrap(e(d("PolarisRelationshipActionGetRelationshipInfoForUserIds").getRelationshipInfoForUserIds(l)));case 10:e({response:k,type:"FOLLOW_LIST_ADMINS_SUCCESS",userId:a});m.next=16;break;case 13:m.prev=13,m.t0=m["catch"](2),d("PolarisMonitorErrors").logError(m.t0);case 16:case"end":return m.stop()}},null,this,[[2,13]])}}function k(a,c){c===void 0&&(c=d("PolarisFollowListActionConstants").PAGE_SIZE);return function(e,f){var g,h,i,j,k,l;return b("regeneratorRuntime").async(function(m){while(1)switch(m.prev=m.next){case 0:e({type:"FOLLOW_LIST_MUTUAL_FOLLOWERS_REQUEST",userId:a});g=d("PolarisfollowListSelectors").getFollowListPaginationCursor(f(),a,"inboundMutual");m.prev=2;m.next=5;return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiGet("/api/v1/friendships/{user_id}/mutual_followers/",{path:{user_id:a},query:{max_id:(h=g)!=null?h:void 0,page_size:c}}));case 5:j=m.sent;k=j.data;l=((i=k.users)!=null?i:[]).map(function(a){return String(a.pk)});m.next=10;return b("regeneratorRuntime").awrap(e(d("PolarisRelationshipActionGetRelationshipInfoForUserIds").getRelationshipInfoForUserIds(l)));case 10:e({response:k,type:"FOLLOW_LIST_MUTUAL_FOLLOWERS_SUCCESS",userId:a});m.next=16;break;case 13:m.prev=13,m.t0=m["catch"](2),d("PolarisMonitorErrors").logError(m.t0);case 16:case"end":return m.stop()}},null,this,[[2,13]])}}function l(a,b){b===void 0&&(b=d("PolarisFollowListActionConstants").PAGE_SIZE);return function(c,e){e=d("PolarisfollowListSelectors").getFollowListPagination(e(),a,"inboundMutual");return e==null||d("PolarisPaginationUtils").canFetchMorePagination(e)===!0?c(k(a,b)):c(i(a,b))}}function m(a,c){c===void 0&&(c=d("PolarisFollowListActionConstants").PAGE_SIZE);return function(e,f){var g,h,i,j,k,l;return b("regeneratorRuntime").async(function(m){while(1)switch(m.prev=m.next){case 0:e({type:"FOLLOW_LIST_FOLLOWING_REQUEST",userId:a});g=d("PolarisfollowListSelectors").getFollowListPaginationCursor(f(),a,"outbound");m.prev=2;m.next=5;return b("regeneratorRuntime").awrap(d("PolarisInstapi").apiGet("/api/v1/friendships/{user_id}/following/",{path:{user_id:a},query:{count:c,max_id:(h=g)!=null?h:void 0}}));case 5:j=m.sent;k=j.data;l=((i=k.users)!=null?i:[]).map(function(a){return String(a.pk)});m.next=10;return b("regeneratorRuntime").awrap(e(d("PolarisRelationshipActionGetRelationshipInfoForUserIds").getRelationshipInfoForUserIds(l)));case 10:e({response:k,type:"FOLLOW_LIST_FOLLOWING_SUCCESS",userId:a});m.next=16;break;case 13:m.prev=13,m.t0=m["catch"](2),d("PolarisMonitorErrors").logError(m.t0);case 16:case"end":return m.stop()}},null,this,[[2,13]])}}g.requestFollowList=a;g.requestNextFollowListPage=c;g.requestFollowers=i;g.requestGroupAdmins=j;g.requestMutualFollowers=k;g.requestMutualFollowersFirst=l;g.requestFollowing=m}),98);
__d("PolarisProfileRoot.react",["fbt","CometPlaceholder.react","PolarisConditionalPageLayoutHandler.react","PolarisConfig","PolarisErrorBoundary.react","PolarisHttpGatedContentPage.react","PolarisODS","PolarisProfileActions","PolarisRoutes","cr:1690","goForceFullPageRedirectTo","justknobx","react","useGatedContentInfo","usePolarisGetQuerySetup","usePolarisPreloadedGetQuery","useRoutePassthroughProps","useXIGProfileFollowList","uuid"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useRef;function k(a){var b=a.gated,e=a.profile;a=a.trending_accounts;b=c("usePolarisPreloadedGetQuery")(b);e=c("usePolarisPreloadedGetQuery")(e);a=c("usePolarisPreloadedGetQuery")(a);c("usePolarisGetQuerySetup")(e,d("PolarisProfileActions").setupProfilePage);c("usePolarisGetQuerySetup")(a,d("PolarisProfileActions").useTrendingAccountsInfo);e=c("useGatedContentInfo")(b);return{gatedContentInfo:e}}function l(a){var b=a.gated,e=a.profile;a=a.timeline;b=c("usePolarisPreloadedGetQuery")(b);e=c("usePolarisPreloadedGetQuery")(e);a=c("usePolarisPreloadedGetQuery")(a);c("usePolarisGetQuerySetup")(e,d("PolarisProfileActions").setupProfilePage);c("usePolarisGetQuerySetup")(a,d("PolarisProfileActions").setupTimelineQuery);e=c("useGatedContentInfo")(b);return{gatedContentInfo:e}}function m(a){var e;a=a.props;var f=a.routeParams,g=f.tab,m=f.username,n=f.show_story_unavailable;f=f.show_pro_dash_dialog;a=a.routeProps;var o=a.id,p=a.polaris_preload,q=a.profile_pic_url,r=a.qr;a=a.show_suggested_profiles;var s=c("useXIGProfileFollowList")(m);s=s.connectionListType;e=(e=c("useRoutePassthroughProps")())!=null?e:{};e=e.selectedTabId;var t=j(d("PolarisConfig").isLoggedIn()?l:k).current;t=t(p);p=t.gatedContentInfo;if(p!=null)return i.jsx(c("PolarisHttpGatedContentPage.react"),{blocksLoggingData:p.blocks_logging_data,description:p.description,entityId:o,sessionId:p.session_id,title:p.title,userAvatarUrl:q,username:m});t=n==="1"?h._("Story unavailable"):null;p=c("uuid")();s=i.jsx(c("CometPlaceholder.react"),{fallback:null,children:i.jsx(b("cr:1690"),{followTypeToShowInModal:s,selectedTabId:(q=e)!=null?q:g,sessionId:p,showProDashDialog:(n=f)!=null?n:!1,showQRModal:r,showSuggestedProfiles:a,toastContentOnLoad:t,userId:o},"userprofile_"+m)});return c("PolarisConditionalPageLayoutHandler.react")!=null?i.jsx(c("PolarisConditionalPageLayoutHandler.react"),{mainComponent:s}):s}m.displayName=m.name+" [from "+f.id+"]";function a(a){a=i.jsx(m,babelHelpers["extends"]({},a));return!d("PolarisConfig").isLoggedIn()&&c("justknobx")._("638")?i.jsx(c("PolarisErrorBoundary.react"),{errorRenderer:function(){return null},onError:function(){c("PolarisODS").incr("web.logged_out_error_redirect.profile"),c("goForceFullPageRedirectTo")(d("PolarisRoutes").LOGIN_PATH)},children:a}):a}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);