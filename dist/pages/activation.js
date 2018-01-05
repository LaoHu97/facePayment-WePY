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

    var _temp, _this2, _ret;

    _classCallCheck(this, Activation);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Activation.__proto__ || Object.getPrototypeOf(Activation)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '激活会员卡'
    }, _this2.components = {
      foot: _foot2.default
    }, _this2.data = {
      loading: false,
      date: '1994-01-15'
    }, _this2.computed = {}, _this2.methods = {
      bindDateChange: function bindDateChange(e) {
        this.date = e.detail.value;
        this.$apply();
      },
      formSubmit: function formSubmit(data) {
        var _this = this;
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
                    url: 'camera?name=' + data.detail.value.name + '&phone=' + data.detail.value.phone + '&idcard=' + data.detail.value.idcard + '&date=' + _this.date + '&mailbox=' + data.detail.value.mailbox
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
    }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiZGF0ZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImJpbmREYXRlQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5IiwiZm9ybVN1Ym1pdCIsIl90aGlzIiwibmFtZSIsInBob25lIiwiaWRjYXJkIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInJlcXVlc3QiLCJ1cmwiLCJhY3RpdmVDYXJkIiwiaGVhZGVyIiwibWFpbGJveCIsImNvZGUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpZGNhcmQiLCJlbmNyeXB0X2NvZGUiLCJjYXJkX2lkIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoaWRlTG9hZGluZyIsInN0YXR1cyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwiZmFpbCIsImZvcm1SZXNldCIsImV2ZW50cyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxVOzs7Ozs7Ozs7Ozs7OztpTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBSWJDLEksR0FBTztBQUNMQyxlQUFTLEtBREo7QUFFTEMsWUFBTTtBQUZELEssU0FLUEMsUSxHQUFXLEUsU0FFWEMsTyxHQUFVO0FBQ1JDLHNCQUFnQix3QkFBU0MsQ0FBVCxFQUFZO0FBQzFCLGFBQUtKLElBQUwsR0FBWUksRUFBRUMsTUFBRixDQUFTQyxL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SEM7QUFJYmIscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixrQkFBSUEsSUFBSWEsT0FBUixFQUFpQjtBQUNmWix3QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksV0FBZjtBQVVEO0FBQ0YsT0EvRU87O0FBZ0ZSYSxpQkFBVyxxQkFBVztBQUNwQmQsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEO0FBbEZPLEssU0FvRlZjLE0sR0FBUyxFOzs7Ozs2QkFDQSxDQUFFOzs7c0NBQ09oQixHLEVBQUs7QUFDckIsYUFBTyxLQUFLUCxPQUFMLENBQWF3QixpQkFBYixDQUErQixZQUEvQixDQUFQO0FBQ0Q7Ozs7RUF2R3FDLGVBQUtDLEk7O2tCQUF4QnJELFUiLCJmaWxlIjoiYWN0aXZhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHtcclxuICBzZXJ2aWNlXHJcbn0gZnJvbSAnLi4vY29uZmlnLmpzJ1xyXG4vLyDlvJXlhaXnu4Tku7ZcclxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZhdGlvbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a/gOa0u+S8muWRmOWNoSdcclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIGZvb3Q6IEZvb3RcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgIGRhdGU6ICcxOTk0LTAxLTE1J1xyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWQgPSB7fVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgYmluZERhdGVDaGFuZ2U6IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgdGhpcy5kYXRlID0gZS5kZXRhaWwudmFsdWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfSxcclxuICAgIGZvcm1TdWJtaXQoZGF0YSkge1xyXG4gICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICAgIGlmIChkYXRhLmRldGFpbC52YWx1ZS5uYW1lICYmIGRhdGEuZGV0YWlsLnZhbHVlLnBob25lICYmIGRhdGEuZGV0YWlsLnZhbHVlLmlkY2FyZCkge1xyXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBzZXJ2aWNlLmFjdGl2ZUNhcmQsXHJcbiAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgbmFtZTogZGF0YS5kZXRhaWwudmFsdWUubmFtZSxcclxuICAgICAgICAgICAgcGhvbmU6IGRhdGEuZGV0YWlsLnZhbHVlLnBob25lLFxyXG4gICAgICAgICAgICBpZGNhcmQ6IGRhdGEuZGV0YWlsLnZhbHVlLmlkY2FyZCxcclxuICAgICAgICAgICAgZGF0ZTogdGhpcy5kYXRlLFxyXG4gICAgICAgICAgICBtYWlsYm94OiBkYXRhLmRldGFpbC52YWx1ZS5tYWlsYm94LFxyXG4gICAgICAgICAgICBjb2RlOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaWRjYXJkLmVuY3J5cHRfY29kZSxcclxuICAgICAgICAgICAgY2FyZF9pZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmlkY2FyZC5jYXJkX2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a/gOa0u+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwMFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogJ2NhbWVyYT9uYW1lPScgKyBkYXRhLmRldGFpbC52YWx1ZS5uYW1lICsgJyZwaG9uZT0nICsgZGF0YS5kZXRhaWwudmFsdWUucGhvbmUgKyAnJmlkY2FyZD0nICsgZGF0YS5kZXRhaWwudmFsdWUuaWRjYXJkICsgJyZkYXRlPScgKyBfdGhpcy5kYXRlICsgJyZtYWlsYm94PScgKyBkYXRhLmRldGFpbC52YWx1ZS5tYWlsYm94XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0sIDQwMDApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+a/gOa0u+Wksei0pScsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICBjb250ZW50OiAn5r+A5rS75aSx6LSlJyxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiAn6LWE5paZ5aGr5YaZ5LiN5a6M5pW0JyxcclxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvcm1SZXNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxyXG4gICAgfVxyXG4gIH1cclxuICBldmVudHMgPSB7fVxyXG4gIG9uU2hvdygpIHt9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kcGFyZW50Lm9uU2hhcmVBcHBNZXNzYWdlKCfmgqjmnInkuIDlvKDkvJrlkZjljaHlvoXpooblj5YnKVxyXG4gIH1cclxufVxuIl19