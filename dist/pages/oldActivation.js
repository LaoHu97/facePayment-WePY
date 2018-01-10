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
                      url: 'camera?cardCode=' + res.data.data.cardCode + '&cardId=' + res.data.data.cardId
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZEFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiT2xkQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsInRoYXQiLCJkZXRhaWwiLCJ2YWx1ZSIsIm5hbWUiLCJwaG9uZSIsImNhcmRpZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwicmVxdWVzdCIsInVybCIsImZpbmRPbGRNZW0iLCJoZWFkZXIiLCJtaWQiLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5JZCIsImFwcGlkIiwiY2FyZE51bSIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsInN0YXR1cyIsImlzTWVtIiwiaXNBY3RpdmUiLCJpc0ZhY2UiLCJvcGVuQ2FyZCIsImNhcmRMaXN0IiwiY2FyZElkIiwiY29kZSIsImNhcmRDb2RlIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJlcnJNc2ciLCJuYXZpZ2F0ZVRvIiwiYWRkQ2FyZCIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybSIsImZvcm1SZXNldCIsImV2ZW50cyIsInRpbWVzdGFtcCIsIm5vbmNlX3N0ciIsIm91dGVyX3N0ciIsInNpZ25hdHVyZSIsImNhcmRfaWQiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsIiRwYXJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsYTs7Ozs7Ozs7Ozs7Ozs7b01BQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxJLEdBQU87QUFDTEMsZUFBUztBQURKLEssUUFJUEMsUSxHQUFXLEUsUUFF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TUFSRztBQVNYQyxlQVRXLG1CQVNIQyxHQVRHLEVBU0U7QUFDWCxjQUFJekIsT0FBTztBQUNUZ0QsdUJBQVd2QixJQUFJekIsSUFBSixDQUFTZ0QsU0FEWDtBQUVUQyx1QkFBV3hCLElBQUl6QixJQUFKLENBQVNpRCxTQUZYO0FBR1RDLHVCQUFXekIsSUFBSXpCLElBQUosQ0FBU2tELFNBSFg7QUFJVEMsdUJBQVcxQixJQUFJekIsSUFBSixDQUFTbUQ7QUFKWCxXQUFYO0FBTUEseUJBQUtWLE9BQUwsQ0FBYTtBQUNYVCxzQkFBVSxDQUFDO0FBQ1RDLHNCQUFRUixJQUFJekIsSUFBSixDQUFTb0QsT0FEUjtBQUVUQyx1QkFBU0MsS0FBS0MsU0FBTCxDQUFldkQsSUFBZjtBQUZBLGFBQUQsQ0FEQztBQUtYd0IscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiw2QkFBS0MsV0FBTDtBQUNELGFBUFU7QUFRWFksa0JBQU0sY0FBU2IsR0FBVCxFQUFjO0FBQ2xCLDZCQUFLQyxXQUFMO0FBQ0Q7QUFWVSxXQUFiO0FBWUQsU0E1QlU7QUE2QlhZLFlBN0JXLGdCQTZCTmIsR0E3Qk0sRUE2QkQ7QUFDUlcsa0JBQVFDLEdBQVIsQ0FBWVosSUFBSXpCLElBQWhCO0FBQ0Q7QUEvQlUsT0FBYjtBQWlDRDs7OzZCQUVRLENBQUU7OztzQ0FDT3lCLEcsRUFBSztBQUNyQixhQUFPLEtBQUsrQixPQUFMLENBQWFDLGlCQUFiLENBQStCLFlBQS9CLENBQVA7QUFDRDs7OztFQWpLd0MsZUFBS0MsSTs7a0JBQTNCL0QsYSIsImZpbGUiOiJvbGRBY3RpdmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge1xyXG4gIHNlcnZpY2VcclxufSBmcm9tICcuLi9jb25maWcuanMnXHJcbi8vIOW8leWFpee7hOS7tlxyXG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbGRBY3RpdmF0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5p+l6K+i5Lya5ZGY5Y2hJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBjb21wdXRlZCA9IHt9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtU3VibWl0KGRhdGEpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgIGlmIChkYXRhLmRldGFpbC52YWx1ZS5uYW1lICYmIGRhdGEuZGV0YWlsLnZhbHVlLnBob25lICYmIGRhdGEuZGV0YWlsLnZhbHVlLmNhcmRpZCkge1xyXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogc2VydmljZS5maW5kT2xkTWVtLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG1pZDogd2VweS5nZXRTdG9yYWdlU3luYygnbWlkJyksXHJcbiAgICAgICAgICAgIG9wZW5JZDogd2VweS5nZXRTdG9yYWdlU3luYygnb3BlbklkJyksXHJcbiAgICAgICAgICAgIGFwcGlkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdhcHBpZCcpLFxyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLmRldGFpbC52YWx1ZS5uYW1lLFxyXG4gICAgICAgICAgICBwaG9uZTogZGF0YS5kZXRhaWwudmFsdWUucGhvbmUsXHJcbiAgICAgICAgICAgIGNhcmROdW06IGRhdGEuZGV0YWlsLnZhbHVlLmNhcmRpZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmlzTWVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0ZhY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmRhdGEuY2FyZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5oiQ5YqfJylcclxuICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICdjYW1lcmE/Y2FyZENvZGU9JyArIHJlcy5kYXRhLmRhdGEuY2FyZENvZGUgKyAnJmNhcmRJZD0nICsgcmVzLmRhdGEuZGF0YS5jYXJkSWRcclxuICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHdlcHkub3BlbkNhcmQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5kYXRhLmNhcmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlcy5kYXRhLmRhdGEuY2FyZENvZGVcclxuICAgICAgICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHmiJDlip8nKVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5aSx6LSl77yM5Y6f5Zug77yaJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmFkZENhcmQoKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5p+l6K+i5aSx6LSlJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmn6Xor6LlpLHotKUnLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfotYTmlpnloavlhpnkuI3lrozmlbQnLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZm9ybVJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZyZXNldOS6i+S7ticpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGFkZENhcmQoKSB7XHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICB9KVxyXG4gICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgdXJsOiBzZXJ2aWNlLmFkZENhcmQsXHJcbiAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSxcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIG1pZDogd2VweS5nZXRTdG9yYWdlU3luYygnbWlkJylcclxuICAgICAgfSxcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICB0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcclxuICAgICAgICAgIG5vbmNlX3N0cjogcmVzLmRhdGEubm9uY2Vfc3RyLFxyXG4gICAgICAgICAgb3V0ZXJfc3RyOiByZXMuZGF0YS5vdXRlcl9zdHIsXHJcbiAgICAgICAgICBzaWduYXR1cmU6IHJlcy5kYXRhLnNpZ25hdHVyZVxyXG4gICAgICAgIH1cclxuICAgICAgICB3ZXB5LmFkZENhcmQoe1xyXG4gICAgICAgICAgY2FyZExpc3Q6IFt7XHJcbiAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuY2FyZF9pZCxcclxuICAgICAgICAgICAgY2FyZEV4dDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBldmVudHMgPSB7fVxyXG4gIG9uU2hvdygpIHt9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kcGFyZW50Lm9uU2hhcmVBcHBNZXNzYWdlKCfmgqjmnInkuIDlvKDkvJrlkZjljaHlvoXpooblj5YnKVxyXG4gIH1cclxufVxuIl19