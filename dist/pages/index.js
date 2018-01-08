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
            mid: _wepy2.default.getStorageSync('mid')
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
          mid: _wepy2.default.getStorageSync('mid'),
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
          mid: _wepy2.default.getStorageSync('mid'),
          openId: _wepy2.default.getStorageSync('openId'),
          appid: _wepy2.default.getStorageSync('appid')
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJiaW5kQ2FyZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhZGRDYXJkIiwiX3RoaXMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsImhlYWRlciIsIm1pZCIsImdldFN0b3JhZ2VTeW5jIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInRpbWVzdGFtcCIsIm5vbmNlX3N0ciIsIm91dGVyX3N0ciIsInNpZ25hdHVyZSIsImNhcmRMaXN0IiwiY2FyZElkIiwiY2FyZF9pZCIsImNhcmRFeHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaGlkZUxvYWRpbmciLCJvcGVuQ2FyZCIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwiZGVjcnlwdENvZGUiLCJvcGVuSWQiLCJlbmNyeXB0X2NvZGUiLCJjb2RlIiwiY2FyZENvZGUiLCJlcnJNc2ciLCJnZXRNaW5pTWVtIiwiYXBwaWQiLCJzdGF0dXMiLCJpc01lbSIsImlzQWN0aXZlIiwiaXNGYWNlIiwic2VsZiIsImdldFVzZXJJbmZvIiwiJGFwcGx5Iiwic2V0VGltZW91dCIsIiRwYXJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7dUxBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssU0FHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxTQUliQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsbUJBQVcsRUFESDtBQUVSQyxrQkFBVTtBQUZGO0FBREwsSyxTQU9QQyxRLEdBQVcsRSxTQUVY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QyxHQUFULEVBQWM7QUFDckJjLDRCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNELG1CQVBXO0FBUVpGLHdCQUFNLGNBQVNiLEdBQVQsRUFBYztBQUNsQmMsNEJBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JmLElBQUlzQixNQUFoQztBQUNEO0FBVlcsaUJBQWQ7QUFZRDtBQUNGO0FBQ0Y7QUFDRjtBQWpEVSxPQUFiO0FBbUREOzs7NkJBQ1E7QUFDUCxVQUFJTyxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmL0IsZUFEZSxtQkFDUEMsR0FETyxFQUNGO0FBQ1gsY0FBSUEsSUFBSWxCLFFBQVIsRUFBa0I7QUFDaEIrQyxpQkFBSy9DLFFBQUwsR0FBZ0JrQixJQUFJbEIsUUFBcEI7QUFDQStDLGlCQUFLRSxNQUFMO0FBQ0EsMkJBQUt2QyxXQUFMLENBQWlCO0FBQ2ZDLHFCQUFPO0FBRFEsYUFBakI7QUFHQXVDLHVCQUFXLFlBQVc7QUFDcEJILG1CQUFLTixVQUFMO0FBQ0QsYUFGRCxFQUVHLElBRkg7QUFHRDtBQUNGO0FBWmMsT0FBakI7QUFjRDs7O3NDQUNpQnZCLEcsRUFBSztBQUNyQixhQUFPLEtBQUtpQyxPQUFMLENBQWFDLGlCQUFiLENBQStCLFlBQS9CLENBQVA7QUFDRDs7OztFQWhMZ0MsZUFBS0MsSTs7a0JBQW5CM0QsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIHNlcnZpY2Vcbn0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuLy8g5byV5YWl57uE5Lu2XG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpooblj5bkvJrlkZjljaEnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcbiAgICBmb290OiBGb290XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvOiB7XG4gICAgICBhdmF0YXJVcmw6ICcnLFxuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYmluZENhcmQoKSB7XG4gICAgICB3ZXB5Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICdvbGRBY3RpdmF0aW9uJ1xuICAgICAgfSlcbiAgICB9LFxuICAgIGFkZENhcmQoKSB7XG4gICAgICBsZXQgX3RoaXMgPSB0aGlzXG4gICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgICB9KVxuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBzZXJ2aWNlLmFkZENhcmQsXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIG1pZDogd2VweS5nZXRTdG9yYWdlU3luYygnbWlkJylcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIG5vbmNlX3N0cjogcmVzLmRhdGEubm9uY2Vfc3RyLFxuICAgICAgICAgICAgb3V0ZXJfc3RyOiByZXMuZGF0YS5vdXRlcl9zdHIsXG4gICAgICAgICAgICBzaWduYXR1cmU6IHJlcy5kYXRhLnNpZ25hdHVyZVxuICAgICAgICAgIH1cbiAgICAgICAgICB3ZXB5LmFkZENhcmQoe1xuICAgICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuY2FyZF9pZCxcbiAgICAgICAgICAgICAgY2FyZEV4dDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICBfdGhpcy5vcGVuQ2FyZChyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9wZW5DYXJkKHJlcykge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgfSlcbiAgICBsZXQgY2FyZElkID0gcmVzLmNhcmRMaXN0WzBdLmNhcmRJZFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IHNlcnZpY2UuZGVjcnlwdENvZGUsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWlkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdtaWQnKSxcbiAgICAgICAgY2FyZElkOiBjYXJkSWQsXG4gICAgICAgIG9wZW5JZDogd2VweS5nZXRTdG9yYWdlU3luYygnb3BlbklkJyksXG4gICAgICAgIGVuY3J5cHRfY29kZTogcmVzLmNhcmRMaXN0WzBdLmNvZGVcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHdlcHkub3BlbkNhcmQoe1xuICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgY2FyZElkOiBjYXJkSWQsXG4gICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gIH1cbiAgb25Mb2FkKCkge1xuXG4gIH1cbiAgZ2V0TWluaU1lbSgpIHtcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBzZXJ2aWNlLmdldE1pbmlNZW0sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWlkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdtaWQnKSxcbiAgICAgICAgb3BlbklkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKSxcbiAgICAgICAgYXBwaWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2FwcGlkJylcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc01lbSkge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEuaXNGYWNlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5vcGVuQ2FyZCh7XG4gICAgICAgICAgICAgICAgICBjYXJkTGlzdDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5kYXRhLmNhcmRJZCxcbiAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmRhdGEuZGF0YS5jYXJkQ29kZVxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeaIkOWKnycpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHlpLHotKXvvIzljp/lm6DvvJonICsgcmVzLmVyck1zZylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnY2FtZXJhJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2VweS5vcGVuQ2FyZCh7XG4gICAgICAgICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmRhdGEuY2FyZElkLFxuICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmRhdGEuZGF0YS5jYXJkQ29kZVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeaIkOWKnycpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHlpLHotKXvvIzljp/lm6DvvJonICsgcmVzLmVyck1zZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBvblNob3coKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgd2VweS5nZXRVc2VySW5mbyh7XG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICBpZiAocmVzLnVzZXJJbmZvKSB7XG4gICAgICAgICAgc2VsZi51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgICAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgICAgICAgIHRpdGxlOiAn6K+356iN5ZCOJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHNlbGYuZ2V0TWluaU1lbSgpXG4gICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcbiAgfVxufVxuIl19