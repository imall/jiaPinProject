(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[529],{1529:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return R}});var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[160px]"},[a("C-Back-Nav",{attrs:{title:(""!==t.GETTER_MECHANTNAME?t.GETTER_MECHANTNAME+" - ":"")+"行事曆"}}),a("section",{staticClass:"relative z-0 mt-[52px] p-3"},[a("div",{staticClass:"relative z-10 my-4 flex w-6 items-center justify-between"},[a("font-awesome-icon",{staticClass:"text-2xl",attrs:{icon:"fa-regular fa-filter-list"},on:{click:function(e){t.isActiveFilter=!t.isActiveFilter}}})],1),"0"===t.showType?a("MonthView",{staticClass:"animate__animated animate__fadeInUp",attrs:{attributes:t.formatResult,seletedCategories:t.seleted,manaulUpdateFormResult:t.manaulUpdateFormResult},model:{value:t.monthlyOrdersDate,callback:function(e){t.monthlyOrdersDate=e},expression:"monthlyOrdersDate"}}):t._e(),"1"===t.showType?a("WeekView",{staticClass:"animate__animated animate__fadeInUp",attrs:{weekLst:t.weekLst,attributes:t.restructureScheduleTableWithTimeList,isRegularHoliday:t.restructureScheduleTableWithisRegualrHoliday,manaulUpdateFormResult:t.manaulUpdateFormResult},model:{value:t.period,callback:function(e){t.period=e},expression:"period"}}):t._e(),"2"===t.showType?a("DayView",{staticClass:"animate__animated animate__fadeInUp",attrs:{weekLst:t.weekLst,manaulUpdateFormResult:t.manaulUpdateFormResult,attributes:t.restructureScheduleTableWithTimeListOfDay,isRegularHoliday:t.restructureScheduleTableWithisRegualrHoliday},model:{value:t.today,callback:function(e){t.today=e},expression:"today"}}):t._e(),a("div",{staticClass:"fixed bottom-[100px] right-3 z-10 text-right"},[a("font-awesome-icon",{staticClass:" text-[78px]",attrs:{icon:"fa-regular fa-circle-plus"},on:{click:function(e){t.isDirect=!t.isDirect}}})],1)],1),a("C-Loading-Overlay",{attrs:{layerIndex:10},on:{doFunction:function(e){t.isDirect=!t.isDirect}},model:{value:t.isDirect,callback:function(e){t.isDirect=e},expression:"isDirect"}}),t.isDirect?a("div",{staticClass:"animate__animated animate__fadeInUp fixed inset-x-6 bottom-40 !z-10 mx-auto flex justify-end content-['']"},[a("div",{staticClass:"relative w-[150px] rounded-md bg-white after:absolute after:right-[calc(10%-0px)] after:bottom-[-20px] after:inline-block after:rotate-180 after:border-[10px] after:border-solid after:border-transparent after:border-b-white after:content-['']"},[a("div",{staticClass:"py-2 text-right text-black"},[a("div",{staticClass:"w-full cursor-pointer text-sm"},[a("p",{staticClass:" m-[8px] text-left text-2xl",on:{click:function(e){t.doRoute({name:"ScheduleBreak-Add"}),t.isDirect=!t.isDirect},keydown:function(e){t.doRoute({name:"ScheduleBreak-Add"}),t.isDirect=!t.isDirect}}},[t._v("新增預約")]),a("p",{staticClass:" m-[8px] text-left text-2xl",on:{click:function(e){t.doRoute({name:"ScheduleBreak-List"}),t.isDirect=!t.isDirect},keydown:function(e){t.doRoute({name:"ScheduleBreak-List"}),t.isDirect=!t.isDirect}}},[t._v("我的排休")])])])])]):t._e(),a("C-Loading-Overlay",{attrs:{layerIndex:10},on:{doFunction:function(e){t.isActiveFilter=!t.isActiveFilter}},model:{value:t.isActiveFilter,callback:function(e){t.isActiveFilter=e},expression:"isActiveFilter"}}),a("transition",{attrs:{name:"fromleft"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isActiveFilter,expression:"isActiveFilter"}]},[a("div",{staticClass:"fixed inset-0 top-[180px] z-20 grid h-[calc(100%-180px)] w-full grid-cols-1 grid-rows-[37px_minmax(0,1fr)_62px] bg-white"},[a("p",{staticClass:"border-b border-solid border-primary p-2 text-sm"},[t._v("顯示行事曆")]),a("div",{staticClass:"p-[14px]"},[a("p",{staticClass:"mt-4 text-left font-semibold"},[t._v("瀏覽模式")]),a("div",{staticClass:"mb-4"},[a("div",{staticClass:"my-2 flex items-center gap-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.showType,expression:"showType"}],attrs:{name:"showType",type:"radio",value:"0"},domProps:{checked:t._q(t.showType,"0")},on:{change:function(e){t.showType="0"}}}),a("label",{staticClass:"w-11/12 text-left"},[t._v("月曆模式")])]),a("div",{staticClass:"my-2 flex items-center gap-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.showType,expression:"showType"}],attrs:{name:"showType",type:"radio",value:"1"},domProps:{checked:t._q(t.showType,"1")},on:{change:function(e){t.showType="1"}}}),a("label",{staticClass:"w-11/12 text-left"},[t._v("週模式")])]),a("div",{staticClass:"my-2 flex items-center gap-2"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.showType,expression:"showType"}],attrs:{name:"showType",type:"radio",value:"2"},domProps:{checked:t._q(t.showType,"2")},on:{change:function(e){t.showType="2"}}}),a("label",{staticClass:"w-11/12 text-left"},[t._v("日模式")])])]),a("p",{staticClass:"text-left font-semibold"},[t._v("選擇類別")]),a("div",{staticClass:"mb-8"},[t.isAuthToAll&&t.isAuthority("全店行事曆")?a("div",{staticClass:"flex items-center gap-2"},[a("C-Checkbox-Full",{staticClass:"!w-1/12",attrs:{inputValue:"my"},model:{value:t.seletedAll,callback:function(e){t.seletedAll=e},expression:"seletedAll"}}),a("p",{staticClass:"w-11/12 text-left"},[t._v("全店行事曆")])],1):t._e(),a("div",{staticClass:"flex items-center gap-2"},[a("C-Checkbox-Full",{staticClass:"!w-1/12",attrs:{inputValue:"my"},model:{value:t.seleted,callback:function(e){t.seleted=e},expression:"seleted"}}),a("p",{staticClass:"w-11/12 text-left"},[t._v("指定預約")])],1),a("div",{staticClass:"flex items-center gap-2"},[a("C-Checkbox-Full",{staticClass:"!w-1/12",attrs:{inputValue:"others"},model:{value:t.seleted,callback:function(e){t.seleted=e},expression:"seleted"}}),a("p",{staticClass:"w-11/12 text-left"},[t._v("不指定預約")])],1),a("div",{staticClass:"flex items-center gap-2"},[a("C-Checkbox-Full",{staticClass:"!w-1/12",attrs:{inputValue:"break"},model:{value:t.seleted,callback:function(e){t.seleted=e},expression:"seleted"}}),a("p",{staticClass:"w-11/12 text-left"},[t._v("排休")])],1),a("div",{staticClass:"flex items-center gap-2"},[a("C-Checkbox-Full",{staticClass:"!w-1/12",attrs:{inputValue:"regularHoliday"},model:{value:t.seleted,callback:function(e){t.seleted=e},expression:"seleted"}}),a("p",{staticClass:"w-11/12 text-left"},[t._v("公休")])],1)])]),a("div",{staticClass:"my-3 mx-[14px] flex justify-around gap-3 "},[a("div",{staticClass:"w-full bg-second px-[14px] py-2 text-sm text-white",on:{click:function(e){t.isActiveFilter=!t.isActiveFilter},keypress:function(e){t.isActiveFilter=!t.isActiveFilter}}},[a("span",[t._v("關閉")])])])])])])],1)},i=[],r=a(4648),n=a(9584),o=a(6835),l=a(8534),u=(a(1532),a(1539),a(8783),a(3948),a(6535),a(9244),a(1249),a(2222),a(8309),a(9826),a(7327),a(6699),a(2023),a(189),a(629)),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("vc-date-picker",{staticClass:"custom-calendar max-w-full",attrs:{locale:"zh-TW","is-expanded":"",value:"",attributes:t.attributesfilterdByCategories,masks:t.masks},on:{"update:to-page":function(e){return t.swipeMonth(e)}},scopedSlots:t._u([{key:"header",fn:function(e){var s=e.year,i=e.monthLabel;return[a("div",{staticClass:"absolute inset-x-0 top-[-45px] w-full"},[a("div",{staticClass:"flex items-center justify-center"},[a("span",{staticClass:"font-bold"},[t._v(t._s(s)+"年")]),a("span",{staticClass:"ml-2 text-2xl font-bold"},[t._v(t._s(i))])])])]}},{key:"header-left-button",fn:function(){return[a("font-awesome-icon",{staticClass:"absolute right-[50px] top-[-41px] text-2xl text-primary",attrs:{icon:"fa-solid fa-angle-left"},on:{click:function(e){return t.preNextMonth(-1)}}})]},proxy:!0},{key:"header-right-button",fn:function(){return[a("font-awesome-icon",{staticClass:"absolute right-[3px] top-[-41px] text-2xl text-primary",attrs:{icon:"fa-solid fa-angle-right"},on:{click:function(e){return t.preNextMonth(1)}}})]},proxy:!0},{key:"day-content",fn:function(e){var s=e.day,i=e.attributes;return[a("div",{staticClass:"z-10 flex h-full flex-col overflow-hidden"},[a("span",{staticClass:"day-label text-sm text-gray-900"},[t._v(t._s(s.day))]),a("div",{staticClass:"grow overflow-auto"},[t._l(i,(function(e,r){return[t.toggleList["day"+s.day]||r<3?a("p",{directives:[{name:"ripple",rawName:"v-ripple",value:100,expression:"100"}],key:e.key+r,staticClass:"mt-0 mb-1 max-w-[13vmin] break-words rounded-sm p-1 text-xs leading-tight",class:[e.customData&&e.customData.class?e.customData.class:"",{"pointer-events-none":!e.customData}],on:{click:function(a){return t.doRoute(e)},keypress:function(a){return t.doRoute(e)}}},[t._v(" "+t._s(e.customData&&e.customData.title?e.customData.title:"")+" ")]):t._e(),t.toggleList["day"+s.day]||4!==r?t._e():a("p",{directives:[{name:"ripple",rawName:"v-ripple",value:100,expression:"100"}],key:e.key,staticClass:"mt-0 mb-1 rounded-sm bg-gray-400 p-1 text-xs leading-tight text-white",on:{click:function(e){return t.toggle("day"+s.day)},keypress:function(e){return t.toggle("day"+s.day)}}},[t._v(" +"+t._s(i.length-3)+" ")])]}))],2)])]}}])})},c=[],f={props:{value:{type:[Object,Array]},attributes:{type:[Array],default:function(){return[]}},seletedCategories:{type:[Array],default:function(){return[]}},manaulUpdateFormResult:{type:[Function],required:!0}},data:function(){return{masks:{weekdays:"WWW"},toggleList:{}}},methods:{swipeMonth:function(t){var e=t.year,a=t.month-1,s=new Date(e,a,1),i=new Date(e,a+1,0),r=this.$dayjs(s).format("YYYY-MM-DD"),n=this.$dayjs(i).format("YYYY-MM-DD");this.$emit("input",{start:r,end:n}),this.toggleList={}},doRoute:function(t){var e=this,a=["break","regularHoliday"];a.includes(t.customData.type)?this.$swal.fire({icon:"info",title:"".concat(t.customData.title),showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"開放預約",customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"},cancelButtonText:"關閉"}).then(function(){var a=(0,l.Z)((0,o.Z)().mark((function a(s){var i;return(0,o.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!s.isConfirmed){a.next=13;break}if("break"!==t.customData.type){a.next=4;break}return a.next=4,e.$api.adminBookingTime({designerId:e.userInfo.user.id,datetime:t.dates[0].startTime,appointable:!0});case 4:if("bg-blue-400 text-white"!==t.customData.class){a.next=7;break}return a.next=7,e.$api.adminBookingTime({designerId:e.userInfo.user.id,datetime:t.dates[0].startTime,appointable:!0});case 7:if("bg-blue-600 text-white"!==t.customData.class){a.next=11;break}return i=t.customData.bookingTimes.map((function(t){return new Promise((function(a){a(e.$api.adminBookingTime({designerId:e.userInfo.user.id,datetime:t.time,appointable:!0}))}))})),a.next=11,Promise.all(i);case 11:return a.next=13,e.manaulUpdateFormResult();case 13:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()):this.$router.push({name:"ScheduleBreak-Detail",query:{id:t.key}})},preNextMonth:function(t){this.$emit("input",{start:this.$dayjs(this.$dayjs(this.propMonthlyOrdersDate.start).add(t,"month")).startOf("month").format("YYYY-MM-DD"),end:this.$dayjs(this.$dayjs(this.propMonthlyOrdersDate.end).add(t,"month")).endOf("month").format("YYYY-MM-DD")}),this.toggleList={}},toggle:function(t){this.toggleList[t]=!0,this.$forceUpdate()}},computed:(0,r.Z)((0,r.Z)({},(0,u.rn)("userInfo",["userInfo","currentMechantId"])),{},{isSeletedCategories:function(){var t=this;return function(e){var a=!1;return Array.isArray(t.seletedCategories)&&(a=0!==t.seletedCategories.length&&t.seletedCategories.includes(e)),a}},attributesfilterdByCategories:function(){var t=this;return this.attributes.filter((function(e){return t.isSeletedCategories(e.customData.type)}))},propMonthlyOrdersDate:{get:function(){return this.value},set:function(){this.$emit("input",this.propMonthlyOrdersDate)}}})},m=f,p=a(3736),y=(0,p.Z)(m,d,c,!1,null,"2436fb72",null),h=y.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex items-center justify-between"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"absolute inset-x-0 top-[-41px] m-auto whitespace-nowrap"},[a("span",[t._v(t._s(t._f("dateFmtROCMMDD")(t.weekLst[0])))]),a("span",[t._v(" ~ "+t._s(t.$dayjs(t.weekLst[6]).format("MM/DD")))])]),a("div",[a("font-awesome-icon",{staticClass:"absolute right-[50px] top-[-41px] text-2xl  text-primary",attrs:{icon:"fa-solid fa-angle-left"},on:{click:function(e){return t.preNextWeek(-7)}}}),a("font-awesome-icon",{staticClass:"absolute right-[-3px] top-[-41px] text-2xl text-primary",attrs:{icon:"fa-solid fa-angle-right"},on:{click:function(e){return t.preNextWeek(7)}}})],1)])]),a("div",{staticClass:"mt-2"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"w-[12.5%] border border-solid border-primary"}),t._l(t.weekLst,(function(e,s){return a("div",{key:"week"+s,staticClass:"w-[12.5%] border border-solid border-primary"},[a("p",[t._v(t._s(t.$dayjs(e).format("M/D")))]),a("p",[t._v(t._s(t.$dayjs(e).format("(dd)")))])])}))],2),a("div",{staticClass:"flex"},[a("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[t._v("整日公休")]),t._l(t.weekLst,(function(e,s){return a("div",{key:"week"+s,staticClass:"flex w-[12.5%] items-center justify-center border border-solid border-primary"},[t._l(t.isRegularHoliday,(function(i,r){return[i.dates===t.$dayjs(e).valueOf()?a("p",{key:"isRegularHoliday-"+s+"-"+r,staticClass:"my-1 w-full overflow-hidden text-ellipsis whitespace-nowrap bg-second p-1 text-xs leading-tight text-white ",class:i.customData.class,on:{click:function(e){return t.doRoute(i)},keypress:function(e){return t.doRoute(i)}}},[t._v(" "+t._s(i.customData.title))]):t._e()]}))],2)}))],2),a("div",t._l(t.attributes,(function(e,s){return a("div",{key:"resultItem"+s,staticClass:"flex"},[a("div",{staticClass:"w-[12.5%] border border-solid border-primary"},[t._v(t._s(e.time))]),t._l(e.date,(function(e,s){return a("div",{key:"innerItem"+s,staticClass:" flex w-[12.5%] cursor-pointer flex-wrap items-center justify-center border border-solid border-primary"},[Array.isArray(e)&&e.length>0?[t._l(e,(function(e,i){return[a("p",{key:"attributes"+s+"-"+i,staticClass:"my-1 w-full overflow-hidden text-ellipsis whitespace-nowrap bg-second p-1 text-xs leading-tight text-white ",class:e.customData.class,on:{click:function(a){return t.doRoute(e)},keypress:function(a){return t.doRoute(e)}}},[t._v(t._s(e.customData.title))])]}))]:t._e()],2)}))],2)})),0)])])},x=[],v=(a(9653),{props:{value:{type:[Number,String]},weekLst:{type:[Array]},attributes:{type:[Array],default:function(){return[]}},isRegularHoliday:{type:[Array],default:function(){return[]}},manaulUpdateFormResult:{type:[Function],required:!0}},methods:{doRoute:function(t){var e=this;console.log(t);var a=["break","regularHoliday"];a.includes(t.customData.type)?this.$swal.fire({icon:"info",title:"".concat(t.customData.title),showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"開放預約",customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"},cancelButtonText:"關閉"}).then(function(){var a=(0,l.Z)((0,o.Z)().mark((function a(s){var i;return(0,o.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!s.isConfirmed){a.next=13;break}if("break"!==t.customData.type){a.next=4;break}return a.next=4,e.$api.adminBookingTime({designerId:e.userInfo.user.id,datetime:t.dates,appointable:!0});case 4:if("bg-blue-400 text-white"!==t.customData.class){a.next=7;break}return a.next=7,e.$api.adminBookingTime({designerId:e.userInfo.user.id,datetime:t.dates,appointable:!0});case 7:if("bg-blue-600 text-white"!==t.customData.class){a.next=11;break}return i=t.customData.bookingTimes.map((function(t){return new Promise((function(a){a(e.$api.adminBookingTime({designerId:e.userInfo.user.id,datetime:t.time,appointable:!0}))}))})),a.next=11,Promise.all(i);case 11:return a.next=13,e.manaulUpdateFormResult();case 13:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()):this.$router.push({name:"ScheduleBreak-Detail",query:{id:t.key}})},preNextWeek:function(t){this.$emit("input",this.value+t)}},computed:(0,r.Z)({},(0,u.rn)("userInfo",["userInfo","currentMechantId"]))}),w=v,b=(0,p.Z)(w,g,x,!1,null,null,null),k=b.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"flex items-center justify-between"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"absolute inset-x-0 top-[-41px] m-auto whitespace-nowrap"},[a("span",[t._v(t._s(t._f("dateFmtROCMMDD")(t.currentDay)))])]),a("div",[a("font-awesome-icon",{staticClass:"absolute right-[50px] top-[-41px] text-2xl  text-primary",attrs:{icon:"fa-solid fa-angle-left"},on:{click:function(e){return t.preNextDay(-1)}}}),a("font-awesome-icon",{staticClass:"absolute right-[-3px] top-[-41px] text-2xl text-primary",attrs:{icon:"fa-solid fa-angle-right"},on:{click:function(e){return t.preNextDay(1)}}})],1)])]),a("div",{staticClass:"mt-2"},[a("div",{staticClass:"flex"},[a("div",{staticClass:"w-[25%] border border-solid border-primary"}),a("div",{staticClass:"w-[75%] border border-solid border-primary"},[a("span",[t._v(t._s(t.$dayjs(t.currentDay).format("M/D")))]),a("span",[t._v(t._s(t.$dayjs(t.currentDay).format("(dd)")))])])]),a("div",t._l(t.attributes,(function(e,s){return a("div",{key:"resultItem"+s,staticClass:"flex"},[a("div",{staticClass:"w-[25%] border border-solid border-primary"},[t._v(t._s(e.time))]),t._l(e.date,(function(e,s){return a("div",{key:"innerItem"+s,staticClass:" flex w-[75%] cursor-pointer flex-wrap items-center justify-center border border-solid border-primary"},[Array.isArray(e)&&e.length>0?[t._l(e,(function(e,i){return[a("p",{key:"attributes"+s+"-"+i,staticClass:"my-1 w-full overflow-hidden text-ellipsis whitespace-nowrap bg-second p-1 text-xs leading-tight text-white ",class:e.customData.class,on:{click:function(a){return t.doRoute(e)},keypress:function(a){return t.doRoute(e)}}},[t._v(t._s(e.customData.title))])]}))]:t._e()],2)}))],2)})),0)])])},C=[],_={props:{value:{type:[String,Date],required:!0},weekLst:{type:[Array]},attributes:{type:[Array],default:function(){return[]}},isRegularHoliday:{type:[Array],default:function(){return[]}},manaulUpdateFormResult:{type:[Function],required:!0}},methods:{doRoute:function(t){var e=this;console.log(t);var a=["break","regularHoliday"];a.includes(t.customData.type)?this.$swal.fire({icon:"info",title:"".concat(t.customData.title),showConfirmButton:!0,showCancelButton:!0,confirmButtonText:"開放預約",customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"},cancelButtonText:"關閉"}).then(function(){var a=(0,l.Z)((0,o.Z)().mark((function a(s){var i;return(0,o.Z)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!s.isConfirmed){a.next=13;break}if("break"!==t.customData.type){a.next=4;break}return a.next=4,e.$api.adminBookingTime({designerId:e.userInfo.user.id,datetime:t.dates,appointable:!0});case 4:if("bg-blue-400 text-white"!==t.customData.class){a.next=7;break}return a.next=7,e.$api.adminBookingTime({designerId:e.userInfo.user.id,datetime:t.dates,appointable:!0});case 7:if("bg-blue-600 text-white"!==t.customData.class){a.next=11;break}return i=t.customData.bookingTimes.map((function(t){return new Promise((function(a){a(e.$api.adminBookingTime({designerId:e.userInfo.user.id,datetime:t.time,appointable:!0}))}))})),a.next=11,Promise.all(i);case 11:return a.next=13,e.manaulUpdateFormResult();case 13:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()):this.$router.push({name:"ScheduleBreak-Detail",query:{id:t.key}})},preNextDay:function(t){this.currentDay=this.$dayjs(this.$dayjs(this.currentDay).add(t,"days")).format("YYYY-MM-DD")}},computed:(0,r.Z)((0,r.Z)({},(0,u.rn)("userInfo",["userInfo","currentMechantId"])),{},{currentDay:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}})},T=_,$=(0,p.Z)(T,D,C,!1,null,null,null),A=$.exports,M={name:"order-index",description:"行事曆的首頁",metaInfo:{title:"名留",titleTemplate:"%s | 行事曆"},components:{MonthView:h,WeekView:k,DayView:A},data:function(){return{seletedAll:!1,isActiveFilter:!1,isDirect:!1,isAuthToAll:!1,designerBookingList:[],seleted:["my","others","break","regularHoliday"],showType:"0",period:0,monthlyOrdersDate:{start:this.$dayjs(new Date).startOf("month").valueOf(),end:this.$dayjs(new Date).endOf("month").valueOf()},today:this.$dayjs().format("YYYY-MM-DD"),attributes:[],formatResult:[],timeListOfBookings:[]}},mounted:function(){this.init()},methods:{init:function(){var t=this;return(0,l.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getIsMerchantScheduleDisplay();case 2:return e.next=4,t.getDesignerBookingTimesWithRange();case 4:case"end":return e.stop()}}),e)})))()},getIsMerchantScheduleDisplay:function(){var t=this;return(0,l.Z)((0,o.Z)().mark((function e(){var a,s,i,r;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$api.getIsMerchantScheduleDisplay();case 2:if(a=e.sent,s=a.data,i=s.data,r=s.errors,!r){e.next=6;break}return e.abrupt("return");case 6:t.isAuthToAll=i.getIsMerchantScheduleDisplay;case 7:case"end":return e.stop()}}),e)})))()},getAllBookingTimesWithRange:function(){var t=this;return(0,l.Z)((0,o.Z)().mark((function e(){var a,s,i,l,u,d,c;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new Map([["0",{startDate:t.$dayjs(t.monthlyOrdersDate.start).valueOf(),endDate:t.$dayjs(t.monthlyOrdersDate.end).valueOf()}],["1",{startDate:t.$dayjs(t.weekLst[0]).valueOf(),endDate:t.$dayjs(t.weekLst[6]).valueOf()}],["2",{startDate:t.$dayjs(t.$dayjs(t.today).format("YYYY-MM-DD 00:00:00")).valueOf(),endDate:t.$dayjs(t.$dayjs(t.today).format("YYYY-MM-DD 23:59:59")).valueOf()}]]),s={storeId:t.currentMechantId,dateRange:{startDate:a.get(t.showType).startDate,endDate:a.get(t.showType).endDate}},e.next=4,t.$api.getAllBookingTimesWithRange(s);case 4:if(i=e.sent,l=i.data,u=l.data,d=l.errors,!d){e.next=8;break}return e.abrupt("return");case 8:t.formatResult=[],c=u.getAllBookingTimesWithRange.flatMap((function(t){return Array.isArray(t.schedule)&&t.schedule.length>0?(0,n.Z)(t.schedule.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{designer:t.designer})}))):[]})),t.timeListOfBookings=c,t.formatResult=[].concat((0,n.Z)(t.ordersList(c)),(0,n.Z)(t.HolidayList(c)),(0,n.Z)(t.HolidayTimeRangeList(c)),(0,n.Z)(t.dayOffList(c)));case 12:case"end":return e.stop()}}),e)})))()},getDesignerBookingTimesWithRange:function(){var t=this;return(0,l.Z)((0,o.Z)().mark((function e(){var a,s,i,l,u,d,c;return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=new Map([["0",{startDate:t.$dayjs(t.monthlyOrdersDate.start).valueOf(),endDate:t.$dayjs(t.monthlyOrdersDate.end).valueOf()}],["1",{startDate:t.$dayjs(t.weekLst[0]).valueOf(),endDate:t.$dayjs(t.weekLst[6]).valueOf()}],["2",{startDate:t.$dayjs(t.$dayjs(t.today).format("YYYY-MM-DD 00:00:00")).valueOf(),endDate:t.$dayjs(t.$dayjs(t.today).format("YYYY-MM-DD 23:59:59")).valueOf()}]]),s={designerId:t.userInfo.user.id,storeId:t.currentMechantId,dateRange:{startDate:a.get(t.showType).startDate,endDate:a.get(t.showType).endDate}},e.next=4,t.$api.getDesignerBookingTimesWithRange(s);case 4:if(i=e.sent,l=i.data,u=l.data,d=l.errors,!d){e.next=8;break}return e.abrupt("return");case 8:c=u.getDesignerBookingTimesWithRange.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{designer:t.designer})})),t.timeListOfBookings=c,t.formatResult=[],t.formatResult=[].concat((0,n.Z)(t.ordersList(c)),(0,n.Z)(t.HolidayList(c)),(0,n.Z)(t.HolidayTimeRangeList(c)),(0,n.Z)(t.dayOffList(c)));case 12:case"end":return e.stop()}}),e)})))()},HolidayList:function(t){console.log(t);var e=[];return Array.isArray(t)&&t.length>0&&(e=t.flatMap((function(t,e){return t.isRegularHoliday?[{key:"HolidayList-".concat(e),customData:{title:"".concat(t.designer.name,"公休"),class:"bg-blue-600 text-white",type:"regularHoliday",designer:t.designer,bookingTimes:t.bookingTimes},dates:t.date}]:[]}))),e},HolidayTimeRangeList:function(t){var e=this,a=[],s=a[0],i=void 0===s?[]:s,o=a[1],l=void 0===o?[]:o,u=a[2],d=void 0===u?[]:u,c=a[3],f=void 0===c?[]:c;return i=t.flatMap((function(t){return Array.isArray(t.bookingTimes)&&t.bookingTimes.length>0?[t.bookingTimes.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{designer:t.designer})}))]:[]})),l=i.flatMap((function(t){return(0,n.Z)(t)})),d=l.flatMap((function(t){return t.statusComment&&"該時段公休"===t.statusComment?[t]:[]})),f=d.map((function(t,a){return{key:"HolidayTimeRangeList-".concat(a),customData:{title:"".concat(t.designer.name,"公休").concat(e.$dayjs(t.time).format("HH:mm")),class:"bg-blue-400 text-white",type:"regularHoliday",designer:t.designer},dates:t.time}})),f},dayOffList:function(t){var e=this,a=[],s=a[0],i=void 0===s?[]:s,o=a[1],l=void 0===o?[]:o,u=a[2],d=void 0===u?[]:u,c=a[3],f=void 0===c?[]:c;return i=t.flatMap((function(t){return Array.isArray(t.bookingTimes)&&t.bookingTimes.length>0?[t.bookingTimes.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{designer:t.designer})}))]:[]})),l=i.flatMap((function(t){return(0,n.Z)(t)})),d=l.flatMap((function(t){return t.statusComment&&"該時段排休"===t.statusComment?[t]:[]})),f=d.map((function(t,a){return{key:"dayOffList-".concat(a),customData:{title:"".concat(t.designer.name,"排休").concat(e.$dayjs(t.time).format("HH:mm")),class:"bg-red-600 text-white",type:"break",designer:t.designer},dates:t.time}})),f},ordersList:function(t){var e=this,a=[],s=a[0],i=void 0===s?[]:s,o=a[1],l=void 0===o?[]:o,u=a[2],d=void 0===u?[]:u,c=a[3],f=void 0===c?[]:c;return i=t.flatMap((function(t){return Array.isArray(t.bookingTimes)&&t.bookingTimes.length>0?[t.bookingTimes.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{designer:t.designer})}))]:[]})),l=i.flatMap((function(t){return(0,n.Z)(t)})),d=l.flatMap((function(t){return Array.isArray(t.orders)&&t.orders.length>0?(0,n.Z)(t.orders.map((function(e){return(0,r.Z)((0,r.Z)({},e),{},{propsDesigner:t.designer})}))):[]})),f=d.map((function(t){var a="";return a=t.propsDesigner.id===e.userInfo.user.id?t.designer&&t.designer.id===e.userInfo.user.id?"bg-second text-white":"bg-green-500 text-white":"bg-slate-200 text-green-600",{key:t.id,customData:{title:t.customer.name||"--",class:a,type:t.isDesignate?"my":"others"},dates:t.date}})),f},doRoute:function(t){this.$router.push({name:t.name})},manaulUpdateFormResult:function(){var t=this;return(0,l.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.seletedAll){e.next=5;break}return e.next=3,t.getAllBookingTimesWithRange();case 3:e.next=7;break;case 5:return e.next=7,t.getDesignerBookingTimesWithRange();case 7:case"end":return e.stop()}}),e)})))()}},activated:function(){this.init()},computed:(0,r.Z)((0,r.Z)((0,r.Z)({},(0,u.rn)("userInfo",["userInfo","currentMechantId","userAuthorizeList"])),(0,u.Se)("userInfo",["GETTER_MECHANTNAME"])),{},{isAuthority:function(){var t=this;return function(e){return t.userAuthorizeList.find((function(t){return t.pageName===e&&t.authority}))}},designer:function(){return{id:this.userInfo.user.id,name:this.userInfo.user.name}},restructureScheduleTableWithisRegualrHoliday:function(){return this.formatResult.filter((function(t){return t.key.includes("HolidayList")}))},restructureScheduleTableWithTimeList:function(){var t=this,e=[],a=[],s=[];e=this.timeListOfBookings.flatMap((function(e){return e.bookingTimes?e.bookingTimes.flatMap((function(e){return e?[t.$dayjs(e.time).isValid()?t.$dayjs(e.time).format("HH:mm"):[]]:[]})):[]})),a=(0,n.Z)(new Set(e));var i=this.formatResult.filter((function(e){return 0!==t.seleted.length&&t.seleted.includes(e.customData.type)}));return s=a.flatMap((function(e){var a=[],s=a[0],r=a[1],n=a[2],o=a[3],l=a[4],u=a[5],d=a[6];return s=Array.isArray(i)?i.filter((function(a){return t.$dayjs(a.dates).isBetween(t.weekLst[0],t.weekLst[1])&&t.$dayjs(a.dates).format("HH:mm")===e})):"",r=Array.isArray(i)?i.filter((function(a){return t.$dayjs(a.dates).isBetween(t.weekLst[1],t.weekLst[2])&&t.$dayjs(a.dates).format("HH:mm")===e})):"",n=Array.isArray(i)?i.filter((function(a){return t.$dayjs(a.dates).isBetween(t.weekLst[2],t.weekLst[3])&&t.$dayjs(a.dates).format("HH:mm")===e})):"",o=Array.isArray(i)?i.filter((function(a){return t.$dayjs(a.dates).isBetween(t.weekLst[3],t.weekLst[4])&&t.$dayjs(a.dates).format("HH:mm")===e})):"",l=Array.isArray(i)?i.filter((function(a){return t.$dayjs(a.dates).isBetween(t.weekLst[4],t.weekLst[5])&&t.$dayjs(a.dates).format("HH:mm")===e})):"",u=Array.isArray(i)?i.filter((function(a){return t.$dayjs(a.dates).isBetween(t.weekLst[5],t.weekLst[6])&&t.$dayjs(a.dates).format("HH:mm")===e})):"",d=Array.isArray(i)?i.filter((function(a){return t.$dayjs(a.dates).isBetween(t.$dayjs(t.weekLst[6]).format("YYYY-MM-DD 00:00:00"),t.weekLst[6])&&t.$dayjs(a.dates).format("HH:mm")===e})):"",[{time:e,date:[s,r,n,o,l,u,d]}]})),s},restructureScheduleTableWithTimeListOfDay:function(){var t=this,e=[],a=[],s=[];e=this.timeListOfBookings.flatMap((function(e){return e.bookingTimes?e.bookingTimes.flatMap((function(e){return e?[t.$dayjs(e.time).isValid()?t.$dayjs(e.time).format("HH:mm"):[]]:[]})):[]})),a=(0,n.Z)(new Set(e));var i=this.formatResult.filter((function(e){return 0!==t.seleted.length&&t.seleted.includes(e.customData.type)}));return s=a.flatMap((function(e){var a=[],s=a[0];return s=Array.isArray(i)?i.filter((function(a){return t.$dayjs(a.dates).isBetween(t.$dayjs(t.today).format("YYYY-MM-DD 00:00:00"),t.$dayjs(t.today).format("YYYY-MM-DD 23:59:59"))&&t.$dayjs(a.dates).format("HH:mm")===e})):"",[{time:e,date:[s]}]})),s},weekLst:function(){return[this.$dayjs(this.$dayjs().format("YYYY-MM-DD 00:00:00")).day(this.period),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+1),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+2),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+3),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+4),this.$dayjs(this.$dayjs().format("YYYY-MM-DD")).day(this.period+5),this.$dayjs(this.$dayjs().format("YYYY-MM-DD 23:59:59")).day(this.period+6)]}}),watch:{seletedAll:function(){this.seletedAll?this.getAllBookingTimesWithRange():this.getDesignerBookingTimesWithRange()},monthlyOrdersDate:{deep:!0,handler:function(){this.manaulUpdateFormResult()}},weekLst:{deep:!0,handler:function(){this.manaulUpdateFormResult()}},today:{deep:!0,handler:function(){this.seletedAll?this.getAllBookingTimesWithRange():this.getDesignerBookingTimesWithRange()}},showType:function(){this.seletedAll?this.getAllBookingTimesWithRange():this.getDesignerBookingTimesWithRange()}}},j=M,Y=(0,p.Z)(j,s,i,!1,null,null,null),R=Y.exports},7227:function(t,e,a){"use strict";var s=a(7710),i=a(5631);s("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},189:function(t,e,a){a(7227)},9584:function(t,e,a){"use strict";a.d(e,{Z:function(){return l}});var s=a(9227);function i(t){if(Array.isArray(t))return(0,s.Z)(t)}a(2526),a(1817),a(1539),a(2165),a(8783),a(3948),a(1038);function r(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}var n=a(2780);a(1703);function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return i(t)||r(t)||(0,n.Z)(t)||o()}}}]);
//# sourceMappingURL=529-legacy.c36ef224.js.map