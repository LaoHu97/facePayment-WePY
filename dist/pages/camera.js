'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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

  // Other properties
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
        _wepy2.default.navigateTo({
          url: 'accomplish?url=./dsafsa/sadfa'
        });
        var ctx = _wepy2.default.createCameraContext();
        ctx.takePhoto({
          quality: 'low',
          success: function success(res) {}
        });
      },
      error: function error(e) {
        console.log(e.detail);
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Camera;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Camera , 'pages/camera'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwibWV0aG9kcyIsInRha2VQaG90byIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJjdHgiLCJjcmVhdGVDYW1lcmFDb250ZXh0IiwicXVhbGl0eSIsInN1Y2Nlc3MiLCJyZXMiLCJlcnJvciIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwiZXZlbnRzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7O0FBOEJuQjs7Ozs7Ozs7Ozs7O3NMQTdCQUMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsSSxHQUFPLEUsUUFHUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHQSxZQUFNQyxNQUFNLGVBQUtDLG1CQUFMLEVBQVo7QUFDQUQsWUFBSUgsU0FBSixDQUFjO0FBQ1pLLG1CQUFTLEtBREc7QUFFWkMsbUJBQVMsaUJBQUNDLEdBQUQsRUFBUyxDQUVqQjtBQUpXLFNBQWQ7QUFNRCxPQVpPO0FBYVJDLFdBYlEsaUJBYUZDLENBYkUsRUFhQztBQUNQQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFkO0FBQ0Q7QUFmTyxLLFFBa0JWQyxNLEdBQVMsRTs7OztFQTdCeUIsZUFBS0MsSTs7a0JBQXBCckIsTSIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ouN54Wn6K6k6K+BJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YWtlUGhvdG8oKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnYWNjb21wbGlzaD91cmw9Li9kc2Fmc2Evc2FkZmEnXHJcbiAgICAgIH0pXHJcbiAgICAgIGNvbnN0IGN0eCA9IHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgpXHJcbiAgICAgIGN0eC50YWtlUGhvdG8oe1xyXG4gICAgICAgIHF1YWxpdHk6ICdsb3cnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGVycm9yKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBldmVudHMgPSB7fVxyXG4gIC8vIE90aGVyIHByb3BlcnRpZXNcclxufVxuIl19