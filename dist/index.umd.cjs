(function(s,n){typeof exports=="object"&&typeof module<"u"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(s=typeof globalThis<"u"?globalThis:s||self,n(s["vuejs-simple-sticker-system"]={}))})(this,function(s){"use strict";const n={props:{src:{type:String,required:!0},gridX:{type:Number,required:!0},gridY:{type:Number,required:!0},gridWidth:{type:Number,required:!0},gridHeight:{type:Number,required:!0},scale:{type:Number,default:1},position:{type:String,default:"left",validator:t=>["left","right"].includes(t)}},computed:{stickerStyles(){return{"--src":`url(${this.src})`,"--offsetX":`-${this.gridX*this.gridWidth*this.scale}px`,"--offsetY":`-${this.gridY*this.gridHeight*this.scale}px`,"--gridWidth":`${this.gridWidth*this.scale}px`,"--gridHeight":`${this.gridHeight*this.scale}px`,"justify-content":this.position}}}};function d(t,e,r,i,p,o,y,_){var c=typeof t=="function"?t.options:t;return e&&(c.render=e,c.staticRenderFns=r,c._compiled=!0),o&&(c._scopeId="data-v-"+o),{exports:t,options:c}}var l=function(){var e=this,r=e._self._c;return r("div",{staticClass:"sticker-component",style:e.stickerStyles,on:{click:function(i){return e.$emit("click")}}},[r("div",{staticClass:"css-sprite"})])},a=[],u=d(n,l,a,!1,null,"15592500");const f={components:{Sticker:u.exports},props:{stickerSize:{type:String,default:"medium",validator:t=>["small","medium","lerge"].includes(t)},stickerConfig:{type:Object,required:!0},displayStickers:{type:Array,default:[]}},data(){return{randomId:Math.random().toString(36).slice(-8),showStickerTable:!1}},computed:{actualStickerSize(){if(window.innerWidth<window.innerHeight){if(this.stickerSize==="lerge")return window.innerWidth/2;if(this.stickerSize==="medium")return window.innerWidth/3;if(this.stickerSize==="small")return window.innerWidth/4}else{if(this.stickerSize==="lerge")return 256;if(this.stickerSize==="medium")return 128;if(this.stickerSize==="small")return 64}return 128},hasOwnSticker(){return this.displayStickers.some(t=>t.senderId===this.randomId)},componentStyle(){return{"--actual-sticker-size":`${this.actualStickerSize}px`}},stickerButtonStyle(){return{bottom:this.showStickerTable?"calc(var(--actual-sticker-size) * 2.5)":"0px"}}},methods:{onClick(t){this.showStickerTable=!1,this.$emit("selectSticker",{stickerId:t,senderId:this.randomId})}}};var h=function(){var e=this,r=e._self._c;return r("div",{staticClass:"sticker-system-component",style:e.componentStyle},[e._l(e.displayStickers,function(i){return r("Sticker",{key:i.clientMutationId,attrs:{src:e.stickerConfig.filePath,gridX:e.stickerConfig.stickers[i.stickerId].gridX,gridY:e.stickerConfig.stickers[i.stickerId].gridY,gridWidth:e.stickerConfig.width,gridHeight:e.stickerConfig.height,scale:e.actualStickerSize/e.stickerConfig.width,position:e.randomId===i.senderId?"right":"left"}})}),r("button",{staticClass:"sticker-button",style:e.stickerButtonStyle,attrs:{type:"button",disabled:e.hasOwnSticker},on:{click:function(i){e.showStickerTable=!e.showStickerTable}}},[e._v(" "+e._s(e.showStickerTable?"閉じる":"スタンプ")+" ")]),e.showStickerTable?r("div",{staticClass:"sticker-table"},e._l(e.stickerConfig.stickers,function(i){return r("Sticker",{key:i.stickerId,attrs:{src:e.stickerConfig.filePath,gridX:i.gridX,gridY:i.gridY,gridWidth:e.stickerConfig.width,gridHeight:e.stickerConfig.height,scale:e.actualStickerSize/e.stickerConfig.width},on:{click:function(p){return e.onClick(i.stickerId)}}})}),1):e._e()],2)},k=[],g=d(f,h,k,!1,null,"1e123c78");const m=g.exports;s.StickerSystem=m,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});