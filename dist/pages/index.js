'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _foot = require('./../components/foot.js');

var _foot2 = _interopRequireDefault(_foot);

var _test = require('./../mixins/test.js');

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// 引入组件


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '激活会员卡'
    }, _this.components = {
      foot: _foot2.default
    }, _this.mixins = [_test2.default], _this.data = {
      userInfo: {
        nickName: '加载中...'
      },
      form: {
        username: '',
        userphone: '',
        useridcard: '',
        birthday: '1997-01-15',
        loading: false
      }
    }, _this.computed = {}, _this.methods = {
      carryOn: function carryOn() {
        _wepy2.default.navigateTo({
          url: 'camera'
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      this.$parent.getUserInfo(function (userInfo) {
        if (userInfo) {
          self.userInfo = userInfo;
        }
        self.$apply();
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwibWl4aW5zIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJmb3JtIiwidXNlcm5hbWUiLCJ1c2VycGhvbmUiLCJ1c2VyaWRjYXJkIiwiYmlydGhkYXkiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiY2FycnlPbiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJldmVudHMiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUZBOzs7SUFJcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBVTtBQURGLE9BREw7QUFJTEMsWUFBTTtBQUNKQyxrQkFBVSxFQUROO0FBRUpDLG1CQUFXLEVBRlA7QUFHSkMsb0JBQVksRUFIUjtBQUlKQyxrQkFBVSxZQUpOO0FBS0pDLGlCQUFTO0FBTEw7QUFKRCxLLFFBYVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0Q7QUFMTyxLLFFBUVZDLE0sR0FBUyxFOzs7Ozs2QkFJQTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFTaEIsUUFBVCxFQUFtQjtBQUMxQyxZQUFJQSxRQUFKLEVBQWM7QUFDWmMsZUFBS2QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNEYyxhQUFLRyxNQUFMO0FBQ0QsT0FMRDtBQU1EOzs7O0VBL0NnQyxlQUFLQyxJOztrQkFBbkJ6QixLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8g5byV5YWl57uE5Lu2XG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXG5pbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5r+A5rS75Lya5ZGY5Y2hJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgZm9vdDogRm9vdFxuICB9XG5cbiAgbWl4aW5zID0gW3Rlc3RNaXhpbl1cblxuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvOiB7XG4gICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICB9LFxuICAgIGZvcm06IHtcbiAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgIHVzZXJwaG9uZTogJycsXG4gICAgICB1c2VyaWRjYXJkOiAnJyxcbiAgICAgIGJpcnRoZGF5OiAnMTk5Ny0wMS0xNScsXG4gICAgICBsb2FkaW5nOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge1xuXG4gIH1cblxuICBtZXRob2RzID0ge1xuICAgIGNhcnJ5T24oKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdjYW1lcmEnXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHtcblxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VySW5mbykge1xuICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgfVxuICAgICAgc2VsZi4kYXBwbHkoKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==