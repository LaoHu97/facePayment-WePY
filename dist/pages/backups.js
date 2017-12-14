'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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
      },
      addCard: function addCard() {
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
                console.log(res);
              }
            });
          }
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

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2t1cHMuanMiXSwibmFtZXMiOlsiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwiY29tcG9uZW50cyIsImZvb3QiLCJtaXhpbnMiLCJkYXRhIiwidXNlckluZm8iLCJuaWNrTmFtZSIsImZvcm0iLCJ1c2VybmFtZSIsInVzZXJwaG9uZSIsInVzZXJpZGNhcmQiLCJiaXJ0aGRheSIsImxvYWRpbmciLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJjYXJyeU9uIiwibmF2aWdhdGVUbyIsInVybCIsImFkZENhcmQiLCJyZXF1ZXN0IiwibWlkIiwiaGVhZGVyIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInRpbWVzdGFtcCIsIm5vbmNlX3N0ciIsIm91dGVyX3N0ciIsInNpZ25hdHVyZSIsImNhcmRMaXN0IiwiY2FyZElkIiwiY2FyZF9pZCIsImNhcmRFeHQiLCJKU09OIiwic3RyaW5naWZ5IiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsInNlbGYiLCIkcGFyZW50IiwiZ2V0VXNlckluZm8iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O0FBRkE7OztJQUlxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssUUFHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxRQUliQyxNLEdBQVMsZ0IsUUFFVEMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLGtCQUFVO0FBREYsT0FETDtBQUlMQyxZQUFNO0FBQ0pDLGtCQUFVLEVBRE47QUFFSkMsbUJBQVcsRUFGUDtBQUdKQyxvQkFBWSxFQUhSO0FBSUpDLGtCQUFVLFlBSk47QUFLSkMsaUJBQVM7QUFMTDtBQUpELEssUUFhUEMsUSxHQUFXLEUsUUFJWEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGFBTlEscUJBTUU7QUFDUix1QkFBS0MsT0FBTCxDQUFhO0FBQ1hGLGVBQUssNkNBRE07QUFFWGIsZ0JBQU07QUFDSmdCLGlCQUFLO0FBREQsV0FGSztBQUtYQyxrQkFBUTtBQUNOLDRCQUFnQjtBQURWLFdBTEc7QUFRWEMsa0JBQVEsTUFSRztBQVNYQyxtQkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCLGdCQUFJcEIsT0FBTztBQUNUcUIseUJBQVdELElBQUlwQixJQUFKLENBQVNxQixTQURYO0FBRVRDLHlCQUFXRixJQUFJcEIsSUFBSixDQUFTc0IsU0FGWDtBQUdUQyx5QkFBV0gsSUFBSXBCLElBQUosQ0FBU3VCLFNBSFg7QUFJVEMseUJBQVdKLElBQUlwQixJQUFKLENBQVN3QjtBQUpYLGFBQVg7QUFNQSwyQkFBS1YsT0FBTCxDQUFhO0FBQ1hXLHdCQUFVLENBQUM7QUFDVEMsd0JBQVFOLElBQUlwQixJQUFKLENBQVMyQixPQURSO0FBRVRDLHlCQUFTQyxLQUFLQyxTQUFMLENBQWU5QixJQUFmO0FBRkEsZUFBRCxDQURDO0FBS1htQix1QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCVyx3QkFBUUMsR0FBUixDQUFZWixHQUFaO0FBQ0Q7QUFQVSxhQUFiO0FBU0Q7QUF6QlUsU0FBYjtBQTJCRDtBQWxDTyxLLFFBcUNWYSxNLEdBQVMsRTs7Ozs7NkJBR0E7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFDLFdBQWIsQ0FBeUIsVUFBU25DLFFBQVQsRUFBbUI7QUFDMUMsWUFBSUEsUUFBSixFQUFjO0FBQ1ppQyxlQUFLakMsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDtBQUNEaUMsYUFBS0csTUFBTDtBQUNELE9BTEQ7QUFNRDs7OztFQTNFZ0MsZUFBS0MsSTs7a0JBQW5CNUMsSyIsImZpbGUiOiJiYWNrdXBzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4vLyDlvJXlhaXnu4Tku7ZcclxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xyXG5pbXBvcnQgdGVzdE1peGluIGZyb20gJy4uL21peGlucy90ZXN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmv4DmtLvkvJrlkZjljaEnXHJcbiAgfVxyXG4gIGNvbXBvbmVudHMgPSB7XHJcbiAgICBmb290OiBGb290XHJcbiAgfVxyXG5cclxuICBtaXhpbnMgPSBbdGVzdE1peGluXVxyXG5cclxuICBkYXRhID0ge1xyXG4gICAgdXNlckluZm86IHtcclxuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXHJcbiAgICB9LFxyXG4gICAgZm9ybToge1xyXG4gICAgICB1c2VybmFtZTogJycsXHJcbiAgICAgIHVzZXJwaG9uZTogJycsXHJcbiAgICAgIHVzZXJpZGNhcmQ6ICcnLFxyXG4gICAgICBiaXJ0aGRheTogJzE5OTctMDEtMTUnLFxyXG4gICAgICBsb2FkaW5nOiBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29tcHV0ZWQgPSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbWV0aG9kcyA9IHtcclxuICAgIGNhcnJ5T24oKSB7XHJcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdXJsOiAnY2FtZXJhJ1xyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFkZENhcmQoKSB7XHJcbiAgICAgIHdlcHkucmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnaHR0cDovL3Rlc3Qud2V1cGF5LmNvbS9wYXkvd3hTbWFQcm8vYWRkQ2FyZCcsXHJcbiAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgbWlkOiAnMTkyJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgICAgICB0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcclxuICAgICAgICAgICAgbm9uY2Vfc3RyOiByZXMuZGF0YS5ub25jZV9zdHIsXHJcbiAgICAgICAgICAgIG91dGVyX3N0cjogcmVzLmRhdGEub3V0ZXJfc3RyLFxyXG4gICAgICAgICAgICBzaWduYXR1cmU6IHJlcy5kYXRhLnNpZ25hdHVyZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgd2VweS5hZGRDYXJkKHtcclxuICAgICAgICAgICAgY2FyZExpc3Q6IFt7XHJcbiAgICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5jYXJkX2lkLFxyXG4gICAgICAgICAgICAgIGNhcmRFeHQ6IEpTT04uc3RyaW5naWZ5KGRhdGEpXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXZlbnRzID0ge1xyXG5cclxuICB9XHJcbiAgb25Mb2FkKCkge1xyXG4gICAgbGV0IHNlbGYgPSB0aGlzXHJcbiAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24odXNlckluZm8pIHtcclxuICAgICAgaWYgKHVzZXJJbmZvKSB7XHJcbiAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXHJcbiAgICAgIH1cclxuICAgICAgc2VsZi4kYXBwbHkoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cbiJdfQ==