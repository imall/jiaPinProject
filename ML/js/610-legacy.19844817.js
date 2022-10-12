"use strict";(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[610],{7610:function(t,e,n){n.r(e),n.d(e,{default:function(){return p}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[84px]"},[n("C-Back-Nav",{attrs:{title:(""!==t.currentMerchantName?t.currentMerchantName+" - ":"")+"打卡"}}),n("section",{staticClass:"relative z-0 mt-[52px] p-3"},[n("div",{staticClass:"mb-4 text-right"},[n("div",{staticClass:"inline-block w-fit cursor-pointer rounded-[10px] bg-primary px-2 py-1 text-white",on:{click:t.doRoute,keypress:t.doRoute}},[n("span",{staticClass:"mr-[6px]"},[t._v("打卡清單")]),n("font-awesome-icon",{attrs:{icon:"fa-regular fa-list"}})],1)]),n("div",{staticClass:" mb-3 text-7xl text-primary"},[t._v(" "+t._s(t._f("dateFmtHm")(t.currentTime))+" ")]),n("div",{staticClass:" text-sm font-medium text-primary"},[t._v(" "+t._s(t._f("dateFmtROCMMDD")(t.currentTime))+" "+t._s(t._f("dateFmtdd")(t.currentTime))+" ")]),n("div",{staticClass:"flex items-center justify-center gap-2"},[n("p",{staticClass:"whitespace-nowrap font-bold"},[t._v("位置狀態: ")]),n("p",{class:[{"text-orange-500":"距離介於25公尺以及50公尺"===t.locationInfo},{"text-red-600":"距離大於50公尺"===t.locationInfo||"無GPS座標"===t.locationInfo}]},[t._v(t._s(t.locationInfo))]),n("font-awesome-icon",{staticClass:" cursor-pointer text-primary",attrs:{icon:"fa-regular fa-arrows-rotate"},on:{click:t.reFreshLocation}})],1),n("div",{staticClass:"my-7 flex gap-2"},[n("div",{staticClass:"w-full cursor-pointer bg-second p-4 text-white",on:{click:function(e){return t.doAttendance("CLOCKIN")},keypress:function(e){return t.doAttendance("CLOCKIN")}}},[t._v("上班打卡")]),n("div",{staticClass:"w-full cursor-pointer bg-second p-4 text-white",on:{click:function(e){return t.doAttendance("CLOCKOUT")},keypress:function(e){return t.doAttendance("CLOCKOUT")}}},[t._v("下班打卡")])]),t.clockInRecordInList&&t.isHasNotClockout?n("div",{staticClass:"mb-7 flex gap-2"},[n("div",{staticClass:"w-full cursor-pointer bg-second/80 p-4 text-white",on:{click:function(e){t.doOutPunch(!0),t.doAttendance("BREAKSTART")},keypress:function(e){t.doOutPunch(!0),t.doAttendance("BREAKSTART")}}},[t._v("外出打卡")]),n("div",{staticClass:"w-full cursor-pointer bg-second/80  p-4 text-white",on:{click:function(e){t.doOutPunch(!1),t.doAttendance("BREAKEND")},keypress:function(e){t.doOutPunch(!1),t.doAttendance("BREAKEND")}}},[t._v("歸來打卡")])]):t._e(),t.isDailyClockInRecordHasClockInRecord?t._l(t.dailyClockInRecord.clockInRecord,(function(e,a){return n("div",{key:a,staticClass:"text-left",class:{"mb-4":t.isDailyClockInRecordHasClockInRecord}},[n("p",{staticClass:"flex break-all"},[n("span",{staticClass:" mr-2 whitespace-nowrap font-bold"},[t._v("上班時間:")]),n("span",{staticClass:"inline-block w-full underline decoration-black/20"},[t._v(t._s(e.in?t.timstampToMinSec(e.in["time"]):"尚未打卡"))])]),e.in?n("p",{staticClass:"flex break-all"},[n("span",{staticClass:" mr-2 whitespace-nowrap font-bold"},[t._v("外出時間:")]),n("span",{staticClass:"inline-block w-full underline decoration-black/20"},[t._v(" "+t._s(""===t.timstampListToMinSecConcatText(e.breakRecord,"start")?"未有打卡紀錄":t.timstampListToMinSecConcatText(e.breakRecord,"start"))+" ")])]):t._e(),e.in?n("p",{staticClass:"flex break-all"},[n("span",{staticClass:" mr-2 whitespace-nowrap font-bold"},[t._v("歸來時間:")]),n("span",{staticClass:"inline-block w-full underline decoration-black/20"},[t._v(" "+t._s(""===t.timstampListToMinSecConcatText(e.breakRecord,"end")?"未有打卡紀錄":t.timstampListToMinSecConcatText(e.breakRecord,"end"))+" ")])]):t._e(),n("p",{staticClass:"flex break-all"},[n("span",{staticClass:" mr-2 whitespace-nowrap font-bold"},[t._v("下班時間:")]),n("span",{staticClass:"inline-block w-full underline decoration-black/20"},[t._v(t._s(e.out?t.timstampToMinSec(e.out["time"]):"尚未打卡"))])])])})):[t._m(0)],n("hr",{staticClass:"my-7 border bg-primary"}),n("div",{staticClass:"text-left text-sm font-medium"},[n("div",{staticClass:"flex items-baseline"},[n("p",{staticClass:"min-w-[102px]"},[t._v("本月總打卡天數:")]),n("p",{staticClass:"mx-2 font-sans text-3xl"},[t._v(t._s(t.monthlyAttendanceCount)),n("span",{staticClass:"ml-1 text-sm"},[t._v("天")])])]),n("div",{staticClass:"flex items-baseline"},[n("p",{staticClass:"min-w-[102px]"},[t._v("遲到總分鐘數: ")]),n("p",{staticClass:"mx-2 font-sans text-3xl text-rejectText"},[t._v(t._s(t.monthlyAttendanceLateCount)),n("small",{staticClass:"ml-1 text-sm text-rejectText"},[t._v("分鐘")])])])])],2)],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-left"},[n("p",{staticClass:"flex break-all"},[n("span",{staticClass:" mr-2 whitespace-nowrap font-bold"},[t._v("上班時間:")]),n("span",{staticClass:"inline-block w-full underline decoration-black/20"},[t._v("尚未打卡")])]),n("p",{staticClass:"flex break-all"},[n("span",{staticClass:" mr-2 whitespace-nowrap font-bold"},[t._v("下班時間:")]),n("span",{staticClass:"inline-block w-full underline decoration-black/20"},[t._v("尚未打卡")])])])}],r=n(4648),c=n(6084),i=n(6835),o=n(8534),l=(n(1539),n(8783),n(3948),n(1532),n(7327),n(9826),n(8309),n(9714),n(6535),n(9244),n(629)),u={name:"punch-index",description:"打卡的首頁",metaInfo:{title:"名留",titleTemplate:"%s | 打卡"},data:function(){return{resultItem:{},resultAttendance:{},punchStart:"",punchEnd:"",outPunchStart:"",outPunchEnd:"",locationInfo:"",currentTimeIntervalKey:"",currentTime:this.$dayjs().format("YYYY-MM-DD HH:mm:ss"),dailyClockInRecord:{}}},mounted:function(){var t=this;this.currentTimeIntervalKey=setInterval((function(){t.currentTime=t.$dayjs().format("YYYY-MM-DD HH:mm:ss")}),1e3),this.init()},methods:{init:function(){var t=this;return(0,o.Z)((0,i.Z)().mark((function e(){return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.getAttendanceRecords(),t.getDailyClockInRecord(),t.reFreshLocation()]).then((function(){}));case 2:case"end":return e.stop()}}),e)})))()},reFreshLocation:function(){var t=this;return(0,o.Z)((0,i.Z)().mark((function e(){var n,a,s,r,c,o,l,u;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.geoFindMe();case 2:return n=e.sent,a=n.latitude,s=n.longitude,e.next=7,t.$api.checkGPSStatus({latitude:a?"".concat(a):a,longitude:s?"".concat(s):s});case 7:if(r=e.sent,c=r.data,o=c.data,l=c.errors,!l){e.next=11;break}return e.abrupt("return");case 11:u=new Map([["NULL",{locationInfo:"無GPS座標"}],["LOWERTHAN25",{locationInfo:"距離小於25公尺"}],["BETWEEN25AND50",{locationInfo:"距離介於25公尺以及50公尺"}],["MORETHAN50",{locationInfo:"距離大於50公尺"}]]),t.locationInfo=u.get(o.checkGPSStatus.status)?u.get(o.checkGPSStatus.status).locationInfo:"無GPS座標";case 13:case"end":return e.stop()}}),e)})))()},getDailyClockInRecord:function(){var t=this;return(0,o.Z)((0,i.Z)().mark((function e(){var n,a,s,r,o,l,u;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.dailyClockInRecord({date:t.$dayjs().valueOf(),designerId:t.userInfo.user.id});case 2:if(n=e.sent,a=n.data,s=a.data,r=a.errors,!r){e.next=6;break}return e.abrupt("return");case 6:o=(0,c.Z)(s.dailyClockInRecord,1),l=o[0],u=void 0===l?{}:l,t.dailyClockInRecord=u;case 8:case"end":return e.stop()}}),e)})))()},getAttendanceRecords:function(){var t=this;return(0,o.Z)((0,i.Z)().mark((function e(){var n,a,s,r,c;return(0,i.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={userId:t.userInfo.user.id,dateRange:{startDate:t.$dayjs(new Date).startOf("month").valueOf(),endDate:t.$dayjs(new Date).endOf("month").valueOf()},pageLimit:1e3},e.next=3,t.$api.attendanceRecords(n);case 3:if(a=e.sent,s=a.data,r=s.data,c=s.errors,!c){e.next=7;break}return e.abrupt("return");case 7:t.resultAttendance=r.attendanceRecords;case 8:case"end":return e.stop()}}),e)})))()},doRoute:function(){this.$router.push({name:"Punch-list"})},geoFindMe:function(){var t=this;return new Promise((function(e){var n={},a=n.latitude,s=n.longitude,r=function(t){a=t.coords.latitude,s=t.coords.longitude,e({latitude:a,longitude:s})},c=function(){a=null,s=null,e({latitude:a,longitude:s})};navigator.geolocation?navigator.geolocation.getCurrentPosition(r,c):(t.$swal.fire({icon:"warning",title:"請開起與授權GPS定位功能",showConfirmButton:!0,showCancelButton:!0}),e({latitude:null,longitude:null}))}))},doAttendance:function(t){var e=this;return(0,o.Z)((0,i.Z)().mark((function n(){var a,s,r,c,o,l,u;return(0,i.Z)().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.reFreshLocation();case 2:return n.next=4,e.geoFindMe();case 4:return a=n.sent,s=a.latitude,r=a.longitude,n.next=9,e.$api.userClockIn({userIds:[e.userInfo.user.id],status:t,checkinType:"CELLPHONE",GPSLocation:s?{latitude:"".concat(s),longitude:"".concat(r)}:null});case 9:return c=n.sent,o=c.data,l=o.data,u=o.errors,n.next=13,e.getAttendanceRecords();case 13:if(!u){n.next=15;break}return n.abrupt("return");case 15:return n.next=17,e.getDailyClockInRecord();case 17:l.userClockIn&&e.$swal.fire({showCloseButton:!0,html:'<div class="flex items-center justify-center my-10">\n              <img src="/designer/assets/images/success.svg" alt="" class="inline-block mr-1" /><span>打卡成功</span>\n            </div>',showConfirmButton:!1,timer:3e3,timerProgressBar:!0});case 18:case"end":return n.stop()}}),n)})))()},doOutPunch:function(t){t?this.outPunchStart=this.$dayjs().format("HH:mm"):this.outPunchEnd=this.$dayjs().format("HH:mm")}},computed:(0,r.Z)((0,r.Z)({},(0,l.rn)("userInfo",["userInfo","currentMechantId"])),{},{monthlyAttendanceCount:function(){var t=0;return this.resultAttendance[0]&&Array.isArray(this.resultAttendance[0].attendanceRecord)&&(t=this.resultAttendance[0].attendanceRecord.filter((function(t){return Object.prototype.hasOwnProperty.call(t,"clockInRecord")&&Array.isArray(t.clockInRecord)&&t.clockInRecord.length>0})).length),t},monthlyAttendanceLateCount:function(){var t=0;return t=this.resultAttendance[0]?this.resultAttendance[0].totalLateMinutes:0,t},currentMerchantName:function(){var t,e,n=this,a=null===(t=this.userInfo)||void 0===t||null===(e=t.user)||void 0===e?void 0:e.merchants.find((function(t){return t.id===n.currentMechantId}));return a?a.name:""},clockInRecordInList:function(){var t=this,e="",n=this.dailyClockInRecord.clockInRecord,a=void 0===n?[]:n;return e=a.flatMap((function(e){return e.in?t.$dayjs(e.in).format("HH:mm"):""})).toString(),e},timstampToMinSec:function(){var t=this;return function(e){return t.$dayjs(e).isValid()?t.$dayjs(e).format("HH:mm"):e}},timstampListToMinSecConcatText:function(){var t=this;return function(e,n){return e.flatMap((function(e){return[e[n]&&t.$dayjs(e[n].time).isValid()?t.$dayjs(e[n].time).format("HH:mm"):[]]})).toString()}},isHasNotClockout:function(){var t=!1,e=this.dailyClockInRecord.clockInRecord,n=void 0===e?[]:e;return t=n.some((function(t){return t&&null===t.out})),t},isDailyClockInRecordHasClockInRecord:function(){return this.dailyClockInRecord.clockInRecord&&this.dailyClockInRecord.clockInRecord.length>0}}),beforeDestroy:function(){clearInterval(this.currentTimeIntervalKey)}},d=u,f=n(3736),m=(0,f.Z)(d,a,s,!1,null,null,null),p=m.exports}}]);
//# sourceMappingURL=610-legacy.19844817.js.map