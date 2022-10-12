"use strict";(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[246],{5246:function(e,t,i){i.r(t),i.d(t,{default:function(){return u}});var r=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[84px]"},[i("C-Back-Nav",{attrs:{title:"互助日報表",routeTarget:{name:"Report"}}}),i("section",{staticClass:"relative z-0 mt-[52px] p-3"},[i("div",{staticClass:"flex items-center gap-2"},[i("p",[e._v("日期：")]),i("vc-date-picker",{attrs:{mode:"date","max-date":e.$dayjs().format("YYYY-MM-DD")},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.inputValue,s=t.inputEvents;return[i("input",e._g({staticClass:"rounded border px-2 py-1 focus:border-blue-300 focus:outline-none",domProps:{value:r}},s))]}}]),model:{value:e.searchDate,callback:function(t){e.searchDate=t},expression:"searchDate"}})],1),i("div",{staticClass:"text-left text-sm"},[i("div",{staticClass:"my-4 flex items-center justify-between"},[i("div",{staticClass:"flex items-baseline"},[i("p",{staticClass:"mr-1 text-[24px] font-bold"},[e._v(e._s(e.$dayjs(e.searchDateSubmited).format("MM"))+"月")]),i("p",[e._v(e._s(e.$dayjs(e.searchDateSubmited).format("DD"))+"日")])]),i("div",[i("p",[e._v("設計師 "+e._s(e.userInfo.user.name))])])]),e.reviewResult&&e.reviewResultWholeMonth?i("div",{staticClass:"break-words"},[e._m(0),e._l(e.reviewResult.helperRecord,(function(t,r){return i("div",{key:"helperRecordItem"+r,staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50 p-1 "},[i("div",{staticClass:"w-1/12"},[e._v("#"+e._s(t.orderNo))]),i("div",{staticClass:"w-4/12"},[e._v(e._s(t.service.name))]),i("div",{staticClass:"w-3/12 text-right"},[e._v(e._s(t.designer.name))]),i("div",{staticClass:"w-2/12 text-right"},[e._v(e._s(-1*t.helperFee))]),i("div",{staticClass:"w-2/12 text-right"},[e._v(e._s(t.helperPoint))])])})),e._l(e.reviewResult.productRecord,(function(t,r){return i("div",{key:"productRecordItem"+r,staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50 p-1 "},[i("div",{staticClass:"w-1/12"},[e._v("#"+e._s(t.orderNo))]),i("div",{staticClass:"w-4/12"},[e._v(" "+e._s(t.productName?t.productName+" + ":"")+" "+e._s(t.productUnitPrice?t.productUnitPrice+" x ":"")+" "+e._s(t.productCount)+" ")]),i("div",{staticClass:"w-3/12 text-right"}),i("div",{staticClass:"w-2/12 text-right"},[e._v(e._s(t.productUnitPrice*t.productCount))]),i("div",{staticClass:"w-2/12 text-right"})])})),i("div",{staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50 p-1 "},[i("div",{staticClass:"w-2/12"},[e._v("合計")]),e.priceDisplayOnDailyReportDefault.isPriceDisplayOnDailyReport?i("div",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}],staticClass:"w-8/12 text-right"},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(e.totalCount):e.totalCount))]):e._e(),i("div",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}],staticClass:"w-2/12 text-right"},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(e.totalCountPoint):e.totalCountPoint))])])],2):e._e(),e.reviewResult&&e.reviewResultWholeMonth?i("div",{staticClass:"break-words"},[e._m(1),e.isDisplayHelperRetrieveInDailyReport&&0!==e.reviewResult.summaryNoPoint?i("div",{staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50"},[i("div",{staticClass:"w-2/5"},[e._v("互助獲得金額(不含點)")]),i("div",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}],staticClass:"w-2/5 text-right"},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(e.reviewResult.summaryNoPoint):e.reviewResult.summaryNoPoint))]),i("div",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}],staticClass:"w-2/5 text-right"},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(e.reviewResultWholeMonth.summaryNoPoint):e.reviewResultWholeMonth.summaryNoPoint))])]):e._e(),e.isDisplayHelperRetrieveInDailyReport&&0!==e.reviewResult.pointSummary?i("div",{staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50"},[i("div",{staticClass:"w-2/5"},[e._v("互助獲得(點)點數/換算金額")]),i("div",{staticClass:"w-2/5 text-right"},[i("span",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}]},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(e.reviewResult.pointSummary):e.reviewResult.pointSummary))]),e.priceDisplayOnDailyReportDefault.isHelperPointPriceDisplay?[e._v(" / "),i("span",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}]},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(-1*e.reviewResultWholeMonth.summaryOnlyPoint):-1*e.reviewResultWholeMonth.summaryOnlyPoint))])]:e._e()],2),i("div",{staticClass:"w-1/5 text-right"},[i("span",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}]},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(e.reviewResult.pointSummary):e.reviewResult.pointSummary))]),e.priceDisplayOnDailyReportDefault.isHelperPointPriceDisplay?[e._v(" / "),i("span",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}]},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(-1*e.reviewResultWholeMonth.summaryOnlyPoint):-1*e.reviewResultWholeMonth.summaryOnlyPoint))])]:e._e()],2)]):e._e(),i("div",{staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50"},[i("div",{staticClass:"w-2/5"},[e._v("店販業績")]),i("div",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}],staticClass:"w-2/5 text-right"},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?e.tst(e.reviewResult.productPerformanceSummary):e.reviewResult.productPerformanceSummary))]),i("div",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}],staticClass:"w-1/5 text-right"},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(e.reviewResultWholeMonth.productPerformanceSummary):e.reviewResultWholeMonth.productPerformanceSummary))])]),i("div",{staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50"},[i("div",{staticClass:"w-2/5"},[e._v("店販抽成")]),i("div",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}],staticClass:"w-2/5 text-right"},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(e.reviewResult.productRakeSummary):e.reviewResult.productRakeSummary))]),i("div",{directives:[{name:"to-fixed",rawName:"v-to-fixed"}],staticClass:"w-1/5 text-right"},[e._v(e._s(e.isUsingMathRoundInDesignerDailyReport?Math.round(e.reviewResultWholeMonth.productRakeSummary):e.reviewResultWholeMonth.productRakeSummary))])])]):e._e()])])],1)},s=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50 bg-[#08424c]/80 p-1 text-white "},[i("div",{staticClass:"w-1/12"},[e._v("#")]),i("div",{staticClass:"w-4/12"},[e._v("項目")]),i("div",{staticClass:"w-3/12 text-right"},[e._v("設計師")]),i("div",{staticClass:"w-2/12 text-right"},[e._v("金額")]),i("div",{staticClass:"w-2/12 text-right"},[e._v("點")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50 bg-[#08424c]/80 p-1 text-white "},[i("div",{staticClass:"w-2/5"}),i("div",{staticClass:"w-2/5 text-right"},[e._v("日合計")]),i("div",{staticClass:"w-1/5 text-right"},[e._v("累計")])])}],a=i(629),o={name:"priceList-index",description:"報表的薪資表",metaInfo:{title:"名留",titleTemplate:"%s | 薪資表"},data(){return{searchDate:this.$dayjs().valueOf(),searchDateSubmited:this.$dayjs().valueOf(),reviewResult:null,reviewResultWholeMonth:null,isDisplayHelperRetrieveInDailyReport:!1,isUsingMathRoundInDesignerDailyReport:!1,isZeroValueHiddenOnDailyReport:!1,priceDisplayOnDailyReportDefault:{},isRefresh:!0}},mounted(){this.init()},methods:{tst(e){return console.log(e),Math.round(e)},async init(){await Promise.all([this.getIsDisplayHelperRetrieveInDailyReport(),this.getIsUsingMathRoundInDesignerDailyReport(),this.getIsZeroValueHiddenOnDailyReport(),this.getPriceDisplayOnDailyReportDefault()]).then((()=>{})),await this.getUserHelperRetrieve(),await this.getUserHelperRetrieveWholeMonth()},async getIsDisplayHelperRetrieveInDailyReport(){const e=await this.$api.getIsDisplayHelperRetrieveInDailyReport(),{data:t,errors:i}=e.data;i||(this.isDisplayHelperRetrieveInDailyReport=t.getIsDisplayHelperRetrieveInDailyReport)},async getIsUsingMathRoundInDesignerDailyReport(){const e=await this.$api.getIsUsingMathRoundInDesignerDailyReport(),{data:t,errors:i}=e.data;i||(this.isUsingMathRoundInDesignerDailyReport=t.getIsUsingMathRoundInDesignerDailyReport)},async getIsZeroValueHiddenOnDailyReport(){const e=await this.$api.getIsZeroValueHiddenOnDailyReport(),{data:t,errors:i}=e.data;i||(this.isZeroValueHiddenOnDailyReport=t.getIsZeroValueHiddenOnDailyReport)},async getPriceDisplayOnDailyReportDefault(){const e=await this.$api.getPriceDisplayOnDailyReportDefault(),{data:t,errors:i}=e.data;i||(this.priceDisplayOnDailyReportDefault=t.getPriceDisplayOnDailyReportDefault)},doRoute(){this.$router.push({name:"Punch"})},async getUserHelperRetrieve(){this.reviewResult=null,this.searchDateSubmited=this.searchDate;const e={designerId:this.userInfo.user.id,startDate:this.$dayjs(this.$dayjs(this.searchDate).format("YYYY-MM-DD 00:00:00")).valueOf(),endDate:this.$dayjs(this.$dayjs(this.searchDate).format("YYYY-MM-DD 23:59:59")).valueOf()},t=await this.$api.getUserHelperRetrieve(e),{data:i,errors:r}=JSON.parse(JSON.stringify(t.data));r||(this.reviewResult=i.getUserHelperRetrieve)},async getUserHelperRetrieveWholeMonth(){this.reviewResultWholeMonth=null,this.searchDateSubmited=this.searchDate;const e={designerId:this.userInfo.user.id,startDate:this.$dayjs(this.$dayjs(this.$dayjs(this.searchDate).startOf("month")).format("YYYY-MM-DD 00:00:00")).valueOf(),endDate:this.$dayjs(this.$dayjs(this.$dayjs(this.searchDate).endOf("month")).format("YYYY-MM-DD 23:59:59")).valueOf()},t=await this.$api.getUserHelperRetrieve(e),{data:i,errors:r}=JSON.parse(JSON.stringify(t.data));r||(this.reviewResultWholeMonth=i.getUserHelperRetrieve)},reducerCounter(e){return e.reduce(((e,t)=>+e+ +t))}},watch:{searchDate(){this.searchDate&&(this.getUserHelperRetrieve(),this.getUserHelperRetrieveWholeMonth())}},computed:{...(0,a.rn)("userInfo",["userInfo"]),totalCountPoint(){let e=0;if(Array.isArray(this.reviewResult.helperRecord)&&this.reviewResult.helperRecord.length>0){const t=this.reviewResult.helperRecord.map((e=>e.helperPoint));e=this.reducerCounter(t)}return e},totalCount(){return this.totalCountHelperRecord+this.totalCountLProductRecord},totalCountHelperRecord(){let e=0;if(Array.isArray(this.reviewResult.helperRecord)&&this.reviewResult.helperRecord.length>0){const t=this.reviewResult.helperRecord.map((e=>e.helperFee));e=this.reducerCounter(t)}return e},totalCountLProductRecord(){let e=0;if(Array.isArray(this.reviewResult.productRecord)&&this.reviewResult.productRecord.length>0){const t=this.reviewResult.productRecord.map((e=>e.productUnitPrice*e.productCount));e=this.reducerCounter(t)}return e}}},n=o,l=i(3736),d=(0,l.Z)(n,r,s,!1,null,null,null),u=d.exports}}]);
//# sourceMappingURL=246.11820e39.js.map