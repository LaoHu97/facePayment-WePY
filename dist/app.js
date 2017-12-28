'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _config = require('./config.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/activation', 'pages/camera', 'pages/accomplish'],
      window: {
        'backgroundTextStyle': 'light',
        'navigationBarBackgroundColor': '#1AAD19',
        'navigationBarTitleText': 'WeChat',
        'navigationBarTextStyle': 'WeChat'
      },
      'debug': true
    };
    _this.globalData = {
      userInfo: null,
      useridcard: null
    };

    _this.use('requestfix');
    _this.intercept('request', {
      config: function config(p) {
        var sessionId = _wepy2.default.getStorageSync('sessionId');
        p.data.sessionId = sessionId;
        return p;
      },
      success: function success(p) {
        console.log('API调用成功');
        return p;
      },
      fail: function fail(p) {
        console.log('API调用失败');
        return p;
      }
    });
    return _this;
  }

  _createClass(_default, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '微信会员卡';

      return {
        title: title,
        path: '/pages/index',
        // imageUrl: '',
        success: function success(res) {
          // 转发成功
          console.log(res.errMsg);
        },
        fail: function fail(res) {
          // 转发失败
          console.log(res.errMsg);
        }
      };
    }
  }, {
    key: 'onShow',
    value: function onShow(data) {
      this.globalData.useridcard = data.query;
      _wepy2.default.checkSession({
        success: function success() {
          console.log('登录未过期');
          var sessionId = _wepy2.default.getStorageSync('sessionId');
          console.log('sessionId为：' + sessionId);
        },
        fail: function fail() {
          console.log('登录过期');
          this.login();
        }
      });
    }
  }, {
    key: 'login',
    value: function login() {
      _wepy2.default.login({
        success: function success(res) {
          if (res.code) {
            _wepy2.default.request({
              url: _config.service.jscodeToSession,
              data: {
                appid: 'wx32a0348172f66270',
                code: res.code
              },
              method: 'POST',
              success: function success(res) {
                console.log(res);
                try {
                  _wepy2.default.setStorageSync('sessionId', res.data.sessionId);
                } catch (e) {
                  console.log(e);
                }
              }
            });
          } else {
            console.log('获取用户登录态失败！' + res.errMsg);
          }
        }
      });
    }
  }, {
    key: 'getUserInfo',
    value: function getUserInfo(cb) {
      var that = this;
      if (this.globalData.userInfo) {
        return this.globalData.userInfo;
      }
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res;
          cb && cb(res);
        }
      });
    }
  }, {
    key: 'onLaunch',
    value: function onLaunch() {}
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJpZGNhcmQiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwic2Vzc2lvbklkIiwiZ2V0U3RvcmFnZVN5bmMiLCJkYXRhIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwidGl0bGUiLCJwYXRoIiwicmVzIiwiZXJyTXNnIiwicXVlcnkiLCJjaGVja1Nlc3Npb24iLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwianNjb2RlVG9TZXNzaW9uIiwiYXBwaWQiLCJtZXRob2QiLCJzZXRTdG9yYWdlU3luYyIsImUiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7OztBQTBCRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBckJkQSxNQXFCYyxHQXJCTDtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGtCQUZLLEVBR0wsY0FISyxFQUlMLGtCQUpLLENBREE7QUFPUEMsY0FBUTtBQUNOLCtCQUF1QixPQURqQjtBQUVOLHdDQUFnQyxTQUYxQjtBQUdOLGtDQUEwQixRQUhwQjtBQUlOLGtDQUEwQjtBQUpwQixPQVBEO0FBYVAsZUFBUztBQWJGLEtBcUJLO0FBQUEsVUFMZEMsVUFLYyxHQUxEO0FBQ1hDLGdCQUFVLElBREM7QUFFWEMsa0JBQVk7QUFGRCxLQUtDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBQ0EsVUFBS0MsU0FBTCxDQUFlLFNBQWYsRUFBMEI7QUFDeEJQLFlBRHdCLGtCQUNqQlEsQ0FEaUIsRUFDZDtBQUNSLFlBQUlDLFlBQVksZUFBS0MsY0FBTCxDQUFvQixXQUFwQixDQUFoQjtBQUNBRixVQUFFRyxJQUFGLENBQU9GLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0EsZUFBT0QsQ0FBUDtBQUNELE9BTHVCO0FBTXhCSSxhQU53QixtQkFNaEJKLENBTmdCLEVBTWI7QUFDVEssZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsZUFBT04sQ0FBUDtBQUNELE9BVHVCO0FBVXhCTyxVQVZ3QixnQkFVbkJQLENBVm1CLEVBVWhCO0FBQ05LLGdCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLGVBQU9OLENBQVA7QUFDRDtBQWJ1QixLQUExQjtBQUhZO0FBa0JiOzs7O3dDQUNrQztBQUFBLFVBQWpCUSxLQUFpQix1RUFBVCxPQUFTOztBQUNqQyxhQUFPO0FBQ0xBLGVBQU9BLEtBREY7QUFFTEMsY0FBTSxjQUZEO0FBR0w7QUFDQUwsaUJBQVMsaUJBQVNNLEdBQVQsRUFBYztBQUNyQjtBQUNBTCxrQkFBUUMsR0FBUixDQUFZSSxJQUFJQyxNQUFoQjtBQUNELFNBUEk7QUFRTEosY0FBTSxjQUFTRyxHQUFULEVBQWM7QUFDbEI7QUFDQUwsa0JBQVFDLEdBQVIsQ0FBWUksSUFBSUMsTUFBaEI7QUFDRDtBQVhJLE9BQVA7QUFhRDs7OzJCQUNNUixJLEVBQU07QUFDWCxXQUFLUixVQUFMLENBQWdCRSxVQUFoQixHQUE2Qk0sS0FBS1MsS0FBbEM7QUFDQSxxQkFBS0MsWUFBTCxDQUFrQjtBQUNoQlQsaUJBQVMsbUJBQVc7QUFDbEJDLGtCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLGNBQUlMLFlBQVksZUFBS0MsY0FBTCxDQUFvQixXQUFwQixDQUFoQjtBQUNBRyxrQkFBUUMsR0FBUixDQUFZLGdCQUFnQkwsU0FBNUI7QUFDRCxTQUxlO0FBTWhCTSxjQUFNLGdCQUFXO0FBQ2ZGLGtCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLGVBQUtRLEtBQUw7QUFDRDtBQVRlLE9BQWxCO0FBV0Q7Ozs0QkFDTztBQUNOLHFCQUFLQSxLQUFMLENBQVc7QUFDVFYsaUJBQVMsaUJBQVNNLEdBQVQsRUFBYztBQUNyQixjQUFJQSxJQUFJSyxJQUFSLEVBQWM7QUFDWiwyQkFBS0MsT0FBTCxDQUFhO0FBQ1hDLG1CQUFLLGdCQUFRQyxlQURGO0FBRVhmLG9CQUFNO0FBQ0pnQix1QkFBTyxvQkFESDtBQUVKSixzQkFBTUwsSUFBSUs7QUFGTixlQUZLO0FBTVhLLHNCQUFRLE1BTkc7QUFPWGhCLHFCQVBXLG1CQU9ITSxHQVBHLEVBT0U7QUFDWEwsd0JBQVFDLEdBQVIsQ0FBWUksR0FBWjtBQUNBLG9CQUFJO0FBQ0YsaUNBQUtXLGNBQUwsQ0FBb0IsV0FBcEIsRUFBaUNYLElBQUlQLElBQUosQ0FBU0YsU0FBMUM7QUFDRCxpQkFGRCxDQUVFLE9BQU9xQixDQUFQLEVBQVU7QUFDVmpCLDBCQUFRQyxHQUFSLENBQVlnQixDQUFaO0FBQ0Q7QUFDRjtBQWRVLGFBQWI7QUFnQkQsV0FqQkQsTUFpQk87QUFDTGpCLG9CQUFRQyxHQUFSLENBQVksZUFBZUksSUFBSUMsTUFBL0I7QUFDRDtBQUNGO0FBdEJRLE9BQVg7QUF3QkQ7OztnQ0FDV1ksRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EsVUFBSSxLQUFLN0IsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUs2QixXQUFMLENBQWlCO0FBQ2ZyQixlQURlLG1CQUNQTSxHQURPLEVBQ0Y7QUFDWGMsZUFBSzdCLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCYyxHQUEzQjtBQUNBYSxnQkFBTUEsR0FBR2IsR0FBSCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7K0JBQ1UsQ0FFVjs7OztFQTlHMEIsZUFBS2dCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCB7XHJcbiAgc2VydmljZVxyXG59IGZyb20gJy4vY29uZmlnLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2FjdGl2YXRpb24nLFxyXG4gICAgICAncGFnZXMvY2FtZXJhJyxcclxuICAgICAgJ3BhZ2VzL2FjY29tcGxpc2gnXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgICdiYWNrZ3JvdW5kVGV4dFN0eWxlJzogJ2xpZ2h0JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnIzFBQUQxOScsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ1dlQ2hhdCcsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJ1dlQ2hhdCdcclxuICAgIH0sXHJcbiAgICAnZGVidWcnOiB0cnVlXHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICB1c2VyaWRjYXJkOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xyXG4gICAgICBjb25maWcocCkge1xyXG4gICAgICAgIGxldCBzZXNzaW9uSWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdzZXNzaW9uSWQnKVxyXG4gICAgICAgIHAuZGF0YS5zZXNzaW9uSWQgPSBzZXNzaW9uSWRcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQVBJ6LCD55So5oiQ5YqfJylcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQVBJ6LCD55So5aSx6LSlJylcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBvblNoYXJlQXBwTWVzc2FnZSh0aXRsZSA9ICflvq7kv6HkvJrlkZjljaEnKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnLFxyXG4gICAgICAvLyBpbWFnZVVybDogJycsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KGRhdGEpIHtcclxuICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VyaWRjYXJkID0gZGF0YS5xdWVyeVxyXG4gICAgd2VweS5jaGVja1Nlc3Npb24oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5pyq6L+H5pyfJylcclxuICAgICAgICB2YXIgc2Vzc2lvbklkID0gd2VweS5nZXRTdG9yYWdlU3luYygnc2Vzc2lvbklkJylcclxuICAgICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbklk5Li677yaJyArIHNlc3Npb25JZClcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9lei/h+acnycpXHJcbiAgICAgICAgdGhpcy5sb2dpbigpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGxvZ2luKCkge1xyXG4gICAgd2VweS5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBzZXJ2aWNlLmpzY29kZVRvU2Vzc2lvbixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGFwcGlkOiAnd3gzMmEwMzQ4MTcyZjY2MjcwJyxcclxuICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25JZCcsIHJlcy5kYXRhLnNlc3Npb25JZClcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+eZu+W9leaAgeWksei0pe+8gScgKyByZXMuZXJyTXNnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlc1xyXG4gICAgICAgIGNiICYmIGNiKHJlcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgb25MYXVuY2goKSB7XHJcblxyXG4gIH1cclxufVxuIl19