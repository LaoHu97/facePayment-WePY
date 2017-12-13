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
      navigationBarTitleText: '认证完成'
    }, _this.components = {
      foot: _foot2.default
    }, _this.data = {}, _this.methods = {}, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Accomplish, [{
    key: 'onLoad',
    value: function onLoad(options) {
      console.log(options);
      _wepy2.default.showLoading({
        title: '正在认证',
        mask: true
      });
      setTimeout(function () {
        _wepy2.default.hideLoading();
      }, 4000);
    }
  }]);

  return Accomplish;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Accomplish , 'pages/accomplish'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tcGxpc2guanMiXSwibmFtZXMiOlsiQWNjb21wbGlzaCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJjb21wb25lbnRzIiwiZm9vdCIsImRhdGEiLCJtZXRob2RzIiwiZXZlbnRzIiwib3B0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJzaG93TG9hZGluZyIsInRpdGxlIiwibWFzayIsInNldFRpbWVvdXQiLCJoaWRlTG9hZGluZyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7OExBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxJLEdBQU8sRSxRQUdQQyxPLEdBQVUsRSxRQUlWQyxNLEdBQVMsRTs7Ozs7MkJBQ0ZDLE8sRUFBUztBQUNkQyxjQUFRQyxHQUFSLENBQVlGLE9BQVo7QUFDQSxxQkFBS0csV0FBTCxDQUFpQjtBQUNmQyxlQUFPLE1BRFE7QUFFZkMsY0FBTTtBQUZTLE9BQWpCO0FBSUFDLGlCQUFXLFlBQVc7QUFDcEIsdUJBQUtDLFdBQUw7QUFDRCxPQUZELEVBRUcsSUFGSDtBQUdEOzs7O0VBekJxQyxlQUFLQyxJOztrQkFBeEJoQixVIiwiZmlsZSI6ImFjY29tcGxpc2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb21wbGlzaCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+iupOivgeWujOaIkCdcclxuICB9XHJcbiAgY29tcG9uZW50cyA9IHtcclxuICAgIGZvb3Q6IEZvb3RcclxuICB9XHJcblxyXG4gIGRhdGEgPSB7XHJcblxyXG4gIH1cclxuICBtZXRob2RzID0ge1xyXG5cclxuICB9XHJcblxyXG4gIGV2ZW50cyA9IHt9XHJcbiAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpXHJcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcclxuICAgICAgdGl0bGU6ICfmraPlnKjorqTor4EnLFxyXG4gICAgICBtYXNrOiB0cnVlXHJcbiAgICB9KVxyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgd2VweS5oaWRlTG9hZGluZygpXHJcbiAgICB9LCA0MDAwKVxyXG4gIH1cclxufVxuIl19