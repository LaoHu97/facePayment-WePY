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
    // this.intercept('uploadFile', {
    //   config(p) {
    //     // let sessionId = wepy.getStorageSync('sessionId')
    //     // p.formData.sessionId = sessionId
    //     // if (sessionId) {
    //     //   p.header.sessionId = sessionId
    //     // }
    //     console.log(p)
    //     return p
    //   },
    //   success(p) {
    //     if (p.data.status === 400) {
    //       console.log('session已过期')
    //       wepy.clearStorageSync()
    //       wepy.showModal({
    //         title: '登录过期',
    //         content: '请重新登录',
    //         success: function(res) {
    //           if (res.confirm) {
    //             wepy.reLaunch({
    //               url: 'index',
    //               success() {
    //                 this.login()
    //               }
    //             })
    //           } else if (res.cancel) {}
    //         }
    //       })
    //     }
    //     return p
    //   },
    //   fail(p) {
    //     console.log('API调用失败')
    //     return p
    //   }
    // })
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
      console.log(extConfig);
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
              data: {
                appid: _wepy2.default.getStorageSync('appid'),
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJpZGNhcmQiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwic2Vzc2lvbklkIiwiZ2V0U3RvcmFnZVN5bmMiLCJkYXRhIiwiaGVhZGVyIiwiY29uc29sZSIsImxvZyIsInN1Y2Nlc3MiLCJzdGF0dXMiLCJyZW1vdmVTdG9yYWdlU3luYyIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsInJlcyIsImNvbmZpcm0iLCJyZUxhdW5jaCIsInVybCIsImxvZ2luIiwiY2FuY2VsIiwiZmFpbCIsInBhdGgiLCJlcnJNc2ciLCJxdWVyeSIsImV4dENvbmZpZyIsImdldEV4dENvbmZpZ1N5bmMiLCJzZXRTdG9yYWdlU3luYyIsImJ1c2luZXNzSW5mbyIsIm1pZCIsImFwcGlkIiwicyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInNsZWVwIiwiY29kZSIsInJlcXVlc3QiLCJqc2NvZGVUb1Nlc3Npb24iLCJtZXRob2QiLCJvcGVuSWQiLCJjYiIsInRoYXQiLCJnZXRVc2VySW5mbyIsImNoZWNrU2Vzc2lvbiIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBMkJFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUF0QmRBLE1Bc0JjLEdBdEJMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsa0JBRkssRUFHTCxjQUhLLEVBSUwsa0JBSkssRUFLTCxxQkFMSyxDQURBO0FBUVBDLGNBQVE7QUFDTiwrQkFBdUIsT0FEakI7QUFFTix3Q0FBZ0MsU0FGMUI7QUFHTixrQ0FBMEIsUUFIcEI7QUFJTixrQ0FBMEI7QUFKcEIsT0FSRDtBQWNQLGVBQVM7QUFkRixLQXNCSztBQUFBLFVBTGRDLFVBS2MsR0FMRDtBQUNYQyxnQkFBVSxJQURDO0FBRVhDLGtCQUFZ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RixrQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDRCxTQUhlO0FBSWhCYSxjQUFNLGdCQUFXO0FBQ2ZkLGtCQUFRQyxHQUFSLENBQVksTUFBWjtBQUNBLGVBQUtXLEtBQUw7QUFDRDtBQVBlLE9BQWxCO0FBU0Q7Ozs7RUFuTDBCLGVBQUsyQixHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5pbXBvcnQge1xyXG4gIHNlcnZpY2VcclxufSBmcm9tICcuL2NvbmZpZy5qcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIHBhZ2VzOiBbXHJcbiAgICAgICdwYWdlcy9pbmRleCcsXHJcbiAgICAgICdwYWdlcy9hY3RpdmF0aW9uJyxcclxuICAgICAgJ3BhZ2VzL2NhbWVyYScsXHJcbiAgICAgICdwYWdlcy9hY2NvbXBsaXNoJyxcclxuICAgICAgJ3BhZ2VzL29sZEFjdGl2YXRpb24nXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgICdiYWNrZ3JvdW5kVGV4dFN0eWxlJzogJ2xpZ2h0JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnIzFBQUQxOScsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ1dlQ2hhdCcsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJ1dlQ2hhdCdcclxuICAgIH0sXHJcbiAgICAnZGVidWcnOiB0cnVlXHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGwsXHJcbiAgICB1c2VyaWRjYXJkOiBudWxsXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHN1cGVyKClcclxuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4JylcclxuICAgIC8vIHRoaXMuaW50ZXJjZXB0KCd1cGxvYWRGaWxlJywge1xyXG4gICAgLy8gICBjb25maWcocCkge1xyXG4gICAgLy8gICAgIC8vIGxldCBzZXNzaW9uSWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdzZXNzaW9uSWQnKVxyXG4gICAgLy8gICAgIC8vIHAuZm9ybURhdGEuc2Vzc2lvbklkID0gc2Vzc2lvbklkXHJcbiAgICAvLyAgICAgLy8gaWYgKHNlc3Npb25JZCkge1xyXG4gICAgLy8gICAgIC8vICAgcC5oZWFkZXIuc2Vzc2lvbklkID0gc2Vzc2lvbklkXHJcbiAgICAvLyAgICAgLy8gfVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHApXHJcbiAgICAvLyAgICAgcmV0dXJuIHBcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgc3VjY2VzcyhwKSB7XHJcbiAgICAvLyAgICAgaWYgKHAuZGF0YS5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ3Nlc3Npb27lt7Lov4fmnJ8nKVxyXG4gICAgLy8gICAgICAgd2VweS5jbGVhclN0b3JhZ2VTeW5jKClcclxuICAgIC8vICAgICAgIHdlcHkuc2hvd01vZGFsKHtcclxuICAgIC8vICAgICAgICAgdGl0bGU6ICfnmbvlvZXov4fmnJ8nLFxyXG4gICAgLy8gICAgICAgICBjb250ZW50OiAn6K+36YeN5paw55m75b2VJyxcclxuICAgIC8vICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB3ZXB5LnJlTGF1bmNoKHtcclxuICAgIC8vICAgICAgICAgICAgICAgdXJsOiAnaW5kZXgnLFxyXG4gICAgLy8gICAgICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubG9naW4oKVxyXG4gICAgLy8gICAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICB9KVxyXG4gICAgLy8gICAgICAgICAgIH0gZWxzZSBpZiAocmVzLmNhbmNlbCkge31cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgfSlcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIHBcclxuICAgIC8vICAgfSxcclxuICAgIC8vICAgZmFpbChwKSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ0FQSeiwg+eUqOWksei0pScpXHJcbiAgICAvLyAgICAgcmV0dXJuIHBcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSlcclxuICAgIHRoaXMuaW50ZXJjZXB0KCdyZXF1ZXN0Jywge1xyXG4gICAgICBjb25maWcocCkge1xyXG4gICAgICAgIGxldCBzZXNzaW9uSWQgPSB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdzZXNzaW9uSWQnKVxyXG4gICAgICAgIHAuZGF0YS5zZXNzaW9uSWQgPSBzZXNzaW9uSWRcclxuICAgICAgICBpZiAoc2Vzc2lvbklkKSB7XHJcbiAgICAgICAgICBwLmhlYWRlci5zZXNzaW9uSWQgPSBzZXNzaW9uSWRcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2cocClcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBzdWNjZXNzKHApIHtcclxuICAgICAgICBpZiAocC5kYXRhLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnc2Vzc2lvbuW3sui/h+acnycpXHJcbiAgICAgICAgICB3ZXB5LnJlbW92ZVN0b3JhZ2VTeW5jKCdzZXNzaW9uSWQnKVxyXG4gICAgICAgICAgd2VweS5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ+eZu+W9lei/h+acnycsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfor7fph43mlrDnmbvlvZUnLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgIHdlcHkucmVMYXVuY2goe1xyXG4gICAgICAgICAgICAgICAgICB1cmw6ICdpbmRleCcsXHJcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuY2FuY2VsKSB7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsKHApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQVBJ6LCD55So5aSx6LSlJylcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBvblNoYXJlQXBwTWVzc2FnZSh0aXRsZSA9ICflvq7kv6HkvJrlkZjljaEnKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnLFxyXG4gICAgICAvLyBpbWFnZVVybDogJycsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KGRhdGEpIHtcclxuICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VyaWRjYXJkID0gZGF0YS5xdWVyeVxyXG4gICAgbGV0IGV4dENvbmZpZyA9IHdlcHkuZ2V0RXh0Q29uZmlnU3luYyA/IHdlcHkuZ2V0RXh0Q29uZmlnU3luYygpIDoge31cclxuICAgIGNvbnNvbGUubG9nKGV4dENvbmZpZylcclxuICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ21pZCcsIGV4dENvbmZpZy5idXNpbmVzc0luZm8ubWlkKVxyXG4gICAgd2VweS5zZXRTdG9yYWdlU3luYygnYXBwaWQnLCBleHRDb25maWcuYnVzaW5lc3NJbmZvLmFwcGlkKVxyXG4gIH1cclxuICBzbGVlcChzKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICByZXNvbHZlKCdwcm9taXNlIHJlc29sdmVkJylcclxuICAgICAgfSwgcyAqIDEwMDApXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgdGVzdEFzeW5jKCkge1xyXG4gICAgY29uc29sZS5sb2coJ+aIkeWFiOWIsCcpXHJcbiAgICBhd2FpdCB0aGlzLnNsZWVwKDMpXHJcbiAgICBjb25zb2xlLmxvZygn5oiR5ZCO5YiwJylcclxuICB9XHJcbiAgbG9naW4oKSB7XHJcbiAgICB3ZXB5LmxvZ2luKHtcclxuICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICB1cmw6IHNlcnZpY2UuanNjb2RlVG9TZXNzaW9uLFxyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgYXBwaWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2FwcGlkJyksXHJcbiAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICAgIHdlcHkuc2V0U3RvcmFnZVN5bmMoJ3Nlc3Npb25JZCcsIHJlcy5kYXRhLnNlc3Npb25JZClcclxuICAgICAgICAgICAgICB3ZXB5LnNldFN0b3JhZ2VTeW5jKCdvcGVuSWQnLCByZXMuZGF0YS5vcGVuSWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCfojrflj5bnlKjmiLfnmbvlvZXmgIHlpLHotKXvvIEnICsgcmVzLmVyck1zZylcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIGdldFVzZXJJbmZvKGNiKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpc1xyXG4gICAgaWYgKHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mbykge1xyXG4gICAgICByZXR1cm4gdGhpcy5nbG9iYWxEYXRhLnVzZXJJbmZvXHJcbiAgICB9XHJcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcclxuICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICB0aGF0Lmdsb2JhbERhdGEudXNlckluZm8gPSByZXNcclxuICAgICAgICBjYiAmJiBjYihyZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIG9uTGF1bmNoKCkge1xyXG4gICAgd2VweS5jaGVja1Nlc3Npb24oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygn55m75b2V5pyq6L+H5pyfJylcclxuICAgICAgfSxcclxuICAgICAgZmFpbDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ+eZu+W9lei/h+acnycpXHJcbiAgICAgICAgdGhpcy5sb2dpbigpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XG4iXX0=