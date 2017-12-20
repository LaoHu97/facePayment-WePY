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
      pages: ['pages/index', 'pages/camera', 'pages/accomplish', 'pages/index/table'],
      window: {
        'backgroundTextStyle': 'light',
        'navigationBarBackgroundColor': '#1AAD19',
        'navigationBarTitleText': 'WeChat',
        'navigationBarTextStyle': 'WeChat'
      }
    };
    _this.globalData = {
      userInfo: null
    };

    _this.use('requestfix');
    return _this;
  }

  _createClass(_default, [{
    key: 'onShow',
    value: function onShow(data) {
      console.log(data);
      if (data.referrerInfo.extraData) {
        _wepy2.default.navigateTo({
          url: 'camera' + '?code=' + data.referrerInfo.extraData.code + '&card_id=' + data.referrerInfo.extraData.card_id
        });
      }
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwicmVmZXJyZXJJbmZvIiwiZXh0cmFEYXRhIiwibmF2aWdhdGVUbyIsInVybCIsImNvZGUiLCJjYXJkX2lkIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBc0JFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFuQmRBLE1BbUJjLEdBbkJMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsY0FGSyxFQUdMLGtCQUhLLEVBSUwsbUJBSkssQ0FEQTtBQU9QQyxjQUFRO0FBQ04sK0JBQXVCLE9BRGpCO0FBRU4sd0NBQWdDLFNBRjFCO0FBR04sa0NBQTBCLFFBSHBCO0FBSU4sa0NBQTBCO0FBSnBCO0FBUEQsS0FtQks7QUFBQSxVQUpkQyxVQUljLEdBSkQ7QUFDWEMsZ0JBQVU7QUFEQyxLQUlDOztBQUVaLFVBQUtDLEdBQUwsQ0FBUyxZQUFUO0FBRlk7QUFHYjs7OzsyQkFDTUMsSSxFQUFNO0FBQ1hDLGNBQVFDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLFVBQUlBLEtBQUtHLFlBQUwsQ0FBa0JDLFNBQXRCLEVBQWlDO0FBQy9CLHVCQUFLQyxVQUFMLENBQWdCO0FBQ2RDLGVBQUssV0FBVyxRQUFYLEdBQXNCTixLQUFLRyxZQUFMLENBQWtCQyxTQUFsQixDQUE0QkcsSUFBbEQsR0FBeUQsV0FBekQsR0FBdUVQLEtBQUtHLFlBQUwsQ0FBa0JDLFNBQWxCLENBQTRCSTtBQUQxRixTQUFoQjtBQUdEO0FBQ0Y7Ozs7RUEvQjBCLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvY2FtZXJhJyxcclxuICAgICAgJ3BhZ2VzL2FjY29tcGxpc2gnLFxyXG4gICAgICAncGFnZXMvaW5kZXgvdGFibGUnXHJcbiAgICBdLFxyXG4gICAgd2luZG93OiB7XHJcbiAgICAgICdiYWNrZ3JvdW5kVGV4dFN0eWxlJzogJ2xpZ2h0JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3InOiAnIzFBQUQxOScsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyVGl0bGVUZXh0JzogJ1dlQ2hhdCcsXHJcbiAgICAgICduYXZpZ2F0aW9uQmFyVGV4dFN0eWxlJzogJ1dlQ2hhdCdcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpXHJcbiAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpXHJcbiAgfVxyXG4gIG9uU2hvdyhkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgaWYgKGRhdGEucmVmZXJyZXJJbmZvLmV4dHJhRGF0YSkge1xyXG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJ2NhbWVyYScgKyAnP2NvZGU9JyArIGRhdGEucmVmZXJyZXJJbmZvLmV4dHJhRGF0YS5jb2RlICsgJyZjYXJkX2lkPScgKyBkYXRhLnJlZmVycmVySW5mby5leHRyYURhdGEuY2FyZF9pZFxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxuIl19