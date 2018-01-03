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
        if (data.detail.value.name && data.detail.value.phone && data.detail.value.cardid) {
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

  _createClass(OldActivation, [{
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9sZEFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiT2xkQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImRldGFpbCIsInZhbHVlIiwibmFtZSIsInBob25lIiwiY2FyZGlkIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJyZXF1ZXN0IiwidXJsIiwiYWN0aXZlQ2FyZCIsImNvZGUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpZGNhcmQiLCJlbmNyeXB0X2NvZGUiLCJjYXJkX2lkIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJoaWRlTG9hZGluZyIsInN0YXR1cyIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJuYXZpZ2F0ZVRvIiwic2hvd01vZGFsIiwiY29udGVudCIsInNob3dDYW5jZWwiLCJjb25maXJtIiwiZmFpbCIsImZvcm1SZXNldCIsImV2ZW50cyIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxhOzs7Ozs7Ozs7Ozs7OztvTUFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxRQUlQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dKLElBREgsRUFDUztBQUNmLFlBQUlBLEtBQUtLLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkMsSUFBbEIsSUFBMEJQLEtBQUtLLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkUsS0FBNUMsSUFBcURSLEtBQUtLLE1BQUwsQ0FBWUMsS0FBWixDQUFrQkcsTUFBM0UsRUFBbUY7QUFDakYseUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsbUJBQU8sS0FEUTtBQUVmQyxrQkFBTTtBQUZTLFdBQWpCO0FBSUEseUJBQUtDLE9BQUwsQ0FBYTtBQUNYQyxpQkFBSyxnQkFBUUMsVUFERjtBQUVYZixrQkFBTTtBQUNKZ0Isb0JBQU0sS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxVQUF4QixDQUFtQ0MsWUFEckM7QUFFSkMsdUJBQVMsS0FBS0osT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxVQUF4QixDQUFtQ0U7QUFGeEMsYUFGSztBQU1YQyxvQkFBUSxNQU5HO0FBT1hDLG1CQVBXLG1CQU9IQyxHQVBHLEVBT0U7QUFDWEMsc0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLDZCQUFLRyxXQUFMO0FBQ0Esa0JBQUlILElBQUl4QixJQUFKLENBQVM0QixNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCLCtCQUFLQyxTQUFMLENBQWU7QUFDYmxCLHlCQUFPLE1BRE07QUFFYm1CLHdCQUFNLFNBRk87QUFHYkMsNEJBQVU7QUFIRyxpQkFBZjtBQUtBQywyQkFBVyxZQUFXO0FBQ3BCLGlDQUFLQyxVQUFMLENBQWdCO0FBQ2RuQix5QkFBSztBQURTLG1CQUFoQjtBQUdELGlCQUpELEVBSUcsSUFKSDtBQUtELGVBWEQsTUFXTztBQUNMLCtCQUFLb0IsU0FBTCxDQUFlO0FBQ2J2Qix5QkFBTyxJQURNO0FBRWJ3QiwyQkFBUyxNQUZJO0FBR2JDLDhCQUFZLEtBSEM7QUFJYmIsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQix3QkFBSUEsSUFBSWEsT0FBUixFQUFpQjtBQUNmWiw4QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksaUJBQWY7QUFVRDtBQUNGLGFBakNVO0FBa0NYWSxnQkFsQ1csZ0JBa0NOZCxHQWxDTSxFQWtDRDtBQUNSLDZCQUFLRyxXQUFMO0FBQ0EsNkJBQUtPLFNBQUwsQ0FBZTtBQUNidkIsdUJBQU8sSUFETTtBQUVid0IseUJBQVMsTUFGSTtBQUdiQyw0QkFBWSxLQUhDO0FBSWJiLHlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsc0JBQUlBLElBQUlhLE9BQVIsRUFBaUI7QUFDZlosNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVJZLGVBQWY7QUFVRDtBQTlDVSxXQUFiO0FBZ0RELFNBckRELE1BcURPO0FBQ0wseUJBQUtRLFNBQUwsQ0FBZTtBQUNidkIsbUJBQU8sSUFETTtBQUVid0IscUJBQVMsU0FGSTtBQUdiQyx3QkFBWSxLQUhDO0FBSWJiLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsa0JBQUlBLElBQUlhLE9BQVIsRUFBaUI7QUFDZlosd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVJZLFdBQWY7QUFVRDtBQUNGLE9BbkVPOztBQW9FUmEsaUJBQVcscUJBQVc7QUFDcEJkLGdCQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDtBQXRFTyxLLFFBd0VWYyxNLEdBQVMsRTs7Ozs7NkJBQ0EsQ0FBRTs7O3NDQUNPaEIsRyxFQUFLO0FBQ3JCLGFBQU8sS0FBS1AsT0FBTCxDQUFhd0IsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7O0VBMUZ3QyxlQUFLQyxJOztrQkFBM0IvQyxhIiwiZmlsZSI6Im9sZEFjdGl2YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7XHJcbiAgc2VydmljZVxyXG59IGZyb20gJy4uL2NvbmZpZy5qcydcclxuLy8g5byV5YWl57uE5Lu2XHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9sZEFjdGl2YXRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmn6Xor6LkvJrlkZjljaEnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2VcclxuICB9XHJcblxyXG4gIGNvbXB1dGVkID0ge31cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGZvcm1TdWJtaXQoZGF0YSkge1xyXG4gICAgICBpZiAoZGF0YS5kZXRhaWwudmFsdWUubmFtZSAmJiBkYXRhLmRldGFpbC52YWx1ZS5waG9uZSAmJiBkYXRhLmRldGFpbC52YWx1ZS5jYXJkaWQpIHtcclxuICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgICAgIHRpdGxlOiAn5Yqg6L295LitJyxcclxuICAgICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICB1cmw6IHNlcnZpY2UuYWN0aXZlQ2FyZCxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgY29kZTogdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmlkY2FyZC5lbmNyeXB0X2NvZGUsXHJcbiAgICAgICAgICAgIGNhcmRfaWQ6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpZGNhcmQuY2FyZF9pZFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgd2VweS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmv4DmtLvmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDQwMDBcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6ICdjYW1lcmEnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0sIDQwMDApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ+a/gOa0u+Wksei0pScsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBmYWlsKHJlcykge1xyXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICBjb250ZW50OiAn5r+A5rS75aSx6LSlJyxcclxuICAgICAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICBjb250ZW50OiAn6LWE5paZ5aGr5YaZ5LiN5a6M5pW0JyxcclxuICAgICAgICAgIHNob3dDYW5jZWw6IGZhbHNlLFxyXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnlKjmiLfngrnlh7vnoa7lrponKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvcm1SZXNldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdmb3Jt5Y+R55Sf5LqGcmVzZXTkuovku7YnKVxyXG4gICAgfVxyXG4gIH1cclxuICBldmVudHMgPSB7fVxyXG4gIG9uU2hvdygpIHt9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kcGFyZW50Lm9uU2hhcmVBcHBNZXNzYWdlKCfmgqjmnInkuIDlvKDkvJrlkZjljaHlvoXpooblj5YnKVxyXG4gIH1cclxufVxuIl19