"use strict";(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[459],{7459:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[84px]"},[s("C-Back-Nav",{attrs:{title:(""!==e.GETTER_MECHANTNAME?e.GETTER_MECHANTNAME+" - ":"")+"行事曆",routeTarget:{name:"ScheduleBreak"}}}),s("section",{staticClass:"relative z-0 mt-[52px] p-3"},[s("div",{staticClass:"flex items-center justify-between"},[s("font-awesome-icon",{staticClass:"text-2xl text-primary",attrs:{icon:"fa-solid fa-angle-left"},on:{click:e.preWeek}}),s("div",{staticClass:"flex"},[s("p",[e._v(e._s(e._f("dateFmtROCMMDD")(e.weekLst[0])))]),s("p",[e._v(" ~ "+e._s(e.$dayjs(e.weekLst[6]).format("MM/DD")))])]),s("font-awesome-icon",{staticClass:"text-2xl text-primary",attrs:{icon:"fa-solid fa-angle-right"},on:{click:e.nextWeek}})],1),s("div",{staticClass:"mt-2"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"w-[12.5%] border border-solid border-primary"}),e._l(e.weekLst,(function(t,i){return s("div",{key:"week"+i,staticClass:"w-[12.5%] border border-solid border-primary"},[s("p",[e._v(e._s(e.$dayjs(t).format("M/D")))]),s("p",[e._v(e._s(e.$dayjs(t).format("(dd)")))])])}))],2),s("div",{staticClass:"flex"},[s("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[e._v(" 整日 ")]),s("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[s("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[0],e.weekLst[0])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[0],e.weekLst[0])}}},[s("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[0],disabled:!0}})],1)]),s("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[s("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[1],e.weekLst[1])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[1],e.weekLst[1])}}},[s("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[1],disabled:!0}})],1)]),s("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[s("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[2],e.weekLst[2])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[2],e.weekLst[2])}}},[s("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[2],disabled:!0}})],1)]),s("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[s("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[3],e.weekLst[3])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[3],e.weekLst[3])}}},[s("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[3],disabled:!0}})],1)]),s("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[s("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[4],e.weekLst[4])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[4],e.weekLst[4])}}},[s("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[4],disabled:!0}})],1)]),s("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[s("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[5],e.weekLst[5])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[5],e.weekLst[5])}}},[s("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[5],disabled:!0}})],1)]),s("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[s("span",{on:{click:function(t){return e.toggleAllDate(e.BreakWrap[6],e.weekLst[6])},keypress:function(t){return e.toggleAllDate(e.BreakWrap[6],e.weekLst[6])}}},[s("C-Checkbox-Full",{staticClass:"!w-[32px]",attrs:{value:e.BreakWrap[6],disabled:!0}})],1)])]),s("div",e._l(e.restructureScheduleTableWithTimeList,(function(t,i){return s("div",{key:"resultItem"+i,staticClass:"flex"},[s("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[e._v(e._s(t.time))]),e._l(t.date,(function(t,a){return s("div",{key:"innerItem"+a,staticClass:" flex w-[12.5%] cursor-pointer items-center justify-center border border-solid border-primary",class:[{"bg-slate-500":!t}],on:{click:function(s){return e.toggle(t,i,a)},keypress:function(s){return e.toggle(t,i,a)}}},[!t||"該時段排休"!==t.statusComment&&"該時段公休"!==t.statusComment&&"本日公休"!==t.statusComment?s("span",[e._v(e._s(t.statusComment))]):s("font-awesome-icon",{staticClass:" cursor-pointer text-xl text-rejectText",attrs:{icon:"fa-solid fa-ban"}})],1)}))],2)})),0)]),s("div",[s("p",{staticClass:"my-1 mt-4 text-left"},[e._v("固定公休時間 :")]),s("div",{staticClass:"flex flex-wrap gap-2"},[Array.isArray(e.regularHolidayList.allDay)?e._l(e.regularHolidayList.allDay,(function(t,i){return s("div",{key:"allholiday"+i,staticClass:" flex items-center rounded-2xl border border-solid border-primary px-2 py-1 text-sm"},[s("span",[e._v(e._s(t)),s("font-awesome-icon",{staticClass:"text-red ml-2 text-rejectText",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(s){return e.toggleRemove("remove",t,!0)}}})],1)])})):e._e(),Array.isArray(e.regularHolidayList.specificTime)?e._l(e.regularHolidayList.specificTime,(function(t,i){return s("div",{key:"holiday"+i,staticClass:" flex items-center rounded-2xl border border-solid border-primary px-2 py-1 text-sm"},[s("span",[e._v(e._s(t.week)+" "+e._s(t.startHour)+":"+e._s(t.startMinute>10?t.startMinute:"0"+t.startMinute)+"~"+e._s(t.endHour)+":"+e._s(t.endMinute>10?t.endMinute:"0"+t.endMinute)),s("font-awesome-icon",{staticClass:"text-red ml-2 text-rejectText",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(s){return e.toggleRemove("remove",t,!1)}}})],1)])})):e._e()],2)]),s("div",{staticClass:"mt-4"},[s("div",{directives:[{name:"ripple",rawName:"v-ripple",value:100,expression:"100"}],staticClass:"w-full cursor-pointer bg-second py-2 px-4 text-white",on:{click:e.toggleSys,keypress:e.toggleSys}},[e._v("設定整日／固定公休時間")])])]),s("C-Modal-Dialog",{model:{value:e.dialogStatus,callback:function(t){e.dialogStatus=t},expression:"dialogStatus"}},[s("p",{staticClass:"mb-4 px-4 text-center font-bold",on:{click:e.toggleSys,keypress:e.toggleSys}},[e._v("設定整日 ／固定公休日期")]),s("div",{staticClass:"mb-4 flex justify-evenly gap-4"},[s("div",{staticClass:"h-9 cursor-pointer rounded-md bg-[#ccc] px-4 duration-300",class:[{"bg-[#434343] text-white":e.isAll}],on:{click:function(t){e.isAll=!0},keypress:function(t){e.isAll=!0}}},[s("p",{staticClass:" leading-9"},[e._v("整日")])]),s("div",{staticClass:"h-9 cursor-pointer rounded-md bg-[#ccc] px-4 duration-300",class:[{"bg-[#434343] text-white":!e.isAll}],on:{click:function(t){e.isAll=!1},keypress:function(t){e.isAll=!1}}},[s("p",{staticClass:" leading-9"},[e._v("時段")])])]),e.isAll?s("div",[s("C-Select",{staticClass:"w-full",attrs:{list:e.timeRepeat,placeholder:"選擇固定公休星期","item-text":"label","item-value":"value"},model:{value:e.seletedTimeRepeat,callback:function(t){e.seletedTimeRepeat=t},expression:"seletedTimeRepeat"}})],1):s("div",[s("C-Select",{staticClass:"w-full",attrs:{list:e.timeRepeat,placeholder:"選擇固定公休星期","item-text":"label","item-value":"value"},model:{value:e.unAllSeletedTimeRepeat,callback:function(t){e.unAllSeletedTimeRepeat=t},expression:"unAllSeletedTimeRepeat"}}),s("div",{staticClass:"my-2 flex gap-2"},[s("C-Select",{staticClass:"w-full",attrs:{list:e.currentSetAllDatTimeRangeList,placeholder:"開始時間"},model:{value:e.startTime,callback:function(t){e.startTime=t},expression:"startTime"}}),s("C-Select",{staticClass:"w-full",attrs:{list:e.currentSetAllDatTimeRangeList,placeholder:"結束時間"},model:{value:e.endTime,callback:function(t){e.endTime=t},expression:"endTime"}})],1)],1),s("div",{staticClass:"my-4 flex w-full items-center justify-center"},[s("div",{directives:[{name:"ripple",rawName:"v-ripple",value:100,expression:"100"}],staticClass:"w-1/2 cursor-pointer rounded-xl bg-second py-1 px-5 text-white",on:{click:function(t){return e.setRegularHoliday("add")},keypress:function(t){return e.setRegularHoliday("add")}}},[e._v("確認")])])])],1)},a=[];const l=[{label:"10:00",value:1},{label:"10:30",value:2},{label:"11:00",value:3},{label:"11:30",value:4},{label:"12:00",value:5},{label:"12:30",value:6},{label:"13:00",value:7},{label:"13:30",value:8},{label:"14:00",value:9},{label:"14:30",value:10},{label:"15:00",value:11},{label:"15:30",value:12},{label:"14:00",value:13},{label:"14:30",value:14},{label:"15:00",value:15},{label:"15:30",value:16},{label:"16:00",value:17},{label:"16:30",value:18},{label:"17:00",value:19},{label:"17:30",value:20},{label:"18:00",value:21},{label:"18:30",value:22},{label:"19:00",value:23},{label:"19:30",value:24},{label:"20:00",value:25},{label:"20:30",value:26},{label:"21:00",value:27},{label:"21:30",value:28},{label:"22:00",value:29}];var r=l,o=s(629),n={name:"order-edit",description:"行事曆的列表",metaInfo:{title:"名留",titleTemplate:"%s | 行事曆"},data(){return{seletedBreak:{sunDate:!1,monDate:!1,tueDate:!1,wedDate:!1,thuDate:!1,friDate:!1,satDate:!1},seletedTimeRepeat:"",unAllSeletedTimeRepeat:"",timeList:r,designerBookingList:[],period:0,timeRepeat:[{label:"星期日",value:"SUNDAY"},{label:"星期一",value:"MONDAY"},{label:"星期二",value:"TUESDAY"},{label:"星期三",value:"WEDNESDAY"},{label:"星期四",value:"THURSDAY"},{label:"星期五",value:"FRIDAY"},{label:"星期六",value:"SATURDAY"}],isAll:!0,startTime:"",endTime:"",regularHolidayList:[],dialogStatus:!1,seleted:!1}},mounted(){this.init()},activated(){this.init()},methods:{async init(){await Promise.all([this.getDesignerBookingTimesWithRange(),this.getRegularHoliday()])},doRoute(){this.$router.push({name:"Punch"})},toggleRemove(e,t,s){this.$swal.fire({title:" ",html:'<div class="flex items-center justify-center my-10">\n          <img src="/designer/assets/images/error.svg" alt="" class="inline-block mr-1" /><span>確定要刪除嗎？</span>\n        </div>',confirmButtonText:"確認刪除",showConfirmButton:!0,showCloseButton:!0}).then((i=>{i.isConfirmed&&this.setRegularHoliday(e,t,s)}))},async setRegularHoliday(e,t,s){const i={designerId:this.userInfo.user.id,week:[],weekSpecificTime:[]};if("remove"===e)if(s)i.week=this.regularHolidayList.allDay.filter((e=>e!==t)),i.weekSpecificTime=this.regularHolidayList.specificTime;else{i.week=this.regularHolidayList.allDay;const e=JSON.parse(JSON.stringify(this.regularHolidayList.specificTime)),s=this.regularHolidayList.specificTime.findIndex((e=>e.week===t.week&&+e.startHour===t.startHour&&+e.startMinute===t.startMinute&&+e.endHour===t.endHour&&+e.endMinute===t.endMinute));-1!==s&&(e.splice(s,1),i.weekSpecificTime=e)}if("add"===e)if(this.isAll){let e=[];if(""===this.seletedTimeRepeat)return void this.$swal.fire({icon:"info",title:"請選擇星期",showConfirmButton:!1,showCloseButton:!0,timer:3e3,timerProgressBar:!0});e=this.regularHolidayList.allDay.concat(this.seletedTimeRepeat),i.week=[...new Set(e)],i.weekSpecificTime=this.regularHolidayList.specificTime}else{let e=JSON.parse(JSON.stringify(this.regularHolidayList.specificTime));if(""===this.unAllSeletedTimeRepeat||""===this.startTime||""===this.endTime)return void this.$swal.fire({icon:"info",title:"請選擇星期與時間",showConfirmButton:!1,showCloseButton:!0,timer:3e3,timerProgressBar:!0});{const t={week:this.unAllSeletedTimeRepeat,startHour:+this.startTime.split(":")[0],startMinute:+this.startTime.split(":")[1],endHour:+this.endTime.split(":")[0],endMinute:+this.endTime.split(":")[1]},s=e.find((e=>e.week===t.week&&+e.startHour===t.startHour&&+e.startMinute===t.startMinute&&+e.endHour===t.endHour&&+e.endMinute===t.endMinute));s||(e=e.concat(t)),i.weekSpecificTime=e,i.week=this.regularHolidayList.allDay}}const a=await this.$api.setRegularHoliday(i),{data:l,errors:r}=a.data;r||(console.log(l),this.seletedTimeRepeat="",this.dialogStatus=!1,this.$swal.fire({title:" ",html:'<div class="flex items-center justify-center my-10">\n          <img src="/designer/assets/images/success.svg" alt="" class="inline-block mr-1" /><span>設定成功</span>\n        </div>',showConfirmButton:!1,showCloseButton:!0,customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"},timerProgressBar:!0,timer:2500}),this.getDesignerBookingTimesWithRange(),this.getRegularHoliday())},async getDesignerBookingTimesWithRange(){const e={designerId:this.userInfo.user.id,storeId:this.currentMechantId,dateRange:{startDate:this.$dayjs(this.weekLst[0]).valueOf(),endDate:this.$dayjs(this.weekLst[6]).valueOf()}},t=await this.$api.getDesignerBookingTimesWithRange(e),{data:s,errors:i}=t.data;i||(this.designerBookingList=s.getDesignerBookingTimesWithRange)},toggleSys(){this.dialogStatus=!this.dialogStatus},toggleAllDate(e,t){console.log(e),console.log(t),this.$swal.fire({showCloseButton:!0,html:`<div class="flex items-center justify-center my-10">\n              <img src="/designer/assets/images/${e?"success":"error"}.svg" alt="" class="inline-block mr-1" /><span> ${e?"開啟":"關閉"}全日預約</span>\n            </div>`,showConfirmButton:!0,confirmButtonText:"確認",customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"}}).then((async s=>{if(s.isConfirmed){const s={designerId:this.userInfo.user.id,datetime:this.$dayjs(this.$dayjs(t).format("YYYY-MM-DD")).valueOf(),appointable:e},i=await this.$api.adminBookingTimeWholeDay(s),{errors:a}=i.data;if(a)return;await this.getDesignerBookingTimesWithRange()}}))},toggle(e){e&&this.$swal.fire({showCloseButton:!0,html:`<div class="flex items-center justify-center my-10">\n              <img src="/designer/assets/images/${null===e.statusComment?"error":"success"}.svg" alt="" class="inline-block mr-1" /><span>${null===e.statusComment?"關閉預約":"開啟預約"}</span>\n            </div>`,showConfirmButton:!0,confirmButtonText:"確認",canecelButtonText:"取消",showCancelButton:!0,customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"}}).then((async t=>{t.isConfirmed&&(await this.$api.adminBookingTime({designerId:this.userInfo.user.id,datetime:e.time,appointable:null!==e.statusComment}),await this.getDesignerBookingTimesWithRange())}))},async getRegularHoliday(){const e=await this.$api.getRegularHolidaySetting({userId:this.userInfo.user.id}),{data:t,errors:s}=e.data;s||(this.regularHolidayList=t.getRegularHolidaySetting)},preWeek(){this.period-=7},nextWeek(){this.period+=7},setTimeList(){}},watch:{seletedBreak:{handler(e,t){console.log(e,t)}},weekLst:{deep:!0,handler(){this.getDesignerBookingTimesWithRange()}}},computed:{...(0,o.rn)("userInfo",["userInfo","currentMechantId"]),...(0,o.Se)("userInfo",["GETTER_MECHANTNAME"]),weekLst(){return[this.$dayjs(this.$dayjs().format("YYYY-MM-DD 00:00:00")).day(this.period),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+1),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+2),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+3),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+4),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+5),this.$dayjs(this.$dayjs().format("YYYY-MM-DD 23:59:59")).day(this.period+6)]},restructureScheduleTableWithTimeList(){let e=[],t=[],s=[];e=this.designerBookingList.flatMap((e=>e.bookingTimes?e.bookingTimes.flatMap((e=>e?[this.$dayjs(e.time).isValid()?this.$dayjs(e.time).format("HH:mm"):[]]:[])):[])),t=[...new Set(e)];const[i,a,l,r,o,n,d]=this.designerBookingList;return s=t.flatMap((e=>{let[t,s,u,c,m,p,g]=[];return t=i.bookingTimes.find((t=>this.$dayjs(t.time).format("HH:mm")===e)),s=a.bookingTimes.find((t=>this.$dayjs(t.time).format("HH:mm")===e)),u=l.bookingTimes.find((t=>this.$dayjs(t.time).format("HH:mm")===e)),c=r.bookingTimes.find((t=>this.$dayjs(t.time).format("HH:mm")===e)),m=o.bookingTimes.find((t=>this.$dayjs(t.time).format("HH:mm")===e)),p=n.bookingTimes.find((t=>this.$dayjs(t.time).format("HH:mm")===e)),g=d.bookingTimes.find((t=>this.$dayjs(t.time).format("HH:mm")===e)),[{time:e,date:[t,s,u,c,m,p,g]}]})),s},BreakWrap(){const e=this.designerBookingList.flatMap((e=>Array.isArray(e.bookingTimes)&&e.bookingTimes.length>0?[e.bookingTimes.every((e=>null!==e.statusComment))]:[!1]));return e},currentSetAllDatTimeRangeList(){let e=[];return Array.isArray(this.restructureScheduleTableWithTimeList)&&(e=this.restructureScheduleTableWithTimeList.map((e=>e.time))),e}}},d=n,u=s(3736),c=(0,u.Z)(d,i,a,!1,null,"7ab692da",null),m=c.exports}}]);
//# sourceMappingURL=459.9f5c9dc3.js.map