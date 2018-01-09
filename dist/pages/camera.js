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
      src: '',
      formData: null
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
        _wepy2.default.showLoading({
          title: '正在上传'
        });
        _wepy2.default.uploadFile({
          url: _config.service.addFacePerson,
          filePath: this.src,
          name: 'imageUrl',
          formData: {
            'mid': _wepy2.default.getStorageSync('mid'),
            'name': this.formData.name,
            'phone': this.formData.phone,
            'idcard': this.formData.idcard,
            'date': this.formData.date,
            'mailbox': this.formData.mailbox
          },
          success: function success(res) {
            var _JSON$parse = JSON.parse(res.data),
                status = _JSON$parse.status,
                message = _JSON$parse.message;

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
    key: 'onLoad',
    value: function onLoad(query) {
      this.formData = query;
      this.$apply();
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return Camera;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Camera , 'pages/camera'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwiY2FtZXJhVmlldyIsInNyYyIsImZvcm1EYXRhIiwibWV0aG9kcyIsInRha2VQaG90byIsIl90aGlzIiwiY3R4IiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInF1YWxpdHkiLCJzdWNjZXNzIiwicmVzIiwidGVtcEltYWdlUGF0aCIsIiRhcHBseSIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ1cGxvYWRGaWxlIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInVybCIsImFkZEZhY2VQZXJzb24iLCJmaWxlUGF0aCIsIm5hbWUiLCJnZXRTdG9yYWdlU3luYyIsInBob25lIiwiaWRjYXJkIiwiZGF0ZSIsIm1haWxib3giLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwibmF2aWdhdGVUbyIsImhpZGVMb2FkaW5nIiwicmVUYWtlUGhvdG8iLCJldmVudHMiLCJxdWVyeSIsIiRwYXJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7eUxBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssU0FHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxTQUliQyxJLEdBQU87QUFDTEMsa0JBQVksSUFEUDtBQUVMQyxXQUFLLEVBRkE7QUFHTEMsZ0JBQVU7QUFITCxLLFNBS1BDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1YsWUFBSUMsUUFBUSxJQUFaO0FBQ0EsWUFBTUMsTUFBTSxlQUFLQyxtQkFBTCxFQUFaO0FBQ0FELFlBQUlGLFNBQUosQ0FBYztBQUNaSSxtQkFBUyxLQURHO0FBRVpDLG1CQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJMLGtCQUFNTCxVQUFOLEdBQW1CLEtBQW5CO0FBQ0FLLGtCQUFNSixHQUFOLEdBQVlTLElBQUlDLGFBQWhCO0FBQ0FOLGtCQUFNTyxNQUFOO0FBQ0Q7QUFOVyxTQUFkO0FBUUQsT0FaTztBQWFSQyxXQWJRLGlCQWFGQyxDQWJFLEVBYUM7QUFDUEMsZ0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBZDtBQUNELE9BZk87QUFnQlJDLGdCQWhCUSx3QkFnQks7QUFDWCx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTztBQURRLFNBQWpCO0FBR0EsdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEcsZUFBSyxnQkFBUUMsYUFEQztBQUVkQyxvQkFBVSxLQUFLdEIsR0FGRDtBQUdkdUIsZ0JBQU0sVUFIUTtBQUlkdEIsb0JBQVU7QUFDUixtQkFBTyxlQUFLdUIsY0FBTCxDQUFvQixLQUFwQixDQURDO0FBRVIsb0JBQVEsS0FBS3ZCLFFBQUwsQ0FBY3NCLElBRmQ7QUFHUixxQkFBUyxLQUFLdEIsUUFBTCxDQUFjd0IsS0FIZjtBQUlSLHNCQUFVLEtBQUt4QixRQUFMLENBQWN5QixNQUpoQjtBQUtSLG9CQUFRLEtBQUt6QixRQUFMLENBQWMwQixJQUxkO0FBTVIsdUJBQVcsS0FBSzFCLFFBQUwsQ0FBYzJCO0FBTmpCLFdBSkk7QUFZZHBCLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFBQSw4QkFJakJvQixLQUFLQyxLQUFMLENBQVdyQixJQUFJWCxJQUFmLENBSmlCO0FBQUEsZ0JBRW5CaUMsTUFGbUIsZUFFbkJBLE1BRm1CO0FBQUEsZ0JBR25CQyxPQUhtQixlQUduQkEsT0FIbUI7O0FBS3JCLDJCQUFLQyxVQUFMLENBQWdCO0FBQ2RiLG1CQUFLLHVCQUF1QlcsTUFBdkIsR0FBZ0MsV0FBaEMsR0FBOENDLE9BRHJDO0FBRWR4QixxQkFGYyxxQkFFSjtBQUNSLCtCQUFLMEIsV0FBTDtBQUNEO0FBSmEsYUFBaEI7QUFNRDtBQXZCYSxTQUFoQjtBQXlCRCxPQTdDTztBQThDUkMsaUJBOUNRLHlCQThDTTtBQUNaLGFBQUtwQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS1ksTUFBTDtBQUNEO0FBakRPLEssU0FtRFZ5QixNLEdBQVMsRTs7Ozs7NkJBQ0EsQ0FBRTs7OzJCQUNKQyxLLEVBQU87QUFDWixXQUFLcEMsUUFBTCxHQUFnQm9DLEtBQWhCO0FBQ0EsV0FBSzFCLE1BQUw7QUFDRDs7O3NDQUNpQkYsRyxFQUFLO0FBQ3JCLGFBQU8sS0FBSzZCLE9BQUwsQ0FBYUMsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7O0VBeEVpQyxlQUFLQyxJOztrQkFBcEIvQyxNIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHtcclxuICBzZXJ2aWNlXHJcbn0gZnJvbSAnLi4vY29uZmlnLmpzJ1xyXG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aLjeeFp+iupOivgSdcclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIGZvb3Q6IEZvb3RcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBjYW1lcmFWaWV3OiB0cnVlLFxyXG4gICAgc3JjOiAnJyxcclxuICAgIGZvcm1EYXRhOiBudWxsXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YWtlUGhvdG8oKSB7XHJcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgY29uc3QgY3R4ID0gd2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KClcclxuICAgICAgY3R4LnRha2VQaG90byh7XHJcbiAgICAgICAgcXVhbGl0eTogJ2xvdycsXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgX3RoaXMuY2FtZXJhVmlldyA9IGZhbHNlXHJcbiAgICAgICAgICBfdGhpcy5zcmMgPSByZXMudGVtcEltYWdlUGF0aFxyXG4gICAgICAgICAgX3RoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZXJyb3IoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbClcclxuICAgIH0sXHJcbiAgICB1cGxvYWRGaWxlKCkge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+ato+WcqOS4iuS8oCdcclxuICAgICAgfSlcclxuICAgICAgd2VweS51cGxvYWRGaWxlKHtcclxuICAgICAgICB1cmw6IHNlcnZpY2UuYWRkRmFjZVBlcnNvbixcclxuICAgICAgICBmaWxlUGF0aDogdGhpcy5zcmMsXHJcbiAgICAgICAgbmFtZTogJ2ltYWdlVXJsJyxcclxuICAgICAgICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgJ21pZCc6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ21pZCcpLFxyXG4gICAgICAgICAgJ25hbWUnOiB0aGlzLmZvcm1EYXRhLm5hbWUsXHJcbiAgICAgICAgICAncGhvbmUnOiB0aGlzLmZvcm1EYXRhLnBob25lLFxyXG4gICAgICAgICAgJ2lkY2FyZCc6IHRoaXMuZm9ybURhdGEuaWRjYXJkLFxyXG4gICAgICAgICAgJ2RhdGUnOiB0aGlzLmZvcm1EYXRhLmRhdGUsXHJcbiAgICAgICAgICAnbWFpbGJveCc6IHRoaXMuZm9ybURhdGEubWFpbGJveFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICBsZXQge1xyXG4gICAgICAgICAgICBzdGF0dXMsXHJcbiAgICAgICAgICAgIG1lc3NhZ2VcclxuICAgICAgICAgIH0gPSBKU09OLnBhcnNlKHJlcy5kYXRhKVxyXG4gICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnYWNjb21wbGlzaD9zdGF0dXM9JyArIHN0YXR1cyArICcmbWVzc2FnZT0nICsgbWVzc2FnZSxcclxuICAgICAgICAgICAgc3VjY2VzcygpIHtcclxuICAgICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgcmVUYWtlUGhvdG8oKSB7XHJcbiAgICAgIHRoaXMuY2FtZXJhVmlldyA9IHRydWVcclxuICAgICAgdGhpcy4kYXBwbHkoKVxyXG4gICAgfVxyXG4gIH1cclxuICBldmVudHMgPSB7fVxyXG4gIG9uU2hvdygpIHt9XHJcbiAgb25Mb2FkKHF1ZXJ5KSB7XHJcbiAgICB0aGlzLmZvcm1EYXRhID0gcXVlcnlcclxuICAgIHRoaXMuJGFwcGx5KClcclxuICB9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kcGFyZW50Lm9uU2hhcmVBcHBNZXNzYWdlKCfmgqjmnInkuIDlvKDkvJrlkZjljaHlvoXpooblj5YnKVxyXG4gIH1cclxufVxuIl19