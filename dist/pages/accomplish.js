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
// import {
//   service
// } from '../config.js'


var Accomplish = function (_wepy$page) {
  _inherits(Accomplish, _wepy$page);

  function Accomplish() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Accomplish);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Accomplish.__proto__ || Object.getPrototypeOf(Accomplish)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '认证结果'
    }, _this.components = {
      foot: _foot2.default
    }, _this.data = {
      message: '',
      icon: 'success'
    }, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Accomplish, [{
    key: 'onLoad',
    value: function onLoad(query) {
      this.message = query.message;
      if (query.status !== '200') {
        this.icon = 'warn';
      } else {
        this.icon = 'success';
      }
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return Accomplish;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Accomplish , 'pages/accomplish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tcGxpc2guanMiXSwibmFtZXMiOlsiQWNjb21wbGlzaCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJtZXNzYWdlIiwiaWNvbiIsIm1ldGhvZHMiLCJldmVudHMiLCJxdWVyeSIsInN0YXR1cyIsInJlcyIsIiRwYXJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBSUE7Ozs7Ozs7Ozs7O0FBSEE7QUFDQTtBQUNBOzs7SUFFcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsSSxHQUFPO0FBQ0xDLGVBQVMsRUFESjtBQUVMQyxZQUFNO0FBRkQsSyxRQUlQQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7MkJBQ0ZDLEssRUFBTztBQUNaLFdBQUtKLE9BQUwsR0FBZUksTUFBTUosT0FBckI7QUFDQSxVQUFJSSxNQUFNQyxNQUFOLEtBQWlCLEtBQXJCLEVBQTRCO0FBQzFCLGFBQUtKLElBQUwsR0FBWSxNQUFaO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBS0EsSUFBTCxHQUFZLFNBQVo7QUFDRDtBQUNGOzs7c0NBQ2lCSyxHLEVBQUs7QUFDckIsYUFBTyxLQUFLQyxPQUFMLENBQWFDLGlCQUFiLENBQStCLFlBQS9CLENBQVA7QUFDRDs7OztFQTNCcUMsZUFBS0MsSTs7a0JBQXhCZixVIiwiZmlsZSI6ImFjY29tcGxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbi8vIGltcG9ydCB7XHJcbi8vICAgc2VydmljZVxyXG4vLyB9IGZyb20gJy4uL2NvbmZpZy5qcydcclxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvbXBsaXNoIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6k6K+B57uT5p6cJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIG1lc3NhZ2U6ICcnLFxyXG4gICAgaWNvbjogJ3N1Y2Nlc3MnXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcblxyXG4gIH1cclxuXHJcbiAgZXZlbnRzID0ge31cclxuICBvbkxvYWQocXVlcnkpIHtcclxuICAgIHRoaXMubWVzc2FnZSA9IHF1ZXJ5Lm1lc3NhZ2VcclxuICAgIGlmIChxdWVyeS5zdGF0dXMgIT09ICcyMDAnKSB7XHJcbiAgICAgIHRoaXMuaWNvbiA9ICd3YXJuJ1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pY29uID0gJ3N1Y2Nlc3MnXHJcbiAgICB9XHJcbiAgfVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcclxuICB9XHJcbn1cbiJdfQ==