'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _config = require('./../config.js');

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

    var _temp, _this2, _ret;

    _classCallCheck(this, Camera);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Camera.__proto__ || Object.getPrototypeOf(Camera)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '拍照认证'
    }, _this2.components = {
      foot: _foot2.default
    }, _this2.data = {
      cameraView: true,
      src: ''
    }, _this2.methods = {
      takePhoto: function takePhoto() {
        var _this = this;
        var ctx = _wepy2.default.createCameraContext();
        ctx.takePhoto({
          quality: 'low',
          success: function success(res) {
            _this.cameraView = false;
            _this.src = res.tempImagePath;
            _this.$apply();
          }
        });
      },
      error: function error(e) {
        console.log(e.detail);
      },
      uploadFile: function uploadFile() {
        console.log(this.src);
        _wepy2.default.showLoading({
          title: '正在上传'
        });
        _wepy2.default.uploadFile({
          url: _config.service.addFacePerson,
          filePath: this.src,
          name: 'imageUrl',
          formData: {
            'person_name': 'liuyifei',
            'phone': '12345678'
          },
          success: function success(res) {
            var _JSON$parse = JSON.parse(res.data),
                status = _JSON$parse.status,
                message = _JSON$parse.message;

            console.log(res);
            _wepy2.default.navigateTo({
              url: 'accomplish?status=' + status + '&message=' + message,
              success: function success() {
                _wepy2.default.hideLoading();
              }
            });
          }
        });
      },
      reTakePhoto: function reTakePhoto() {
        this.cameraView = true;
        this.$apply();
      }
    }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Camera, [{
    key: 'onShow',
    value: function onShow() {}
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return Camera;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Camera , 'pages/camera'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwiY2FtZXJhVmlldyIsInNyYyIsIm1ldGhvZHMiLCJ0YWtlUGhvdG8iLCJfdGhpcyIsImN0eCIsImNyZWF0ZUNhbWVyYUNvbnRleHQiLCJxdWFsaXR5Iiwic3VjY2VzcyIsInJlcyIsInRlbXBJbWFnZVBhdGgiLCIkYXBwbHkiLCJlcnJvciIsImUiLCJjb25zb2xlIiwibG9nIiwiZGV0YWlsIiwidXBsb2FkRmlsZSIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJ1cmwiLCJhZGRGYWNlUGVyc29uIiwiZmlsZVBhdGgiLCJuYW1lIiwiZm9ybURhdGEiLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwibmF2aWdhdGVUbyIsImhpZGVMb2FkaW5nIiwicmVUYWtlUGhvdG8iLCJldmVudHMiLCIkcGFyZW50Iiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUdBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3lMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFNBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssU0FJYkMsSSxHQUFPO0FBQ0xDLGtCQUFZLElBRFA7QUFFTEMsV0FBSztBQUZBLEssU0FJUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJQyxRQUFRLElBQVo7QUFDQSxZQUFNQyxNQUFNLGVBQUtDLG1CQUFMLEVBQVo7QUFDQUQsWUFBSUYsU0FBSixDQUFjO0FBQ1pJLG1CQUFTLEtBREc7QUFFWkMsbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkwsa0JBQU1KLFVBQU4sR0FBbUIsS0FBbkI7QUFDQUksa0JBQU1ILEdBQU4sR0FBWVEsSUFBSUMsYUFBaEI7QUFDQU4sa0JBQU1PLE1BQU47QUFDRDtBQU5XLFNBQWQ7QUFRRCxPQVpPO0FBYVJDLFdBYlEsaUJBYUZDLENBYkUsRUFhQztBQUNQQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFkO0FBQ0QsT0FmTztBQWdCUkMsZ0JBaEJRLHdCQWdCSztBQUNYSCxnQkFBUUMsR0FBUixDQUFZLEtBQUtkLEdBQWpCO0FBQ0EsdUJBQUtpQixXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPO0FBRFEsU0FBakI7QUFHQSx1QkFBS0YsVUFBTCxDQUFnQjtBQUNkRyxlQUFLLGdCQUFRQyxhQURDO0FBRWRDLG9CQUFVLEtBQUtyQixHQUZEO0FBR2RzQixnQkFBTSxVQUhRO0FBSWRDLG9CQUFVO0FBQ1IsMkJBQWUsVUFEUDtBQUVSLHFCQUFTO0FBRkQsV0FKSTtBQVFkaEIsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUFBLDhCQUlqQmdCLEtBQUtDLEtBQUwsQ0FBV2pCLElBQUlWLElBQWYsQ0FKaUI7QUFBQSxnQkFFbkI0QixNQUZtQixlQUVuQkEsTUFGbUI7QUFBQSxnQkFHbkJDLE9BSG1CLGVBR25CQSxPQUhtQjs7QUFLckJkLG9CQUFRQyxHQUFSLENBQVlOLEdBQVo7QUFDQSwyQkFBS29CLFVBQUwsQ0FBZ0I7QUFDZFQsbUJBQUssdUJBQXVCTyxNQUF2QixHQUFnQyxXQUFoQyxHQUE4Q0MsT0FEckM7QUFFZHBCLHFCQUZjLHFCQUVKO0FBQ1IsK0JBQUtzQixXQUFMO0FBQ0Q7QUFKYSxhQUFoQjtBQU1EO0FBcEJhLFNBQWhCO0FBc0JELE9BM0NPO0FBNENSQyxpQkE1Q1EseUJBNENNO0FBQ1osYUFBSy9CLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxhQUFLVyxNQUFMO0FBQ0Q7QUEvQ08sSyxTQWlEVnFCLE0sR0FBUyxFOzs7Ozs2QkFDQSxDQUFFOzs7c0NBQ092QixHLEVBQUs7QUFDckIsYUFBTyxLQUFLd0IsT0FBTCxDQUFhQyxpQkFBYixDQUErQixZQUEvQixDQUFQO0FBQ0Q7Ozs7RUFqRWlDLGVBQUtDLEk7O2tCQUFwQnpDLE0iLCJmaWxlIjoiY2FtZXJhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge1xyXG4gIHNlcnZpY2VcclxufSBmcm9tICcuLi9jb25maWcuanMnXHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ouN54Wn6K6k6K+BJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuICAgIGNhbWVyYVZpZXc6IHRydWUsXHJcbiAgICBzcmM6ICcnXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YWtlUGhvdG8oKSB7XHJcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgY29uc3QgY3R4ID0gd2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KClcclxuICAgICAgY3R4LnRha2VQaG90byh7XHJcbiAgICAgICAgcXVhbGl0eTogJ2xvdycsXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgX3RoaXMuY2FtZXJhVmlldyA9IGZhbHNlXHJcbiAgICAgICAgICBfdGhpcy5zcmMgPSByZXMudGVtcEltYWdlUGF0aFxyXG4gICAgICAgICAgX3RoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZXJyb3IoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbClcclxuICAgIH0sXHJcbiAgICB1cGxvYWRGaWxlKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNyYylcclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfmraPlnKjkuIrkvKAnXHJcbiAgICAgIH0pXHJcbiAgICAgIHdlcHkudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgdXJsOiBzZXJ2aWNlLmFkZEZhY2VQZXJzb24sXHJcbiAgICAgICAgZmlsZVBhdGg6IHRoaXMuc3JjLFxyXG4gICAgICAgIG5hbWU6ICdpbWFnZVVybCcsXHJcbiAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICdwZXJzb25fbmFtZSc6ICdsaXV5aWZlaScsXHJcbiAgICAgICAgICAncGhvbmUnOiAnMTIzNDU2NzgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIHN0YXR1cyxcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgfSA9IEpTT04ucGFyc2UocmVzLmRhdGEpXHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdhY2NvbXBsaXNoP3N0YXR1cz0nICsgc3RhdHVzICsgJyZtZXNzYWdlPScgKyBtZXNzYWdlLFxyXG4gICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICByZVRha2VQaG90bygpIHtcclxuICAgICAgdGhpcy5jYW1lcmFWaWV3ID0gdHJ1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgb25TaG93KCkge31cclxuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcclxuICAgIHJldHVybiB0aGlzLiRwYXJlbnQub25TaGFyZUFwcE1lc3NhZ2UoJ+aCqOacieS4gOW8oOS8muWRmOWNoeW+hemihuWPlicpXHJcbiAgfVxyXG59XG4iXX0=