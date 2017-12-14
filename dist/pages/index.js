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
// 引入组件


var Index = function (_wepy$page) {
  _inherits(Index, _wepy$page);

  function Index() {
    var _ref;

    var _temp, _this2, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this2), _this2.config = {
      navigationBarTitleText: '激活会员卡'
    }, _this2.components = {
      foot: _foot2.default
    }, _this2.data = {
      userInfo: {
        nickName: '加载中...'
      }
    }, _this2.computed = {}, _this2.methods = {
      addCard: function addCard() {
        var _this = this;
        _wepy2.default.showLoading({
          title: '加载中'
        });
        _wepy2.default.request({
          url: 'http://test.weupay.com/pay/wxSmaPro/addCard',
          data: {
            mid: '192'
          },
          header: {
            'content-type': 'application/json'
          },
          method: 'POST',
          success: function success(res) {
            var data = {
              timestamp: res.data.timestamp,
              nonce_str: res.data.nonce_str,
              outer_str: res.data.outer_str,
              signature: res.data.signature
            };
            _wepy2.default.addCard({
              cardList: [{
                cardId: res.data.card_id,
                cardExt: JSON.stringify(data)
              }],
              success: function success(res) {
                _wepy2.default.hideLoading();
              },
              fail: function fail(res) {
                _wepy2.default.hideLoading();
                _this.methods.registerVip();
              }
            });
          }
        });
      },
      registerVip: function registerVip() {
        console.log('123');
        var data = {};
        _wepy2.default.navigateToMiniProgram({
          appId: 'wxeb490c6f9b154ef9',
          extraData: data,
          success: function success() {},
          fail: function fail() {},
          complete: function complete() {}
        });
      }
    }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Index, [{
    key: 'onLoad',
    value: function onLoad() {
      var self = this;
      self.$parent.getUserInfo(function (userInfo) {
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhZGRDYXJkIiwiX3RoaXMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsInVybCIsIm1pZCIsImhlYWRlciIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJ0aW1lc3RhbXAiLCJub25jZV9zdHIiLCJvdXRlcl9zdHIiLCJzaWduYXR1cmUiLCJjYXJkTGlzdCIsImNhcmRJZCIsImNhcmRfaWQiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhpZGVMb2FkaW5nIiwiZmFpbCIsInJlZ2lzdGVyVmlwIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSIsImFwcElkIiwiZXh0cmFEYXRhIiwiY29tcGxldGUiLCJldmVudHMiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt1TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBSWJDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBVTtBQURGO0FBREwsSyxTQU1QQyxRLEdBQVcsRSxTQUVYQyxPLEdBQVU7QUFDUkMsYUFEUSxxQkFDRTtBQUNSLFlBQUlDLFFBQVEsSUFBWjtBQUNBLHVCQUFLQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPO0FBRFEsU0FBakI7QUFHQSx1QkFBS0MsT0FBTCxDQUFhO0FBQ1hDLGVBQUssNkNBRE07QUFFWFYsZ0JBQU07QUFDSlcsaUJBQUs7QUFERCxXQUZLO0FBS1hDLGtCQUFRO0FBQ04sNEJBQWdCO0FBRFYsV0FMRztBQVFYQyxrQkFBUSxNQVJHO0FBU1hDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlmLE9BQU87QUFDVGdCLHlCQUFXRCxJQUFJZixJQUFKLENBQVNnQixTQURYO0FBRVRDLHlCQUFXRixJQUFJZixJQUFKLENBQVNpQixTQUZYO0FBR1RDLHlCQUFXSCxJQUFJZixJQUFKLENBQVNrQixTQUhYO0FBSVRDLHlCQUFXSixJQUFJZixJQUFKLENBQVNtQjtBQUpYLGFBQVg7QUFNQSwyQkFBS2QsT0FBTCxDQUFhO0FBQ1hlLHdCQUFVLENBQUM7QUFDVEMsd0JBQVFOLElBQUlmLElBQUosQ0FBU3NCLE9BRFI7QUFFVEMseUJBQVNDLEtBQUtDLFNBQUwsQ0FBZXpCLElBQWY7QUFGQSxlQUFELENBREM7QUFLWGMsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwrQkFBS1csV0FBTDtBQUNELGVBUFU7QUFRWEMsb0JBQU0sY0FBU1osR0FBVCxFQUFjO0FBQ2xCLCtCQUFLVyxXQUFMO0FBQ0FwQixzQkFBTUYsT0FBTixDQUFjd0IsV0FBZDtBQUNEO0FBWFUsYUFBYjtBQWFEO0FBN0JVLFNBQWI7QUErQkQsT0FyQ087QUFzQ1JBLGlCQXRDUSx5QkFzQ007QUFDWkMsZ0JBQVFDLEdBQVIsQ0FBWSxLQUFaO0FBQ0EsWUFBSTlCLE9BQU8sRUFBWDtBQUNBLHVCQUFLK0IscUJBQUwsQ0FBMkI7QUFDekJDLGlCQUFPLG9CQURrQjtBQUV6QkMscUJBQVdqQyxJQUZjO0FBR3pCYyxtQkFBUyxtQkFBVyxDQUFFLENBSEc7QUFJekJhLGdCQUFNLGdCQUFXLENBQUUsQ0FKTTtBQUt6Qk8sb0JBQVUsb0JBQVcsQ0FBRTtBQUxFLFNBQTNCO0FBT0Q7QUFoRE8sSyxTQW1EVkMsTSxHQUFTLEU7Ozs7OzZCQUlBO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0FBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFTckMsUUFBVCxFQUFtQjtBQUMxQyxZQUFJQSxRQUFKLEVBQWM7QUFDWm1DLGVBQUtuQyxRQUFMLEdBQWdCQSxRQUFoQjtBQUNEO0FBQ0RtQyxhQUFLRyxNQUFMO0FBQ0QsT0FMRDtBQU1EOzs7O0VBL0VnQyxlQUFLQyxJOztrQkFBbkI3QyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8g5byV5YWl57uE5Lu2XG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmv4DmtLvkvJrlkZjljaEnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcbiAgICBmb290OiBGb290XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvOiB7XG4gICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICB9XG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhZGRDYXJkKCkge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgICAgfSlcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogJ2h0dHA6Ly90ZXN0LndldXBheS5jb20vcGF5L3d4U21hUHJvL2FkZENhcmQnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbWlkOiAnMTkyJ1xuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogcmVzLmRhdGEudGltZXN0YW1wLFxuICAgICAgICAgICAgbm9uY2Vfc3RyOiByZXMuZGF0YS5ub25jZV9zdHIsXG4gICAgICAgICAgICBvdXRlcl9zdHI6IHJlcy5kYXRhLm91dGVyX3N0cixcbiAgICAgICAgICAgIHNpZ25hdHVyZTogcmVzLmRhdGEuc2lnbmF0dXJlXG4gICAgICAgICAgfVxuICAgICAgICAgIHdlcHkuYWRkQ2FyZCh7XG4gICAgICAgICAgICBjYXJkTGlzdDogW3tcbiAgICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5jYXJkX2lkLFxuICAgICAgICAgICAgICBjYXJkRXh0OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICBfdGhpcy5tZXRob2RzLnJlZ2lzdGVyVmlwKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgcmVnaXN0ZXJWaXAoKSB7XG4gICAgICBjb25zb2xlLmxvZygnMTIzJylcbiAgICAgIGxldCBkYXRhID0ge31cbiAgICAgIHdlcHkubmF2aWdhdGVUb01pbmlQcm9ncmFtKHtcbiAgICAgICAgYXBwSWQ6ICd3eGViNDkwYzZmOWIxNTRlZjknLFxuICAgICAgICBleHRyYURhdGE6IGRhdGEsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uKCkge30sXG4gICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHt9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGV2ZW50cyA9IHtcblxuICB9XG5cbiAgb25Mb2FkKCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHNlbGYuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbih1c2VySW5mbykge1xuICAgICAgaWYgKHVzZXJJbmZvKSB7XG4gICAgICAgIHNlbGYudXNlckluZm8gPSB1c2VySW5mb1xuICAgICAgfVxuICAgICAgc2VsZi4kYXBwbHkoKVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==