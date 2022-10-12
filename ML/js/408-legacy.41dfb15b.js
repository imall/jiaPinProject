"use strict";(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[408],{3408:function(t,e,s){s.r(e),s.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[84px]"},[s("C-Back-Nav",{attrs:{title:(""!==t.GETTER_MECHANTNAME?t.GETTER_MECHANTNAME+" - ":"")+"打卡",routeTarget:{name:"Punch"}}}),s("section",{staticClass:"relative z-0 mt-[52px] p-3"},[s("div",{staticClass:"mb-4 flex items-center justify-between gap-2"},[s("month-picker-input",{staticClass:"!w-full",attrs:{lang:"zh","input-pre-filled":!0,"default-month":+this.$dayjs().month()+1,"default-year":+t.$dayjs(new Date).format("YYYY")},on:{change:t.showDate}})],1),Array.isArray(t.ListHasResultAttendanceRecords)&&t.ListHasResultAttendanceRecords.length>0?s("div",{staticClass:"text-sm"},[t._m(0),t._l(t.ListHasResultAttendanceRecords,(function(e,a){return s("div",{key:"resultAttendance"+a},[s("div",{staticClass:"mt-4 mb-1 text-left text-second"},[t._v(t._s(t._f("dateFmtMMDDdd")(e.date)))]),t._l(e.clockInRecord,(function(a,n){return s("div",{key:"clockInRecordItem"+n},[a.in?[s("div",{staticClass:"mb-2 flex flex-nowrap gap-1 border-b border-solid border-primary text-left"},[s("div",{staticClass:"w-1/6"},[t._v(t._s(t._f("dateFmtHm")(a.in.time)))]),s("div",{staticClass:"w-2/6 overflow-hidden text-ellipsis text-skyblue"},[t._v(t._s(a.in.latitude||"--")+t._s(a.in.longitude?","+a.in.longitude:",--"))]),s("div",{staticClass:"w-1/6"},[t._v(t._s(e.isLate?"遲到":"成功"))]),s("div",{staticClass:"w-2/6"},[t._v("上班打卡")]),s("div",{staticClass:"w-1/6 text-center",class:{"text-rejectText":e.lateMinutes>0}},[s("div",[t._v(t._s(0===n?e.lateMinutes:"--"))])])])]:t._e(),a.breakRecord?[t._l(a.breakRecord,(function(e,a){return[e.start?s("div",{key:"breakRecordSatrt"+a,staticClass:"mb-2 flex flex-nowrap gap-1 border-b border-solid border-primary text-left"},[s("div",{staticClass:"w-1/6"},[t._v(t._s(t._f("dateFmtHm")(e.start.time)))]),s("div",{staticClass:"w-2/6 overflow-hidden text-ellipsis text-skyblue"},[t._v(t._s(e.start.latitude||"--")+t._s(e.start.longitude?","+e.start.longitude:",--"))]),s("div",{staticClass:"w-1/6"},[t._v("成功")]),s("div",{staticClass:"w-2/6"},[t._v("外出打卡")]),t._m(1,!0)]):t._e(),e.end?s("div",{key:"breakRecordEnd"+a,staticClass:"mb-2 flex flex-nowrap gap-1 border-b border-solid border-primary text-left"},[s("div",{staticClass:"w-1/6"},[t._v(t._s(t._f("dateFmtHm")(e.end.time)))]),s("div",{staticClass:"w-2/6 overflow-hidden text-ellipsis text-skyblue"},[t._v(t._s(e.end.latitude||"--")+t._s(e.end.longitude?","+e.end.longitude:",--"))]),s("div",{staticClass:"w-1/6",class:{"text-rejectText":e.end.isLate}},[t._v(" "+t._s(e.end.isLate?"失敗":"成功"))]),s("div",{staticClass:"w-2/6"},[t._v("歸來打卡")]),t._m(2,!0)]):t._e()]}))]:t._e(),a.out?[s("div",{staticClass:"mb-2 flex flex-nowrap gap-1 border-b border-solid border-primary text-left"},[s("div",{staticClass:"w-1/6"},[t._v(t._s(t._f("dateFmtHm")(a.out.time)))]),s("div",{staticClass:"w-2/6 overflow-hidden text-ellipsis text-skyblue"},[t._v(t._s(a.out.latitude||"--")+t._s(a.out.longitude?","+a.out.longitude:",--"))]),s("div",{staticClass:"w-1/6"},[t._v(t._s(e.isLeaveEarly?"早退":"成功"))]),s("div",{staticClass:"w-2/6"},[t._v("下班打卡")]),t._m(3,!0)])]:t._e()],2)}))],2)}))],2):s("div",{staticClass:"mt-3 flex items-center justify-center text-2xl text-second"},[s("p",[t._v("查無資料")])])])],1)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"flex flex-nowrap gap-1 border-b border-solid border-primary text-left"},[s("div",{staticClass:"w-1/6"},[t._v("時間")]),s("div",{staticClass:"w-2/6"},[t._v("位置")]),s("div",{staticClass:"w-1/6"},[t._v("狀態")]),s("div",{staticClass:"w-2/6"},[t._v("詳情")]),s("div",{staticClass:"w-1/6 text-center"},[t._v("遲到")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-1/6 text-center"},[s("div",[t._v("--")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-1/6 text-center"},[s("div",[t._v("--")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-1/6 text-center"},[s("div",[t._v("--")])])}],r=s(4648),i=s(6084),d=s(6835),l=s(8534),c=(s(1539),s(8783),s(3948),s(7327),s(629)),o=s(4209),u={name:"punch-list",description:"打卡列表",metaInfo:{title:"名留",titleTemplate:"%s | 打卡"},components:{MonthPickerInput:o.Jf},data:function(){return{resultAttendance:[],date:{from:null,to:null,month:null,year:2022}}},mounted:function(){this.init()},methods:{init:function(){var t=this;return(0,l.Z)((0,d.Z)().mark((function e(){return(0,d.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([t.getAttendanceRecords()]).then((function(){}));case 2:case"end":return e.stop()}}),e)})))()},getAttendanceRecords:function(){var t=this;return(0,l.Z)((0,d.Z)().mark((function e(){var s,a,n,r,l,c,o,u;return(0,d.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return s={userId:t.userInfo.user.id,dateRange:{startDate:t.$dayjs(t.date.from).startOf("month").valueOf(),endDate:t.$dayjs(t.date.to).add(-1,"day").endOf("month").valueOf()},pageLimit:1e3},e.next=3,t.$api.attendanceRecords(s);case 3:if(a=e.sent,n=a.data,r=n.data,l=n.errors,!l){e.next=7;break}return e.abrupt("return");case 7:console.log(r.attendanceRecords[0]),c=(0,i.Z)(r.attendanceRecords,1),o=c[0],u=void 0===o?{}:o,t.resultAttendance=u.attendanceRecord?u.attendanceRecord:[];case 10:case"end":return e.stop()}}),e)})))()},doRoute:function(){this.$router.push({name:"Punch"})},showDate:function(t){this.date=t,this.getAttendanceRecords()}},computed:(0,r.Z)((0,r.Z)((0,r.Z)({},(0,c.rn)("userInfo",["userInfo","currentMechantId"])),(0,c.Se)("userInfo",["GETTER_MECHANTNAME"])),{},{ListHasResultAttendanceRecords:function(){var t=this.resultAttendance.filter((function(t){return Array.isArray(t.clockInRecord)&&t.clockInRecord.length>0}));return t}})},v=u,f=s(3736),_=(0,f.Z)(v,a,n,!1,null,"16b9188d",null),m=_.exports}}]);
//# sourceMappingURL=408-legacy.41dfb15b.js.map