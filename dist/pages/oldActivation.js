"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),_wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),_config=require("./../config.js"),_foot=require("./../components/foot.js"),_foot2=_interopRequireDefault(_foot),OldActivation=function(e){function t(){var e,o,n,a;_classCallCheck(this,t);for(var r=arguments.length,i=Array(r),c=0;c<r;c++)i[c]=arguments[c];return o=n=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),n.config={navigationBarTitleText:"查询会员卡"},n.components={foot:_foot2.default},n.data={loading:!1},n.computed={},n.methods={formSubmit:function(e){e.detail.value.name&&e.detail.value.phone&&e.detail.value.cardid?(_wepy2.default.showLoading({title:"加载中",mask:!0}),_wepy2.default.request({url:_config.service.activeCard,data:{code:this.$parent.globalData.useridcard.encrypt_code,card_id:this.$parent.globalData.useridcard.card_id},method:"POST",success:function(e){console.log(e),_wepy2.default.hideLoading(),200===e.data.status?(_wepy2.default.showToast({title:"激活成功",icon:"success",duration:4e3}),setTimeout(function(){_wepy2.default.navigateTo({url:"camera"})},4e3)):_wepy2.default.showModal({title:"提示",content:"激活失败",showCancel:!1,success:function(e){e.confirm&&console.log("用户点击确定")}})},fail:function(e){_wepy2.default.hideLoading(),_wepy2.default.showModal({title:"提示",content:"激活失败",showCancel:!1,success:function(e){e.confirm&&console.log("用户点击确定")}})}})):_wepy2.default.showModal({title:"提示",content:"资料填写不完整",showCancel:!1,success:function(e){e.confirm&&console.log("用户点击确定")}})},formReset:function(){console.log("form发生了reset事件")}},n.events={},a=o,_possibleConstructorReturn(n,a)}return _inherits(t,e),_createClass(t,[{key:"onShow",value:function(){}},{key:"onShareAppMessage",value:function(e){return this.$parent.onShareAppMessage("您有一张会员卡待领取")}}]),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(OldActivation,"pages/oldActivation"));