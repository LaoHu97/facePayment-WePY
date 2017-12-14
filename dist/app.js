'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

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
      pages: ['pages/index', 'pages/camera', 'pages/accomplish'],
      window: {
        'backgroundTextStyle': 'light',
        'navigationBarBackgroundColor': '#1AAD19',
        'navigationBarTitleText': 'WeChat',
        'navigationBarTextStyle': 'WeChat'
      },
      "debug": true
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'logoing',
    value: function logoing() {
      _wepy2.default.login({
        success: function success(res) {
          if (res.code) {
            console.log(res.code);
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
          that.globalData.userInfo = res.userInfo;
          cb && cb(res.userInfo);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiZXJyTXNnIiwiY2IiLCJ0aGF0IiwiZ2V0VXNlckluZm8iLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFzQkUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQW5CZEEsTUFtQmMsR0FuQkw7QUFDUEMsYUFBTyxDQUNMLGFBREssRUFFTCxjQUZLLEVBR0wsa0JBSEssQ0FEQTtBQU1QQyxjQUFRO0FBQ04sK0JBQXVCLE9BRGpCO0FBRU4sd0NBQWdDLFNBRjFCO0FBR04sa0NBQTBCLFFBSHBCO0FBSU4sa0NBQTBCO0FBSnBCLE9BTkQ7QUFZUCxlQUFTO0FBWkYsS0FtQks7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7Ozs2QkFFUSxDQUVSOzs7OEJBQ1M7QUFDUixxQkFBS0MsS0FBTCxDQUFXO0FBQ1RDLGlCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsY0FBSUEsSUFBSUMsSUFBUixFQUFjO0FBQ1pDLG9CQUFRQyxHQUFSLENBQVlILElBQUlDLElBQWhCO0FBQ0QsV0FGRCxNQUVPO0FBQ0xDLG9CQUFRQyxHQUFSLENBQVksZUFBZUgsSUFBSUksTUFBL0I7QUFDRDtBQUNGO0FBUFEsT0FBWDtBQVNEOzs7Z0NBQ1dDLEUsRUFBSTtBQUNkLFVBQU1DLE9BQU8sSUFBYjtBQUNBLFVBQUksS0FBS1gsVUFBTCxDQUFnQkMsUUFBcEIsRUFBOEI7QUFDNUIsZUFBTyxLQUFLRCxVQUFMLENBQWdCQyxRQUF2QjtBQUNEO0FBQ0QscUJBQUtXLFdBQUwsQ0FBaUI7QUFDZlIsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hNLGVBQUtYLFVBQUwsQ0FBZ0JDLFFBQWhCLEdBQTJCSSxJQUFJSixRQUEvQjtBQUNBUyxnQkFBTUEsR0FBR0wsSUFBSUosUUFBUCxDQUFOO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBbEQwQixlQUFLWSxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgcGFnZXM6IFtcclxuICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgJ3BhZ2VzL2NhbWVyYScsXHJcbiAgICAgICdwYWdlcy9hY2NvbXBsaXNoJ1xyXG4gICAgXSxcclxuICAgIHdpbmRvdzoge1xyXG4gICAgICAnYmFja2dyb3VuZFRleHRTdHlsZSc6ICdsaWdodCcsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yJzogJyMxQUFEMTknLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhclRpdGxlVGV4dCc6ICdXZUNoYXQnLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhclRleHRTdHlsZSc6ICdXZUNoYXQnXHJcbiAgICB9LFxyXG4gICAgXCJkZWJ1Z1wiOiB0cnVlXHJcbiAgfVxyXG5cclxuICBnbG9iYWxEYXRhID0ge1xyXG4gICAgdXNlckluZm86IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gIH1cclxuXHJcbiAgb25TaG93KCkge1xyXG5cclxuICB9XHJcbiAgbG9nb2luZygpIHtcclxuICAgIHdlcHkubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBpZiAocmVzLmNvZGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5jb2RlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn6I635Y+W55So5oi355m75b2V5oCB5aSx6LSl77yBJyArIHJlcy5lcnJNc2cpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBnZXRVc2VySW5mbyhjYikge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXNcclxuICAgIGlmICh0aGlzLmdsb2JhbERhdGEudXNlckluZm8pIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2xvYmFsRGF0YS51c2VySW5mb1xyXG4gICAgfVxyXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XHJcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgdGhhdC5nbG9iYWxEYXRhLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXHJcbiAgICAgICAgY2IgJiYgY2IocmVzLnVzZXJJbmZvKVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufVxuIl19