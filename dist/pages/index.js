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
      bindCard: function bindCard() {
        _wepy2.default.navigateTo({
          url: 'oldActivation'
        });
      },
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
    key: 'getMiniMem',
    value: function getMiniMem() {
      _wepy2.default.request({
        url: _config.service.getMiniMem,
        data: {
          mid: '66',
          unionId: '123213213'
        },
        method: 'POST',
        success: function success(res) {}
      });
    }
  }, {
    key: 'onLoad',
    value: function onLoad() {
      // let self = this
      // this.$parent.getUserInfo(function(data) {
      //   if (data.userInfo) {
      //     self.userInfo = data.userInfo
      //     self.$apply()
      //     wepy.request({
      //       url: service.getUserInfo,
      //       data: {
      //         data
      //       },
      //       method: 'POST',
      //       success(res) {
      //         console.log(res)
      //         if (res.data) {
      //           self.getMiniMem()
      //         }
      //       }
      //     })
      //   }
      // })
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      _wepy2.default.getUserInfo({
        success: function success(res) {
          if (res.userInfo) {
            self.userInfo = res.userInfo;
            self.$apply();
            _wepy2.default.request({
              url: _config.service.getMiniMem,
              data: {
                mid: '66',
                openId: _wepy2.default.getStorageSync('openId'),
                appid: 'wx32a0348172f66270'
              },
              method: 'POST',
              success: function success(res) {}
            });
          }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJiaW5kQ2FyZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhZGRDYXJkIiwiX3RoaXMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsIm1pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJ0aW1lc3RhbXAiLCJub25jZV9zdHIiLCJvdXRlcl9zdHIiLCJzaWduYXR1cmUiLCJjYXJkTGlzdCIsImNhcmRJZCIsImNhcmRfaWQiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhpZGVMb2FkaW5nIiwib3BlbkNhcmQiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsImRlY3J5cHRDb2RlIiwiZW5jcnlwdF9jb2RlIiwiY29kZSIsImNhcmRDb2RlIiwiZXJyTXNnIiwiZ2V0TWluaU1lbSIsInVuaW9uSWQiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCIkYXBwbHkiLCJvcGVuSWQiLCJnZXRTdG9yYWdlU3luYyIsImFwcGlkIiwiJHBhcmVudCIsIm9uU2hhcmVBcHBNZXNzYWdlIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7Ozs7Ozs7Ozs7QUFEQTs7O0lBR3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt1TEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0I7QUFEakIsSyxTQUdUQyxVLEdBQWE7QUFDWEM7QUFEVyxLLFNBSWJDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxtQkFBVyxFQURIO0FBRVJDLGtCQUFVO0FBRkY7QUFETCxLLFNBT1BDLFEsR0FBVyxFLFNBRVhDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1QsdUJBQUtDLFVBQUwsQ0FBZ0I7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QUlBLElBQUloQixRQUFSLEVBQWtCO0FBQ2hCd0MsaUJBQUt4QyxRQUFMLEdBQWdCZ0IsSUFBSWhCLFFBQXBCO0FBQ0F3QyxpQkFBS0UsTUFBTDtBQUNBLDJCQUFLOUIsT0FBTCxDQUFhO0FBQ1hMLG1CQUFLLGdCQUFRK0IsVUFERjtBQUVYdkMsb0JBQU07QUFDSmMscUJBQUssSUFERDtBQUVKOEIsd0JBQVEsZUFBS0MsY0FBTCxDQUFvQixRQUFwQixDQUZKO0FBR0pDLHVCQUFPO0FBSEgsZUFGSztBQU9YL0Isc0JBQVEsTUFQRztBQVFYQyxxQkFSVyxtQkFRSEMsR0FSRyxFQVFFLENBRVo7QUFWVSxhQUFiO0FBWUQ7QUFDRjtBQWxCYyxPQUFqQjtBQW9CRDs7O3NDQUNpQkEsRyxFQUFLO0FBQ3JCLGFBQU8sS0FBSzhCLE9BQUwsQ0FBYUMsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7O0VBMUpnQyxlQUFLQyxJOztrQkFBbkJ0RCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHtcbiAgc2VydmljZVxufSBmcm9tICcuLi9jb25maWcuanMnXG4vLyDlvJXlhaXnu4Tku7ZcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihuWPluS8muWRmOWNoSdcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICAgIGZvb3Q6IEZvb3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdXNlckluZm86IHtcbiAgICAgIGF2YXRhclVybDogJycsXG4gICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICB9XG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kQ2FyZCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ29sZEFjdGl2YXRpb24nXG4gICAgICB9KVxuICAgIH0sXG4gICAgYWRkQ2FyZCgpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgIH0pXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHNlcnZpY2UuYWRkQ2FyZCxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1pZDogJzY2J1xuICAgICAgICB9LFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogcmVzLmRhdGEudGltZXN0YW1wLFxuICAgICAgICAgICAgbm9uY2Vfc3RyOiByZXMuZGF0YS5ub25jZV9zdHIsXG4gICAgICAgICAgICBvdXRlcl9zdHI6IHJlcy5kYXRhLm91dGVyX3N0cixcbiAgICAgICAgICAgIHNpZ25hdHVyZTogcmVzLmRhdGEuc2lnbmF0dXJlXG4gICAgICAgICAgfVxuICAgICAgICAgIHdlcHkuYWRkQ2FyZCh7XG4gICAgICAgICAgICBjYXJkTGlzdDogW3tcbiAgICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5jYXJkX2lkLFxuICAgICAgICAgICAgICBjYXJkRXh0OiBKU09OLnN0cmluZ2lmeShkYXRhKVxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICAgIF90aGlzLm9wZW5DYXJkKHJlcylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbChyZXMpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cbiAgb3BlbkNhcmQocmVzKSB7XG4gICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICB9KVxuICAgIGxldCBjYXJkSWQgPSByZXMuY2FyZExpc3RbMF0uY2FyZElkXG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogc2VydmljZS5kZWNyeXB0Q29kZSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWlkOiAnNjYnLFxuICAgICAgICBlbmNyeXB0X2NvZGU6IHJlcy5jYXJkTGlzdFswXS5jb2RlXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIHdlcHkub3BlbkNhcmQoe1xuICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgY2FyZElkOiBjYXJkSWQsXG4gICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5jYXJkQ29kZVxuICAgICAgICAgIH1dLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHlpLHotKXvvIzljp/lm6DvvJonICsgcmVzLmVyck1zZylcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGV2ZW50cyA9IHtcblxuICB9XG4gIGdldE1pbmlNZW0oKSB7XG4gICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgIHVybDogc2VydmljZS5nZXRNaW5pTWVtLFxuICAgICAgZGF0YToge1xuICAgICAgICBtaWQ6ICc2NicsXG4gICAgICAgIHVuaW9uSWQ6ICcxMjMyMTMyMTMnXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzKHJlcykge1xuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgLy8gbGV0IHNlbGYgPSB0aGlzXG4gICAgLy8gdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAvLyAgIGlmIChkYXRhLnVzZXJJbmZvKSB7XG4gICAgLy8gICAgIHNlbGYudXNlckluZm8gPSBkYXRhLnVzZXJJbmZvXG4gICAgLy8gICAgIHNlbGYuJGFwcGx5KClcbiAgICAvLyAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAvLyAgICAgICB1cmw6IHNlcnZpY2UuZ2V0VXNlckluZm8sXG4gICAgLy8gICAgICAgZGF0YToge1xuICAgIC8vICAgICAgICAgZGF0YVxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAvLyAgICAgICAgIGlmIChyZXMuZGF0YSkge1xuICAgIC8vICAgICAgICAgICBzZWxmLmdldE1pbmlNZW0oKVxuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyAgIH1cbiAgICAvLyB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGlmIChyZXMudXNlckluZm8pIHtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgICAgICB1cmw6IHNlcnZpY2UuZ2V0TWluaU1lbSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgbWlkOiAnNjYnLFxuICAgICAgICAgICAgICBvcGVuSWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpLFxuICAgICAgICAgICAgICBhcHBpZDogJ3d4MzJhMDM0ODE3MmY2NjI3MCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICByZXR1cm4gdGhpcy4kcGFyZW50Lm9uU2hhcmVBcHBNZXNzYWdlKCfmgqjmnInkuIDlvKDkvJrlkZjljaHlvoXpooblj5YnKVxuICB9XG59XG4iXX0=