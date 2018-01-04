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


var OldActivation = function (_wepy$page) {
  _inherits(OldActivation, _wepy$page);

  function OldActivation() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, OldActivation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = OldActivation.__proto__ || Object.getPrototypeOf(OldActivation)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '查询会员卡'
    }, _this2.components = {
      foot: _foot2.default
    }, _this2.data = {
      loading: false
    }, _this2.computed = {}, _this2.methods = {
      formSubmit: function formSubmit(data) {
        var that = this;
        if (data.detail.value.name && data.detail.value.phone && data.detail.value.cardid) {
          _wepy2.default.showLoading({
            title: '加载中',
            mask: true
          });
          _wepy2.default.request({
            url: _config.service.findOldMem,
            data: {
              code: this.$parent.globalData.useridcard.encrypt_code,
              card_id: this.$parent.globalData.useridcard.card_id
            },
            method: 'POST',
            success: function success(res) {
              console.log(res);
              _wepy2.default.hideLoading();
              if (res.data.status === 200) {
                if (res.data.data.isMem) {
                  if (res.data.data.isActive) {
                    _wepy2.default.navigateTo({
                      url: 'camera'
                    });
                  } else {
                    _wepy2.default.openCard({
                      cardList: [{
                        cardId: res.data.data.cardId,
                        code: res.data.data.cardCode
                      }],
                      success: function success(res) {},
                      fail: function fail(res) {
                        console.log('打开会员卡失败，原因：' + res.errMsg);
                      }
                    });
                  }
                } else {
                  that.addCard();
                }
              } else {
                _wepy2.default.showModal({
                  title: '提示',
                  content: '查询失败',
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
                content: '查询失败',
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
    }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(OldActivation, [{
    key: 'addCard',
    value: function addCard() {
      var _this = this;
      _wepy2.default.showLoading({
        title: '加载中'
      });
      _wepy2.default.request({
        url: _config.service.addCard,
        data: {
          mid: '66'
        },
        method: 'POST',
        success: function success(res) {
          var data = {
            timestamp: res.data.timestamp,
            nonce_str: res.data.nonce_str,
            outer_str: res.data.outer_str,
            signature: res.data.signature
          };
          _wepy2.default.addCard({
            cardList: [{
              cardId: res.data.card_id,
              cardExt: JSON.stringify(data)
            }],
            success: function success(res) {
              _wepy2.default.hideLoading();
              _this.openCard(res);
            },
            fail: function fail(res) {
              _wepy2.default.hideLoading();
            }
          });
        },
        fail: function fail(res) {
          console.log(res.data);
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return OldActivation;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(OldActivation , 'pages/oldActivation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZEFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiT2xkQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsInRoYXQiLCJkZXRhaWwiLCJ2YWx1ZSIsIm5hbWUiLCJwaG9uZSIsImNhcmRpZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwicmVxdWVzdCIsInVybCIsImZpbmRPbGRNZW0iLCJjb2RlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaWRjYXJkIiwiZW5jcnlwdF9jb2RlIiwiY2FyZF9pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaGlkZUxvYWRpbmciLCJzdGF0dXMiLCJpc01lbSIsImlzQWN0aXZlIiwibmF2aWdhdGVUbyIsIm9wZW5DYXJkIiwiY2FyZExpc3QiLCJjYXJkSWQiLCJjYXJkQ29kZSIsImZhaWwiLCJlcnJNc2ciLCJhZGRDYXJkIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwiZm9ybVJlc2V0IiwiZXZlbnRzIiwiX3RoaXMiLCJtaWQiLCJ0aW1lc3RhbXAiLCJub25jZV9zdHIiLCJvdXRlcl9zdHIiLCJzaWduYXR1cmUiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxhOzs7Ozs7Ozs7Ozs7Ozt1TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBSWJDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxTQUlQQyxRLEdBQVcsRSxTQUVYQyxPLEdBQVU7QUFD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NUl3QyxlQUFLQyxJOztrQkFBM0I3RCxhIiwiZmlsZSI6Im9sZEFjdGl2YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7XHJcbiAgc2VydmljZVxyXG59IGZyb20gJy4uL2NvbmZpZy5qcydcclxuLy8g5byV5YWl57uE5Lu2XHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9sZEFjdGl2YXRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmn6Xor6LkvJrlkZjljaEnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbXB1dGVkID0ge31cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGZvcm1TdWJtaXQoZGF0YSkge1xyXG4gICAgICBsZXQgdGhhdCA9IHRoaXNcclxuICAgICAgaWYgKGRhdGEuZGV0YWlsLnZhbHVlLm5hbWUgJiYgZGF0YS5kZXRhaWwudmFsdWUucGhvbmUgJiYgZGF0YS5kZXRhaWwudmFsdWUuY2FyZGlkKSB7XHJcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBzZXJ2aWNlLmZpbmRPbGRNZW0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpZGNhcmQuZW5jcnlwdF9jb2RlLFxyXG4gICAgICAgICAgICBjYXJkX2lkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaWRjYXJkLmNhcmRfaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmlzTWVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ2NhbWVyYSdcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdlcHkub3BlbkNhcmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5kYXRhLmNhcmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlcy5kYXRhLmRhdGEuY2FyZENvZGVcclxuICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHlpLHotKXvvIzljp/lm6DvvJonICsgcmVzLmVyck1zZylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuYWRkQ2FyZCgpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmn6Xor6LlpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+afpeivouWksei0pScsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+i1hOaWmeWhq+WGmeS4jeWujOaVtCcsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmb3JtUmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcclxuICAgIH1cclxuICB9XHJcbiAgYWRkQ2FyZCgpIHtcclxuICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgIH0pXHJcbiAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IHNlcnZpY2UuYWRkQ2FyZCxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG1pZDogJzY2J1xyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgIHRpbWVzdGFtcDogcmVzLmRhdGEudGltZXN0YW1wLFxyXG4gICAgICAgICAgbm9uY2Vfc3RyOiByZXMuZGF0YS5ub25jZV9zdHIsXHJcbiAgICAgICAgICBvdXRlcl9zdHI6IHJlcy5kYXRhLm91dGVyX3N0cixcclxuICAgICAgICAgIHNpZ25hdHVyZTogcmVzLmRhdGEuc2lnbmF0dXJlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdlcHkuYWRkQ2FyZCh7XHJcbiAgICAgICAgICBjYXJkTGlzdDogW3tcclxuICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5jYXJkX2lkLFxyXG4gICAgICAgICAgICBjYXJkRXh0OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIF90aGlzLm9wZW5DYXJkKHJlcylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgZXZlbnRzID0ge31cclxuICBvblNob3coKSB7fVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcclxuICB9XHJcbn1cbiJdfQ==