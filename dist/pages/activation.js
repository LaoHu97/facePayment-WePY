'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
        console.log(data);
        if (data.detail.value.name && data.detail.value.phone && data.detail.value.idcard) {
          _wepy2.default.showLoading({
            title: '加载中',
            mask: true
          });
          _wepy2.default.request({
            url: 'http://test.weupay.com/pay/wxSmaPro/activeCard',
            data: {
              code: this.$parent.globalData.useridcard.encrypt_code,
              card_id: this.$parent.globalData.useridcard.card_id
            },
            method: 'POST',
            success: function success(res) {
              _wepy2.default.hideLoading();
              if (res.data.status == 200) {
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
  }]);

  return Activation;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Activation , 'pages/activation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiZm9ybVN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ2YWx1ZSIsIm5hbWUiLCJwaG9uZSIsImlkY2FyZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwicmVxdWVzdCIsInVybCIsImNvZGUiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpZGNhcmQiLCJlbmNyeXB0X2NvZGUiLCJjYXJkX2lkIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsImhpZGVMb2FkaW5nIiwic3RhdHVzIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsIm5hdmlnYXRlVG8iLCJzaG93TW9kYWwiLCJjb250ZW50Iiwic2hvd0NhbmNlbCIsImNvbmZpcm0iLCJmYWlsIiwiZm9ybVJlc2V0IiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxVOzs7Ozs7Ozs7Ozs7Ozs4TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLEksR0FBTztBQUNMQyxlQUFTO0FBREosSyxRQUlQQyxRLEdBQVcsRSxRQUVYQyxPLEdBQVU7QUFDUkMsZ0JBRFEsc0JBQ0dKLElBREgsRUFDUztBQUNmSyxnQkFBUUMsR0FBUixDQUFZTixJQUFaO0FBQ0EsWUFBSUEsS0FBS08sTUFBTCxDQUFZQyxLQUFaLENBQWtCQyxJQUFsQixJQUEwQlQsS0FBS08sTUFBTCxDQUFZQyxLQUFaLENBQWtCRSxLQUE1QyxJQUFxRFYsS0FBS08sTUFBTCxDQUFZQyxLQUFaLENBQWtCRyxNQUEzRSxFQUFtRjtBQUNqRix5QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxtQkFBTyxLQURRO0FBRWZDLGtCQUFNO0FBRlMsV0FBakI7QUFJQSx5QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGlCQUFLLGdEQURNO0FBRVhoQixrQkFBTTtBQUNKaUIsb0JBQU0sS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxVQUF4QixDQUFtQ0MsWUFEckM7QUFFSkMsdUJBQVMsS0FBS0osT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxVQUF4QixDQUFtQ0U7QUFGeEMsYUFGSztBQU1YQyxvQkFBUSxNQU5HO0FBT1hDLG1CQVBXLG1CQU9IQyxHQVBHLEVBT0U7QUFDWCw2QkFBS0MsV0FBTDtBQUNBLGtCQUFJRCxJQUFJekIsSUFBSixDQUFTMkIsTUFBVCxJQUFtQixHQUF2QixFQUE0QjtBQUMxQiwrQkFBS0MsU0FBTCxDQUFlO0FBQ2JmLHlCQUFPLE1BRE07QUFFYmdCLHdCQUFNLFNBRk87QUFHYkMsNEJBQVU7QUFIRyxpQkFBZjtBQUtBQywyQkFBVyxZQUFXO0FBQ3BCLGlDQUFLQyxVQUFMLENBQWdCO0FBQ2RoQix5QkFBSztBQURTLG1CQUFoQjtBQUdELGlCQUpELEVBSUcsSUFKSDtBQUtELGVBWEQsTUFXTztBQUNMLCtCQUFLaUIsU0FBTCxDQUFlO0FBQ2JwQix5QkFBTyxJQURNO0FBRWJxQiwyQkFBUyxNQUZJO0FBR2JDLDhCQUFZLEtBSEM7QUFJYlgsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQix3QkFBSUEsSUFBSVcsT0FBUixFQUFpQjtBQUNmL0IsOEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVJZLGlCQUFmO0FBVUQ7QUFDRixhQWhDVTtBQWlDWCtCLGdCQWpDVyxnQkFpQ05aLEdBakNNLEVBaUNEO0FBQ1IsNkJBQUtDLFdBQUw7QUFDQSw2QkFBS08sU0FBTCxDQUFlO0FBQ2JwQix1QkFBTyxJQURNO0FBRWJxQix5QkFBUyxNQUZJO0FBR2JDLDRCQUFZLEtBSEM7QUFJYlgseUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixzQkFBSUEsSUFBSVcsT0FBUixFQUFpQjtBQUNmL0IsNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVJZLGVBQWY7QUFVRDtBQTdDVSxXQUFiO0FBK0NELFNBcERELE1Bb0RPO0FBQ0wseUJBQUsyQixTQUFMLENBQWU7QUFDYnBCLG1CQUFPLElBRE07QUFFYnFCLHFCQUFTLFNBRkk7QUFHYkMsd0JBQVksS0FIQztBQUliWCxxQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGtCQUFJQSxJQUFJVyxPQUFSLEVBQWlCO0FBQ2YvQix3QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksV0FBZjtBQVVEO0FBQ0YsT0FuRU87O0FBb0VSZ0MsaUJBQVcscUJBQVc7QUFDcEJqQyxnQkFBUUMsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7QUF0RU8sSyxRQXdFVmlDLE0sR0FBUyxFOzs7Ozs2QkFDQSxDQUVSOzs7O0VBekZxQyxlQUFLQyxJOztrQkFBeEI3QyxVIiwiZmlsZSI6ImFjdGl2YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIOW8leWFpee7hOS7tlxyXG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY3RpdmF0aW9uIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5r+A5rS75Lya5ZGY5Y2hJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGxvYWRpbmc6IGZhbHNlXHJcbiAgfVxyXG5cclxuICBjb21wdXRlZCA9IHt9XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBmb3JtU3VibWl0KGRhdGEpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgICAgaWYgKGRhdGEuZGV0YWlsLnZhbHVlLm5hbWUgJiYgZGF0YS5kZXRhaWwudmFsdWUucGhvbmUgJiYgZGF0YS5kZXRhaWwudmFsdWUuaWRjYXJkKSB7XHJcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiAnaHR0cDovL3Rlc3Qud2V1cGF5LmNvbS9wYXkvd3hTbWFQcm8vYWN0aXZlQ2FyZCcsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpZGNhcmQuZW5jcnlwdF9jb2RlLFxyXG4gICAgICAgICAgICBjYXJkX2lkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaWRjYXJkLmNhcmRfaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09IDIwMCkge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5r+A5rS75oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAwXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiAnY2FtZXJhJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9LCA0MDAwKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmv4DmtLvlpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+a/gOa0u+Wksei0pScsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+i1hOaWmeWhq+WGmeS4jeWujOaVtCcsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmb3JtUmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcclxuICAgIH1cclxuICB9XHJcbiAgZXZlbnRzID0ge31cclxuICBvblNob3coKSB7XHJcblxyXG4gIH1cclxufVxuIl19