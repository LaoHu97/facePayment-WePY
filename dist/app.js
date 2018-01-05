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
        // let sessionId = wepy.getStorageSync('sessionId')
        // p.formData.sessionId = sessionId
        // if (sessionId) {
        //   p.header.sessionId = sessionId
        // }
        console.log(p);
        return p;
      },
      success: function success(p) {
        if (p.data.status === 400) {
          console.log('session已过期');
          _wepy2.default.clearStorageSync();
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
        p.data.sessionId = sessionId;
        if (sessionId) {
          p.header.sessionId = sessionId;
        }
        console.log(p);
        return p;
      },
      success: function success(p) {
        if (p.data.status === 400) {
          console.log('session已过期');
          _wepy2.default.clearStorageSync();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJpZGNhcmQiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJkYXRhIiwic3RhdHVzIiwiY2xlYXJTdG9yYWdlU3luYyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInJlcyIsImNvbmZpcm0iLCJyZUxhdW5jaCIsInVybCIsImxvZ2luIiwiY2FuY2VsIiwiZmFpbCIsInNlc3Npb25JZCIsImdldFN0b3JhZ2VTeW5jIiwiaGVhZGVyIiwicGF0aCIsImVyck1zZyIsInF1ZXJ5IiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiY29kZSIsInJlcXVlc3QiLCJqc2NvZGVUb1Nlc3Npb24iLCJhcHBpZCIsIm1ldGhvZCIsInNldFN0b3JhZ2VTeW5jIiwib3BlbklkIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJjaGVja1Nlc3Npb24iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQTJCRSxzQkFBYztBQUFBOztBQUFBOztBQUFBLFVBdEJkQSxNQXNCYyxHQXRCTDtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGtCQUZLLEVBR0wsY0FISyxFQUlMLGtCQUpLLEVBS0wscUJBTEssQ0FEQTtBQVFQQyxjQUFRO0FBQ04sK0JBQXVCLE9BRGpCO0FBRU4sd0NBQWdDLFNBRjFCO0FBR04sa0NBQTBCLFFBSHBCO0FBSU4sa0NBQTBCO0FBSnBCLE9BUkQ7QUFjUCxlQUFTO0FBZEYsS0FzQks7QUFBQSxVQUxkQyxVQUtjLEdBTEQ7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxrQkFBWTtBQUZELEtBS0M7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQyxTQUFMLENBQWUsWUFBZixFQUE2QjtBQUMzQlAsWUFEMkIsa0JBQ3BCUSxDQURvQixFQUNqQjtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsZ0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLGVBQU9BLENBQVA7QUFDRCxPQVQwQjtBQVUzQkcsYUFWMkIsbUJBVW5CSCxDQVZtQixFQVVoQjtBQUNULFlBQUlBLEVBQUVJLElBQUYsQ0FBT0MsTUFBUCxLQUFrQixHQUF0QixFQUEyQjtBQUN6Qkosa0JBQVFDLEdBQVIsQ0FBWSxZQUFaO0FBQ0EseUJBQUtJLGdCQUFMO0FBQ0EseUJBQUtDLFNBQUwsQ0FBZTtBQUNiQyxtQkFBTyxNQURNO0FBRWJDLHFCQUFTLE9BRkk7QUFHYk4scUJBQVMsaUJBQVNPLEdBQVQsRUFBYztBQUNyQixrQkFBSUEsSUFBSUMsT0FBUixFQUFpQjtBQUNmLCtCQUFLQyxRQUFMLENBQWM7QUFDWkMsdUJBQUssT0FETztBQUVaVix5QkFGWSxxQkFFRjtBQUNSLHlCQUFLVyxLQUFMO0FBQ0Q7QUFKVyxpQkFBZDtBQU1ELGVBUEQsTUFPTyxJQUFJSixJQUFJSyxNQUFSLEVBQWdCLENBQUU7QUFDMUI7QUFaWSxXQUFmO0FBY0Q7QUFDRCxlQUFPZixDQUFQO0FBQ0QsT0E5QjBCO0FBK0IzQmdCLFVBL0IyQixnQkErQnRCaEIsQ0EvQnNCLEVBK0JuQjtBQUNOQyxnQkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDQSxlQUFPRixDQUFQO0FBQ0Q7QUFsQzBCLEtBQTdCO0FBb0NBLFVBQUtELFNBQUwsQ0FBZSxTQUFmLEVBQTBCO0FBQ3hCUCxZQUR3QixrQkFDakJRLENBRGlCLEVBQ2Q7QUFDUixZQUFJaUIsWUFBWSxlQUFLQyxjQUFMLENBQW9CLFdBQXBCLENBQWhCO0FBQ0FsQixVQUFFSSxJQUFGLENBQU9hLFNBQVAsR0FBbUJBLFNBQW5CO0FBQ0EsWUFBSUEsU0FBSixFQUFlO0FBQ2JqQixZQUFFbUIsTUFBRixDQUFTRixTQUFULEdBQXFCQSxTQUFyQjtBQUNEO0FBQ0RoQixnQkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EsZUFBT0EsQ0FBUDtBQUNELE9BVHVCO0FBVXhCRyxhQVZ3QixtQkFVaEJILENBVmdCLEVBVWI7QUFDVCxZQUFJQSxFQUFFSSxJQUFGLENBQU9DLE1BQVAsS0FBa0IsR0FBdEIsRUFBMkI7QUFDekJKLGtCQUFRQyxHQUFSLENBQVksWUFBWjtBQUNBLHlCQUFLSSxnQkFBTDtBQUNBLHlCQUFLQyxTQUFMLENBQWU7QUFDYkMsbUJBQU8sTUFETTtBQUViQyxxQkFBUyxPQUZJO0FBR2JOLHFCQUFTLGlCQUFTTyxHQUFULEVBQWM7QUFDckIsa0JBQUlBLElBQUlDLE9BQVIsRUFBaUI7QUFDZiwrQkFBS0MsUUFBTCxDQUFjO0FBQ1pDLHVCQUFLLE9BRE87QUFFWlYseUJBRlkscUJBRUY7QUFDUix5QkFBS1csS0FBTDtBQUNEO0FBSlcsaUJBQWQ7QUFNRCxlQVBELE1BT08sSUFBSUosSUFBSUssTUFBUixFQUFnQixDQUFFO0FBQzFCO0FBWlksV0FBZjtBQWNEO0FBQ0QsZUFBT2YsQ0FBUDtBQUNELE9BOUJ1QjtBQStCeEJnQixVQS9Cd0IsZ0JBK0JuQmhCLENBL0JtQixFQStCaEI7QUFDTkMsZ0JBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsZUFBT0YsQ0FBUDtBQUNEO0FBbEN1QixLQUExQjtBQXZDWTtBQTJFYjs7Ozt3Q0FDa0M7QUFBQSxVQUFqQlEsS0FBaUIsdUVBQVQsT0FBUzs7QUFDakMsYUFBTztBQUNMQSxlQUFPQSxLQURGO0FBRUxZLGNBQU0sY0FGRDtBQUdMO0FBQ0FqQixpQkFBUyxpQkFBU08sR0FBVCxFQUFjO0FBQ3JCO0FBQ0FULGtCQUFRQyxHQUFSLENBQVlRLElBQUlXLE1BQWhCO0FBQ0QsU0FQSTtBQVFMTCxjQUFNLGNBQVNOLEdBQVQsRUFBYztBQUNsQjtBQUNBVCxrQkFBUUMsR0FBUixDQUFZUSxJQUFJVyxNQUFoQjtBQUNEO0FBWEksT0FBUDtBQWFEOzs7MkJBQ01qQixJLEVBQU07QUFDWCxXQUFLVCxVQUFMLENBQWdCRSxVQUFoQixHQUE2Qk8sS0FBS2tCLEtBQWxDO0FBQ0Q7OzswQkFDS0MsQyxFQUFHO0FBQ1AsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxtQkFBVyxZQUFNO0FBQ2ZGLGtCQUFRLGtCQUFSO0FBQ0QsU0FGRCxFQUVHRixJQUFJLElBRlA7QUFHRCxPQUpNLENBQVA7QUFLRDs7Ozs7Ozs7O0FBR0N0Qix3QkFBUUMsR0FBUixDQUFZLEtBQVo7O3VCQUNNLEtBQUswQixLQUFMLENBQVcsQ0FBWCxDOzs7QUFDTjNCLHdCQUFRQyxHQUFSLENBQVksS0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRCQUVNO0FBQ04scUJBQUtZLEtBQUwsQ0FBVztBQUNUWCxpQkFBUyxpQkFBU08sR0FBVCxFQUFjO0FBQ3JCLGNBQUlBLElBQUltQixJQUFSLEVBQWM7QUFDWiwyQkFBS0MsT0FBTCxDQUFhO0FBQ1hqQixtQkFBSyxnQkFBUWtCLGVBREY7QUFFWDNCLG9CQUFNO0FBQ0o0Qix1QkFBTyxvQkFESDtBQUVKSCxzQkFBTW5CLElBQUltQjtBQUZOLGVBRks7QUFNWEksc0JBQVEsTUFORztBQU9YOUIscUJBUFcsbUJBT0hPLEdBUEcsRUFPRTtBQUNYVCx3QkFBUUMsR0FBUixDQUFZUSxHQUFaO0FBQ0EsK0JBQUt3QixjQUFMLENBQW9CLFdBQXBCLEVBQWlDeEIsSUFBSU4sSUFBSixDQUFTYSxTQUExQztBQUNBLCtCQUFLaUIsY0FBTCxDQUFvQixRQUFwQixFQUE4QnhCLElBQUlOLElBQUosQ0FBUytCLE1BQXZDO0FBQ0Q7QUFYVSxhQUFiO0FBYUQsV0FkRCxNQWNPO0FBQ0xsQyxvQkFBUUMsR0FBUixDQUFZLGVBQWVRLElBQUlXLE1BQS9CO0FBQ0Q7QUFDRjtBQW5CUSxPQUFYO0FBcUJEOzs7Z0NBQ1dlLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBSzFDLFVBQUwsQ0FBZ0JDLFFBQXBCLEVBQThCO0FBQzVCLGVBQU8sS0FBS0QsVUFBTCxDQUFnQkMsUUFBdkI7QUFDRDtBQUNELHFCQUFLMEMsV0FBTCxDQUFpQjtBQUNmbkMsZUFEZSxtQkFDUE8sR0FETyxFQUNGO0FBQ1gyQixlQUFLMUMsVUFBTCxDQUFnQkMsUUFBaEIsR0FBMkJjLEdBQTNCO0FBQ0EwQixnQkFBTUEsR0FBRzFCLEdBQUgsQ0FBTjtBQUNEO0FBSmMsT0FBakI7QUFNRDs7OytCQUNVO0FBQ1QscUJBQUs2QixZQUFMLENBQWtCO0FBQ2hCcEMsaUJBQVMsbUJBQVc7QUFDbEJGLGtCQUFRQyxHQUFSLENBQVksT0FBWjtBQUNELFNBSGU7QUFJaEJjLGNBQU0sZ0JBQVc7QUFDZmYsa0JBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0EsZUFBS1ksS0FBTDtBQUNEO0FBUGUsT0FBbEI7QUFTRDs7OztFQS9LMEIsZUFBSzBCLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbmltcG9ydCB7XHJcbiAgc2VydmljZVxyXG59IGZyb20gJy4vY29uZmlnLmpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2FjdGl2YXRpb24nLFxyXG4gICAgICAncGFnZXMvY2FtZXJhJyxcclxuICAgICAgJ3BhZ2VzL2FjY29tcGxpc2gnLFxyXG4gICAgICAncGFnZXMvb2xkQWN0aXZhdGlvbidcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgJ2JhY2tncm91bmRUZXh0U3R5bGUnOiAnbGlnaHQnLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjMUFBRDE5JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnV2VDaGF0JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnV2VDaGF0J1xyXG4gICAgfSxcclxuICAgICdkZWJ1Zyc6IHRydWVcclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIHVzZXJpZGNhcmQ6IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3VwbG9hZEZpbGUnLCB7XHJcbiAgICAgIGNvbmZpZyhwKSB7XHJcbiAgICAgICAgLy8gbGV0IHNlc3Npb25JZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25JZCcpXHJcbiAgICAgICAgLy8gcC5mb3JtRGF0YS5zZXNzaW9uSWQgPSBzZXNzaW9uSWRcclxuICAgICAgICAvLyBpZiAoc2Vzc2lvbklkKSB7XHJcbiAgICAgICAgLy8gICBwLmhlYWRlci5zZXNzaW9uSWQgPSBzZXNzaW9uSWRcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgY29uc29sZS5sb2cocClcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHApIHtcclxuICAgICAgICBpZiAocC5kYXRhLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbuW3sui/h+acnycpXHJcbiAgICAgICAgICB3ZXB5LmNsZWFyU3RvcmFnZVN5bmMoKVxyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+eZu+W9lei/h+acnycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fph43mlrDnmbvlvZUnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6ICdpbmRleCcsXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQVBJ6LCD55So5aSx6LSlJylcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XHJcbiAgICAgIGNvbmZpZyhwKSB7XHJcbiAgICAgICAgbGV0IHNlc3Npb25JZCA9IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25JZCcpXHJcbiAgICAgICAgcC5kYXRhLnNlc3Npb25JZCA9IHNlc3Npb25JZFxyXG4gICAgICAgIGlmIChzZXNzaW9uSWQpIHtcclxuICAgICAgICAgIHAuaGVhZGVyLnNlc3Npb25JZCA9IHNlc3Npb25JZFxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhwKVxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocCkge1xyXG4gICAgICAgIGlmIChwLmRhdGEuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXNzaW9u5bey6L+H5pyfJylcclxuICAgICAgICAgIHdlcHkuY2xlYXJTdG9yYWdlU3luYygpXHJcbiAgICAgICAgICB3ZXB5LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn55m75b2V6L+H5pyfJyxcclxuICAgICAgICAgICAgY29udGVudDogJ+ivt+mHjeaWsOeZu+W9lScsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgd2VweS5yZUxhdW5jaCh7XHJcbiAgICAgICAgICAgICAgICAgIHVybDogJ2luZGV4JyxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvZ2luKClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jYW5jZWwpIHt9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdBUEnosIPnlKjlpLHotKUnKVxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHRpdGxlID0gJ+W+ruS/oeS8muWRmOWNoScpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRpdGxlOiB0aXRsZSxcclxuICAgICAgcGF0aDogJy9wYWdlcy9pbmRleCcsXHJcbiAgICAgIC8vIGltYWdlVXJsOiAnJyxcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgLy8g6L2s5Y+R5oiQ5YqfXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZylcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgLy8g6L2s5Y+R5aSx6LSlXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzLmVyck1zZylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBvblNob3coZGF0YSkge1xyXG4gICAgdGhpcy5nbG9iYWxEYXRhLnVzZXJpZGNhcmQgPSBkYXRhLnF1ZXJ5XHJcbiAgfVxyXG4gIHNsZWVwKHMpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHJlc29sdmUoJ3Byb21pc2UgcmVzb2x2ZWQnKVxyXG4gICAgICB9LCBzICogMTAwMClcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBhc3luYyB0ZXN0QXN5bmMoKSB7XHJcbiAgICBjb25zb2xlLmxvZygn5oiR5YWI5YiwJylcclxuICAgIGF3YWl0IHRoaXMuc2xlZXAoMylcclxuICAgIGNvbnNvbGUubG9nKCfmiJHlkI7liLAnKVxyXG4gIH1cclxuICBsb2dpbigpIHtcclxuICAgIHdlcHkubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgICAgIHVybDogc2VydmljZS5qc2NvZGVUb1Nlc3Npb24sXHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICBhcHBpZDogJ3d4MzJhMDM0ODE3MmY2NjI3MCcsXHJcbiAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25JZCcsIHJlcy5kYXRhLnNlc3Npb25JZClcclxuICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdvcGVuSWQnLCByZXMuZGF0YS5vcGVuSWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfnmbvlvZXmgIHlpLHotKXvvIEnICsgcmVzLmVyck1zZylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXNcclxuICAgICAgICBjYiAmJiBjYihyZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgd2VweS5jaGVja1Nlc3Npb24oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5pyq6L+H5pyfJylcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9lei/h+acnycpXHJcbiAgICAgICAgdGhpcy5sb2dpbigpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XG4iXX0=