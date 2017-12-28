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
          console.log(res);
          _wepy2.default.openCard({
            cardList: [{
              cardId: cardId,
              code: res.data.cardCode
            }],
            success: function success(res) {
              _wepy2.default.hideLoading();
            },
            fail: function fail(res) {
              console.log('打开会员卡失败，原因：' + res.errMsg);
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
      this.$parent.getUserInfo(function (data) {
        console.log(data.userInfo);
        if (data.userInfo) {
          self.userInfo = data.userInfo;
        }
        self.$apply();
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhZGRDYXJkIiwiX3RoaXMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsInVybCIsIm1pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJ0aW1lc3RhbXAiLCJub25jZV9zdHIiLCJvdXRlcl9zdHIiLCJzaWduYXR1cmUiLCJjYXJkTGlzdCIsImNhcmRJZCIsImNhcmRfaWQiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhpZGVMb2FkaW5nIiwib3BlbkNhcmQiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsImRlY3J5cHRDb2RlIiwiZW5jcnlwdF9jb2RlIiwiY29kZSIsImNhcmRDb2RlIiwiZXJyTXNnIiwic2VsZiIsIiRwYXJlbnQiLCJnZXRVc2VySW5mbyIsIiRhcHBseSIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt1TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBSWJDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxtQkFBVyxFQURIO0FBRVJDLGtCQUFVO0FBRkY7QUFETCxLLFNBT1BDLFEsR0FBVyxFLFNBRVhDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsWUFBSUMsUUFBUSxJQUFaO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU87QUFEUSxTQUFqQjtBQUdBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEMsZUFBSyxnQkFBUUwsT0FERjtBQUVYTixnQkFBTTtBQUNKWSxpQkFBSztBQURELFdBRks7QUFLWEMsa0JBQVEsTUFMRztBQU1YQyxpQkFOVyxtQkFNSEMsR0FORyxFQU1FO0FBQ1gsZ0JBQUlmLE9BQU87QUFDVGdCLHlCQUFXRCxJQUFJZixJQUFKLENBQVNnQixTQURYO0FBRVRDLHlCQUFXRixJQUFJZixJQUFKLENBQVNpQixTQUZYO0FBR1RDLHlCQUFXSCxJQUFJZixJQUFKLENBQVNrQixTQUhYO0FBSVRDLHlCQUFXSixJQUFJZixJQUFKLENBQVNtQjtBQUpYLGFBQVg7QUFNQSwyQkFBS2IsT0FBTCxDQUFhO0FBQ1hjLHdCQUFVLENBQUM7QUFDVEMsd0JBQVFOLElBQUlmLElBQUosQ0FBU3NCLE9BRFI7QUFFVEMseUJBQVNDLEtBQUtDLFNBQUwsQ0FBZXpCLElBQWY7QUFGQSxlQUFELENBREM7QUFLWGMsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwrQkFBS1csV0FBTDtBQUNBbkIsc0JBQU1vQixRQUFOLENBQWVaLEdBQWY7QUFDRCxlQVJVO0FBU1hhLG9CQUFNLGNBQVNiLEdBQVQsRUFBYztBQUNsQiwrQkFBS1csV0FBTDtBQUNEO0FBWFUsYUFBYjtBQWFELFdBMUJVO0FBMkJYRSxjQTNCVyxnQkEyQk5iLEdBM0JNLEVBMkJEO0FBQ1JjLG9CQUFRQyxHQUFSLENBQVlmLElBQUlmLElBQWhCO0FBQ0Q7QUE3QlUsU0FBYjtBQStCRDtBQXJDTyxLLFNBcUVWK0IsTSxHQUFTLEU7Ozs7OzZCQTlCQWhCLEcsRUFBSztBQUNaLHFCQUFLUCxXQUFMLENBQWlCO0FBQ2ZDLGVBQU87QUFEUSxPQUFqQjtBQUdBLFVBQUlZLFNBQVNOLElBQUlLLFFBQUosQ0FBYSxDQUFiLEVBQWdCQyxNQUE3QjtBQUNBLHFCQUFLWCxPQUFMLENBQWE7QUFDWEMsYUFBSyxnQkFBUXFCLFdBREY7QUFFWGhDLGNBQU07QUFDSlksZUFBSyxJQUREO0FBRUpxQix3QkFBY2xCLElBQUlLLFFBQUosQ0FBYSxDQUFiLEVBQWdCYztBQUYxQixTQUZLO0FBTVhyQixnQkFBUSxNQU5HO0FBT1hDLGVBUFcsbUJBT0hDLEdBUEcsRUFPRTtBQUNYYyxrQkFBUUMsR0FBUixDQUFZZixHQUFaO0FBQ0EseUJBQUtZLFFBQUwsQ0FBYztBQUNaUCxzQkFBVSxDQUFDO0FBQ1RDLHNCQUFRQSxNQURDO0FBRVRhLG9CQUFNbkIsSUFBSWYsSUFBSixDQUFTbUM7QUFGTixhQUFELENBREU7QUFLWnJCLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsNkJBQUtXLFdBQUw7QUFDRCxhQVBXO0FBUVpFLGtCQUFNLGNBQVNiLEdBQVQsRUFBYztBQUNsQmMsc0JBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JmLElBQUlxQixNQUFoQztBQUNBLDZCQUFLVixXQUFMO0FBQ0Q7QUFYVyxXQUFkO0FBYUQ7QUF0QlUsT0FBYjtBQXdCRDs7OzZCQUlRLENBQUU7Ozs2QkFDRjtBQUNQLFVBQUlXLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYUMsV0FBYixDQUF5QixVQUFTdkMsSUFBVCxFQUFlO0FBQ3RDNkIsZ0JBQVFDLEdBQVIsQ0FBWTlCLEtBQUtDLFFBQWpCO0FBQ0EsWUFBSUQsS0FBS0MsUUFBVCxFQUFtQjtBQUNqQm9DLGVBQUtwQyxRQUFMLEdBQWdCRCxLQUFLQyxRQUFyQjtBQUNEO0FBQ0RvQyxhQUFLRyxNQUFMO0FBQ0QsT0FORDtBQU9EOzs7c0NBQ2lCekIsRyxFQUFLO0FBQ3JCLGFBQU8sS0FBS3VCLE9BQUwsQ0FBYUcsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7O0VBdEdnQyxlQUFLQyxJOztrQkFBbkIvQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHtcbiAgc2VydmljZVxufSBmcm9tICcuLi9jb25maWcuanMnXG4vLyDlvJXlhaXnu4Tku7ZcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihuWPluS8muWRmOWNoSdcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICAgIGZvb3Q6IEZvb3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdXNlckluZm86IHtcbiAgICAgIGF2YXRhclVybDogJycsXG4gICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICB9XG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhZGRDYXJkKCkge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgICAgfSlcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogc2VydmljZS5hZGRDYXJkLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbWlkOiAnNjYnXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiByZXMuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgICBub25jZV9zdHI6IHJlcy5kYXRhLm5vbmNlX3N0cixcbiAgICAgICAgICAgIG91dGVyX3N0cjogcmVzLmRhdGEub3V0ZXJfc3RyLFxuICAgICAgICAgICAgc2lnbmF0dXJlOiByZXMuZGF0YS5zaWduYXR1cmVcbiAgICAgICAgICB9XG4gICAgICAgICAgd2VweS5hZGRDYXJkKHtcbiAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmNhcmRfaWQsXG4gICAgICAgICAgICAgIGNhcmRFeHQ6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgICAgX3RoaXMub3BlbkNhcmQocmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvcGVuQ2FyZChyZXMpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgIH0pXG4gICAgbGV0IGNhcmRJZCA9IHJlcy5jYXJkTGlzdFswXS5jYXJkSWRcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBzZXJ2aWNlLmRlY3J5cHRDb2RlLFxuICAgICAgZGF0YToge1xuICAgICAgICBtaWQ6ICc2NicsXG4gICAgICAgIGVuY3J5cHRfY29kZTogcmVzLmNhcmRMaXN0WzBdLmNvZGVcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgd2VweS5vcGVuQ2FyZCh7XG4gICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICBjYXJkSWQ6IGNhcmRJZCxcbiAgICAgICAgICAgIGNvZGU6IHJlcy5kYXRhLmNhcmRDb2RlXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gIH1cbiAgb25Mb2FkKCkge31cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnVzZXJJbmZvKVxuICAgICAgaWYgKGRhdGEudXNlckluZm8pIHtcbiAgICAgICAgc2VsZi51c2VySW5mbyA9IGRhdGEudXNlckluZm9cbiAgICAgIH1cbiAgICAgIHNlbGYuJGFwcGx5KClcbiAgICB9KVxuICB9XG4gIG9uU2hhcmVBcHBNZXNzYWdlKHJlcykge1xuICAgIHJldHVybiB0aGlzLiRwYXJlbnQub25TaGFyZUFwcE1lc3NhZ2UoJ+aCqOacieS4gOW8oOS8muWRmOWNoeW+hemihuWPlicpXG4gIH1cbn1cbiJdfQ==