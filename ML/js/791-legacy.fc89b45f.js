"use strict";(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[791],{3791:function(e,t,r){r.r(t),r.d(t,{default:function(){return p}});var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[84px]"},[r("C-Back-Nav",{attrs:{title:(""!==e.GETTER_MECHANTNAME?e.GETTER_MECHANTNAME+" - ":"")+"預約",routeTarget:{name:"Order"}}}),r("section",{staticClass:"relative z-0 mt-[52px] p-3"},[r("p",{staticClass:"my-2 text-center"},[e._v("新增預約")]),r("ValidationObserver",{ref:"orderForm"},[r("div",{staticClass:"my-2 flex items-center gap-2 text-left"},[r("p",{staticClass:"w-3/12"},[e._v("預約時間")]),r("div",{staticClass:"flex w-9/12 gap-1"},[r("ValidationProvider",{ref:"orderDate",staticClass:"w-3/5",attrs:{name:"日期",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("VCCalendarSelect",{attrs:{"min-date":new Date,placeholder:"選擇日期",errors:a},model:{value:e.orderDate,callback:function(t){e.orderDate=t},expression:"orderDate"}})]}}])}),r("ValidationProvider",{ref:"timeList",staticClass:"w-2/5",attrs:{name:"時間",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("C-Select",{staticClass:"w-full",attrs:{list:e.timeList,placeholder:"選擇時間","item-text":"name","item-value":"id","object-return":"",errors:a},model:{value:e.orderTime,callback:function(t){e.orderTime=t},expression:"orderTime"}})]}}])})],1)]),r("div",{staticClass:"my-2 flex items-center gap-2 text-left"},[r("p",{staticClass:"w-3/12"},[e._v("姓名")]),r("div",{staticClass:"w-9/12"},[r("ValidationProvider",{ref:"name",attrs:{name:"姓名",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("C-Input",{staticClass:"mb-0",attrs:{errors:a},scopedSlots:e._u([{key:"endIcon",fn:function(){return[""!==e.name?r("font-awesome-icon",{staticClass:" text-rose-600",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(t){e.name=""}}}):e._e()]},proxy:!0}],null,!0),model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})]}}])})],1)]),r("div",{staticClass:"my-2 flex items-center gap-2 text-left"},[r("p",{staticClass:"w-3/12"},[e._v("電話")]),r("div",{staticClass:"w-9/12"},[r("ValidationProvider",{ref:"cellphone",attrs:{name:"電話",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.errors;return[r("C-Input",{staticClass:"mb-0",attrs:{errors:a},scopedSlots:e._u([{key:"endIcon",fn:function(){return[""!==e.cellphone?r("font-awesome-icon",{staticClass:" text-rose-600",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(t){e.cellphone=""}}}):e._e()]},proxy:!0}],null,!0),model:{value:e.cellphone,callback:function(t){e.cellphone=t},expression:"cellphone"}})]}}])})],1)]),r("div",{staticClass:"my-2 flex items-center gap-2 text-left"},[r("p",{staticClass:"w-3/12"},[e._v("指定預約")]),r("div",{staticClass:"flex w-9/12 flex-nowrap gap-1 text-left"},[r("C-Checkbox-Full",{staticClass:"!ml-0 !w-fit",model:{value:e.isOrderDesigner,callback:function(t){e.isOrderDesigner=t},expression:"isOrderDesigner"}})],1)]),r("div",{staticClass:"my-2 flex gap-2 text-left"},[r("label",{staticClass:"w-3/12"},[e._v("備註")]),r("div",{staticClass:"relative flex w-9/12 flex-nowrap gap-1"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.remark,expression:"remark"}],staticClass:"w-full rounded-md border border-primary/50",attrs:{name:"remark",id:"",rows:"5"},domProps:{value:e.remark},on:{input:function(t){t.target.composing||(e.remark=t.target.value)}}}),""!==e.remark?r("font-awesome-icon",{staticClass:" absolute right-2 bottom-1 text-rose-600",attrs:{icon:"fa-regular fa-xmark"},on:{click:function(t){e.remark=""}}}):e._e()],1)]),r("div",{staticClass:"fixed bottom-[100px] w-[calc(100%-24px)]"},[r("div",{staticClass:"w-full cursor-pointer bg-second py-2 px-4 text-white",on:{click:e.doFormValidate,keypress:e.doFormValidate}},[e._v("新增預約")])])])],1)],1)},s=[],n=r(4648),i=r(6835),o=r(8534),l=(r(8309),r(2222),r(1249),r(629)),c=r(2257),d={components:{VCCalendarSelect:c.Z},name:"order-add",description:"預約的首頁",metaInfo:{title:"名留",titleTemplate:"%s | 預約"},data:function(){return{orderDate:new Date,orderTime:"",name:"",cellphone:"",remark:"",isOrderDesigner:!0,timeList:[]}},mounted:function(){},methods:{doRoute:function(e){this.$router.push({name:e.name})},doFormValidate:function(){var e=this;return(0,o.Z)((0,i.Z)().mark((function t(){var r;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$refs.orderForm.validate();case 2:if(r=t.sent,r){t.next=5;break}return t.abrupt("return");case 5:e.doDelivery();case 6:case"end":return t.stop()}}),t)})))()},doDelivery:function(){var e=this;return(0,o.Z)((0,i.Z)().mark((function t(){var r,a,s;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={designerId:e.userInfo.user.id,dateTime:e.$dayjs("".concat(e.$dayjs(e.orderDate).format("YYYY-MM-DD")," ").concat(e.orderTime.name)).valueOf(),cellphone:e.cellphone,merchantId:e.currentMechantId,name:e.name,remark:e.remark,isDesignate:e.isOrderDesigner},t.next=3,e.$api.bookingV2(r);case 3:if(a=t.sent,s=a.data.errors,!s){t.next=7;break}return t.abrupt("return");case 7:e.fireSwalToOrder();case 8:case"end":return t.stop()}}),t)})))()},fireSwalToOrder:function(){var e=this;this.$swal.fire({title:" ",html:'<div class="flex items-center justify-center my-10">\n          <img src="/designer/assets/images/success.svg" alt="" class="inline-block mr-1" /><span>新增成功</span>\n        </div>',confirmButtonText:"回列表",showConfirmButton:!0,showCloseButton:!0,customClass:{confirmButton:"!w-[144px] !rounded !bg-second !px-[14px] !py-2 !text-sm !text-white"}}).then((function(t){t.isConfirmed&&e.doRoute({name:"Order"})}))},getTimeList:function(){var e=this;return(0,o.Z)((0,i.Z)().mark((function t(){var r,a,s,n,o,l;return(0,i.Z)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.orderTime="",r=function(){return e.isOrderDesigner?{date:e.$dayjs(e.orderDate).valueOf(),storeId:e.currentMechantId,designerId:e.userInfo.user.id}:{storeId:e.currentMechantId,date:e.$dayjs(e.orderDate).valueOf()}},a="getBookingTimes",t.next=5,e.$api[a](r());case 5:if(s=t.sent,n=s.data,o=n.data,l=n.errors,!l){t.next=9;break}return t.abrupt("return");case 9:e.timeList=Array.isArray(o[a])?o[a].map((function(t,r){return{name:e.$dayjs(t.time).isValid()?e.$dayjs(t.time).format("HH:mm"):t.time,id:"bookingTime".concat(r),disabled:!1}})):[];case 10:case"end":return t.stop()}}),t)})))()}},computed:(0,n.Z)((0,n.Z)({},(0,l.rn)("userInfo",["userInfo","currentMechantId"])),(0,l.Se)("userInfo",["GETTER_MECHANTNAME"])),watch:{orderDate:{immediate:!0,handler:function(){this.getTimeList()}}}},u=d,m=r(3736),f=(0,m.Z)(u,a,s,!1,null,"03dea99e",null),p=f.exports}}]);
//# sourceMappingURL=791-legacy.fc89b45f.js.map