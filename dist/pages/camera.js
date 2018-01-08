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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwiY2FtZXJhVmlldyIsInNyYyIsImZvcm1EYXRhIiwibWV0aG9kcyIsInRha2VQaG90byIsIl90aGlzIiwiY3R4IiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInF1YWxpdHkiLCJzdWNjZXNzIiwicmVzIiwidGVtcEltYWdlUGF0aCIsIiRhcHBseSIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ1cGxvYWRGaWxlIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInVybCIsImFkZEZhY2VQZXJzb24iLCJmaWxlUGF0aCIsIm5hbWUiLCJnZXRTdG9yYWdlU3luYyIsInBob25lIiwiaWRjYXJkIiwiZGF0ZSIsIm1haWxib3giLCJKU09OIiwicGFyc2UiLCJzdGF0dXMiLCJtZXNzYWdlIiwibmF2aWdhdGVUbyIsImhpZGVMb2FkaW5nIiwicmVUYWtlUGhvdG8iLCJldmVudHMiLCJxdWVyeSIsIiRwYXJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTTs7Ozs7Ozs7Ozs7Ozs7eUxBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssU0FHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxTQUliQyxJLEdBQU87QUFDTEMsa0JBQVksSUFEUDtBQUVMQyxXQUFLLEVBRkE7QUFHTEMsZ0JBQVU7QUFITCxLLFNBS1BDLE8sR0FBVTtBQUNSQyxlQURRLHVCQUNJO0FBQ1YsWUFBSUMsUUFBUSxJQUFaO0FBQ0EsWUFBTUMsTUFBTSxlQUFLQyxtQkFBTCxFQUFaO0FBQ0FELFlBQUlGLFNBQUosQ0FBYztBQUNaSSxtQkFBUyxLQURHO0FBRVpDLG1CQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDaEJMLGtCQUFNTCxVQUFOLEdBQW1CLEtBQW5CO0FBQ0FLLGtCQUFNSixHQUFOLEdBQVlTLElBQUlDLGFBQWhCO0FBQ0FOLGtCQUFNTyxNQUFOO0FBQ0Q7QUFOVyxTQUFkO0FBUUQsT0FaTztBQWFSQyxXQWJRLGlCQWFGQyxDQWJFLEVBYUM7QUFDUEMsZ0JBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsTUFBZDtBQUNELE9BZk87QUFnQlJDLGdCQWhCUSx3QkFnQks7QUFDWCx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTztBQURRLFNBQWpCO0FBR0EsdUJBQUtGLFVBQUwsQ0FBZ0I7QUFDZEcsZUFBSyxnQkFBUUMsYUFEQztBQUVkQyxvQkFBVSxLQUFLdEIsR0FGRDtBQUdkdUIsZ0JBQU0sVUFIUTtBQUlkdEIsb0JBQVU7QUFDUixtQkFBTyxlQUFLdUIsY0FBTCxDQUFvQixLQUFwQixDQURDO0FBRVIsb0JBQVEsS0FBS3ZCLFFBQUwsQ0FBY3NCLElBRmQ7QUFHUixxQkFBUyxLQUFLdEIsUUFBTCxDQUFjd0IsS0FIZjtBQUlSLHNCQUFVLEtBQUt4QixRQUFMLENBQWN5QixNQUpoQjtBQUtSLG9CQUFRLEtBQUt6QixRQUFMLENBQWMwQixJQUxkO0FBTVIsdUJBQVcsS0FBSzFCLFFBQUwsQ0FBYzJCO0FBTmpCLFdBSkk7QUFZZHBCLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFBQSw4QkFJakJvQixLQUFLQyxLQUFMLENBQVdyQixJQUFJWCxJQUFmLENBSmlCO0FBQUEsZ0JBRW5CaUMsTUFGbUIsZUFFbkJBLE1BRm1CO0FBQUEsZ0JBR25CQyxPQUhtQixlQUduQkEsT0FIbUI7O0FBS3JCbEIsb0JBQVFDLEdBQVIsQ0FBWU4sR0FBWjtBQUNBLDJCQUFLd0IsVUFBTCxDQUFnQjtBQUNkYixtQkFBSyx1QkFBdUJXLE1BQXZCLEdBQWdDLFdBQWhDLEdBQThDQyxPQURyQztBQUVkeEIscUJBRmMscUJBRUo7QUFDUiwrQkFBSzBCLFdBQUw7QUFDRDtBQUphLGFBQWhCO0FBTUQ7QUF4QmEsU0FBaEI7QUEwQkQsT0E5Q087QUErQ1JDLGlCQS9DUSx5QkErQ007QUFDWixhQUFLcEMsVUFBTCxHQUFrQixJQUFsQjtBQUNBLGFBQUtZLE1BQUw7QUFDRDtBQWxETyxLLFNBb0RWeUIsTSxHQUFTLEU7Ozs7OzZCQUNBLENBQUU7OzsyQkFDSkMsSyxFQUFPO0FBQ1osV0FBS3BDLFFBQUwsR0FBZ0JvQyxLQUFoQjtBQUNBLFdBQUsxQixNQUFMO0FBQ0Q7OztzQ0FDaUJGLEcsRUFBSztBQUNyQixhQUFPLEtBQUs2QixPQUFMLENBQWFDLGlCQUFiLENBQStCLFlBQS9CLENBQVA7QUFDRDs7OztFQXpFaUMsZUFBS0MsSTs7a0JBQXBCL0MsTSIsImZpbGUiOiJjYW1lcmEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7XHJcbiAgc2VydmljZVxyXG59IGZyb20gJy4uL2NvbmZpZy5qcydcclxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmi43nhaforqTor4EnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgY2FtZXJhVmlldzogdHJ1ZSxcclxuICAgIHNyYzogJycsXHJcbiAgICBmb3JtRGF0YTogbnVsbFxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG4gICAgdGFrZVBob3RvKCkge1xyXG4gICAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICAgIGNvbnN0IGN0eCA9IHdlcHkuY3JlYXRlQ2FtZXJhQ29udGV4dCgpXHJcbiAgICAgIGN0eC50YWtlUGhvdG8oe1xyXG4gICAgICAgIHF1YWxpdHk6ICdsb3cnLFxyXG4gICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgIF90aGlzLmNhbWVyYVZpZXcgPSBmYWxzZVxyXG4gICAgICAgICAgX3RoaXMuc3JjID0gcmVzLnRlbXBJbWFnZVBhdGhcclxuICAgICAgICAgIF90aGlzLiRhcHBseSgpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGVycm9yKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZS5kZXRhaWwpXHJcbiAgICB9LFxyXG4gICAgdXBsb2FkRmlsZSgpIHtcclxuICAgICAgd2VweS5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgdGl0bGU6ICfmraPlnKjkuIrkvKAnXHJcbiAgICAgIH0pXHJcbiAgICAgIHdlcHkudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgdXJsOiBzZXJ2aWNlLmFkZEZhY2VQZXJzb24sXHJcbiAgICAgICAgZmlsZVBhdGg6IHRoaXMuc3JjLFxyXG4gICAgICAgIG5hbWU6ICdpbWFnZVVybCcsXHJcbiAgICAgICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICdtaWQnOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdtaWQnKSxcclxuICAgICAgICAgICduYW1lJzogdGhpcy5mb3JtRGF0YS5uYW1lLFxyXG4gICAgICAgICAgJ3Bob25lJzogdGhpcy5mb3JtRGF0YS5waG9uZSxcclxuICAgICAgICAgICdpZGNhcmQnOiB0aGlzLmZvcm1EYXRhLmlkY2FyZCxcclxuICAgICAgICAgICdkYXRlJzogdGhpcy5mb3JtRGF0YS5kYXRlLFxyXG4gICAgICAgICAgJ21haWxib3gnOiB0aGlzLmZvcm1EYXRhLm1haWxib3hcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgbGV0IHtcclxuICAgICAgICAgICAgc3RhdHVzLFxyXG4gICAgICAgICAgICBtZXNzYWdlXHJcbiAgICAgICAgICB9ID0gSlNPTi5wYXJzZShyZXMuZGF0YSlcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJ2FjY29tcGxpc2g/c3RhdHVzPScgKyBzdGF0dXMgKyAnJm1lc3NhZ2U9JyArIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHN1Y2Nlc3MoKSB7XHJcbiAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIHJlVGFrZVBob3RvKCkge1xyXG4gICAgICB0aGlzLmNhbWVyYVZpZXcgPSB0cnVlXHJcbiAgICAgIHRoaXMuJGFwcGx5KClcclxuICAgIH1cclxuICB9XHJcbiAgZXZlbnRzID0ge31cclxuICBvblNob3coKSB7fVxyXG4gIG9uTG9hZChxdWVyeSkge1xyXG4gICAgdGhpcy5mb3JtRGF0YSA9IHF1ZXJ5XHJcbiAgICB0aGlzLiRhcHBseSgpXHJcbiAgfVxyXG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xyXG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcclxuICB9XHJcbn1cbiJdfQ==