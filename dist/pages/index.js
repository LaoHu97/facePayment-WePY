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
      navigationBarTitleText: '领取会员卡'
    }, _this2.components = {
      foot: _foot2.default
    }, _this2.data = {
      userInfo: {
        avatarUrl: '',
        nickName: '加载中...'
      }
    }, _this2.computed = {}, _this2.methods = {
      addCard: function addCard(cb) {
        var _this = this;
        _wepy2.default.showLoading({
          title: '加载中'
        });
        _wepy2.default.request({
          url: 'http://test.weupay.com/pay/wxSmaPro/addCard',
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
                _this.methods.openCard(res);
              },
              fail: function fail(res) {
                _wepy2.default.hideLoading();
              }
            });
          }
        });
      },
      openCard: function openCard(res) {
        var cardId = res.cardList[0].cardId;
        // let _this = this
        _wepy2.default.showLoading({
          title: '加载中'
        });
        _wepy2.default.request({
          url: 'http://test.weupay.com/pay/wxSmaPro/decryptCode',
          data: {
            mid: '66',
            encrypt_code: res.cardList[0].code
          },
          method: 'POST',
          success: function success(res) {
            _wepy2.default.openCard({
              cardList: [{
                cardId: cardId,
                code: res.data.cardCode
              }],
              complete: function complete(res) {
                console.log(res);
              }
            });
          }
        });
      },
      registerVip: function registerVip(cb) {
        _wepy2.default.request({
          url: 'http://test.weupay.com/pay/wxSmaPro/activeGetUrl',
          data: {
            mid: '66'
          },
          method: 'POST',
          success: function success(res) {
            var aParams = res.data.decodeUrl.split('&encrypt_card_id=');
            var encryptCardId = aParams[1].split('&');
            var outerStr = encryptCardId[1].split('outer_str=')[1];
            var biz = encryptCardId[2].split('=')[1];
            var data = {
              encrypt_card_id: encryptCardId[0],
              outer_str: outerStr,
              biz: biz
            };

            _wepy2.default.navigateToMiniProgram({
              appId: 'wxeb490c6f9b154ef9',
              extraData: data,
              success: function success(res) {
                cb && cb(res);
              },
              fail: function fail(res) {
                cb && cb(res);
              }
            });
          }
        });
      }
    }, _this2.events = {}, _temp), _possibleConstructorReturn(_this2, _ret);
  }

  _createClass(Index, [{
    key: 'onReady',
    value: function onReady() {
      // this.methods.addCard()
      this.methods.registerVip(function (cb) {
        console.log(cb);
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      _wepy2.default.getUserInfo({
        complete: function complete(res) {
          self.userInfo = res.userInfo;
          self.$apply();
        }
      });
    }
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhZGRDYXJkIiwiY2IiLCJfdGhpcyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJyZXF1ZXN0IiwidXJsIiwibWlkIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInRpbWVzdGFtcCIsIm5vbmNlX3N0ciIsIm91dGVyX3N0ciIsInNpZ25hdHVyZSIsImNhcmRMaXN0IiwiY2FyZElkIiwiY2FyZF9pZCIsImNhcmRFeHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaGlkZUxvYWRpbmciLCJvcGVuQ2FyZCIsImZhaWwiLCJlbmNyeXB0X2NvZGUiLCJjb2RlIiwiY2FyZENvZGUiLCJjb21wbGV0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZWdpc3RlclZpcCIsImFQYXJhbXMiLCJkZWNvZGVVcmwiLCJzcGxpdCIsImVuY3J5cHRDYXJkSWQiLCJvdXRlclN0ciIsImJpeiIsImVuY3J5cHRfY2FyZF9pZCIsIm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSIsImFwcElkIiwiZXh0cmFEYXRhIiwiZXZlbnRzIiwic2VsZiIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt1TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBSWJDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxtQkFBVyxFQURIO0FBRVJDLGtCQUFVO0FBRkY7QUFETCxLLFNBT1BDLFEsR0FBVyxFLFNBRVhDLE8sR0FBVTtBQUNSQyxhQURRLG1CQUNBQyxFQURBLEVB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RUFBYztBQUNyQlQsc0JBQU1BLEdBQUdTLEdBQUgsQ0FBTjtBQUNELGVBTHdCO0FBTXpCYSxvQkFBTSxjQUFTYixHQUFULEVBQWM7QUFDbEJULHNCQUFNQSxHQUFHUyxHQUFILENBQU47QUFDRDtBQVJ3QixhQUEzQjtBQVVEO0FBM0JVLFNBQWI7QUE2QkQ7QUEzRk8sSyxTQThGVitCLE0sR0FBUyxFOzs7Ozs4QkFHQztBQUNSO0FBQ0EsV0FBSzFDLE9BQUwsQ0FBYStCLFdBQWIsQ0FBeUIsVUFBUzdCLEVBQVQsRUFBYTtBQUNwQzJCLGdCQUFRQyxHQUFSLENBQVk1QixFQUFaO0FBQ0QsT0FGRDtBQUdEOzs7NkJBQ1E7QUFDUCxVQUFJeUMsT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZmhCLGdCQURlLG9CQUNOakIsR0FETSxFQUNEO0FBQ1pnQyxlQUFLL0MsUUFBTCxHQUFnQmUsSUFBSWYsUUFBcEI7QUFDQStDLGVBQUtFLE1BQUw7QUFDRDtBQUpjLE9BQWpCO0FBTUQ7Ozs7RUFoSWdDLGVBQUtDLEk7O2tCQUFuQnhELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyDlvJXlhaXnu4Tku7ZcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihuWPluS8muWRmOWNoSdcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICAgIGZvb3Q6IEZvb3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdXNlckluZm86IHtcbiAgICAgIGF2YXRhclVybDogJycsXG4gICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICB9XG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBhZGRDYXJkKGNiKSB7XG4gICAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgICB9KVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovL3Rlc3Qud2V1cGF5LmNvbS9wYXkvd3hTbWFQcm8vYWRkQ2FyZCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtaWQ6ICc2NidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIG5vbmNlX3N0cjogcmVzLmRhdGEubm9uY2Vfc3RyLFxuICAgICAgICAgICAgb3V0ZXJfc3RyOiByZXMuZGF0YS5vdXRlcl9zdHIsXG4gICAgICAgICAgICBzaWduYXR1cmU6IHJlcy5kYXRhLnNpZ25hdHVyZVxuICAgICAgICAgIH1cbiAgICAgICAgICB3ZXB5LmFkZENhcmQoe1xuICAgICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuY2FyZF9pZCxcbiAgICAgICAgICAgICAgY2FyZEV4dDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICBfdGhpcy5tZXRob2RzLm9wZW5DYXJkKHJlcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIG9wZW5DYXJkKHJlcykge1xuICAgICAgbGV0IGNhcmRJZCA9IHJlcy5jYXJkTGlzdFswXS5jYXJkSWRcbiAgICAgIC8vIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgIH0pXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vdGVzdC53ZXVwYXkuY29tL3BheS93eFNtYVByby9kZWNyeXB0Q29kZScsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtaWQ6ICc2NicsXG4gICAgICAgICAgZW5jcnlwdF9jb2RlOiByZXMuY2FyZExpc3RbMF0uY29kZVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcbiAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgICBjYXJkSWQ6IGNhcmRJZCxcbiAgICAgICAgICAgICAgY29kZTogcmVzLmRhdGEuY2FyZENvZGVcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHJlZ2lzdGVyVmlwKGNiKSB7XG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6ICdodHRwOi8vdGVzdC53ZXVwYXkuY29tL3BheS93eFNtYVByby9hY3RpdmVHZXRVcmwnLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgbWlkOiAnNjYnXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGxldCBhUGFyYW1zID0gcmVzLmRhdGEuZGVjb2RlVXJsLnNwbGl0KCcmZW5jcnlwdF9jYXJkX2lkPScpXG4gICAgICAgICAgbGV0IGVuY3J5cHRDYXJkSWQgPSBhUGFyYW1zWzFdLnNwbGl0KCcmJylcbiAgICAgICAgICBsZXQgb3V0ZXJTdHIgPSBlbmNyeXB0Q2FyZElkWzFdLnNwbGl0KCdvdXRlcl9zdHI9JylbMV1cbiAgICAgICAgICBsZXQgYml6ID0gZW5jcnlwdENhcmRJZFsyXS5zcGxpdCgnPScpWzFdXG4gICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBlbmNyeXB0X2NhcmRfaWQ6IGVuY3J5cHRDYXJkSWRbMF0sXG4gICAgICAgICAgICBvdXRlcl9zdHI6IG91dGVyU3RyLFxuICAgICAgICAgICAgYml6OiBiaXpcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3ZXB5Lm5hdmlnYXRlVG9NaW5pUHJvZ3JhbSh7XG4gICAgICAgICAgICBhcHBJZDogJ3d4ZWI0OTBjNmY5YjE1NGVmOScsXG4gICAgICAgICAgICBleHRyYURhdGE6IGRhdGEsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgY2IgJiYgY2IocmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBjYiAmJiBjYihyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7XG5cbiAgfVxuICBvblJlYWR5KCkge1xuICAgIC8vIHRoaXMubWV0aG9kcy5hZGRDYXJkKClcbiAgICB0aGlzLm1ldGhvZHMucmVnaXN0ZXJWaXAoZnVuY3Rpb24oY2IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGNiKVxuICAgIH0pXG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgY29tcGxldGUocmVzKSB7XG4gICAgICAgIHNlbGYudXNlckluZm8gPSByZXMudXNlckluZm9cbiAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbn1cbiJdfQ==