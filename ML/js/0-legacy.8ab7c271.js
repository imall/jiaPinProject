"use strict";(self["webpackChunkbos_designer"]=self["webpackChunkbos_designer"]||[]).push([[0],{1e3:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("main",{staticClass:"box-border h-full min-h-[calc(100vh-84px)] w-full pb-[84px]"},[s("C-Back-Nav",{attrs:{title:"設計師業績分析報表",routeTarget:{name:"Report"}}}),s("section",{staticClass:"relative z-0 mt-[52px] p-3"},[s("div",{staticClass:"flex gap-2"},[s("C-Select",{staticClass:"w-full",attrs:{list:e.year,placeholder:"年",itemText:"label",itemValue:"value"},model:{value:e.dateYYYY,callback:function(t){e.dateYYYY=t},expression:"dateYYYY"}}),s("C-Select",{staticClass:"w-full",attrs:{list:e.month,placeholder:"月",itemText:"label"},model:{value:e.dateMM,callback:function(t){e.dateMM=t},expression:"dateMM"}})],1),s("div",{staticClass:"text-left text-sm"},[s("div",{staticClass:"my-4 flex items-center justify-between"},[s("div",{staticClass:"flex items-baseline"},[s("p",{staticClass:"mr-1 text-[24px] font-bold"},[e._v(e._s(e.dateYYYY)+"年")]),s("p",[e._v(e._s(e.dateMM.value)+"月")])]),s("div",[s("p",[e._v("設計師 "+e._s("Alex"))])])]),e.isReviewResult?s("div",e._l(e.reviewResult,(function(t,a){return s("div",{key:"reviewItem"+a,staticClass:"mb-1 flex cursor-pointer items-center justify-between border-b border-solid border-primary/50 py-1 "},[s("div",{staticClass:"w-2/12 pl-1"},[e._v(e._s(+a+1>10?+a+1:"0"+(+a+1)))]),s("div",{staticClass:"w-7/12"},[e._v(e._s(t.label))]),s("div",{staticClass:"w-3/12 text-right"},[e._v("$"+e._s(t.price))])])})),0):e._e(),s("div",{staticClass:"mt-3 flex items-baseline justify-between text-second"},[s("p",[e._v("總應領薪資")]),s("p",{staticClass:"text-[28px]"},[e._v("$"+e._s(e.totalCount(e.reviewResult)))])])])])],1)},i=[],l=(s(1249),s(1539),s(1283)),r=s(5399),n={name:"priceList-index",description:"報表的設計師業績分析報表",metaInfo:{title:"名留",titleTemplate:"%s | 設計師業績分析報表"},data:function(){return{year:l.Z,month:r.Z,date:"",dateYYYY:"2022",dateMM:{label:"四月",value:4},reviewResult:[{label:"務虛業績金額:",price:"45000"},{label:"扣業績－付款手續費:",price:"3200"},{label:"扣業績－扣項:",price:"3200"},{label:"服務實業績金額:",price:"5000"},{label:"實業績－指定:",price:"45000"},{label:"實業績－不指定:",price:"35000"},{label:"扣業績－使用互助:",price:"3200"},{label:"服務實業績 扣使用互助:",price:"3200"}]}},methods:{doRoute:function(){this.$router.push({name:"Punch"})}},computed:{isReviewResult:function(){return this.reviewResult.length},totalCount:function(){return function(e){var t=function(e,t){return+e+ +t},s=e.map((function(e){return e.price}));return s.reduce(t)}},currentMM:function(){var e="";return e=this.date?this.$dayjs(this.date).format("MM"):this.$dayjs(new Date).format("MM"),e},currentYYYY:function(){var e="";return e=this.date?this.$dayjs(this.date).format("YYYY"):this.$dayjs(new Date).format("YYYY"),e}}},c=n,u=s(3736),o=(0,u.Z)(c,a,i,!1,null,null,null),d=o.exports}}]);
//# sourceMappingURL=0-legacy.8ab7c271.js.map