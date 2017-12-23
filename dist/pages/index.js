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
      navigationBarTitleText: '领取会员卡'
    }, _this2.components = {
      foot: _foot2.default
    }, _this2.data = {
      userInfo: {
        avatarUrl: '',
        nickName: '加载中...'
      }
    }, _this2.computed = {}, _this2.methods = {
      addCard: function addCard() {
        var _this = this;
        _wepy2.default.showLoading({
          title: '加载中'
        });
        _wepy2.default.request({
          url: _config.service.addCard,
          data: {
            mid: '66'
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
                _this.openCard(res);
              },
              fail: function fail(res) {
                _wepy2.default.hideLoading();
              }
            });
          },
          fail: function fail(res) {
            console.log(res.data);
          }
        });
      }
    }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Index, [{
    key: 'openCard',
    value: function openCard(res) {
      _wepy2.default.showLoading({
        title: '加载中'
      });
      var cardId = res.cardList[0].cardId;
      _wepy2.default.request({
        url: _config.service.decryptCode,
        data: {
          mid: '66',
          encrypt_code: res.cardList[0].code
        },
        method: 'POST',
        success: function success(res) {
          console.log(cardId);
          _wepy2.default.openCard({
            cardList: [{
              cardId: cardId,
              code: res.data.cardCode
            }],
            success: function success(res) {
              _wepy2.default.hideLoading();
            },
            fail: function fail(res) {
              _wepy2.default.hideLoading();
            }
          });
        }
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {}
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          self.userInfo = res.userInfo;
          self.$apply();
        }
      });
    }
  }, {
    key: 'onShareAppMessage',
    value: function onShareAppMessage(res) {
      return this.$parent.onShareAppMessage('您有一张会员卡待领取');
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhZGRDYXJkIiwiX3RoaXMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsInVybCIsIm1pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJ0aW1lc3RhbXAiLCJub25jZV9zdHIiLCJvdXRlcl9zdHIiLCJzaWduYXR1cmUiLCJjYXJkTGlzdCIsImNhcmRJZCIsImNhcmRfaWQiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhpZGVMb2FkaW5nIiwib3BlbkNhcmQiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsImRlY3J5cHRDb2RlIiwiZW5jcnlwdF9jb2RlIiwiY29kZSIsImNhcmRDb2RlIiwic2VsZiIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwiJHBhcmVudCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt1TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBSWJDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxtQkFBVyxFQURIO0FBRVJDLGtCQUFVO0FBRkY7QUFETCxLLFNBT1BDLFEsR0FBVyxFLFNBRVhDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsWUFBSUMsUUFBUSxJQUFaO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU87QUFEUSxTQUFqQjtBQUdBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyxnQkFBUUwsT0FERjtBQUVYTixnQkFBTTtBQUNKWSxpQkFBSztBQURELFdBRks7QUFLWEMsa0JBQVEsTUFMRztBQU1YQyxpQkFOVyxtQkFNSEMsR0FORyxFQU1FO0FBQ1gsZ0JBQUlmLE9BQU87QUFDVGdCLHlCQUFXRCxJQUFJZixJQUFKLENBQVNnQixTQURYO0FBRVRDLHlCQUFXRixJQUFJZixJQUFKLENBQVNpQixTQUZYO0FBR1RDLHlCQUFXSCxJQUFJZixJQUFKLENBQVNrQixTQUhYO0FBSVRDLHlCQUFXSixJQUFJZixJQUFKLENBQVNtQjtBQUpYLGFBQVg7QUFNQSwyQkFBS2IsT0FBTCxDQUFhO0FBQ1hjLHdCQUFVLENBQUM7QUFDVEMsd0JBQVFOLElBQUlmLElBQUosQ0FBU3NCLE9BRFI7QUFFVEMseUJBQVNDLEtBQUtDLFNBQUwsQ0FBZXpCLElBQWY7QUFGQSxlQUFELENBREM7QUFLWGMsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwrQkFBS1csV0FBTDtBQUNBbkIsc0JBQU1vQixRQUFOLENBQWVaLEdBQWY7QUFDRCxlQVJVO0FBU1hhLG9CQUFNLGNBQVNiLEdBQVQsRUFBYztBQUNsQiwrQkFBS1csV0FBTDtBQUNEO0FBWFUsYUFBYjtBQWFELFdBMUJVO0FBMkJYRSxjQTNCVyxnQkEyQk5iLEdBM0JNLEVBMkJEO0FBQ1JjLG9CQUFRQyxHQUFSLENBQVlmLElBQUlmLElBQWhCO0FBQ0Q7QUE3QlUsU0FBYjtBQStCRDtBQXJDTyxLLFNBb0VWK0IsTSxHQUFTLEU7Ozs7OzZCQTdCQWhCLEcsRUFBSztBQUNaLHFCQUFLUCxXQUFMLENBQWlCO0FBQ2ZDLGVBQU87QUFEUSxPQUFqQjtBQUdBLFVBQUlZLFNBQVNOLElBQUlLLFFBQUosQ0FBYSxDQUFiLEVBQWdCQyxNQUE3QjtBQUNBLHFCQUFLWCxPQUFMLENBQWE7QUFDWEMsYUFBSyxnQkFBUXFCLFdBREY7QUFFWGhDLGNBQU07QUFDSlksZUFBSyxJQUREO0FBRUpxQix3QkFBY2xCLElBQUlLLFFBQUosQ0FBYSxDQUFiLEVBQWdCYztBQUYxQixTQUZLO0FBTVhyQixnQkFBUSxNQU5HO0FBT1hDLGVBUFcsbUJBT0hDLEdBUEcsRUFPRTtBQUNYYyxrQkFBUUMsR0FBUixDQUFZVCxNQUFaO0FBQ0EseUJBQUtNLFFBQUwsQ0FBYztBQUNaUCxzQkFBVSxDQUFDO0FBQ1RDLHNCQUFRQSxNQURDO0FBRVRhLG9CQUFNbkIsSUFBSWYsSUFBSixDQUFTbUM7QUFGTixhQUFELENBREU7QUFLWnJCLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsNkJBQUtXLFdBQUw7QUFDRCxhQVBXO0FBUVpFLGtCQUFNLGNBQVNiLEdBQVQsRUFBYztBQUNsQiw2QkFBS1csV0FBTDtBQUNEO0FBVlcsV0FBZDtBQVlEO0FBckJVLE9BQWI7QUF1QkQ7Ozs2QkFJUSxDQUFFOzs7NkJBQ0Y7QUFDUCxVQUFJVSxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmdkIsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1hxQixlQUFLbkMsUUFBTCxHQUFnQmMsSUFBSWQsUUFBcEI7QUFDQW1DLGVBQUtFLE1BQUw7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7OztzQ0FDaUJ2QixHLEVBQUs7QUFDckIsYUFBTyxLQUFLd0IsT0FBTCxDQUFhQyxpQkFBYixDQUErQixZQUEvQixDQUFQO0FBQ0Q7Ozs7RUFwR2dDLGVBQUtDLEk7O2tCQUFuQjlDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICBzZXJ2aWNlXG59IGZyb20gJy4uL2NvbmZpZy5qcydcbi8vIOW8leWFpee7hOS7tlxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aKG5Y+W5Lya5ZGY5Y2hJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgZm9vdDogRm9vdFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB1c2VySW5mbzoge1xuICAgICAgYXZhdGFyVXJsOiAnJyxcbiAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIGFkZENhcmQoKSB7XG4gICAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgICB9KVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBzZXJ2aWNlLmFkZENhcmQsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtaWQ6ICc2NidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIG5vbmNlX3N0cjogcmVzLmRhdGEubm9uY2Vfc3RyLFxuICAgICAgICAgICAgb3V0ZXJfc3RyOiByZXMuZGF0YS5vdXRlcl9zdHIsXG4gICAgICAgICAgICBzaWduYXR1cmU6IHJlcy5kYXRhLnNpZ25hdHVyZVxuICAgICAgICAgIH1cbiAgICAgICAgICB3ZXB5LmFkZENhcmQoe1xuICAgICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuY2FyZF9pZCxcbiAgICAgICAgICAgICAgY2FyZEV4dDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICBfdGhpcy5vcGVuQ2FyZChyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9wZW5DYXJkKHJlcykge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgfSlcbiAgICBsZXQgY2FyZElkID0gcmVzLmNhcmRMaXN0WzBdLmNhcmRJZFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IHNlcnZpY2UuZGVjcnlwdENvZGUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1pZDogJzY2JyxcbiAgICAgICAgZW5jcnlwdF9jb2RlOiByZXMuY2FyZExpc3RbMF0uY29kZVxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc29sZS5sb2coY2FyZElkKVxuICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcbiAgICAgICAgICBjYXJkTGlzdDogW3tcbiAgICAgICAgICAgIGNhcmRJZDogY2FyZElkLFxuICAgICAgICAgICAgY29kZTogcmVzLmRhdGEuY2FyZENvZGVcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfVxuICBvbkxvYWQoKSB7fVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBzZWxmLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgIHJldHVybiB0aGlzLiRwYXJlbnQub25TaGFyZUFwcE1lc3NhZ2UoJ+aCqOacieS4gOW8oOS8muWRmOWNoeW+hemihuWPlicpXG4gIH1cbn1cbiJdfQ==