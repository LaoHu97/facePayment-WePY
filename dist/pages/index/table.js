'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
    }, _this.components = {}, _this.data = {}, _this.methods = {
      activation: function activation(data) {
        _wepy2.default.request({
          url: 'http://test.weupay.com/pay/wxSmaPro/activeCard',
          data: {
            mid: '66',
            code: data.code,
            card_id: data.card_id
          },
          method: 'POST',
          success: function success(res) {
            console.log(res);
          }
        });
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Accomplish, [{
    key: 'onLoad',
    value: function onLoad(options) {
      this.methods.activation(options);
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      console.log('213');
    }
  }]);

  return Accomplish;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(Accomplish , 'pages/index/table'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxlLmpzIl0sIm5hbWVzIjpbIkFjY29tcGxpc2giLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImRhdGEiLCJtZXRob2RzIiwiYWN0aXZhdGlvbiIsInJlcXVlc3QiLCJ1cmwiLCJtaWQiLCJjb2RlIiwiY2FyZF9pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwib3B0aW9ucyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLFU7Ozs7Ozs7Ozs7Ozs7OzhMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYSxFLFFBRWJDLEksR0FBTyxFLFFBR1BDLE8sR0FBVTtBQUNSQyxnQkFEUSxzQkFDR0YsSUFESCxFQUNTO0FBQ2YsdUJBQUtHLE9BQUwsQ0FBYTtBQUNYQyxlQUFLLGdEQURNO0FBRVhKLGdCQUFNO0FBQ0pLLGlCQUFLLElBREQ7QUFFSkMsa0JBQU1OLEtBQUtNLElBRlA7QUFHSkMscUJBQVNQLEtBQUtPO0FBSFYsV0FGSztBQU9YQyxrQkFBUSxNQVBHO0FBUVhDLGlCQVJXLG1CQVFIQyxHQVJHLEVBUUU7QUFDWEMsb0JBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBVlUsU0FBYjtBQVlEO0FBZE8sSyxRQWlCVkcsTSxHQUFTLEU7Ozs7OzJCQUNGQyxPLEVBQVM7QUFDZCxXQUFLYixPQUFMLENBQWFDLFVBQWIsQ0FBd0JZLE9BQXhCO0FBQ0Q7Ozs2QkFDUTtBQUNQSCxjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNEOzs7O0VBaENxQyxlQUFLRyxJOztrQkFBeEJuQixVIiwiZmlsZSI6InRhYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvbXBsaXNoIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6K6k6K+B5a6M5oiQJ1xyXG4gIH1cclxuICBjb21wb25lbnRzID0ge31cclxuXHJcbiAgZGF0YSA9IHtcclxuXHJcbiAgfVxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBhY3RpdmF0aW9uKGRhdGEpIHtcclxuICAgICAgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICdodHRwOi8vdGVzdC53ZXVwYXkuY29tL3BheS93eFNtYVByby9hY3RpdmVDYXJkJyxcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBtaWQ6ICc2NicsXHJcbiAgICAgICAgICBjb2RlOiBkYXRhLmNvZGUsXHJcbiAgICAgICAgICBjYXJkX2lkOiBkYXRhLmNhcmRfaWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzID0ge31cclxuICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgdGhpcy5tZXRob2RzLmFjdGl2YXRpb24ob3B0aW9ucylcclxuICB9XHJcbiAgb25TaG93KCkge1xyXG4gICAgY29uc29sZS5sb2coJzIxMycpO1xyXG4gIH1cclxufVxuIl19