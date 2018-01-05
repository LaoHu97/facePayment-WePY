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
              _wepy2.default.hideLoading();
              if (res.data.status === 200) {
                if (res.data.data.isMem) {
                  if (res.data.data.isActive) {
                    if (res.data.data.isFace) {
                      _wepy2.default.openCard({
                        cardList: [{
                          cardId: res.data.data.cardId,
                          code: res.data.data.cardCode
                        }],
                        success: function success(res) {
                          console.log('打开会员卡成功');
                        },
                        fail: function fail(res) {
                          console.log('打开会员卡失败，原因：' + res.errMsg);
                        }
                      });
                    }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZEFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiT2xkQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsInRoYXQiLCJkZXRhaWwiLCJ2YWx1ZSIsIm5hbWUiLCJwaG9uZSIsImNhcmRpZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwicmVxdWVzdCIsInVybCIsImZpbmRPbGRNZW0iLCJjb2RlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaWRjYXJkIiwiZW5jcnlwdF9jb2RlIiwiY2FyZF9pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsInN0YXR1cyIsImlzTWVtIiwiaXNBY3RpdmUiLCJpc0ZhY2UiLCJvcGVuQ2FyZCIsImNhcmRMaXN0IiwiY2FyZElkIiwiY2FyZENvZGUiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImVyck1zZyIsIm5hdmlnYXRlVG8iLCJhZGRDYXJkIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwiZm9ybVJlc2V0IiwiZXZlbnRzIiwiX3RoaXMiLCJtaWQiLCJ0aW1lc3RhbXAiLCJub25jZV9zdHIiLCJvdXRlcl9zdHIiLCJzaWduYXR1cmUiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxhOzs7Ozs7Ozs7Ozs7Ozt1TUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBSWJDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxTQUlQQyxRLEdBQVcsRSxTQUVYQyxP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d0IscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiw2QkFBS0MsV0FBTDtBQUNBcUIsb0JBQU1oQixRQUFOLENBQWVOLEdBQWY7QUFDRCxhQVJVO0FBU1hZLGtCQUFNLGNBQVNaLEdBQVQsRUFBYztBQUNsQiw2QkFBS0MsV0FBTDtBQUNEO0FBWFUsV0FBYjtBQWFELFNBMUJVO0FBMkJYVyxZQTNCVyxnQkEyQk5aLEdBM0JNLEVBMkJEO0FBQ1JVLGtCQUFRQyxHQUFSLENBQVlYLElBQUl6QixJQUFoQjtBQUNEO0FBN0JVLE9BQWI7QUErQkQ7Ozs2QkFFUSxDQUFFOzs7c0NBQ095QixHLEVBQUs7QUFDckIsYUFBTyxLQUFLUCxPQUFMLENBQWFzQyxpQkFBYixDQUErQixZQUEvQixDQUFQO0FBQ0Q7Ozs7RUF6SndDLGVBQUtDLEk7O2tCQUEzQjlELGEiLCJmaWxlIjoib2xkQWN0aXZhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHtcclxuICBzZXJ2aWNlXHJcbn0gZnJvbSAnLi4vY29uZmlnLmpzJ1xyXG4vLyDlvJXlhaXnu4Tku7ZcclxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT2xkQWN0aXZhdGlvbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+afpeivouS8muWRmOWNoSdcclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIGZvb3Q6IEZvb3RcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWQgPSB7fVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgZm9ybVN1Ym1pdChkYXRhKSB7XHJcbiAgICAgIGxldCB0aGF0ID0gdGhpc1xyXG4gICAgICBpZiAoZGF0YS5kZXRhaWwudmFsdWUubmFtZSAmJiBkYXRhLmRldGFpbC52YWx1ZS5waG9uZSAmJiBkYXRhLmRldGFpbC52YWx1ZS5jYXJkaWQpIHtcclxuICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHNlcnZpY2UuZmluZE9sZE1lbSxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY29kZTogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmlkY2FyZC5lbmNyeXB0X2NvZGUsXHJcbiAgICAgICAgICAgIGNhcmRfaWQ6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpZGNhcmQuY2FyZF9pZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmlzTWVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0ZhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmRhdGEuY2FyZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdjYW1lcmEnXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkTGlzdDogW3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuZGF0YS5jYXJkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5aSx6LSl77yM5Y6f5Zug77yaJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmFkZENhcmQoKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5p+l6K+i5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmn6Xor6LlpLHotKUnLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfotYTmlpnloavlhpnkuI3lrozmlbQnLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZm9ybVJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZyZXNldOS6i+S7ticpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZENhcmQoKSB7XHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KVxyXG4gICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBzZXJ2aWNlLmFkZENhcmQsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBtaWQ6ICc2NidcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICB0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcclxuICAgICAgICAgIG5vbmNlX3N0cjogcmVzLmRhdGEubm9uY2Vfc3RyLFxyXG4gICAgICAgICAgb3V0ZXJfc3RyOiByZXMuZGF0YS5vdXRlcl9zdHIsXHJcbiAgICAgICAgICBzaWduYXR1cmU6IHJlcy5kYXRhLnNpZ25hdHVyZVxyXG4gICAgICAgIH1cclxuICAgICAgICB3ZXB5LmFkZENhcmQoe1xyXG4gICAgICAgICAgY2FyZExpc3Q6IFt7XHJcbiAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuY2FyZF9pZCxcclxuICAgICAgICAgICAgY2FyZEV4dDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICBfdGhpcy5vcGVuQ2FyZChyZXMpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgb25TaG93KCkge31cclxuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuICAgIHJldHVybiB0aGlzLiRwYXJlbnQub25TaGFyZUFwcE1lc3NhZ2UoJ+aCqOacieS4gOW8oOS8muWRmOWNoeW+hemihuWPlicpXHJcbiAgfVxyXG59XG4iXX0=