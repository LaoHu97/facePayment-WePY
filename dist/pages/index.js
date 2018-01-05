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
          header: {
            'content-type': 'application/json'
          },
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
        header: {
          'content-type': 'application/json'
        },
        data: {
          mid: '66',
          cardId: cardId,
          openId: _wepy2.default.getStorageSync('openId'),
          encrypt_code: res.cardList[0].code
        },
        method: 'POST',
        success: function success(res) {
          _wepy2.default.openCard({
            cardList: [{
              cardId: cardId,
              code: res.data.data.cardCode
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
    key: 'getMiniMem',
    value: function getMiniMem() {
      _wepy2.default.request({
        url: _config.service.getMiniMem,
        header: {
          'content-type': 'application/json'
        },
        data: {
          mid: '66',
          openId: _wepy2.default.getStorageSync('openId'),
          appid: 'wx32a0348172f66270'
        },
        method: 'POST',
        success: function success(res) {
          _wepy2.default.hideLoading();
          if (res.data.status === 200) {
            if (res.data.data.isMem) {
              if (res.data.data.isActive) {
                if (res.data.data.isFace) {
                  _wepy2.default.openCard({
                    cardList: [{
                      cardId: res.data.data.cardId,
                      code: res.data.data.cardCode
                    }],
                    success: function success(res) {
                      console.log('打开会员卡成功');
                    },
                    fail: function fail(res) {
                      console.log('打开会员卡失败，原因：' + res.errMsg);
                    }
                  });
                }
                _wepy2.default.navigateTo({
                  url: 'camera'
                });
              } else {
                _wepy2.default.openCard({
                  cardList: [{
                    cardId: res.data.data.cardId,
                    code: res.data.data.cardCode
                  }],
                  success: function success(res) {
                    console.log('打开会员卡成功');
                  },
                  fail: function fail(res) {
                    console.log('打开会员卡失败，原因：' + res.errMsg);
                  }
                });
              }
            }
          }
        }
      });
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
            _wepy2.default.showLoading({
              title: '请稍后'
            });
            setTimeout(function () {
              self.getMiniMem();
            }, 1000);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJiaW5kQ2FyZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhZGRDYXJkIiwiX3RoaXMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsImhlYWRlciIsIm1pZCIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJ0aW1lc3RhbXAiLCJub25jZV9zdHIiLCJvdXRlcl9zdHIiLCJzaWduYXR1cmUiLCJjYXJkTGlzdCIsImNhcmRJZCIsImNhcmRfaWQiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsImhpZGVMb2FkaW5nIiwib3BlbkNhcmQiLCJmYWlsIiwiY29uc29sZSIsImxvZyIsImV2ZW50cyIsImRlY3J5cHRDb2RlIiwib3BlbklkIiwiZ2V0U3RvcmFnZVN5bmMiLCJlbmNyeXB0X2NvZGUiLCJjb2RlIiwiY2FyZENvZGUiLCJlcnJNc2ciLCJnZXRNaW5pTWVtIiwiYXBwaWQiLCJzdGF0dXMiLCJpc01lbSIsImlzQWN0aXZlIiwiaXNGYWNlIiwic2VsZiIsImdldFVzZXJJbmZvIiwiJGFwcGx5Iiwic2V0VGltZW91dCIsIiRwYXJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7dUxBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssU0FHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxTQUliQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsbUJBQVcsRUFESDtBQUVSQyxrQkFBVTtBQUZGO0FBREwsSyxTQU9QQyxRLEdBQVcsRSxTQUVY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QUFSLENBQVksZ0JBQWdCZixJQUFJdUIsTUFBaEM7QUFDRDtBQVZXLGlCQUFkO0FBWUQ7QUFDRjtBQUNGO0FBQ0Y7QUFqRFUsT0FBYjtBQW1ERDs7OzZCQUNRO0FBQ1AsVUFBSU8sT0FBTyxJQUFYO0FBQ0EscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZmhDLGVBRGUsbUJBQ1BDLEdBRE8sRUFDRjtBQUNYLGNBQUlBLElBQUlqQixRQUFSLEVBQWtCO0FBQ2hCK0MsaUJBQUsvQyxRQUFMLEdBQWdCaUIsSUFBSWpCLFFBQXBCO0FBQ0ErQyxpQkFBS0UsTUFBTDtBQUNBLDJCQUFLdkMsV0FBTCxDQUFpQjtBQUNmQyxxQkFBTztBQURRLGFBQWpCO0FBR0F1Qyx1QkFBVyxZQUFXO0FBQ3BCSCxtQkFBS04sVUFBTDtBQUNELGFBRkQsRUFFRyxJQUZIO0FBR0Q7QUFDRjtBQVpjLE9BQWpCO0FBY0Q7OztzQ0FDaUJ4QixHLEVBQUs7QUFDckIsYUFBTyxLQUFLa0MsT0FBTCxDQUFhQyxpQkFBYixDQUErQixZQUEvQixDQUFQO0FBQ0Q7Ozs7RUFoTGdDLGVBQUtDLEk7O2tCQUFuQjNELEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICBzZXJ2aWNlXG59IGZyb20gJy4uL2NvbmZpZy5qcydcbi8vIOW8leWFpee7hOS7tlxuaW1wb3J0IEZvb3QgZnJvbSAnLi4vY29tcG9uZW50cy9mb290J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XG4gIGNvbmZpZyA9IHtcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aKG5Y+W5Lya5ZGY5Y2hJ1xuICB9XG4gIGNvbXBvbmVudHMgPSB7XG4gICAgZm9vdDogRm9vdFxuICB9XG5cbiAgZGF0YSA9IHtcbiAgICB1c2VySW5mbzoge1xuICAgICAgYXZhdGFyVXJsOiAnJyxcbiAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIGJpbmRDYXJkKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnb2xkQWN0aXZhdGlvbidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhZGRDYXJkKCkge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgICAgfSlcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogc2VydmljZS5hZGRDYXJkLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtaWQ6ICc2NidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIG5vbmNlX3N0cjogcmVzLmRhdGEubm9uY2Vfc3RyLFxuICAgICAgICAgICAgb3V0ZXJfc3RyOiByZXMuZGF0YS5vdXRlcl9zdHIsXG4gICAgICAgICAgICBzaWduYXR1cmU6IHJlcy5kYXRhLnNpZ25hdHVyZVxuICAgICAgICAgIH1cbiAgICAgICAgICB3ZXB5LmFkZENhcmQoe1xuICAgICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuY2FyZF9pZCxcbiAgICAgICAgICAgICAgY2FyZEV4dDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICBfdGhpcy5vcGVuQ2FyZChyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9wZW5DYXJkKHJlcykge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgfSlcbiAgICBsZXQgY2FyZElkID0gcmVzLmNhcmRMaXN0WzBdLmNhcmRJZFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IHNlcnZpY2UuZGVjcnlwdENvZGUsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWlkOiAnNjYnLFxuICAgICAgICBjYXJkSWQ6IGNhcmRJZCxcbiAgICAgICAgb3BlbklkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKSxcbiAgICAgICAgZW5jcnlwdF9jb2RlOiByZXMuY2FyZExpc3RbMF0uY29kZVxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgd2VweS5vcGVuQ2FyZCh7XG4gICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICBjYXJkSWQ6IGNhcmRJZCxcbiAgICAgICAgICAgIGNvZGU6IHJlcy5kYXRhLmRhdGEuY2FyZENvZGVcbiAgICAgICAgICB9XSxcbiAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5aSx6LSl77yM5Y6f5Zug77yaJyArIHJlcy5lcnJNc2cpXG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBldmVudHMgPSB7XG5cbiAgfVxuICBvbkxvYWQoKSB7XG5cbiAgfVxuICBnZXRNaW5pTWVtKCkge1xuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IHNlcnZpY2UuZ2V0TWluaU1lbSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBtaWQ6ICc2NicsXG4gICAgICAgIG9wZW5JZDogd2VweS5nZXRTdG9yYWdlU3luYygnb3BlbklkJyksXG4gICAgICAgIGFwcGlkOiAnd3gzMmEwMzQ4MTcyZjY2MjcwJ1xuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmlzTWVtKSB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0ZhY2UpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcbiAgICAgICAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmRhdGEuY2FyZElkLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXG4gICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5oiQ5YqfJylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICdjYW1lcmEnXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcbiAgICAgICAgICAgICAgICBjYXJkTGlzdDogW3tcbiAgICAgICAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuZGF0YS5jYXJkSWQsXG4gICAgICAgICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXG4gICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5oiQ5YqfJylcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB3ZXB5LmdldFVzZXJJbmZvKHtcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGlmIChyZXMudXNlckluZm8pIHtcbiAgICAgICAgICBzZWxmLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvXG4gICAgICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICAgICAgdGl0bGU6ICfor7fnqI3lkI4nLFxuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZ2V0TWluaU1lbSgpXG4gICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcbiAgfVxufVxuIl19