(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[459],{7459:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[84px]"},[r("C-Back-Nav",{attrs:{title:(""!==e.GETTER_MECHANTNAME?e.GETTER_MECHANTNAME+" - ":"")+"行事曆",routeTarget:{name:"ScheduleBreak"}}}),r("section",{staticClass:"relative z-0 mt-[52px] p-3"},[r("div",{staticClass:"flex items-center justify-between"},[r("font-awesome-icon",{staticClass:"text-2xl text-primary",attrs:{icon:"fa-solid fa-angle-left"},on:{click:e.preWeek}}),r("div",{staticClass:"flex"},[r("p",[e._v(e._s(e._f("dateFmtROCMMDD")(e.weekLst[0])))]),r("p",[e._v(" ~ "+e._s(e.$dayjs(e.weekLst[6]).format("MM/DD")))])]),r("font-awesome-icon",{staticClass:"text-2xl text-primary",attrs:{icon:"fa-solid fa-angle-right"},on:{click:e.nextWeek}})],1),r("div",{staticClass:"mt-2"},[r("div",{staticClass:"flex"},[r("div",{staticClass:"w-[12.5%] border border-solid border-primary"}),e._l(e.weekLst,(function(t,a){return r("div",{key:"week"+a,staticClass:"w-[12.5%] border border-solid border-primary"},[r("p",[e._v(e._s(e.$dayjs(t).format("M/D")))]),r("p",[e._v(e._s(e.$dayjs(t).format("(dd)")))])])}))],2),r("div",{staticClass:"flex"},[r("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[e._v(" 整日 ")]),r("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[r("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[0],e.weekLst[0])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[0],e.weekLst[0])}}},[r("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[0],disabled:!0}})],1)]),r("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[r("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[1],e.weekLst[1])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[1],e.weekLst[1])}}},[r("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[1],disabled:!0}})],1)]),r("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[r("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[2],e.weekLst[2])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[2],e.weekLst[2])}}},[r("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[2],disabled:!0}})],1)]),r("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[r("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[3],e.weekLst[3])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[3],e.weekLst[3])}}},[r("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[3],disabled:!0}})],1)]),r("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[r("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[4],e.weekLst[4])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[4],e.weekLst[4])}}},[r("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[4],disabled:!0}})],1)]),r("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[r("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[5],e.weekLst[5])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[5],e.weekLst[5])}}},[r("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[5],disabled:!0}})],1)]),r("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[r("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[6],e.weekLst[6])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[6],e.weekLst[6])}}},[r("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[6],disabled:!0}})],1)])]),r("div",e._l(e.restructureScheduleTableWithTimeList,(function(t,a){return r("div",{key:"resultItem"+a,staticClass:"flex"},[r("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[e._v(e._s(t.time))]),e._l(t.date,(function(t,i){return r("div",{key:"innerItem"+i,staticClass:" flex w-[12.5%] cursor-pointer items-center justify-center border border-solid border-primary",class:[{"bg-slate-500":!t}],on:{click:function(r){return e.toggle(t,a,i)},keypress:function(r){return e.toggle(t,a,i)}}},[!t||"該時段排休"!==t.statusComment&&"該時段公休"!==t.statusComment&&"本日公休"!==t.statusComment?r("span",[e._v(e._s(t.statusComment))]):r("font-awesome-icon",{staticClass:" cursor-pointer text-xl text-rejectText",attrs:{icon:"fa-solid fa-ban"}})],1)}))],2)})),0)]),r("div",[r("p",{staticClass:"my-1 mt-4 text-left"},[e._v("固定公休時間 :")]),r("div",{staticClass:"flex flex-wrap gap-2"},[Array.isArray(e.regularHolidayList.allDay)?e._l(e.regularHolidayList.allDay,(function(t,a){return r("div",{key:"allholiday"+a,staticClass:" flex items-center rounded-2xl border border-solid border-primary px-2 py-1 text-sm"},[r("span",[e._v(e._s(t)),r("font-awesome-icon",{staticClass:"text-red ml-2 text-rejectText",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(r){return e.toggleRemove("remove",t,!0)}}})],1)])})):e._e(),Array.isArray(e.regularHolidayList.specificTime)?e._l(e.regularHolidayList.specificTime,(function(t,a){return r("div",{key:"holiday"+a,staticClass:" flex items-center rounded-2xl border border-solid border-primary px-2 py-1 text-sm"},[r("span",[e._v(e._s(t.week)+" "+e._s(t.startHour)+":"+e._s(t.startMinute>10?t.startMinute:"0"+t.startMinute)+"~"+e._s(t.endHour)+":"+e._s(t.endMinute>10?t.endMinute:"0"+t.endMinute)),r("font-awesome-icon",{staticClass:"text-red ml-2 text-rejectText",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(r){return e.toggleRemove("remove",t,!1)}}})],1)])})):e._e()],2)]),r("div",{staticClass:"mt-4"},[r("div",{directives:[{name:"ripple",rawName:"v-ripple",value:100,expression:"100"}],staticClass:"w-full cursor-pointer bg-second py-2 px-4 text-white",on:{click:e.toggleSys,keypress:e.toggleSys}},[e._v("設定整日／固定公休時間")])])]),r("C-Modal-Dialog",{model:{value:e.dialogStatus,callback:function(t){e.dialogStatus=t},expression:"dialogStatus"}},[r("p",{staticClass:"mb-4 px-4 text-center font-bold",on:{click:e.toggleSys,keypress:e.toggleSys}},[e._v("設定整日 ／固定公休日期")]),r("div",{staticClass:"mb-4 flex justify-evenly gap-4"},[r("div",{staticClass:"h-9 cursor-pointer rounded-md bg-[#ccc] px-4 duration-300",class:[{"bg-[#434343] text-white":e.isAll}],on:{click:function(t){e.isAll=!0},keypress:function(t){e.isAll=!0}}},[r("p",{staticClass:" leading-9"},[e._v("整日")])]),r("div",{staticClass:"h-9 cursor-pointer rounded-md bg-[#ccc] px-4 duration-300",class:[{"bg-[#434343] text-white":!e.isAll}],on:{click:function(t){e.isAll=!1},keypress:function(t){e.isAll=!1}}},[r("p",{staticClass:" leading-9"},[e._v("時段")])])]),e.isAll?r("div",[r("C-Select",{staticClass:"w-full",attrs:{list:e.timeRepeat,placeholder:"選擇固定公休星期","item-text":"label","item-value":"value"},model:{value:e.seletedTimeRepeat,callback:function(t){e.seletedTimeRepeat=t},expression:"seletedTimeRepeat"}})],1):r("div",[r("C-Select",{staticClass:"w-full",attrs:{list:e.timeRepeat,placeholder:"選擇固定公休星期","item-text":"label","item-value":"value"},model:{value:e.unAllSeletedTimeRepeat,callback:function(t){e.unAllSeletedTimeRepeat=t},expression:"unAllSeletedTimeRepeat"}}),r("div",{staticClass:"my-2 flex gap-2"},[r("C-Select",{staticClass:"w-full",attrs:{list:e.currentSetAllDatTimeRangeList,placeholder:"開始時間"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),r("C-Select",{staticClass:"w-full",attrs:{list:e.currentSetAllDatTimeRangeList,placeholder:"結束時間"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)],1),r("div",{staticClass:"my-4 flex w-full items-center justify-center"},[r("div",{directives:[{name:"ripple",rawName:"v-ripple",value:100,expression:"100"}],staticClass:"w-1/2 cursor-pointer rounded-xl bg-second py-1 px-5 text-white",on:{click:function(t){return e.setRegularHoliday("add")},keypress:function(t){return e.setRegularHoliday("add")}}},[e._v("確認")])])])],1)},i=[],s=r(6084),n=r(4648),l=r(9584),o=r(6835),u=r(8534),c=(r(1539),r(8783),r(3948),r(7327),r(8862),r(4553),r(561),r(2222),r(189),r(4916),r(3123),r(9826),r(6535),r(9244),r(1249),[{label:"10:00",value:1},{label:"10:30",value:2},{label:"11:00",value:3},{label:"11:30",value:4},{label:"12:00",value:5},{label:"12:30",value:6},{label:"13:00",value:7},{label:"13:30",value:8},{label:"14:00",value:9},{label:"14:30",value:10},{label:"15:00",value:11},{label:"15:30",value:12},{label:"14:00",value:13},{label:"14:30",value:14},{label:"15:00",value:15},{label:"15:30",value:16},{label:"16:00",value:17},{label:"16:30",value:18},{label:"17:00",value:19},{label:"17:30",value:20},{label:"18:00",value:21},{label:"18:30",value:22},{label:"19:00",value:23},{label:"19:30",value:24},{label:"20:00",value:25},{label:"20:30",value:26},{label:"21:00",value:27},{label:"21:30",value:28},{label:"22:00",value:29}]),d=c,m=r(629),f={name:"order-edit",description:"行事曆的列表",metaInfo:{title:"名留",titleTemplate:"%s | 行事曆"},data:function(){return{seletedBreak:{sunDate:!1,monDate:!1,tueDate:!1,wedDate:!1,thuDate:!1,friDate:!1,satDate:!1},seletedTimeRepeat:"",unAllSeletedTimeRepeat:"",timeList:d,designerBookingList:[],period:0,timeRepeat:[{label:"星期日",value:"SUNDAY"},{label:"星期一",value:"MONDAY"},{label:"星期二",value:"TUESDAY"},{label:"星期三",value:"WEDNESDAY"},{label:"星期四",value:"THURSDAY"},{label:"星期五",value:"FRIDAY"},{label:"星期六",value:"SATURDAY"}],isAll:!0,startTime:"",endTime:"",regularHolidayList:[],dialogStatus:!1,seleted:!1}},mounted:function(){this.init()},activated:function(){this.init()},methods:{init:function(){var e=this;return(0,u.Z)((0,o.Z)().mark((function t(){return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Promise.all([e.getDesignerBookingTimesWithRange(),e.getRegularHoliday()]);case 2:case"end":return t.stop()}}),t)})))()},doRoute:function(){this.$router.push({name:"Punch"})},toggleRemove:function(e,t,r){var a=this;this.$swal.fire({title:" ",html:'<div class="flex items-center justify-center my-10">\n          <img src="/designer/assets/images/error.svg" alt="" class="inline-block mr-1" /><span>確定要刪除嗎？</span>\n        </div>',confirmButtonText:"確認刪除",showConfirmButton:!0,showCloseButton:!0}).then((function(i){i.isConfirmed&&a.setRegularHoliday(e,t,r)}))},setRegularHoliday:function(e,t,r){var a=this;return(0,u.Z)((0,o.Z)().mark((function i(){var s,n,u,c,d,m,f,p,g,k,b;return(0,o.Z)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(s={designerId:a.userInfo.user.id,week:[],weekSpecificTime:[]},"remove"===e&&(r?(s.week=a.regularHolidayList.allDay.filter((function(e){return e!==t})),s.weekSpecificTime=a.regularHolidayList.specificTime):(s.week=a.regularHolidayList.allDay,n=JSON.parse(JSON.stringify(a.regularHolidayList.specificTime)),u=a.regularHolidayList.specificTime.findIndex((function(e){return e.week===t.week&&+e.startHour===t.startHour&&+e.startMinute===t.startMinute&&+e.endHour===t.endHour&&+e.endMinute===t.endMinute})),-1!==u&&(n.splice(u,1),s.weekSpecificTime=n))),"add"!==e){i.next=26;break}if(!a.isAll){i.next=15;break}if(c=[],""===a.seletedTimeRepeat){i.next=9;break}c=a.regularHolidayList.allDay.concat(a.seletedTimeRepeat),i.next=11;break;case 9:return a.$swal.fire({icon:"info",title:"請選擇星期",showConfirmButton:!1,showCloseButton:!0,timer:3e3,timerProgressBar:!0}),i.abrupt("return");case 11:s.week=(0,l.Z)(new Set(c)),s.weekSpecificTime=a.regularHolidayList.specificTime,i.next=26;break;case 15:if(d=JSON.parse(JSON.stringify(a.regularHolidayList.specificTime)),""===a.unAllSeletedTimeRepeat||""===a.startTime||""===a.endTime){i.next=24;break}m={week:a.unAllSeletedTimeRepeat,startHour:+a.startTime.split(":")[0],startMinute:+a.startTime.split(":")[1],endHour:+a.endTime.split(":")[0],endMinute:+a.endTime.split(":")[1]},f=d.find((function(e){return e.week===m.week&&+e.startHour===m.startHour&&+e.startMinute===m.startMinute&&+e.endHour===m.endHour&&+e.endMinute===m.endMinute})),f||(d=d.concat(m)),s.weekSpecificTime=d,s.week=a.regularHolidayList.allDay,i.next=26;break;case 24:return a.$swal.fire({icon:"info",title:"請選擇星期與時間",showConfirmButton:!1,showCloseButton:!0,timer:3e3,timerProgressBar:!0}),i.abrupt("return");case 26:return i.next=28,a.$api.setRegularHoliday(s);case 28:if(p=i.sent,g=p.data,k=g.data,b=g.errors,!b){i.next=32;break}return i.abrupt("return");case 32:console.log(k),a.seletedTimeRepeat="",a.dialogStatus=!1,a.$swal.fire({title:" ",html:'<div class="flex items-center justify-center my-10">\n          <img src="/designer/assets/images/success.svg" alt="" class="inline-block mr-1" /><span>設定成功</span>\n        </div>',showConfirmButton:!1,showCloseButton:!0,customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"},timerProgressBar:!0,timer:2500}),a.getDesignerBookingTimesWithRange(),a.getRegularHoliday();case 38:case"end":return i.stop()}}),i)})))()},getDesignerBookingTimesWithRange:function(){var e=this;return(0,u.Z)((0,o.Z)().mark((function t(){var r,a,i,s,n;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={designerId:e.userInfo.user.id,storeId:e.currentMechantId,dateRange:{startDate:e.$dayjs(e.weekLst[0]).valueOf(),endDate:e.$dayjs(e.weekLst[6]).valueOf()}},t.next=3,e.$api.getDesignerBookingTimesWithRange(r);case 3:if(a=t.sent,i=a.data,s=i.data,n=i.errors,!n){t.next=7;break}return t.abrupt("return");case 7:e.designerBookingList=s.getDesignerBookingTimesWithRange;case 8:case"end":return t.stop()}}),t)})))()},toggleSys:function(){this.dialogStatus=!this.dialogStatus},toggleAllDate:function(e,t){var r=this;console.log(e),console.log(t),this.$swal.fire({showCloseButton:!0,html:'<div class="flex items-center justify-center my-10">\n              <img src="/designer/assets/images/'.concat(e?"success":"error",'.svg" alt="" class="inline-block mr-1" /><span> ').concat(e?"開啟":"關閉","全日預約</span>\n            </div>"),showConfirmButton:!0,confirmButtonText:"確認",customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"}}).then(function(){var a=(0,u.Z)((0,o.Z)().mark((function a(i){var s,n,l;return(0,o.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!i.isConfirmed){a.next=10;break}return s={designerId:r.userInfo.user.id,datetime:r.$dayjs(r.$dayjs(t).format("YYYY-MM-DD")).valueOf(),appointable:e},a.next=4,r.$api.adminBookingTimeWholeDay(s);case 4:if(n=a.sent,l=n.data.errors,!l){a.next=8;break}return a.abrupt("return");case 8:return a.next=10,r.getDesignerBookingTimesWithRange();case 10:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},toggle:function(e){var t=this;e&&this.$swal.fire({showCloseButton:!0,html:'<div class="flex items-center justify-center my-10">\n              <img src="/designer/assets/images/'.concat(null===e.statusComment?"error":"success",'.svg" alt="" class="inline-block mr-1" /><span>').concat(null===e.statusComment?"關閉預約":"開啟預約","</span>\n            </div>"),showConfirmButton:!0,confirmButtonText:"確認",canecelButtonText:"取消",showCancelButton:!0,customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"}}).then(function(){var r=(0,u.Z)((0,o.Z)().mark((function r(a){return(0,o.Z)().wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!a.isConfirmed){r.next=5;break}return r.next=3,t.$api.adminBookingTime({designerId:t.userInfo.user.id,datetime:e.time,appointable:null!==e.statusComment});case 3:return r.next=5,t.getDesignerBookingTimesWithRange();case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}())},getRegularHoliday:function(){var e=this;return(0,u.Z)((0,o.Z)().mark((function t(){var r,a,i,s;return(0,o.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$api.getRegularHolidaySetting({userId:e.userInfo.user.id});case 2:if(r=t.sent,a=r.data,i=a.data,s=a.errors,!s){t.next=6;break}return t.abrupt("return");case 6:e.regularHolidayList=i.getRegularHolidaySetting;case 7:case"end":return t.stop()}}),t)})))()},preWeek:function(){this.period-=7},nextWeek:function(){this.period+=7},setTimeList:function(){}},watch:{seletedBreak:{handler:function(e,t){console.log(e,t)}},weekLst:{deep:!0,handler:function(){this.getDesignerBookingTimesWithRange()}}},computed:(0,n.Z)((0,n.Z)((0,n.Z)({},(0,m.rn)("userInfo",["userInfo","currentMechantId"])),(0,m.Se)("userInfo",["GETTER_MECHANTNAME"])),{},{weekLst:function(){return[this.$dayjs(this.$dayjs().format("YYYY-MM-DD 00:00:00")).day(this.period),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+1),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+2),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+3),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+4),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+5),this.$dayjs(this.$dayjs().format("YYYY-MM-DD 23:59:59")).day(this.period+6)]},restructureScheduleTableWithTimeList:function(){var e=this,t=[],r=[],a=[];t=this.designerBookingList.flatMap((function(t){return t.bookingTimes?t.bookingTimes.flatMap((function(t){return t?[e.$dayjs(t.time).isValid()?e.$dayjs(t.time).format("HH:mm"):[]]:[]})):[]})),r=(0,l.Z)(new Set(t));var i=(0,s.Z)(this.designerBookingList,7),n=i[0],o=i[1],u=i[2],c=i[3],d=i[4],m=i[5],f=i[6];return a=r.flatMap((function(t){var r=[],a=r[0],i=r[1],s=r[2],l=r[3],p=r[4],g=r[5],k=r[6];return a=n.bookingTimes.find((function(r){return e.$dayjs(r.time).format("HH:mm")===t})),i=o.bookingTimes.find((function(r){return e.$dayjs(r.time).format("HH:mm")===t})),s=u.bookingTimes.find((function(r){return e.$dayjs(r.time).format("HH:mm")===t})),l=c.bookingTimes.find((function(r){return e.$dayjs(r.time).format("HH:mm")===t})),p=d.bookingTimes.find((function(r){return e.$dayjs(r.time).format("HH:mm")===t})),g=m.bookingTimes.find((function(r){return e.$dayjs(r.time).format("HH:mm")===t})),k=f.bookingTimes.find((function(r){return e.$dayjs(r.time).format("HH:mm")===t})),[{time:t,date:[a,i,s,l,p,g,k]}]})),a},BreakWrap:function(){var e=this.designerBookingList.flatMap((function(e){return Array.isArray(e.bookingTimes)&&e.bookingTimes.length>0?[e.bookingTimes.every((function(e){return null!==e.statusComment}))]:[!1]}));return e},currentSetAllDatTimeRangeList:function(){var e=[];return Array.isArray(this.restructureScheduleTableWithTimeList)&&(e=this.restructureScheduleTableWithTimeList.map((function(e){return e.time}))),e}})},p=f,g=r(3736),k=(0,g.Z)(p,a,i,!1,null,"7ab692da",null),b=k.exports},7227:function(e,t,r){"use strict";var a=r(7710),i=r(5631);a("Set",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),i)},189:function(e,t,r){r(7227)},9584:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var a=r(9227);function i(e){if(Array.isArray(e))return(0,a.Z)(e)}r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(1038);function s(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}var n=r(2780);r(1703);function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e){return i(e)||s(e)||(0,n.Z)(e)||l()}}}]);
//# sourceMappingURL=459-legacy.96eac7f1.js.map