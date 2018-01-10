'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

var _foot = require('./../components/foot.js');

var _foot2 = _interopRequireDefault(_foot);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var Activation = function (_wepy$page) {
  _inherits(Activation, _wepy$page);

  function Activation() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Activation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Activation.__proto__ || Object.getPrototypeOf(Activation)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '激活会员卡'
    }, _this.components = {
      foot: _foot2.default
    }, _this.data = {
      loading: false,
      date: '1994-01-15'
    }, _this.computed = {}, _this.methods = {
      bindDateChange: function bindDateChange(e) {
        this.date = e.detail.value;
        this.$apply();
      },
      formSubmit: function formSubmit(data) {
        if (data.detail.value.name && data.detail.value.phone && data.detail.value.idcard) {
          _wepy2.default.showLoading({
            title: '加载中'
          });
          _wepy2.default.request({
            url: _config.service.activeCard,
            header: {
              'content-type': 'application/json'
            },
            data: {
              name: data.detail.value.name,
              phone: data.detail.value.phone,
              idcard: data.detail.value.idcard,
              date: this.date,
              mailbox: data.detail.value.mailbox,
              code: this.$parent.globalData.useridcard.encrypt_code,
              card_id: this.$parent.globalData.useridcard.card_id
            },
            method: 'POST',
            success: function success(res) {
              _wepy2.default.hideLoading();
              if (res.data.status === 200) {
                _wepy2.default.showToast({
                  title: '激活成功',
                  icon: 'success',
                  duration: 4000
                });
                setTimeout(function () {
                  _wepy2.default.navigateTo({
                    url: 'camera?cardCode=' + res.data.data.cardCode + '&cardId=' + res.data.data.cardId
                  });
                }, 4000);
              } else {
                _wepy2.default.showModal({
                  title: '提示',
                  content: '激活失败',
                  showCancel: false,
                  success: function success(res) {
                    if (res.confirm) {
                      console.log('用户点击确定');
                    }
                  }
                });
              }
            },
            fail: function fail(res) {
              _wepy2.default.hideLoading();
              _wepy2.default.showModal({
                title: '提示',
                content: '激活失败',
                showCancel: false,
                success: function success(res) {
                  if (res.confirm) {
                    console.log('用户点击确定');
                  }
                }
              });
            }
          });
        } else {
          _wepy2.default.showModal({
            title: '提示',
            content: '资料填写不完整',
            showCancel: false,
            success: function success(res) {
              if (res.confirm) {
                console.log('用户点击确定');
              }
            }
          });
        }
      },

      formReset: function formReset() {
        console.log('form发生了reset事件');
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Activation, [{
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return Activation;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Activation , 'pages/activation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiZGF0ZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImJpbmREYXRlQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5IiwiZm9ybVN1Ym1pdCIsIm5hbWUiLCJwaG9uZSIsImlkY2FyZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJyZXF1ZXN0IiwidXJsIiwiYWN0aXZlQ2FyZCIsImhlYWRlciIsIm1haWxib3giLCJjb2RlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaWRjYXJkIiwiZW5jcnlwdF9jb2RlIiwiY2FyZF9pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsInN0YXR1cyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwiY2FyZENvZGUiLCJjYXJkSWQiLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm0iLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImZvcm1SZXNldCIsImV2ZW50cyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLEksR0FBTztBQUNMQyxlQUFTLEtBREo7QUFFTEMsWUFBTTtBQUZELEssUUFLUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLHNCQUFnQix3QkFBU0MsQ0FBVCxFQUFZO0FBQzFCLGFBQUtKLElBQUwsR0FBWUksRUFBRUMs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QUFDRDtBQWhGTyxLLFFBa0ZWRyxNLEdBQVMsRTs7Ozs7NkJBQ0EsQ0FBRTs7O3NDQUNPbEIsRyxFQUFLO0FBQ3JCLGFBQU8sS0FBS1AsT0FBTCxDQUFhMEIsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7O0VBckdxQyxlQUFLQyxJOztrQkFBeEJ0RCxVIiwiZmlsZSI6ImFjdGl2YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7XHJcbiAgc2VydmljZVxyXG59IGZyb20gJy4uL2NvbmZpZy5qcydcclxuLy8g5byV5YWl57uE5Lu2XHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2YXRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmv4DmtLvkvJrlkZjljaEnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRlOiAnMTk5NC0wMS0xNSdcclxuICB9XHJcblxyXG4gIGNvbXB1dGVkID0ge31cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGJpbmREYXRlQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBmb3JtU3VibWl0KGRhdGEpIHtcclxuICAgICAgaWYgKGRhdGEuZGV0YWlsLnZhbHVlLm5hbWUgJiYgZGF0YS5kZXRhaWwudmFsdWUucGhvbmUgJiYgZGF0YS5kZXRhaWwudmFsdWUuaWRjYXJkKSB7XHJcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHNlcnZpY2UuYWN0aXZlQ2FyZCxcclxuICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLmRldGFpbC52YWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICBwaG9uZTogZGF0YS5kZXRhaWwudmFsdWUucGhvbmUsXHJcbiAgICAgICAgICAgIGlkY2FyZDogZGF0YS5kZXRhaWwudmFsdWUuaWRjYXJkLFxyXG4gICAgICAgICAgICBkYXRlOiB0aGlzLmRhdGUsXHJcbiAgICAgICAgICAgIG1haWxib3g6IGRhdGEuZGV0YWlsLnZhbHVlLm1haWxib3gsXHJcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpZGNhcmQuZW5jcnlwdF9jb2RlLFxyXG4gICAgICAgICAgICBjYXJkX2lkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaWRjYXJkLmNhcmRfaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a/gOa0u+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwMFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogJ2NhbWVyYT9jYXJkQ29kZT0nICsgcmVzLmRhdGEuZGF0YS5jYXJkQ29kZSArICcmY2FyZElkPScgKyByZXMuZGF0YS5kYXRhLmNhcmRJZFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9LCA0MDAwKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmv4DmtLvlpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+a/gOa0u+Wksei0pScsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+i1hOaWmeWhq+WGmeS4jeWujOaVtCcsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmb3JtUmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcclxuICAgIH1cclxuICB9XHJcbiAgZXZlbnRzID0ge31cclxuICBvblNob3coKSB7fVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcclxuICB9XHJcbn1cbiJdfQ==