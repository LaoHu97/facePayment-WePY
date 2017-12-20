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

var Camera = function (_wepy$page) {
  _inherits(Camera, _wepy$page);

  function Camera() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Camera);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Camera.__proto__ || Object.getPrototypeOf(Camera)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '拍照认证'
    }, _this.components = {
      foot: _foot2.default
    }, _this.data = {}, _this.methods = {
      takePhoto: function takePhoto() {
        var ctx = _wepy2.default.createCameraContext();
        ctx.takePhoto({
          quality: 'low',
          success: function success(res) {
            console.log(res.tempImagePath);
          }
        });
      },
      error: function error(e) {
        console.log(e.detail);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Camera, [{
    key: 'onShow',

    // Other properties
    value: function onShow() {}
  }]);

  return Camera;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Camera , 'pages/camera'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwibWV0aG9kcyIsInRha2VQaG90byIsImN0eCIsImNyZWF0ZUNhbWVyYUNvbnRleHQiLCJxdWFsaXR5Iiwic3VjY2VzcyIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ0ZW1wSW1hZ2VQYXRoIiwiZXJyb3IiLCJlIiwiZGV0YWlsIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7OztzTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxRQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFFBSWJDLEksR0FBTyxFLFFBR1BDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1YsWUFBTUMsTUFBTSxlQUFLQyxtQkFBTCxFQUFaO0FBQ0FELFlBQUlELFNBQUosQ0FBYztBQUNaRyxtQkFBUyxLQURHO0FBRVpDLG1CQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJDLG9CQUFRQyxHQUFSLENBQVlGLElBQUlHLGFBQWhCO0FBQ0Q7QUFKVyxTQUFkO0FBTUQsT0FUTztBQVVSQyxXQVZRLGlCQVVGQyxDQVZFLEVBVUM7QUFDUEosZ0JBQVFDLEdBQVIsQ0FBWUcsRUFBRUMsTUFBZDtBQUNEO0FBWk8sSyxRQWVWQyxNLEdBQVMsRTs7Ozs7O0FBQ1Q7NkJBQ1MsQ0FFUjs7OztFQTlCaUMsZUFBS0MsSTs7a0JBQXBCcEIsTSIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ouN54Wn6K6k6K+BJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YWtlUGhvdG8oKSB7XHJcbiAgICAgIGNvbnN0IGN0eCA9IHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgpXHJcbiAgICAgIGN0eC50YWtlUGhvdG8oe1xyXG4gICAgICAgIHF1YWxpdHk6ICdsb3cnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy50ZW1wSW1hZ2VQYXRoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBlcnJvcihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzID0ge31cclxuICAvLyBPdGhlciBwcm9wZXJ0aWVzXHJcbiAgb25TaG93KCkge1xyXG5cclxuICB9XHJcbn1cbiJdfQ==