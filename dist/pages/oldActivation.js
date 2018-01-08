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
              name: data.detail.value.name,
              phone: data.detail.value.phone,
              cardid: data.detail.value.cardid,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZEFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiT2xkQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsInRoYXQiLCJkZXRhaWwiLCJ2YWx1ZSIsIm5hbWUiLCJwaG9uZSIsImNhcmRpZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwicmVxdWVzdCIsInVybCIsImZpbmRPbGRNZW0iLCJoZWFkZXIiLCJjb2RlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaWRjYXJkIiwiZW5jcnlwdF9jb2RlIiwiY2FyZF9pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJoaWRlTG9hZGluZyIsInN0YXR1cyIsImlzTWVtIiwiaXNBY3RpdmUiLCJpc0ZhY2UiLCJvcGVuQ2FyZCIsImNhcmRMaXN0IiwiY2FyZElkIiwiY2FyZENvZGUiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsImVyck1zZyIsIm5hdmlnYXRlVG8iLCJhZGRDYXJkIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwiZm9ybVJlc2V0IiwiZXZlbnRzIiwibWlkIiwiZ2V0U3RvcmFnZVN5bmMiLCJ0aW1lc3RhbXAiLCJub25jZV9zdHIiLCJvdXRlcl9zdHIiLCJzaWduYXR1cmUiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxRQUlQ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QVNrRCxTQURYO0FBRVRDLHVCQUFXekIsSUFBSTFCLElBQUosQ0FBU21ELFNBRlg7QUFHVEMsdUJBQVcxQixJQUFJMUIsSUFBSixDQUFTb0QsU0FIWDtBQUlUQyx1QkFBVzNCLElBQUkxQixJQUFKLENBQVNxRDtBQUpYLFdBQVg7QUFNQSx5QkFBS1osT0FBTCxDQUFhO0FBQ1hSLHNCQUFVLENBQUM7QUFDVEMsc0JBQVFSLElBQUkxQixJQUFKLENBQVN1QixPQURSO0FBRVQrQix1QkFBU0MsS0FBS0MsU0FBTCxDQUFleEQsSUFBZjtBQUZBLGFBQUQsQ0FEQztBQUtYeUIscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiw2QkFBS0MsV0FBTDtBQUNELGFBUFU7QUFRWFcsa0JBQU0sY0FBU1osR0FBVCxFQUFjO0FBQ2xCLDZCQUFLQyxXQUFMO0FBQ0Q7QUFWVSxXQUFiO0FBWUQsU0E1QlU7QUE2QlhXLFlBN0JXLGdCQTZCTlosR0E3Qk0sRUE2QkQ7QUFDUlUsa0JBQVFDLEdBQVIsQ0FBWVgsSUFBSTFCLElBQWhCO0FBQ0Q7QUEvQlUsT0FBYjtBQWlDRDs7OzZCQUVRLENBQUU7OztzQ0FDTzBCLEcsRUFBSztBQUNyQixhQUFPLEtBQUtQLE9BQUwsQ0FBYXNDLGlCQUFiLENBQStCLFlBQS9CLENBQVA7QUFDRDs7OztFQWhLd0MsZUFBS0MsSTs7a0JBQTNCL0QsYSIsImZpbGUiOiJvbGRBY3RpdmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge1xyXG4gIHNlcnZpY2VcclxufSBmcm9tICcuLi9jb25maWcuanMnXHJcbi8vIOW8leWFpee7hOS7tlxyXG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPbGRBY3RpdmF0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5p+l6K+i5Lya5ZGY5Y2hJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBjb21wdXRlZCA9IHt9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtU3VibWl0KGRhdGEpIHtcclxuICAgICAgbGV0IHRoYXQgPSB0aGlzXHJcbiAgICAgIGlmIChkYXRhLmRldGFpbC52YWx1ZS5uYW1lICYmIGRhdGEuZGV0YWlsLnZhbHVlLnBob25lICYmIGRhdGEuZGV0YWlsLnZhbHVlLmNhcmRpZCkge1xyXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogc2VydmljZS5maW5kT2xkTWVtLFxyXG4gICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IGRhdGEuZGV0YWlsLnZhbHVlLm5hbWUsXHJcbiAgICAgICAgICAgIHBob25lOiBkYXRhLmRldGFpbC52YWx1ZS5waG9uZSxcclxuICAgICAgICAgICAgY2FyZGlkOiBkYXRhLmRldGFpbC52YWx1ZS5jYXJkaWQsXHJcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpZGNhcmQuZW5jcnlwdF9jb2RlLFxyXG4gICAgICAgICAgICBjYXJkX2lkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaWRjYXJkLmNhcmRfaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc01lbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEuaXNGYWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2VweS5vcGVuQ2FyZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXJkTGlzdDogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5kYXRhLmNhcmRJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmRhdGEuZGF0YS5jYXJkQ29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHlpLHotKXvvIzljp/lm6DvvJonICsgcmVzLmVyck1zZylcclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnY2FtZXJhJ1xyXG4gICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgd2VweS5vcGVuQ2FyZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FyZExpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmRhdGEuY2FyZElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmRhdGEuZGF0YS5jYXJkQ29kZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeaIkOWKnycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHlpLHotKXvvIzljp/lm6DvvJonICsgcmVzLmVyck1zZylcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoYXQuYWRkQ2FyZCgpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmn6Xor6LlpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+afpeivouWksei0pScsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+i1hOaWmeWhq+WGmeS4jeWujOaVtCcsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmb3JtUmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcclxuICAgIH1cclxuICB9XHJcbiAgYWRkQ2FyZCgpIHtcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+WKoOi9veS4rSdcclxuICAgIH0pXHJcbiAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICB1cmw6IHNlcnZpY2UuYWRkQ2FyZCxcclxuICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9LFxyXG4gICAgICBkYXRhOiB7XHJcbiAgICAgICAgbWlkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdtaWQnKVxyXG4gICAgICB9LFxyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgIHRpbWVzdGFtcDogcmVzLmRhdGEudGltZXN0YW1wLFxyXG4gICAgICAgICAgbm9uY2Vfc3RyOiByZXMuZGF0YS5ub25jZV9zdHIsXHJcbiAgICAgICAgICBvdXRlcl9zdHI6IHJlcy5kYXRhLm91dGVyX3N0cixcclxuICAgICAgICAgIHNpZ25hdHVyZTogcmVzLmRhdGEuc2lnbmF0dXJlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHdlcHkuYWRkQ2FyZCh7XHJcbiAgICAgICAgICBjYXJkTGlzdDogW3tcclxuICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5jYXJkX2lkLFxyXG4gICAgICAgICAgICBjYXJkRXh0OiBKU09OLnN0cmluZ2lmeShkYXRhKVxyXG4gICAgICAgICAgfV0sXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgb25TaG93KCkge31cclxuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuICAgIHJldHVybiB0aGlzLiRwYXJlbnQub25TaGFyZUFwcE1lc3NhZ2UoJ+aCqOacieS4gOW8oOS8muWRmOWNoeW+hemihuWPlicpXHJcbiAgfVxyXG59XG4iXX0=