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
          header: {
            'content-type': 'application/json'
          },
          filePath: this.src,
          name: 'imageUrl',
          formData: {
            'mid': _wepy2.default.getStorageSync('mid'),
            'cardId': this.formData.cardId,
            'cardCode': this.formData.cardCode
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
      console.log('我是激活页面数据' + query.cardCode);
      var _this = this;
      if (query.cardCode) {
        _this.formData = query;
        _this.$apply();
      } else {
        _wepy2.default.request({
          url: _config.service.decryptCode,
          header: {
            'content-type': 'application/json'
          },
          data: {
            mid: _wepy2.default.getStorageSync('mid'),
            openId: _this.$parent.globalData.useridcard.openid,
            code: _this.$parent.globalData.useridcard.encrypt_code,
            card_id: _this.$parent.globalData.useridcard.card_id
          },
          method: 'POST',
          success: function success(res) {
            console.log(res);
            _this.formData = res.data.data;
            _this.$apply();
          }
        });
      }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbWVyYS5qcyJdLCJuYW1lcyI6WyJDYW1lcmEiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJkYXRhIiwiY2FtZXJhVmlldyIsInNyYyIsImZvcm1EYXRhIiwibWV0aG9kcyIsInRha2VQaG90byIsIl90aGlzIiwiY3R4IiwiY3JlYXRlQ2FtZXJhQ29udGV4dCIsInF1YWxpdHkiLCJzdWNjZXNzIiwicmVzIiwidGVtcEltYWdlUGF0aCIsIiRhcHBseSIsImVycm9yIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkZXRhaWwiLCJ1cGxvYWRGaWxlIiwic2hvd0xvYWRpbmciLCJ0aXRsZSIsInVybCIsImFkZEZhY2VQZXJzb24iLCJoZWFkZXIiLCJmaWxlUGF0aCIsIm5hbWUiLCJnZXRTdG9yYWdlU3luYyIsImNhcmRJZCIsImNhcmRDb2RlIiwiSlNPTiIsInBhcnNlIiwic3RhdHVzIiwibWVzc2FnZSIsIm5hdmlnYXRlVG8iLCJoaWRlTG9hZGluZyIsInJlVGFrZVBob3RvIiwiZXZlbnRzIiwicXVlcnkiLCJyZXF1ZXN0IiwiZGVjcnlwdENvZGUiLCJtaWQiLCJvcGVuSWQiLCIkcGFyZW50IiwiZ2xvYmFsRGF0YSIsInVzZXJpZGNhcmQiLCJvcGVuaWQiLCJjb2RlIiwiZW5jcnlwdF9jb2RlIiwiY2FyZF9pZCIsIm1ldGhvZCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxNOzs7Ozs7Ozs7Ozs7Ozt5TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBSWJDLEksR0FBTztBQUNMQyxrQkFBWSxJQURQO0FBRUxDLFdBQUssRUFGQTtBQUdMQyxnQkFBVTtBQUhMLEssU0FLUEMsTyxHQUFVO0FBQ1JDLGVBRFEsdUJBQ0k7QUFDVixZQUFJQyxRQUFRLElBQVo7QUFDQSxZQUFNQyxNQUFNLGVBQUtDLG1CQUFMLEVBQVo7QUFDQUQsWUFBSUYsU0FBSixDQUFjO0FBQ1pJLG1CQUFTLEtBREc7QUFFWkMsbUJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNoQkwsa0JBQU1MLFVBQU4sR0FBbUIsS0FBbkI7QUFDQUssa0JBQU1KLEdBQU4sR0FBWVMsSUFBSUMsYUFBaEI7QUFDQU4sa0JBQU1PLE1BQU47QUFDRDtBQU5XLFNBQWQ7QUFRRCxPQVpPO0FBYVJDLFdBYlEsaUJBYUZDLENBYkUsRUFhQztBQUNQQyxnQkFBUUMsR0FBUixDQUFZRixFQUFFRyxNQUFkO0FBQ0QsT0FmTztBQWdCUkMsZ0JBaEJRLHdCQWdCSztBQUNYLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPO0FBRFEsU0FBakI7QUFHQSx1QkFBS0YsVUFBTCxDQUFnQjtBQUNkRyxlQUFLLGdCQUFRQyxhQURDO0FBRWRDLGtCQUFRO0FBQ04sNEJBQWdCO0FBRFYsV0FGTTtBQUtkQyxvQkFBVSxLQUFLdkIsR0FMRDtBQU1kd0IsZ0JBQU0sVUFOUTtBQU9kdkIsb0JBQVU7QUFDUixtQkFBTyxlQUFLd0IsY0FBTCxDQUFvQixLQUFwQixDQURDO0FBRVIsc0JBQVUsS0FBS3hCLFFBQUwsQ0FBY3lCLE1BRmhCO0FBR1Isd0JBQVksS0FBS3pCLFFBQUwsQ0FBYzBCO0FBSGxCLFdBUEk7QUFZZG5CLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFBQSw4QkFJakJtQixLQUFLQyxLQUFMLENBQVdwQixJQUFJWCxJQUFmLENBSmlCO0FBQUEsZ0JBRW5CZ0MsTUFGbUIsZUFFbkJBLE1BRm1CO0FBQUEsZ0JBR25CQyxPQUhtQixlQUduQkEsT0FIbUI7O0FBS3JCLDJCQUFLQyxVQUFMLENBQWdCO0FBQ2RaLG1CQUFLLHVCQUF1QlUsTUFBdkIsR0FBZ0MsV0FBaEMsR0FBOENDLE9BRHJDO0FBRWR2QixxQkFGYyxxQkFFSjtBQUNSLCtCQUFLeUIsV0FBTDtBQUNEO0FBSmEsYUFBaEI7QUFNRDtBQXZCYSxTQUFoQjtBQXlCRCxPQTdDTztBQThDUkMsaUJBOUNRLHlCQThDTTtBQUNaLGFBQUtuQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsYUFBS1ksTUFBTDtBQUNEO0FBakRPLEssU0FtRFZ3QixNLEdBQVMsRTs7Ozs7NkJBQ0EsQ0FBRTs7OzJCQUNKQyxLLEVBQU87QUFDWnRCLGNBQVFDLEdBQVIsQ0FBWSxhQUFhcUIsTUFBTVQsUUFBL0I7QUFDQSxVQUFJdkIsUUFBUSxJQUFaO0FBQ0EsVUFBSWdDLE1BQU1ULFFBQVYsRUFBb0I7QUFDbEJ2QixjQUFNSCxRQUFOLEdBQWlCbUMsS0FBakI7QUFDQWhDLGNBQU1PLE1BQU47QUFDRCxPQUhELE1BR087QUFDTCx1QkFBSzBCLE9BQUwsQ0FBYTtBQUNYakIsZUFBSyxnQkFBUWtCLFdBREY7QUFFWGhCLGtCQUFRO0FBQ04sNEJBQWdCO0FBRFYsV0FGRztBQUtYeEIsZ0JBQU07QUFDSnlDLGlCQUFLLGVBQUtkLGNBQUwsQ0FBb0IsS0FBcEIsQ0FERDtBQUVKZSxvQkFBUXBDLE1BQU1xQyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLFVBQXpCLENBQW9DQyxNQUZ4QztBQUdKQyxrQkFBTXpDLE1BQU1xQyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLFVBQXpCLENBQW9DRyxZQUh0QztBQUlKQyxxQkFBUzNDLE1BQU1xQyxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDLFVBQXpCLENBQW9DSTtBQUp6QyxXQUxLO0FBV1hDLGtCQUFRLE1BWEc7QUFZWHhDLGlCQVpXLG1CQVlIQyxHQVpHLEVBWUU7QUFDWEssb0JBQVFDLEdBQVIsQ0FBWU4sR0FBWjtBQUNBTCxrQkFBTUgsUUFBTixHQUFpQlEsSUFBSVgsSUFBSixDQUFTQSxJQUExQjtBQUNBTSxrQkFBTU8sTUFBTjtBQUNEO0FBaEJVLFNBQWI7QUFrQkQ7QUFDRjs7O3NDQUNpQkYsRyxFQUFLO0FBQ3JCLGFBQU8sS0FBS2dDLE9BQUwsQ0FBYVEsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7O0VBL0ZpQyxlQUFLQyxJOztrQkFBcEJ6RCxNIiwiZmlsZSI6ImNhbWVyYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHtcclxuICBzZXJ2aWNlXHJcbn0gZnJvbSAnLi4vY29uZmlnLmpzJ1xyXG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aLjeeFp+iupOivgSdcclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIGZvb3Q6IEZvb3RcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcbiAgICBjYW1lcmFWaWV3OiB0cnVlLFxyXG4gICAgc3JjOiAnJyxcclxuICAgIGZvcm1EYXRhOiBudWxsXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICB0YWtlUGhvdG8oKSB7XHJcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcclxuICAgICAgY29uc3QgY3R4ID0gd2VweS5jcmVhdGVDYW1lcmFDb250ZXh0KClcclxuICAgICAgY3R4LnRha2VQaG90byh7XHJcbiAgICAgICAgcXVhbGl0eTogJ2xvdycsXHJcbiAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgX3RoaXMuY2FtZXJhVmlldyA9IGZhbHNlXHJcbiAgICAgICAgICBfdGhpcy5zcmMgPSByZXMudGVtcEltYWdlUGF0aFxyXG4gICAgICAgICAgX3RoaXMuJGFwcGx5KClcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgZXJyb3IoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLmRldGFpbClcclxuICAgIH0sXHJcbiAgICB1cGxvYWRGaWxlKCkge1xyXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgICB0aXRsZTogJ+ato+WcqOS4iuS8oCdcclxuICAgICAgfSlcclxuICAgICAgd2VweS51cGxvYWRGaWxlKHtcclxuICAgICAgICB1cmw6IHNlcnZpY2UuYWRkRmFjZVBlcnNvbixcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbGVQYXRoOiB0aGlzLnNyYyxcclxuICAgICAgICBuYW1lOiAnaW1hZ2VVcmwnLFxyXG4gICAgICAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgICAnbWlkJzogd2VweS5nZXRTdG9yYWdlU3luYygnbWlkJyksXHJcbiAgICAgICAgICAnY2FyZElkJzogdGhpcy5mb3JtRGF0YS5jYXJkSWQsXHJcbiAgICAgICAgICAnY2FyZENvZGUnOiB0aGlzLmZvcm1EYXRhLmNhcmRDb2RlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIGxldCB7XHJcbiAgICAgICAgICAgIHN0YXR1cyxcclxuICAgICAgICAgICAgbWVzc2FnZVxyXG4gICAgICAgICAgfSA9IEpTT04ucGFyc2UocmVzLmRhdGEpXHJcbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICdhY2NvbXBsaXNoP3N0YXR1cz0nICsgc3RhdHVzICsgJyZtZXNzYWdlPScgKyBtZXNzYWdlLFxyXG4gICAgICAgICAgICBzdWNjZXNzKCkge1xyXG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICByZVRha2VQaG90bygpIHtcclxuICAgICAgdGhpcy5jYW1lcmFWaWV3ID0gdHJ1ZVxyXG4gICAgICB0aGlzLiRhcHBseSgpXHJcbiAgICB9XHJcbiAgfVxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgb25TaG93KCkge31cclxuICBvbkxvYWQocXVlcnkpIHtcclxuICAgIGNvbnNvbGUubG9nKCfmiJHmmK/mv4DmtLvpobXpnaLmlbDmja4nICsgcXVlcnkuY2FyZENvZGUpXHJcbiAgICBsZXQgX3RoaXMgPSB0aGlzXHJcbiAgICBpZiAocXVlcnkuY2FyZENvZGUpIHtcclxuICAgICAgX3RoaXMuZm9ybURhdGEgPSBxdWVyeVxyXG4gICAgICBfdGhpcy4kYXBwbHkoKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IHNlcnZpY2UuZGVjcnlwdENvZGUsXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBtaWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ21pZCcpLFxyXG4gICAgICAgICAgb3BlbklkOiBfdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmlkY2FyZC5vcGVuaWQsXHJcbiAgICAgICAgICBjb2RlOiBfdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmlkY2FyZC5lbmNyeXB0X2NvZGUsXHJcbiAgICAgICAgICBjYXJkX2lkOiBfdGhpcy4kcGFyZW50Lmdsb2JhbERhdGEudXNlcmlkY2FyZC5jYXJkX2lkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgX3RoaXMuZm9ybURhdGEgPSByZXMuZGF0YS5kYXRhXHJcbiAgICAgICAgICBfdGhpcy4kYXBwbHkoKVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XHJcbiAgICByZXR1cm4gdGhpcy4kcGFyZW50Lm9uU2hhcmVBcHBNZXNzYWdlKCfmgqjmnInkuIDlvKDkvJrlkZjljaHlvoXpooblj5YnKVxyXG4gIH1cclxufVxuIl19