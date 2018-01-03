'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
            title: '加载中',
            mask: true
          });
          _wepy2.default.request({
            url: _config.service.activeCard,
            data: {
              code: this.$parent.globalData.useridcard.encrypt_code,
              card_id: this.$parent.globalData.useridcard.card_id
            },
            method: 'POST',
            success: function success(res) {
              console.log(res);
              _wepy2.default.hideLoading();
              if (res.data.status === 200) {
                _wepy2.default.showToast({
                  title: '激活成功',
                  icon: 'success',
                  duration: 4000
                });
                setTimeout(function () {
                  _wepy2.default.navigateTo({
                    url: 'camera'
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

exports.default = Activation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4aXN0aW5nTWVtYmVycy5qcyJdLCJuYW1lcyI6WyJBY3RpdmF0aW9uIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsImxvYWRpbmciLCJkYXRlIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiYmluZERhdGVDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJmb3JtU3VibWl0IiwibmFtZSIsInBob25lIiwiaWRjYXJkIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJyZXF1ZXN0IiwidXJsIiwiYWN0aXZlQ2FyZCIsImNvZGUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpZGNhcmQiLCJlbmNyeXB0X2NvZGUiLCJjYXJkX2lkIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoaWRlTG9hZGluZyIsInN0YXR1cyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwiZmFpbCIsImZvcm1SZXNldCIsImV2ZW50cyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLEksR0FBTztBQUNMQyxlQUFTLEtBREo7QUFFTEMsWUFBTTtBQUZELEssUUFLUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLHNCQUFnQix3QkFBU0MsQ0FBVCxFQUFZO0FBQzFCLGFBQUtKLElBQUwsR0FBWUksRUFBRUMsTUFBRixDQUFTQyxLQUFyQjtBQUNBLGFBQUtDLE1BQUw7QUFDRCxPQUpPO0FBS1JDLGdCQUxRLHNCQUtHVixJQUxILEVBS1M7QUFDZixZQUFJQSxLQUFLTyxNQUFMLENBQVlDLEtBQVosQ0FBa0JHLElBQWxCLElBQTBCWCxLQUFLTyxNQUFMLENBQVlDLEtBQVosQ0FBa0JJLEtBQTVDLElBQXFEWixLQUFLTyxNQUFMLENBQVlDLEtBQVosQ0FBa0JLLE1BQTNFLEVBQW1GO0FBQ2pGLHlCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLG1CQUFPLEtBRFE7QUFFZkMsa0JBQU07QUFGUyxXQUFqQjtBQUlBLHlCQUFLQyxPQUFMLENBQWE7QUFDWEMsaUJBQUssZ0JBQVFDLFVBREY7QUFFWG5CLGtCQUFNO0FBQ0pvQixvQkFBTSxLQUFLQyxPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFVBQXhCLENBQW1DQyxZQURyQztBQUVKQyx1QkFBUyxLQUFLSixPQUFMLENBQWFDLFVBQWIsQ0FBd0JDLFVBQXhCLENBQW1DRTtBQUZ4QyxhQUZLO0FBTVhDLG9CQUFRLE1BTkc7QUFPWEMsbUJBUFcsbUJBT0hDLEdBUEcsRUFPRTtBQUNYQyxzQkFBUUMsR0FBUixDQUFZRixHQUFaO0FBQ0EsNkJBQUtHLFdBQUw7QUFDQSxrQkFBSUgsSUFBSTVCLElBQUosQ0FBU2dDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0IsK0JBQUtDLFNBQUwsQ0FBZTtBQUNibEIseUJBQU8sTUFETTtBQUVibUIsd0JBQU0sU0FGTztBQUdiQyw0QkFBVTtBQUhHLGlCQUFmO0FBS0FDLDJCQUFXLFlBQVc7QUFDcEIsaUNBQUtDLFVBQUwsQ0FBZ0I7QUFDZG5CLHlCQUFLO0FBRFMsbUJBQWhCO0FBR0QsaUJBSkQsRUFJRyxJQUpIO0FBS0QsZUFYRCxNQVdPO0FBQ0wsK0JBQUtvQixTQUFMLENBQWU7QUFDYnZCLHlCQUFPLElBRE07QUFFYndCLDJCQUFTLE1BRkk7QUFHYkMsOEJBQVksS0FIQztBQUliYiwyQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLHdCQUFJQSxJQUFJYSxPQUFSLEVBQWlCO0FBQ2ZaLDhCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBQ0Y7QUFSWSxpQkFBZjtBQVVEO0FBQ0YsYUFqQ1U7QUFrQ1hZLGdCQWxDVyxnQkFrQ05kLEdBbENNLEVBa0NEO0FBQ1IsNkJBQUtHLFdBQUw7QUFDQSw2QkFBS08sU0FBTCxDQUFlO0FBQ2J2Qix1QkFBTyxJQURNO0FBRWJ3Qix5QkFBUyxNQUZJO0FBR2JDLDRCQUFZLEtBSEM7QUFJYmIseUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixzQkFBSUEsSUFBSWEsT0FBUixFQUFpQjtBQUNmWiw0QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksZUFBZjtBQVVEO0FBOUNVLFdBQWI7QUFnREQsU0FyREQsTUFxRE87QUFDTCx5QkFBS1EsU0FBTCxDQUFlO0FBQ2J2QixtQkFBTyxJQURNO0FBRWJ3QixxQkFBUyxTQUZJO0FBR2JDLHdCQUFZLEtBSEM7QUFJYmIscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixrQkFBSUEsSUFBSWEsT0FBUixFQUFpQjtBQUNmWix3QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksV0FBZjtBQVVEO0FBQ0YsT0F2RU87O0FBd0VSYSxpQkFBVyxxQkFBVztBQUNwQmQsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEO0FBMUVPLEssUUE0RVZjLE0sR0FBUyxFOzs7Ozs2QkFDQSxDQUFFOzs7c0NBQ09oQixHLEVBQUs7QUFDckIsYUFBTyxLQUFLUCxPQUFMLENBQWF3QixpQkFBYixDQUErQixZQUEvQixDQUFQO0FBQ0Q7Ozs7RUEvRnFDLGVBQUtDLEk7O2tCQUF4Qm5ELFUiLCJmaWxlIjoiZXhpc3RpbmdNZW1iZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge1xyXG4gIHNlcnZpY2VcclxufSBmcm9tICcuLi9jb25maWcuanMnXHJcbi8vIOW8leWFpee7hOS7tlxyXG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RpdmF0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5r+A5rS75Lya5ZGY5Y2hJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgZGF0ZTogJzE5OTQtMDEtMTUnXHJcbiAgfVxyXG5cclxuICBjb21wdXRlZCA9IHt9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBiaW5kRGF0ZUNoYW5nZTogZnVuY3Rpb24oZSkge1xyXG4gICAgICB0aGlzLmRhdGUgPSBlLmRldGFpbC52YWx1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9LFxyXG4gICAgZm9ybVN1Ym1pdChkYXRhKSB7XHJcbiAgICAgIGlmIChkYXRhLmRldGFpbC52YWx1ZS5uYW1lICYmIGRhdGEuZGV0YWlsLnZhbHVlLnBob25lICYmIGRhdGEuZGV0YWlsLnZhbHVlLmlkY2FyZCkge1xyXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogc2VydmljZS5hY3RpdmVDYXJkLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjb2RlOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaWRjYXJkLmVuY3J5cHRfY29kZSxcclxuICAgICAgICAgICAgY2FyZF9pZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmlkY2FyZC5jYXJkX2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a/gOa0u+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwMFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogJ2NhbWVyYSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSwgNDAwMClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5r+A5rS75aSx6LSlJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgIGNvbnRlbnQ6ICfmv4DmtLvlpLHotKUnLFxyXG4gICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgIGNvbnRlbnQ6ICfotYTmlpnloavlhpnkuI3lrozmlbQnLFxyXG4gICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZm9ybVJlc2V0OiBmdW5jdGlvbigpIHtcclxuICAgICAgY29uc29sZS5sb2coJ2Zvcm3lj5HnlJ/kuoZyZXNldOS6i+S7ticpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgb25TaG93KCkge31cclxuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuICAgIHJldHVybiB0aGlzLiRwYXJlbnQub25TaGFyZUFwcE1lc3NhZ2UoJ+aCqOacieS4gOW8oOS8muWRmOWNoeW+hemihuWPlicpXHJcbiAgfVxyXG59XG4iXX0=