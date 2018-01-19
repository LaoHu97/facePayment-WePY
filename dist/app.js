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

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/activation', 'pages/camera', 'pages/accomplish', 'pages/oldActivation'],
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
    _this.intercept('uploadFile', {
      config: function config(p) {
        var sessionId = _wepy2.default.getStorageSync('sessionId');
        if (sessionId) {
          p.formData.sessionId = sessionId;
          p.header.sessionId = sessionId;
        }
        console.log(p);
        return p;
      },
      success: function success(p) {
        if (p.data.status === 400) {
          console.log('session已过期');
          _wepy2.default.removeStorageSync('sessionId');
          _wepy2.default.showModal({
            title: '登录过期',
            content: '请重新登录',
            success: function success(res) {
              if (res.confirm) {
                _wepy2.default.reLaunch({
                  url: 'index',
                  success: function success() {
                    this.login();
                  }
                });
              } else if (res.cancel) {}
            }
          });
        }
        console.log(p);
        return p;
      },
      fail: function fail(p) {
        console.log('API调用失败');
        return p;
      }
    });
    _this.intercept('request', {
      config: function config(p) {
        var sessionId = _wepy2.default.getStorageSync('sessionId');
        if (sessionId) {
          p.data.sessionId = sessionId;
          p.header.sessionId = sessionId;
        }
        console.log(p);
        return p;
      },
      success: function success(p) {
        if (p.data.status === 400) {
          console.log('session已过期');
          _wepy2.default.removeStorageSync('sessionId');
          _wepy2.default.showModal({
            title: '登录过期',
            content: '请重新登录',
            success: function success(res) {
              if (res.confirm) {
                _wepy2.default.reLaunch({
                  url: 'index',
                  success: function success() {
                    this.login();
                  }
                });
              } else if (res.cancel) {}
            }
          });
        }
        console.log(p);
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
      var extConfig = _wepy2.default.getExtConfigSync ? _wepy2.default.getExtConfigSync() : {};
      _wepy2.default.setStorageSync('mid', extConfig.businessInfo.mid);
      _wepy2.default.setStorageSync('appid', extConfig.businessInfo.appid);
    }
  }, {
    key: 'sleep',
    value: function sleep(s) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('promise resolved');
        }, s * 1000);
      });
    }
  }, {
    key: 'testAsync',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                console.log('我先到');
                _context.next = 3;
                return this.sleep(3);

              case 3:
                console.log('我后到');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function testAsync() {
        return _ref.apply(this, arguments);
      }

      return testAsync;
    }()
  }, {
    key: 'login',
    value: function login() {
      _wepy2.default.login({
        success: function success(res) {
          if (res.code) {
            _wepy2.default.request({
              url: _config.service.jscodeToSession,
              header: {
                'content-type': 'application/json'
              },
              data: {
                appid: _wepy2.default.getStorageSync('appid'),
                code: res.code
              },
              method: 'POST',
              success: function success(res) {
                _wepy2.default.setStorageSync('sessionId', res.data.sessionId);
                _wepy2.default.setStorageSync('openId', res.data.openId);
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
      _wepy2.default.getUserInfo({
        success: function success(res) {
          that.globalData.userInfo = res;
          cb && cb(res);
        }
      });
    }
  }, {
    key: 'onLaunch',
    value: function onLaunch() {
      _wepy2.default.checkSession({
        success: function success() {
          console.log('登录未过期');
        },
        fail: function fail() {
          this.login();
          console.log('登录过期');
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJpZGNhcmQiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwic2Vzc2lvbklkIiwiZ2V0U3RvcmFnZVN5bmMiLCJmb3JtRGF0YSIsImhlYWRlciIsImNvbnNvbGUiLCJsb2ciLCJzdWNjZXNzIiwiZGF0YSIsInN0YXR1cyIsInJlbW92ZVN0b3JhZ2VTeW5jIiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwicmVzIiwiY29uZmlybSIsInJlTGF1bmNoIiwidXJsIiwibG9naW4iLCJjYW5jZWwiLCJmYWlsIiwicGF0aCIsImVyck1zZyIsInF1ZXJ5IiwiZXh0Q29uZmlnIiwiZ2V0RXh0Q29uZmlnU3luYyIsInNldFN0b3JhZ2VTeW5jIiwiYnVzaW5lc3NJbmZvIiwibWlkIiwiYXBwaWQiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJjb2RlIiwicmVxdWVzdCIsImpzY29kZVRvU2Vzc2lvbiIsIm1ldGhvZCIsIm9wZW5JZCIsImNiIiwidGhhdCIsImdldFVzZXJJbmZvIiwiY2hlY2tTZXNzaW9uIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUEyQkUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQXRCZEEsTUFzQmMsR0F0Qkw7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxrQkFGSyxFQUdMLGNBSEssRUFJTCxrQkFKSyxFQUtMLHFCQUxLLENBREE7QUFRUEMsY0FBUTtBQUNOLCtCQUF1QixPQURqQjtBQUVOLHdDQUFnQyxTQUYxQjtBQUdOLGtDQUEwQixRQUhwQjtBQUlOLGtDQUEwQjtBQUpwQixPQVJEO0FBY1AsZUFBUztBQWRGLEtBc0JLO0FBQUEsVUFMZEMsVUFLYyxHQUxEO0FBQ1hDLGdCQUFVLElBREM7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QUtYSSxvQkFBTTtBQUNKcUIsdUJBQU8sZUFBSzNCLGNBQUwsQ0FBb0IsT0FBcEIsQ0FESDtBQUVKa0Msc0JBQU10QixJQUFJc0I7QUFGTixlQUxLO0FBU1hHLHNCQUFRLE1BVEc7QUFVWGhDLHFCQVZXLG1CQVVITyxHQVZHLEVBVUU7QUFDWCwrQkFBS1ksY0FBTCxDQUFvQixXQUFwQixFQUFpQ1osSUFBSU4sSUFBSixDQUFTUCxTQUExQztBQUNBLCtCQUFLeUIsY0FBTCxDQUFvQixRQUFwQixFQUE4QlosSUFBSU4sSUFBSixDQUFTZ0MsTUFBdkM7QUFDRDtBQWJVLGFBQWI7QUFlRCxXQWhCRCxNQWdCTztBQUNMbkMsb0JBQVFDLEdBQVIsQ0FBWSxlQUFlUSxJQUFJUSxNQUEvQjtBQUNEO0FBQ0Y7QUFyQlEsT0FBWDtBQXVCRDs7O2dDQUNXbUIsRSxFQUFJO0FBQ2QsVUFBTUMsT0FBTyxJQUFiO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZnBDLGVBRGUsbUJBQ1BPLEdBRE8sRUFDRjtBQUNYNEIsZUFBSy9DLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCa0IsR0FBM0I7QUFDQTJCLGdCQUFNQSxHQUFHM0IsR0FBSCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7K0JBQ1U7QUFDVCxxQkFBSzhCLFlBQUwsQ0FBa0I7QUFDaEJyQyxpQkFBUyxtQkFBVztBQUNsQkYsa0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsU0FIZTtBQUloQmMsY0FBTSxnQkFBVztBQUNmLGVBQUtGLEtBQUw7QUFDQWIsa0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7QUFQZSxPQUFsQjtBQVNEOzs7O0VBbkwwQixlQUFLdUMsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IHtcclxuICBzZXJ2aWNlXHJcbn0gZnJvbSAnLi9jb25maWcuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvYWN0aXZhdGlvbicsXHJcbiAgICAgICdwYWdlcy9jYW1lcmEnLFxyXG4gICAgICAncGFnZXMvYWNjb21wbGlzaCcsXHJcbiAgICAgICdwYWdlcy9vbGRBY3RpdmF0aW9uJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICAnYmFja2dyb3VuZFRleHRTdHlsZSc6ICdsaWdodCcsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyMxQUFEMTknLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICdXZUNoYXQnLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICdXZUNoYXQnXHJcbiAgICB9LFxyXG4gICAgJ2RlYnVnJzogdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgdXNlcmlkY2FyZDogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLmludGVyY2VwdCgndXBsb2FkRmlsZScsIHtcclxuICAgICAgY29uZmlnKHApIHtcclxuICAgICAgICBsZXQgc2Vzc2lvbklkID0gd2VweS5nZXRTdG9yYWdlU3luYygnc2Vzc2lvbklkJylcclxuICAgICAgICBpZiAoc2Vzc2lvbklkKSB7XHJcbiAgICAgICAgICBwLmZvcm1EYXRhLnNlc3Npb25JZCA9IHNlc3Npb25JZFxyXG4gICAgICAgICAgcC5oZWFkZXIuc2Vzc2lvbklkID0gc2Vzc2lvbklkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHApXHJcbiAgICAgICAgcmV0dXJuIHBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyhwKSB7XHJcbiAgICAgICAgaWYgKHAuZGF0YS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb27lt7Lov4fmnJ8nKVxyXG4gICAgICAgICAgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnc2Vzc2lvbklkJylcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXov4fmnJ8nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36YeN5paw55m75b2VJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICB3ZXB5LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cocClcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQVBJ6LCD55So5aSx6LSlJylcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XHJcbiAgICAgIGNvbmZpZyhwKSB7XHJcbiAgICAgICAgbGV0IHNlc3Npb25JZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25JZCcpXHJcbiAgICAgICAgaWYgKHNlc3Npb25JZCkge1xyXG4gICAgICAgICAgcC5kYXRhLnNlc3Npb25JZCA9IHNlc3Npb25JZFxyXG4gICAgICAgICAgcC5oZWFkZXIuc2Vzc2lvbklkID0gc2Vzc2lvbklkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHApXHJcbiAgICAgICAgcmV0dXJuIHBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyhwKSB7XHJcbiAgICAgICAgaWYgKHAuZGF0YS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb27lt7Lov4fmnJ8nKVxyXG4gICAgICAgICAgd2VweS5yZW1vdmVTdG9yYWdlU3luYygnc2Vzc2lvbklkJylcclxuICAgICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgdGl0bGU6ICfnmbvlvZXov4fmnJ8nLFxyXG4gICAgICAgICAgICBjb250ZW50OiAn6K+36YeN5paw55m75b2VJyxcclxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICB3ZXB5LnJlTGF1bmNoKHtcclxuICAgICAgICAgICAgICAgICAgdXJsOiAnaW5kZXgnLFxyXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge31cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cocClcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQVBJ6LCD55So5aSx6LSlJylcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBvblNoYXJlQXBwTWVzc2FnZSh0aXRsZSA9ICflvq7kv6HkvJrlkZjljaEnKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnLFxyXG4gICAgICAvLyBpbWFnZVVybDogJycsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KGRhdGEpIHtcclxuICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VyaWRjYXJkID0gZGF0YS5xdWVyeVxyXG4gICAgbGV0IGV4dENvbmZpZyA9IHdlcHkuZ2V0RXh0Q29uZmlnU3luYyA/IHdlcHkuZ2V0RXh0Q29uZmlnU3luYygpIDoge31cclxuICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ21pZCcsIGV4dENvbmZpZy5idXNpbmVzc0luZm8ubWlkKVxyXG4gICAgd2VweS5zZXRTdG9yYWdlU3luYygnYXBwaWQnLCBleHRDb25maWcuYnVzaW5lc3NJbmZvLmFwcGlkKVxyXG4gIH1cclxuICBzbGVlcChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdEFzeW5jKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+aIkeWFiOWIsCcpXHJcbiAgICBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICBjb25zb2xlLmxvZygn5oiR5ZCO5YiwJylcclxuICB9XHJcbiAgbG9naW4oKSB7XHJcbiAgICB3ZXB5LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHNlcnZpY2UuanNjb2RlVG9TZXNzaW9uLFxyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBhcHBpZDogd2VweS5nZXRTdG9yYWdlU3luYygnYXBwaWQnKSxcclxuICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdzZXNzaW9uSWQnLCByZXMuZGF0YS5zZXNzaW9uSWQpXHJcbiAgICAgICAgICAgICAgd2VweS5zZXRTdG9yYWdlU3luYygnb3BlbklkJywgcmVzLmRhdGEub3BlbklkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlc1xyXG4gICAgICAgIGNiICYmIGNiKHJlcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICB3ZXB5LmNoZWNrU2Vzc2lvbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXmnKrov4fmnJ8nKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmxvZ2luKClcclxuICAgICAgICBjb25zb2xlLmxvZygn55m75b2V6L+H5pyfJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbn1cbiJdfQ==