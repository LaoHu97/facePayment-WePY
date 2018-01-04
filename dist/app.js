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
              data: {
                appid: 'wx32a0348172f66270',
                code: res.code
              },
              method: 'POST',
              success: function success(res) {
                console.log(res);
                try {
                  _wepy2.default.setStorageSync('sessionId', res.data.sessionId);
                  _wepy2.default.setStorageSync('openId', res.data.openId);
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
    value: function onLaunch() {
      var extConfig = _wepy2.default.getExtConfigSync ? _wepy2.default.getExtConfigSync() : {};
      console.log(extConfig);
      _wepy2.default.checkSession({
        success: function success() {
          console.log('登录未过期');
        },
        fail: function fail() {
          console.log('登录过期');
          this.login();
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJpZGNhcmQiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwic2Vzc2lvbklkIiwiZ2V0U3RvcmFnZVN5bmMiLCJkYXRhIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwidGl0bGUiLCJwYXRoIiwicmVzIiwiZXJyTXNnIiwicXVlcnkiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwianNjb2RlVG9TZXNzaW9uIiwiYXBwaWQiLCJtZXRob2QiLCJzZXRTdG9yYWdlU3luYyIsIm9wZW5JZCIsImUiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsImV4dENvbmZpZyIsImdldEV4dENvbmZpZ1N5bmMiLCJjaGVja1Nlc3Npb24iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQTJCRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBdEJkQSxNQXNCYyxHQXRCTDtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGtCQUZLLEVBR0wsY0FISyxFQUlMLGtCQUpLLEVBS0wscUJBTEssQ0FEQTtBQVFQQyxjQUFRO0FBQ04sK0JBQXVCLE9BRGpCO0FBRU4sd0NBQWdDLFNBRjFCO0FBR04sa0NBQTBCLFFBSHBCO0FBSU4sa0NBQTBCO0FBSnBCLE9BUkQ7QUFjUCxlQUFTO0FBZEYsS0FzQks7QUFBQSxVQUxkQyxVQUtjLEdBTEQ7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxrQkFBWTtBQUZELEtBS0M7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN4QlAsWUFEd0Isa0JBQ2pCUSxDQURpQixFQUNkO0FBQ1Is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LEVBQWxFO0FBQ0E1QixjQUFRQyxHQUFSLENBQVkwQixTQUFaO0FBQ0EscUJBQUtFLFlBQUwsQ0FBa0I7QUFDaEI5QixpQkFBUyxtQkFBVztBQUNsQkMsa0JBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0QsU0FIZTtBQUloQkMsY0FBTSxnQkFBVztBQUNmRixrQkFBUUMsR0FBUixDQUFZLE1BQVo7QUFDQSxlQUFLYSxLQUFMO0FBQ0Q7QUFQZSxPQUFsQjtBQVNEOzs7O0VBNUgwQixlQUFLZ0IsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcclxuaW1wb3J0IHtcclxuICBzZXJ2aWNlXHJcbn0gZnJvbSAnLi9jb25maWcuanMnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvYWN0aXZhdGlvbicsXHJcbiAgICAgICdwYWdlcy9jYW1lcmEnLFxyXG4gICAgICAncGFnZXMvYWNjb21wbGlzaCcsXHJcbiAgICAgICdwYWdlcy9vbGRBY3RpdmF0aW9uJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICAnYmFja2dyb3VuZFRleHRTdHlsZSc6ICdsaWdodCcsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyMxQUFEMTknLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICdXZUNoYXQnLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICdXZUNoYXQnXHJcbiAgICB9LFxyXG4gICAgJ2RlYnVnJzogdHJ1ZVxyXG4gIH1cclxuXHJcbiAgZ2xvYmFsRGF0YSA9IHtcclxuICAgIHVzZXJJbmZvOiBudWxsLFxyXG4gICAgdXNlcmlkY2FyZDogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgICB0aGlzLmludGVyY2VwdCgncmVxdWVzdCcsIHtcclxuICAgICAgY29uZmlnKHApIHtcclxuICAgICAgICBsZXQgc2Vzc2lvbklkID0gd2VweS5nZXRTdG9yYWdlU3luYygnc2Vzc2lvbklkJylcclxuICAgICAgICBwLmRhdGEuc2Vzc2lvbklkID0gc2Vzc2lvbklkXHJcbiAgICAgICAgcmV0dXJuIHBcclxuICAgICAgfSxcclxuICAgICAgc3VjY2VzcyhwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FQSeiwg+eUqOaIkOWKnycpXHJcbiAgICAgICAgcmV0dXJuIHBcclxuICAgICAgfSxcclxuICAgICAgZmFpbChwKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0FQSeiwg+eUqOWksei0pScpXHJcbiAgICAgICAgcmV0dXJuIHBcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UodGl0bGUgPSAn5b6u5L+h5Lya5ZGY5Y2hJykge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICBwYXRoOiAnL3BhZ2VzL2luZGV4JyxcclxuICAgICAgLy8gaW1hZ2VVcmw6ICcnLFxyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAvLyDovazlj5HmiJDlip9cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAvLyDovazlj5HlpLHotKVcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZXJyTXNnKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uU2hvdyhkYXRhKSB7XHJcbiAgICB0aGlzLmdsb2JhbERhdGEudXNlcmlkY2FyZCA9IGRhdGEucXVlcnlcclxuICB9XHJcbiAgc2xlZXAocykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgcmVzb2x2ZSgncHJvbWlzZSByZXNvbHZlZCcpXHJcbiAgICAgIH0sIHMgKiAxMDAwKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFzeW5jIHRlc3RBc3luYygpIHtcclxuICAgIGNvbnNvbGUubG9nKCfmiJHlhYjliLAnKVxyXG4gICAgYXdhaXQgdGhpcy5zbGVlcCgzKVxyXG4gICAgY29uc29sZS5sb2coJ+aIkeWQjuWIsCcpXHJcbiAgfVxyXG4gIGxvZ2luKCkge1xyXG4gICAgd2VweS5sb2dpbih7XHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMuY29kZSkge1xyXG4gICAgICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICAgICAgdXJsOiBzZXJ2aWNlLmpzY29kZVRvU2Vzc2lvbixcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgIGFwcGlkOiAnd3gzMmEwMzQ4MTcyZjY2MjcwJyxcclxuICAgICAgICAgICAgICBjb2RlOiByZXMuY29kZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25JZCcsIHJlcy5kYXRhLnNlc3Npb25JZClcclxuICAgICAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcsIHJlcy5kYXRhLm9wZW5JZClcclxuICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coJ+iOt+WPlueUqOaIt+eZu+W9leaAgeWksei0pe+8gScgKyByZXMuZXJyTXNnKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgZ2V0VXNlckluZm8oY2IpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzXHJcbiAgICBpZiAodGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsb2JhbERhdGEudXNlckluZm9cclxuICAgIH1cclxuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xyXG4gICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgIHRoYXQuZ2xvYmFsRGF0YS51c2VySW5mbyA9IHJlc1xyXG4gICAgICAgIGNiICYmIGNiKHJlcylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgb25MYXVuY2goKSB7XHJcbiAgICBsZXQgZXh0Q29uZmlnID0gd2VweS5nZXRFeHRDb25maWdTeW5jID8gd2VweS5nZXRFeHRDb25maWdTeW5jKCkgOiB7fVxyXG4gICAgY29uc29sZS5sb2coZXh0Q29uZmlnKVxyXG4gICAgd2VweS5jaGVja1Nlc3Npb24oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5pyq6L+H5pyfJylcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9lei/h+acnycpXHJcbiAgICAgICAgdGhpcy5sb2dpbigpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XG4iXX0=