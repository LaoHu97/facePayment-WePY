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
      loading: false
    }, _this.computed = {}, _this.methods = {
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
              onsole.log(res);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImRldGFpbCIsInZhbHVlIiwibmFtZSIsInBob25lIiwiaWRjYXJkIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJyZXF1ZXN0IiwidXJsIiwiYWN0aXZlQ2FyZCIsImNvZGUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpZGNhcmQiLCJlbmNyeXB0X2NvZGUiLCJjYXJkX2lkIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoaWRlTG9hZGluZyIsInN0YXR1cyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwiZmFpbCIsIm9uc29sZSIsImZvcm1SZXNldCIsImV2ZW50cyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxRQUlQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dKLElBREgsRUFDUztBQUNmLFlBQUlBLEtBQUtLLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsSUFBbEIsSUFBMEJQLEtBQUtLLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkUsS0FBNUMsSUFBcURSLEtBQUtLLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkcsTUFBM0UsRUFBbUY7QUFDakYseUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsbUJBQU8sS0FEUTtBQUVmQyxrQkFBTTtBQUZTLFdBQWpCO0FBSUEseUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxpQkFBSyxnQkFBUUMsVUFERjtBQUVYZixrQkFBTTtBQUNKZ0Isb0JBQU0sS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxVQUF4QixDQUFtQ0MsWUFEckM7QUFFSkMsdUJBQVMsS0FBS0osT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxVQUF4QixDQUFtQ0U7QUFGeEMsYUFGSztBQU1YQyxvQkFBUSxNQU5HO0FBT1hDLG1CQVBXLG1CQU9IQyxHQVBHLEVBT0U7QUFDWEMsc0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLDZCQUFLRyxXQUFMO0FBQ0Esa0JBQUlILElBQUl4QixJQUFKLENBQVM0QixNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCLCtCQUFLQyxTQUFMLENBQWU7QUFDYmxCLHlCQUFPLE1BRE07QUFFYm1CLHdCQUFNLFNBRk87QUFHYkMsNEJBQVU7QUFIRyxpQkFBZjtBQUtBQywyQkFBVyxZQUFXO0FBQ3BCLGlDQUFLQyxVQUFMLENBQWdCO0FBQ2RuQix5QkFBSztBQURTLG1CQUFoQjtBQUdELGlCQUpELEVBSUcsSUFKSDtBQUtELGVBWEQsTUFXTztBQUNMLCtCQUFLb0IsU0FBTCxDQUFlO0FBQ2J2Qix5QkFBTyxJQURNO0FBRWJ3QiwyQkFBUyxNQUZJO0FBR2JDLDhCQUFZLEtBSEM7QUFJYmIsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQix3QkFBSUEsSUFBSWEsT0FBUixFQUFpQjtBQUNmWiw4QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksaUJBQWY7QUFVRDtBQUNGLGFBakNVO0FBa0NYWSxnQkFsQ1csZ0JBa0NOZCxHQWxDTSxFQWtDRDtBQUNSZSxxQkFBT2IsR0FBUCxDQUFXRixHQUFYO0FBQ0EsNkJBQUtHLFdBQUw7QUFDQSw2QkFBS08sU0FBTCxDQUFlO0FBQ2J2Qix1QkFBTyxJQURNO0FBRWJ3Qix5QkFBUyxNQUZJO0FBR2JDLDRCQUFZLEtBSEM7QUFJYmIseUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixzQkFBSUEsSUFBSWEsT0FBUixFQUFpQjtBQUNmWiw0QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksZUFBZjtBQVVEO0FBL0NVLFdBQWI7QUFpREQsU0F0REQsTUFzRE87QUFDTCx5QkFBS1EsU0FBTCxDQUFlO0FBQ2J2QixtQkFBTyxJQURNO0FBRWJ3QixxQkFBUyxTQUZJO0FBR2JDLHdCQUFZLEtBSEM7QUFJYmIscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixrQkFBSUEsSUFBSWEsT0FBUixFQUFpQjtBQUNmWix3QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksV0FBZjtBQVVEO0FBQ0YsT0FwRU87O0FBcUVSYyxpQkFBVyxxQkFBVztBQUNwQmYsZ0JBQVFDLEdBQVIsQ0FBWSxnQkFBWjtBQUNEO0FBdkVPLEssUUF5RVZlLE0sR0FBUyxFOzs7Ozs2QkFDQSxDQUFFOzs7c0NBQ09qQixHLEVBQUs7QUFDckIsYUFBTyxLQUFLUCxPQUFMLENBQWF5QixpQkFBYixDQUErQixZQUEvQixDQUFQO0FBQ0Q7Ozs7RUEzRnFDLGVBQUtDLEk7O2tCQUF4QmhELFUiLCJmaWxlIjoiYWN0aXZhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHtcclxuICBzZXJ2aWNlXHJcbn0gZnJvbSAnLi4vY29uZmlnLmpzJ1xyXG4vLyDlvJXlhaXnu4Tku7ZcclxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWN0aXZhdGlvbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+a/gOa0u+S8muWRmOWNoSdcclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIGZvb3Q6IEZvb3RcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBsb2FkaW5nOiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWQgPSB7fVxyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgZm9ybVN1Ym1pdChkYXRhKSB7XHJcbiAgICAgIGlmIChkYXRhLmRldGFpbC52YWx1ZS5uYW1lICYmIGRhdGEuZGV0YWlsLnZhbHVlLnBob25lICYmIGRhdGEuZGV0YWlsLnZhbHVlLmlkY2FyZCkge1xyXG4gICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICAgICAgbWFzazogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgIHVybDogc2VydmljZS5hY3RpdmVDYXJkLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBjb2RlOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaWRjYXJkLmVuY3J5cHRfY29kZSxcclxuICAgICAgICAgICAgY2FyZF9pZDogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmlkY2FyZC5jYXJkX2lkXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+a/gOa0u+aIkOWKnycsXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogNDAwMFxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogJ2NhbWVyYSdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSwgNDAwMClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAn5r+A5rS75aSx6LSlJyxcclxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZhaWwocmVzKSB7XHJcbiAgICAgICAgICAgIG9uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICBjb250ZW50OiAn5r+A5rS75aSx6LSlJyxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiAn6LWE5paZ5aGr5YaZ5LiN5a6M5pW0JyxcclxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvcm1SZXNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxyXG4gICAgfVxyXG4gIH1cclxuICBldmVudHMgPSB7fVxyXG4gIG9uU2hvdygpIHt9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kcGFyZW50Lm9uU2hhcmVBcHBNZXNzYWdlKCfmgqjmnInkuIDlvKDkvJrlkZjljaHlvoXpooblj5YnKVxyXG4gIH1cclxufVxuIl19