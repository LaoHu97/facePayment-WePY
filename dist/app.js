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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJpZGNhcmQiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwic2Vzc2lvbklkIiwiZ2V0U3RvcmFnZVN5bmMiLCJkYXRhIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJmYWlsIiwidGl0bGUiLCJwYXRoIiwicmVzIiwiZXJyTXNnIiwicXVlcnkiLCJzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJzZXRUaW1lb3V0Iiwic2xlZXAiLCJsb2dpbiIsImNvZGUiLCJyZXF1ZXN0IiwidXJsIiwianNjb2RlVG9TZXNzaW9uIiwiYXBwaWQiLCJtZXRob2QiLCJzZXRTdG9yYWdlU3luYyIsImUiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsImV4dENvbmZpZyIsImdldEV4dENvbmZpZ1N5bmMiLCJjaGVja1Nlc3Npb24iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQTJCRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBdEJkQSxNQXNCYyxHQXRCTDtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGtCQUZLLEVBR0wsY0FISyxFQUlMLGtCQUpLLEVBS0wscUJBTEssQ0FEQTtBQVFQQyxjQUFRO0FBQ04sK0JBQXVCLE9BRGpCO0FBRU4sd0NBQWdDLFNBRjFCO0FBR04sa0NBQTBCLFFBSHBCO0FBSU4sa0NBQTBCO0FBSnBCLE9BUkQ7QUFjUCxlQUFTO0FBZEYsS0FzQks7QUFBQSxVQUxkQyxVQUtjLEdBTEQ7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxrQkFBWTtBQUZELEtBS0M7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN4QlAsWUFEd0Isa0JBQ2pCUSxDQURpQixFQUNkO0FBQ1IsWUFBSUMsWUFB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QUFTLG1CQUFXO0FBQ2xCQyxrQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDRCxTQUhlO0FBSWhCQyxjQUFNLGdCQUFXO0FBQ2ZGLGtCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLGVBQUthLEtBQUw7QUFDRDtBQVBlLE9BQWxCO0FBU0Q7Ozs7RUEzSDBCLGVBQUtlLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCB7XHJcbiAgc2VydmljZVxyXG59IGZyb20gJy4vY29uZmlnLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2FjdGl2YXRpb24nLFxyXG4gICAgICAncGFnZXMvY2FtZXJhJyxcclxuICAgICAgJ3BhZ2VzL2FjY29tcGxpc2gnLFxyXG4gICAgICAncGFnZXMvb2xkQWN0aXZhdGlvbidcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgJ2JhY2tncm91bmRUZXh0U3R5bGUnOiAnbGlnaHQnLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjMUFBRDE5JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnV2VDaGF0JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnV2VDaGF0J1xyXG4gICAgfSxcclxuICAgICdkZWJ1Zyc6IHRydWVcclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIHVzZXJpZGNhcmQ6IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XHJcbiAgICAgIGNvbmZpZyhwKSB7XHJcbiAgICAgICAgbGV0IHNlc3Npb25JZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25JZCcpXHJcbiAgICAgICAgcC5kYXRhLnNlc3Npb25JZCA9IHNlc3Npb25JZFxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEnosIPnlKjmiJDlip8nKVxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEnosIPnlKjlpLHotKUnKVxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHRpdGxlID0gJ+W+ruS/oeS8muWRmOWNoScpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCcsXHJcbiAgICAgIC8vIGltYWdlVXJsOiAnJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZylcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBvblNob3coZGF0YSkge1xyXG4gICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJpZGNhcmQgPSBkYXRhLnF1ZXJ5XHJcbiAgfVxyXG4gIHNsZWVwKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygn5oiR5YWI5YiwJylcclxuICAgIGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKCfmiJHlkI7liLAnKVxyXG4gIH1cclxuICBsb2dpbigpIHtcclxuICAgIHdlcHkubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogc2VydmljZS5qc2NvZGVUb1Nlc3Npb24sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBhcHBpZDogJ3d4MzJhMDM0ODE3MmY2NjI3MCcsXHJcbiAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdzZXNzaW9uSWQnLCByZXMuZGF0YS5zZXNzaW9uSWQpXHJcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfnmbvlvZXmgIHlpLHotKXvvIEnICsgcmVzLmVyck1zZylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXNcclxuICAgICAgICBjYiAmJiBjYihyZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgbGV0IGV4dENvbmZpZyA9IHdlcHkuZ2V0RXh0Q29uZmlnU3luYyA/IHdlcHkuZ2V0RXh0Q29uZmlnU3luYygpIDoge31cclxuICAgIGNvbnNvbGUubG9nKGV4dENvbmZpZylcclxuICAgIHdlcHkuY2hlY2tTZXNzaW9uKHtcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9leacqui/h+acnycpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXov4fmnJ8nKVxyXG4gICAgICAgIHRoaXMubG9naW4oKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxuIl19