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

    var _temp, _this2, _ret;

    _classCallCheck(this, Camera);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Camera.__proto__ || Object.getPrototypeOf(Camera)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '拍照认证'
    }, _this2.components = {
      foot: _foot2.default
    }, _this2.data = {}, _this2.methods = {
      takePhoto: function takePhoto() {
        var _this = this;
        _wepy2.default.showLoading({
          title: '加载中',
          mask: true
        });
        var ctx = _wepy2.default.createCameraContext();
        ctx.takePhoto({
          quality: 'low',
          success: function success(res) {
            _this.uploadFile(res.tempImagePath);
            _wepy2.default.hideLoading();
          }
        });
      },
      error: function error(e) {
        console.log(e.detail);
      }
    }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Camera, [{
    key: 'uploadFile',
    value: function uploadFile(data) {
      console.log(data);
      console.log('正在上传图片');
      _wepy2.default.showLoading({
        title: '正在上传',
        mask: true
      });
      _wepy2.default.uploadFile({
        url: 'http://test.weupay.com/pay/api/face/addFacePerson',
        filePath: data,
        name: 'imageUrl',
        formData: {
          'person_name': 'liuyifei',
          'phone': '12345678'
        },
        success: function success(res) {
          console.log(res);
          console.log('图片上传完成');
          _wepy2.default.navigateTo({
            url: 'accomplish'
          });
          _wepy2.default.hideLoading();
        },
        fail: function fail(res) {
          _wepy2.default.hideLoading();
          console.log('图片上传失败');
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {}
  }]);

  return Camera;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Camera , 'pages/camera'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwibWV0aG9kcyIsInRha2VQaG90byIsIl90aGlzIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsIm1hc2siLCJjdHgiLCJjcmVhdGVDYW1lcmFDb250ZXh0IiwicXVhbGl0eSIsInN1Y2Nlc3MiLCJyZXMiLCJ1cGxvYWRGaWxlIiwidGVtcEltYWdlUGF0aCIsImhpZGVMb2FkaW5nIiwiZXJyb3IiLCJlIiwiY29uc29sZSIsImxvZyIsImRldGFpbCIsImV2ZW50cyIsInVybCIsImZpbGVQYXRoIiwibmFtZSIsImZvcm1EYXRhIiwibmF2aWdhdGVUbyIsImZhaWwiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLE07Ozs7Ozs7Ozs7Ozs7O3lMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFNBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssU0FJYkMsSSxHQUFPLEUsU0FHUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJQyxRQUFRLElBQVo7QUFDQSx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTyxLQURRO0FBRWZDLGdCQUFNO0FBRlMsU0FBakI7QUFJQSxZQUFNQyxNQUFNLGVBQUtDLG1CQUFMLEVBQVo7QUFDQUQsWUFBSUwsU0FBSixDQUFjO0FBQ1pPLG1CQUFTLEtBREc7QUFFWkMsbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQlIsa0JBQU1TLFVBQU4sQ0FBaUJELElBQUlFLGFBQXJCO0FBQ0EsMkJBQUtDLFdBQUw7QUFDRDtBQUxXLFNBQWQ7QUFPRCxPQWZPO0FBZ0JSQyxXQWhCUSxpQkFnQkZDLENBaEJFLEVBZ0JDO0FBQ1BDLGdCQUFRQyxHQUFSLENBQVlGLEVBQUVHLE1BQWQ7QUFDRDtBQWxCTyxLLFNBaURWQyxNLEdBQVMsRTs7Ozs7K0JBN0JFcEIsSSxFQUFNO0FBQ2ZpQixjQUFRQyxHQUFSLENBQVlsQixJQUFaO0FBQ0FpQixjQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLHFCQUFLZCxXQUFMLENBQWlCO0FBQ2ZDLGVBQU8sTUFEUTtBQUVmQyxjQUFNO0FBRlMsT0FBakI7QUFJQSxxQkFBS00sVUFBTCxDQUFnQjtBQUNkUyxhQUFLLG1EQURTO0FBRWRDLGtCQUFVdEIsSUFGSTtBQUdkdUIsY0FBTSxVQUhRO0FBSWRDLGtCQUFVO0FBQ1IseUJBQWUsVUFEUDtBQUVSLG1CQUFTO0FBRkQsU0FKSTtBQVFkZCxpQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCTSxrQkFBUUMsR0FBUixDQUFZUCxHQUFaO0FBQ0FNLGtCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNBLHlCQUFLTyxVQUFMLENBQWdCO0FBQ2RKLGlCQUFLO0FBRFMsV0FBaEI7QUFHQSx5QkFBS1AsV0FBTDtBQUNELFNBZmE7QUFnQmRZLGNBQU0sY0FBU2YsR0FBVCxFQUFjO0FBQ2xCLHlCQUFLRyxXQUFMO0FBQ0FHLGtCQUFRQyxHQUFSLENBQVksUUFBWjtBQUNEO0FBbkJhLE9BQWhCO0FBcUJEOzs7NkJBRVEsQ0FBRTs7OztFQTdEdUIsZUFBS1MsSTs7a0JBQXBCaEMsTSIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5ouN54Wn6K6k6K+BJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge1xyXG4gICAgZm9vdDogRm9vdFxyXG4gIH1cclxuXHJcbiAgZGF0YSA9IHtcclxuXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YWtlUGhvdG8oKSB7XHJcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nLFxyXG4gICAgICAgIG1hc2s6IHRydWVcclxuICAgICAgfSlcclxuICAgICAgY29uc3QgY3R4ID0gd2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KClcclxuICAgICAgY3R4LnRha2VQaG90byh7XHJcbiAgICAgICAgcXVhbGl0eTogJ2xvdycsXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgX3RoaXMudXBsb2FkRmlsZShyZXMudGVtcEltYWdlUGF0aClcclxuICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBlcnJvcihlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUuZGV0YWlsKVxyXG4gICAgfVxyXG4gIH1cclxuICB1cGxvYWRGaWxlKGRhdGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBjb25zb2xlLmxvZygn5q2j5Zyo5LiK5Lyg5Zu+54mHJylcclxuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xyXG4gICAgICB0aXRsZTogJ+ato+WcqOS4iuS8oCcsXHJcbiAgICAgIG1hc2s6IHRydWVcclxuICAgIH0pXHJcbiAgICB3ZXB5LnVwbG9hZEZpbGUoe1xyXG4gICAgICB1cmw6ICdodHRwOi8vdGVzdC53ZXVwYXkuY29tL3BheS9hcGkvZmFjZS9hZGRGYWNlUGVyc29uJyxcclxuICAgICAgZmlsZVBhdGg6IGRhdGEsXHJcbiAgICAgIG5hbWU6ICdpbWFnZVVybCcsXHJcbiAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgJ3BlcnNvbl9uYW1lJzogJ2xpdXlpZmVpJyxcclxuICAgICAgICAncGhvbmUnOiAnMTIzNDU2NzgnXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICBjb25zb2xlLmxvZygn5Zu+54mH5LiK5Lyg5a6M5oiQJylcclxuICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnYWNjb21wbGlzaCdcclxuICAgICAgICB9KVxyXG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICB9LFxyXG4gICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICBjb25zb2xlLmxvZygn5Zu+54mH5LiK5Lyg5aSx6LSlJylcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcbiAgZXZlbnRzID0ge31cclxuICBvblNob3coKSB7fVxyXG59XG4iXX0=