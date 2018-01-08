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

    var _temp, _this, _ret;

    _classCallCheck(this, OldActivation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = OldActivation.__proto__ || Object.getPrototypeOf(OldActivation)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '查询会员卡'
    }, _this.components = {
      foot: _foot2.default
    }, _this.data = {
      loading: false
    }, _this.computed = {}, _this.methods = {
      formSubmit: function formSubmit(data) {
        var that = this;
        if (data.detail.value.name && data.detail.value.phone && data.detail.value.cardid) {
          _wepy2.default.showLoading({
            title: '加载中',
            mask: true
          });
          _wepy2.default.request({
            url: _config.service.findOldMem,
            header: {
              'content-type': 'application/json'
            },
            data: {
              mid: _wepy2.default.getStorageSync('mid'),
              openId: _wepy2.default.getStorageSync('openId'),
              appid: _wepy2.default.getStorageSync('appid'),
              name: data.detail.value.name,
              phone: data.detail.value.phone,
              cardNum: data.detail.value.cardid
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
                      success: function success(res) {
                        console.log('打开会员卡成功');
                      },
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
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(OldActivation, [{
    key: 'addCard',
    value: function addCard() {
      _wepy2.default.showLoading({
        title: '加载中'
      });
      _wepy2.default.request({
        url: _config.service.addCard,
        header: {
          'content-type': 'application/json'
        },
        data: {
          mid: _wepy2.default.getStorageSync('mid')
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZEFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiT2xkQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsInRoYXQiLCJkZXRhaWwiLCJ2YWx1ZSIsIm5hbWUiLCJwaG9uZSIsImNhcmRpZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwicmVxdWVzdCIsInVybCIsImZpbmRPbGRNZW0iLCJoZWFkZXIiLCJtaWQiLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5JZCIsImFwcGlkIiwiY2FyZE51bSIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsInN0YXR1cyIsImlzTWVtIiwiaXNBY3RpdmUiLCJpc0ZhY2UiLCJvcGVuQ2FyZCIsImNhcmRMaXN0IiwiY2FyZElkIiwiY29kZSIsImNhcmRDb2RlIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJlcnJNc2ciLCJuYXZpZ2F0ZVRvIiwiYWRkQ2FyZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybSIsImZvcm1SZXNldCIsImV2ZW50cyIsInRpbWVzdGFtcCIsIm5vbmNlX3N0ciIsIm91dGVyX3N0ciIsInNpZ25hdHVyZSIsImNhcmRfaWQiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsIiRwYXJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxJLEdBQU87QUFDTEMsZUFBUztBQURKLEssUUFJUEMsUSxHQUFXLEUsUUFF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Qyx1QkFBV3hCLElBQUl6QixJQUFKLENBQVNpRCxTQUZYO0FBR1RDLHVCQUFXekIsSUFBSXpCLElBQUosQ0FBU2tELFNBSFg7QUFJVEMsdUJBQVcxQixJQUFJekIsSUFBSixDQUFTbUQ7QUFKWCxXQUFYO0FBTUEseUJBQUtWLE9BQUwsQ0FBYTtBQUNYVCxzQkFBVSxDQUFDO0FBQ1RDLHNCQUFRUixJQUFJekIsSUFBSixDQUFTb0QsT0FEUjtBQUVUQyx1QkFBU0MsS0FBS0MsU0FBTCxDQUFldkQsSUFBZjtBQUZBLGFBQUQsQ0FEQztBQUtYd0IscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiw2QkFBS0MsV0FBTDtBQUNELGFBUFU7QUFRWFksa0JBQU0sY0FBU2IsR0FBVCxFQUFjO0FBQ2xCLDZCQUFLQyxXQUFMO0FBQ0Q7QUFWVSxXQUFiO0FBWUQsU0E1QlU7QUE2QlhZLFlBN0JXLGdCQTZCTmIsR0E3Qk0sRUE2QkQ7QUFDUlcsa0JBQVFDLEdBQVIsQ0FBWVosSUFBSXpCLElBQWhCO0FBQ0Q7QUEvQlUsT0FBYjtBQWlDRDs7OzZCQUVRLENBQUU7OztzQ0FDT3lCLEcsRUFBSztBQUNyQixhQUFPLEtBQUsrQixPQUFMLENBQWFDLGlCQUFiLENBQStCLFlBQS9CLENBQVA7QUFDRDs7OztFQWpLd0MsZUFBS0MsSTs7a0JBQTNCL0QsYSIsImZpbGUiOiJvbGRBY3RpdmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge1xyXG4gIHNlcnZpY2VcclxufSBmcm9tICcuLi9jb25maWcuanMnXHJcbi8vIOW8leWFpee7hOS7tlxyXG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbGRBY3RpdmF0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5p+l6K+i5Lya5ZGY5Y2hJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBjb21wdXRlZCA9IHt9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtU3VibWl0KGRhdGEpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgIGlmIChkYXRhLmRldGFpbC52YWx1ZS5uYW1lICYmIGRhdGEuZGV0YWlsLnZhbHVlLnBob25lICYmIGRhdGEuZGV0YWlsLnZhbHVlLmNhcmRpZCkge1xyXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogc2VydmljZS5maW5kT2xkTWVtLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG1pZDogd2VweS5nZXRTdG9yYWdlU3luYygnbWlkJyksXHJcbiAgICAgICAgICAgIG9wZW5JZDogd2VweS5nZXRTdG9yYWdlU3luYygnb3BlbklkJyksXHJcbiAgICAgICAgICAgIGFwcGlkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdhcHBpZCcpLFxyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLmRldGFpbC52YWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICBwaG9uZTogZGF0YS5kZXRhaWwudmFsdWUucGhvbmUsXHJcbiAgICAgICAgICAgIGNhcmROdW06IGRhdGEuZGV0YWlsLnZhbHVlLmNhcmRpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmlzTWVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0ZhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmRhdGEuY2FyZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdjYW1lcmEnXHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcclxuICAgICAgICAgICAgICAgICAgICBjYXJkTGlzdDogW3tcclxuICAgICAgICAgICAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuZGF0YS5jYXJkSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhhdC5hZGRDYXJkKClcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+afpeivouWksei0pScsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICBjb250ZW50OiAn5p+l6K+i5aSx6LSlJyxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiAn6LWE5paZ5aGr5YaZ5LiN5a6M5pW0JyxcclxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvcm1SZXNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxyXG4gICAgfVxyXG4gIH1cclxuICBhZGRDYXJkKCkge1xyXG4gICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xyXG4gICAgfSlcclxuICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgIHVybDogc2VydmljZS5hZGRDYXJkLFxyXG4gICAgICBoZWFkZXI6IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBtaWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ21pZCcpXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgdGltZXN0YW1wOiByZXMuZGF0YS50aW1lc3RhbXAsXHJcbiAgICAgICAgICBub25jZV9zdHI6IHJlcy5kYXRhLm5vbmNlX3N0cixcclxuICAgICAgICAgIG91dGVyX3N0cjogcmVzLmRhdGEub3V0ZXJfc3RyLFxyXG4gICAgICAgICAgc2lnbmF0dXJlOiByZXMuZGF0YS5zaWduYXR1cmVcclxuICAgICAgICB9XHJcbiAgICAgICAgd2VweS5hZGRDYXJkKHtcclxuICAgICAgICAgIGNhcmRMaXN0OiBbe1xyXG4gICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmNhcmRfaWQsXHJcbiAgICAgICAgICAgIGNhcmRFeHQ6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgICB9XSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgZXZlbnRzID0ge31cclxuICBvblNob3coKSB7fVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcclxuICB9XHJcbn1cbiJdfQ==