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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Activation , 'pages/activation'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGl2YXRpb24uanMiXSwibmFtZXMiOlsiQWN0aXZhdGlvbiIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJsb2FkaW5nIiwiZGF0ZSIsImNvbXB1dGVkIiwibWV0aG9kcyIsImJpbmREYXRlQ2hhbmdlIiwiZSIsImRldGFpbCIsInZhbHVlIiwiJGFwcGx5IiwiZm9ybVN1Ym1pdCIsIm5hbWUiLCJwaG9uZSIsImlkY2FyZCIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJtYXNrIiwicmVxdWVzdCIsInVybCIsImFjdGl2ZUNhcmQiLCJjb2RlIiwiJHBhcmVudCIsImdsb2JhbERhdGEiLCJ1c2VyaWRjYXJkIiwiZW5jcnlwdF9jb2RlIiwiY2FyZF9pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiaGlkZUxvYWRpbmciLCJzdGF0dXMiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVUbyIsInNob3dNb2RhbCIsImNvbnRlbnQiLCJzaG93Q2FuY2VsIiwiY29uZmlybSIsImZhaWwiLCJmb3JtUmVzZXQiLCJldmVudHMiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxJLEdBQU87QUFDTEMsZUFBUyxLQURKO0FBRUxDLFlBQU07QUFGRCxLLFFBS1BDLFEsR0FBVyxFLFFBRVhDLE8sR0FBVTtBQUNSQyxzQkFBZ0Isd0JBQVNDLENBQVQsRUFBWTtBQUMxQixhQUFLSixJQUFMLEdBQVlJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBckI7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKTztBQUtSQyxnQkFMUSxzQkFLR1YsSUFMSCxFQUtTO0FBQ2YsWUFBSUEsS0FBS08sTUFBTCxDQUFZQyxLQUFaLENBQWtCRyxJQUFsQixJQUEwQlgsS0FBS08sTUFBTCxDQUFZQyxLQUFaLENBQWtCSSxLQUE1QyxJQUFxRFosS0FBS08sTUFBTCxDQUFZQyxLQUFaLENBQWtCSyxNQUEzRSxFQUFtRjtBQUNqRix5QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxtQkFBTyxLQURRO0FBRWZDLGtCQUFNO0FBRlMsV0FBakI7QUFJQSx5QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGlCQUFLLGdCQUFRQyxVQURGO0FBRVhuQixrQkFBTTtBQUNKb0Isb0JBQU0sS0FBS0MsT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxVQUF4QixDQUFtQ0MsWUFEckM7QUFFSkMsdUJBQVMsS0FBS0osT0FBTCxDQUFhQyxVQUFiLENBQXdCQyxVQUF4QixDQUFtQ0U7QUFGeEMsYUFGSztBQU1YQyxvQkFBUSxNQU5HO0FBT1hDLG1CQVBXLG1CQU9IQyxHQVBHLEVBT0U7QUFDWEMsc0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLDZCQUFLRyxXQUFMO0FBQ0Esa0JBQUlILElBQUk1QixJQUFKLENBQVNnQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQzNCLCtCQUFLQyxTQUFMLENBQWU7QUFDYmxCLHlCQUFPLE1BRE07QUFFYm1CLHdCQUFNLFNBRk87QUFHYkMsNEJBQVU7QUFIRyxpQkFBZjtBQUtBQywyQkFBVyxZQUFXO0FBQ3BCLGlDQUFLQyxVQUFMLENBQWdCO0FBQ2RuQix5QkFBSztBQURTLG1CQUFoQjtBQUdELGlCQUpELEVBSUcsSUFKSDtBQUtELGVBWEQsTUFXTztBQUNMLCtCQUFLb0IsU0FBTCxDQUFlO0FBQ2J2Qix5QkFBTyxJQURNO0FBRWJ3QiwyQkFBUyxNQUZJO0FBR2JDLDhCQUFZLEtBSEM7QUFJYmIsMkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQix3QkFBSUEsSUFBSWEsT0FBUixFQUFpQjtBQUNmWiw4QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGO0FBUlksaUJBQWY7QUFVRDtBQUNGLGFBakNVO0FBa0NYWSxnQkFsQ1csZ0JBa0NOZCxHQWxDTSxFQWtDRDtBQUNSLDZCQUFLRyxXQUFMO0FBQ0EsNkJBQUtPLFNBQUwsQ0FBZTtBQUNidkIsdUJBQU8sSUFETTtBQUVid0IseUJBQVMsTUFGSTtBQUdiQyw0QkFBWSxLQUhDO0FBSWJiLHlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsc0JBQUlBLElBQUlhLE9BQVIsRUFBaUI7QUFDZlosNEJBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVJZLGVBQWY7QUFVRDtBQTlDVSxXQUFiO0FBZ0RELFNBckRELE1BcURPO0FBQ0wseUJBQUtRLFNBQUwsQ0FBZTtBQUNidkIsbUJBQU8sSUFETTtBQUVid0IscUJBQVMsU0FGSTtBQUdiQyx3QkFBWSxLQUhDO0FBSWJiLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsa0JBQUlBLElBQUlhLE9BQVIsRUFBaUI7QUFDZlosd0JBQVFDLEdBQVIsQ0FBWSxRQUFaO0FBQ0Q7QUFDRjtBQVJZLFdBQWY7QUFVRDtBQUNGLE9BdkVPOztBQXdFUmEsaUJBQVcscUJBQVc7QUFDcEJkLGdCQUFRQyxHQUFSLENBQVksZ0JBQVo7QUFDRDtBQTFFTyxLLFFBNEVWYyxNLEdBQVMsRTs7Ozs7NkJBQ0EsQ0FBRTs7O3NDQUNPaEIsRyxFQUFLO0FBQ3JCLGFBQU8sS0FBS1AsT0FBTCxDQUFhd0IsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7O0VBL0ZxQyxlQUFLQyxJOztrQkFBeEJuRCxVIiwiZmlsZSI6ImFjdGl2YXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7XHJcbiAgc2VydmljZVxyXG59IGZyb20gJy4uL2NvbmZpZy5qcydcclxuLy8g5byV5YWl57uE5Lu2XHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjdGl2YXRpb24gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmv4DmtLvkvJrlkZjljaEnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICBkYXRlOiAnMTk5NC0wMS0xNSdcclxuICB9XHJcblxyXG4gIGNvbXB1dGVkID0ge31cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGJpbmREYXRlQ2hhbmdlOiBmdW5jdGlvbihlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZSA9IGUuZGV0YWlsLnZhbHVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH0sXHJcbiAgICBmb3JtU3VibWl0KGRhdGEpIHtcclxuICAgICAgaWYgKGRhdGEuZGV0YWlsLnZhbHVlLm5hbWUgJiYgZGF0YS5kZXRhaWwudmFsdWUucGhvbmUgJiYgZGF0YS5kZXRhaWwudmFsdWUuaWRjYXJkKSB7XHJcbiAgICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICB0aXRsZTogJ+WKoOi9veS4rScsXHJcbiAgICAgICAgICBtYXNrOiB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiBzZXJ2aWNlLmFjdGl2ZUNhcmQsXHJcbiAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuJHBhcmVudC5nbG9iYWxEYXRhLnVzZXJpZGNhcmQuZW5jcnlwdF9jb2RlLFxyXG4gICAgICAgICAgICBjYXJkX2lkOiB0aGlzLiRwYXJlbnQuZ2xvYmFsRGF0YS51c2VyaWRjYXJkLmNhcmRfaWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5r+A5rS75oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAwXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiAnY2FtZXJhJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9LCA0MDAwKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICfmv4DmtLvlpLHotKUnLFxyXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbChyZXMpIHtcclxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOekuicsXHJcbiAgICAgICAgICAgICAgY29udGVudDogJ+a/gOa0u+Wksei0pScsXHJcbiAgICAgICAgICAgICAgc2hvd0NhbmNlbDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+eUqOaIt+eCueWHu+ehruWumicpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgdGl0bGU6ICfmj5DnpLonLFxyXG4gICAgICAgICAgY29udGVudDogJ+i1hOaWmeWhq+WGmeS4jeWujOaVtCcsXHJcbiAgICAgICAgICBzaG93Q2FuY2VsOiBmYWxzZSxcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZygn55So5oi354K55Ye756Gu5a6aJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBmb3JtUmVzZXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICBjb25zb2xlLmxvZygnZm9ybeWPkeeUn+S6hnJlc2V05LqL5Lu2JylcclxuICAgIH1cclxuICB9XHJcbiAgZXZlbnRzID0ge31cclxuICBvblNob3coKSB7fVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcclxuICB9XHJcbn1cbiJdfQ==