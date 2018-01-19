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
      },
      fansId: ''
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
            fansId: String(_this.fansId),
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
      _wepy2.default.showLoading({
        title: '请稍后'
      });
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
                } else {
                  _wepy2.default.navigateTo({
                    url: 'camera?cardCode=' + res.data.data.cardCode + '&cardId=' + res.data.data.cardId
                  });
                }
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
    key: 'getUserInfo',
    value: function getUserInfo(data) {
      var _this = this;
      _wepy2.default.request({
        url: _config.service.getUserInfo,
        header: {
          'content-type': 'application/json'
        },
        data: {
          encryptedData: data.encryptedData,
          iv: data.iv,
          signature: data.signature,
          rawData: data.rawData,
          userInfo: JSON.stringify(data.userInfo)
        },
        method: 'POST',
        success: function success(res) {
          _wepy2.default.hideLoading();
          if (res.data.status === 200) {
            _this.fansId = res.data.data.fansId;
            _this.getMiniMem();
          }
          _this.$apply();
        }
      });
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      var self = this;
      this.$parent.getUserInfo(function (data) {
        self.userInfo = data.userInfo;
        self.$apply();
        _wepy2.default.showLoading({
          title: '请稍后'
        });
        setTimeout(function () {
          self.getUserInfo(data);
        }, 1000);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJmYW5zSWQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJiaW5kQ2FyZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhZGRDYXJkIiwiX3RoaXMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsImhlYWRlciIsIlN0cmluZyIsIm1pZCIsImdldFN0b3JhZ2VTeW5jIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInRpbWVzdGFtcCIsIm5vbmNlX3N0ciIsIm91dGVyX3N0ciIsInNpZ25hdHVyZSIsImNhcmRMaXN0IiwiY2FyZElkIiwiY2FyZF9pZCIsImNhcmRFeHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaGlkZUxvYWRpbmciLCJvcGVuQ2FyZCIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwiZGVjcnlwdENvZGUiLCJvcGVuSWQiLCJlbmNyeXB0X2NvZGUiLCJjb2RlIiwiY2FyZENvZGUiLCJlcnJNc2ciLCJnZXRNaW5pTWVtIiwiYXBwaWQiLCJzdGF0dXMiLCJpc01lbSIsImlzQWN0aXZlIiwiaXNGYWNlIiwiZ2V0VXNlckluZm8iLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJyYXdEYXRhIiwiJGFwcGx5Iiwic2VsZiIsIiRwYXJlbnQiLCJzZXRUaW1lb3V0Iiwib25TaGFyZUFwcE1lc3NhZ2UiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUlBOzs7Ozs7Ozs7OztBQURBOzs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3VMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFNBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssU0FJYkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLG1CQUFXLEVBREg7QUFFUkMsa0JBQVU7QUFGRixPQURMO0FBS0xDLGNBQVE7QUFMSCxLLFNBUVBDLFEsR0FBVyxFLFNBRVhDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1QsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxhQU5RLHFCQU1FO0FBQ1IsWUFBSUMsUUFBUSxJQUFaO0FBQ0EsdUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsaUJBQU87QUFEUSxTQUFqQjtBQUdBLHVCQUFLQyxPQUFMLENBQWE7QUFDWEwsZUFBSyxnQkFBUUMsT0FERjtBQUVYSyxrQkFBUTtBQUNOLDRCQUFnQjtBQURWLFdBRkc7QUFLWGYsZ0JBQU07QUFDSkksb0JBQVFZLE9BQU9MLE1BQU1QLE1BQWIsQ0FESjtBQUVKYSxpQkFBSyxlQUFLQyxjQUFMLENBQW9CLEtBQXBCO0FBRkQsV0FMSztBQVNYQyxrQkFBUSxNQVRHO0FBVVhDLGlCQVZXLG1CQVVIQyxHQVZHLEVBVUU7QUFDWCxnQkFBSXJCLE9BQU87QUFDVHNCLHlCQUFXRCxJQUFJckIsSUFBSixDQUFTc0IsU0FEWDtBQUVUQyx5QkFBV0YsSUFBSXJCLElBQUosQ0FBU3VCLFNBRlg7QUFHVEMseUJBQVdILElBQUlyQixJQUFKLENBQVN3QixTQUhYO0FBSVRDLHlCQUFXSixJQUFJckIsSUFBSixDQUFTeUI7QUFKWCxhQUFYO0FBTUEsMkJBQUtmLE9BQUwsQ0FBYTtBQUNYZ0Isd0JBQVUsQ0FBQztBQUNUQyx3QkFBUU4sSUFBSXJCLElBQUosQ0FBUzRCLE9BRFI7QUFFVEMseUJBQVNDLEtBQUtDLFNBQUwsQ0FBZS9CLElBQWY7QUFGQSxlQUFELENBREM7QUFLWG9CLHVCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsK0JBQUtXLFdBQUw7QUFDQXJCLHNCQUFNc0IsUUFBTixDQUFlWixHQUFmO0FBQ0QsZUFSVTtBQVNYYSxvQkFBTSxjQUFTYixHQUFULEVBQWM7QUFDbEIsK0JBQUtXLFdBQUw7QUFDRDtBQVhVLGFBQWI7QUFhRCxXQTlCVTtBQStCWEUsY0EvQlcsZ0JBK0JOYixHQS9CTSxFQStCRDtBQUNSYyxvQkFBUUMsR0FBUixDQUFZZixJQUFJckIsSUFBaEI7QUFDRDtBQWpDVSxTQUFiO0FBbUNEO0FBOUNPLEssU0FrRlZxQyxNLEdBQVMsRTs7Ozs7NkJBbENBaEIsRyxFQUFLO0FBQ1oscUJBQUtULFdBQUwsQ0FBaUI7QUFDZkMsZUFBTztBQURRLE9BQWpCO0FBR0EsVUFBSWMsU0FBU04sSUFBSUssUUFBSixDQUFhLENBQWIsRUFBZ0JDLE1BQTdCO0FBQ0EscUJBQUtiLE9BQUwsQ0FBYTtBQUNYTCxhQUFLLGdCQUFRNkIsV0FERjtBQUVYdkIsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFEVixTQUZHO0FBS1hmLGNBQU07QUFDSmlCLGVBQUssZUFBS0MsY0FBTCxDQUFvQixLQUFwQixDQUREO0FBRUpTLGtCQUFRQSxNQUZKO0FBR0pZLGtCQUFRLGVBQUtyQixjQUFMLENBQW9CLFFBQXBCLENBSEo7QUFJSnNCLHdCQUFjbkIsSUFBSUssUUFBSixDQUFhLENBQWIsRUFBZ0JlO0FBSjFCLFNBTEs7QUFXWHRCLGdCQUFRLE1BWEc7QUFZWEMsZUFaVyxtQkFZSEMsR0FaRyxFQVlFO0FBQ1gseUJBQUtZLFFBQUwsQ0FBYztBQUNaUCxzQkFBVSxDQUFDO0FBQ1RDLHNCQUFRQSxNQURDO0FBRVRjLG9CQUFNcEIsSUFBSXJCLElBQUosQ0FBU0EsSUFBVCxDQUFjMEM7QUFGWCxhQUFELENBREU7QUFLWnRCLHFCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsNkJBQUtXLFdBQUw7QUFDRCxhQVBXO0FBUVpFLGtCQUFNLGNBQVNiLEdBQVQsRUFBYztBQUNsQmMsc0JBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JmLElBQUlzQixNQUFoQztBQUNBLDZCQUFLWCxXQUFMO0FBQ0Q7QUFYVyxXQUFkO0FBYUQ7QUExQlUsT0FBYjtBQTRCRDs7OzZCQUlRLENBRVI7OztpQ0FDWTtBQUNYLHFCQUFLcEIsV0FBTCxDQUFpQjtBQUNmQyxlQUFPO0FBRFEsT0FBakI7QUFHQSxxQkFBS0MsT0FBTCxDQUFhO0FBQ1hMLGFBQUssZ0JBQVFtQyxVQURGO0FBRVg3QixnQkFBUTtBQUNOLDBCQUFnQjtBQURWLFNBRkc7QUFLWGYsY0FBTTtBQUNKaUIsZUFBSyxlQUFLQyxjQUFMLENBQW9CLEtBQXBCLENBREQ7QUFFSnFCLGtCQUFRLGVBQUtyQixjQUFMLENBQW9CLFFBQXBCLENBRko7QUFHSjJCLGlCQUFPLGVBQUszQixjQUFMLENBQW9CLE9BQXBCO0FBSEgsU0FMSztBQVVYQyxnQkFBUSxNQVZHO0FBV1hDLGVBWFcsbUJBV0hDLEdBWEcsRUFXRTtBQUNYLHlCQUFLVyxXQUFMO0FBQ0EsY0FBSVgsSUFBSXJCLElBQUosQ0FBUzhDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0IsZ0JBQUl6QixJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWMrQyxLQUFsQixFQUF5QjtBQUN2QixrQkFBSTFCLElBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBY2dELFFBQWxCLEVBQTRCO0FBQzFCLG9CQUFJM0IsSUFBSXJCLElBQUosQ0FBU0EsSUFBVCxDQUFjaUQsTUFBbEIsRUFBMEI7QUFDeEIsaUNBQUtoQixRQUFMLENBQWM7QUFDWlAsOEJBQVUsQ0FBQztBQUNUQyw4QkFBUU4sSUFBSXJCLElBQUosQ0FBU0EsSUFBVCxDQUFjMkIsTUFEYjtBQUVUYyw0QkFBTXBCLElBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBYzBDO0FBRlgscUJBQUQsQ0FERTtBQUtadEIsNkJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQmMsOEJBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0QscUJBUFc7QUFRWkYsMEJBQU0sY0FBU2IsR0FBVCxFQUFjO0FBQ2xCYyw4QkFBUUMsR0FBUixDQUFZLGdCQUFnQmYsSUFBSXNCLE1BQWhDO0FBQ0Q7QUFWVyxtQkFBZDtBQVlELGlCQWJELE1BYU87QUFDTCxpQ0FBS25DLFVBQUwsQ0FBZ0I7QUFDZEMseUJBQUsscUJBQXFCWSxJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWMwQyxRQUFuQyxHQUE4QyxVQUE5QyxHQUEyRHJCLElBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBYzJCO0FBRGhFLG1CQUFoQjtBQUdEO0FBQ0YsZUFuQkQsTUFtQk87QUFDTCwrQkFBS00sUUFBTCxDQUFjO0FBQ1pQLDRCQUFVLENBQUM7QUFDVEMsNEJBQVFOLElBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBYzJCLE1BRGI7QUFFVGMsMEJBQU1wQixJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWMwQztBQUZYLG1CQUFELENBREU7QUFLWnRCLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJjLDRCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNELG1CQVBXO0FBUVpGLHdCQUFNLGNBQVNiLEdBQVQsRUFBYztBQUNsQmMsNEJBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JmLElBQUlzQixNQUFoQztBQUNEO0FBVlcsaUJBQWQ7QUFZRDtBQUNGO0FBQ0Y7QUFDRjtBQWxEVSxPQUFiO0FBb0REOzs7Z0NBQ1czQyxJLEVBQU07QUFDaEIsVUFBSVcsUUFBUSxJQUFaO0FBQ0EscUJBQUtHLE9BQUwsQ0FBYTtBQUNYTCxhQUFLLGdCQUFReUMsV0FERjtBQUVYbkMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFEVixTQUZHO0FBS1hmLGNBQU07QUFDSm1ELHlCQUFlbkQsS0FBS21ELGFBRGhCO0FBRUpDLGNBQUlwRCxLQUFLb0QsRUFGTDtBQUdKM0IscUJBQVd6QixLQUFLeUIsU0FIWjtBQUlKNEIsbUJBQVNyRCxLQUFLcUQsT0FKVjtBQUtKcEQsb0JBQVU2QixLQUFLQyxTQUFMLENBQWUvQixLQUFLQyxRQUFwQjtBQUxOLFNBTEs7QUFZWGtCLGdCQUFRLE1BWkc7QUFhWEMsZUFiVyxtQkFhSEMsR0FiRyxFQWFFO0FBQ1gseUJBQUtXLFdBQUw7QUFDQSxjQUFJWCxJQUFJckIsSUFBSixDQUFTOEMsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQm5DLGtCQUFNUCxNQUFOLEdBQWVpQixJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWNJLE1BQTdCO0FBQ0FPLGtCQUFNaUMsVUFBTjtBQUNEO0FBQ0RqQyxnQkFBTTJDLE1BQU47QUFDRDtBQXBCVSxPQUFiO0FBc0JEOzs7NkJBQ1E7QUFDUCxVQUFJQyxPQUFPLElBQVg7QUFDQSxXQUFLQyxPQUFMLENBQWFOLFdBQWIsQ0FBeUIsVUFBU2xELElBQVQsRUFBZTtBQUN0Q3VELGFBQUt0RCxRQUFMLEdBQWdCRCxLQUFLQyxRQUFyQjtBQUNBc0QsYUFBS0QsTUFBTDtBQUNBLHVCQUFLMUMsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTztBQURRLFNBQWpCO0FBR0E0QyxtQkFBVyxZQUFXO0FBQ3BCRixlQUFLTCxXQUFMLENBQWlCbEQsSUFBakI7QUFDRCxTQUZELEVBRUcsSUFGSDtBQUdELE9BVEQ7QUFVRDs7O3NDQUNpQnFCLEcsRUFBSztBQUNyQixhQUFPLEtBQUttQyxPQUFMLENBQWFFLGlCQUFiLENBQStCLFlBQS9CLENBQVA7QUFDRDs7OztFQTNNZ0MsZUFBS0MsSTs7a0JBQW5CaEUsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIHNlcnZpY2Vcbn0gZnJvbSAnLi4vY29uZmlnLmpzJ1xuLy8g5byV5YWl57uE5Lu2XG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpooblj5bkvJrlkZjljaEnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcbiAgICBmb290OiBGb290XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvOiB7XG4gICAgICBhdmF0YXJVcmw6ICcnLFxuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfSxcbiAgICBmYW5zSWQ6ICcnXG4gIH1cblxuICBjb21wdXRlZCA9IHt9XG5cbiAgbWV0aG9kcyA9IHtcbiAgICBiaW5kQ2FyZCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ29sZEFjdGl2YXRpb24nXG4gICAgICB9KVxuICAgIH0sXG4gICAgYWRkQ2FyZCgpIHtcbiAgICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+WKoOi9veS4rSdcbiAgICAgIH0pXG4gICAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IHNlcnZpY2UuYWRkQ2FyZCxcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZmFuc0lkOiBTdHJpbmcoX3RoaXMuZmFuc0lkKSxcbiAgICAgICAgICBtaWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ21pZCcpXG4gICAgICAgIH0sXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiByZXMuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgICBub25jZV9zdHI6IHJlcy5kYXRhLm5vbmNlX3N0cixcbiAgICAgICAgICAgIG91dGVyX3N0cjogcmVzLmRhdGEub3V0ZXJfc3RyLFxuICAgICAgICAgICAgc2lnbmF0dXJlOiByZXMuZGF0YS5zaWduYXR1cmVcbiAgICAgICAgICB9XG4gICAgICAgICAgd2VweS5hZGRDYXJkKHtcbiAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmNhcmRfaWQsXG4gICAgICAgICAgICAgIGNhcmRFeHQ6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgICAgX3RoaXMub3BlbkNhcmQocmVzKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgICBmYWlsKHJlcykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBvcGVuQ2FyZChyZXMpIHtcbiAgICB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgIH0pXG4gICAgbGV0IGNhcmRJZCA9IHJlcy5jYXJkTGlzdFswXS5jYXJkSWRcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBzZXJ2aWNlLmRlY3J5cHRDb2RlLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1pZDogd2VweS5nZXRTdG9yYWdlU3luYygnbWlkJyksXG4gICAgICAgIGNhcmRJZDogY2FyZElkLFxuICAgICAgICBvcGVuSWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpLFxuICAgICAgICBlbmNyeXB0X2NvZGU6IHJlcy5jYXJkTGlzdFswXS5jb2RlXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcbiAgICAgICAgICBjYXJkTGlzdDogW3tcbiAgICAgICAgICAgIGNhcmRJZDogY2FyZElkLFxuICAgICAgICAgICAgY29kZTogcmVzLmRhdGEuZGF0YS5jYXJkQ29kZVxuICAgICAgICAgIH1dLFxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHlpLHotKXvvIzljp/lm6DvvJonICsgcmVzLmVyck1zZylcbiAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIGV2ZW50cyA9IHtcblxuICB9XG4gIG9uTG9hZCgpIHtcblxuICB9XG4gIGdldE1pbmlNZW0oKSB7XG4gICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICB0aXRsZTogJ+ivt+eojeWQjidcbiAgICB9KVxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IHNlcnZpY2UuZ2V0TWluaU1lbSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBtaWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ21pZCcpLFxuICAgICAgICBvcGVuSWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ29wZW5JZCcpLFxuICAgICAgICBhcHBpZDogd2VweS5nZXRTdG9yYWdlU3luYygnYXBwaWQnKVxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIGlmIChyZXMuZGF0YS5kYXRhLmlzTWVtKSB7XG4gICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0FjdGl2ZSkge1xuICAgICAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc0ZhY2UpIHtcbiAgICAgICAgICAgICAgICB3ZXB5Lm9wZW5DYXJkKHtcbiAgICAgICAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmRhdGEuY2FyZElkLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXG4gICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5oiQ5YqfJylcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgIHVybDogJ2NhbWVyYT9jYXJkQ29kZT0nICsgcmVzLmRhdGEuZGF0YS5jYXJkQ29kZSArICcmY2FyZElkPScgKyByZXMuZGF0YS5kYXRhLmNhcmRJZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHdlcHkub3BlbkNhcmQoe1xuICAgICAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5kYXRhLmNhcmRJZCxcbiAgICAgICAgICAgICAgICAgIGNvZGU6IHJlcy5kYXRhLmRhdGEuY2FyZENvZGVcbiAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHmiJDlip8nKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5omT5byA5Lya5ZGY5Y2h5aSx6LSl77yM5Y6f5Zug77yaJyArIHJlcy5lcnJNc2cpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZ2V0VXNlckluZm8oZGF0YSkge1xuICAgIGxldCBfdGhpcyA9IHRoaXNcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBzZXJ2aWNlLmdldFVzZXJJbmZvLFxuICAgICAgaGVhZGVyOiB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGVuY3J5cHRlZERhdGE6IGRhdGEuZW5jcnlwdGVkRGF0YSxcbiAgICAgICAgaXY6IGRhdGEuaXYsXG4gICAgICAgIHNpZ25hdHVyZTogZGF0YS5zaWduYXR1cmUsXG4gICAgICAgIHJhd0RhdGE6IGRhdGEucmF3RGF0YSxcbiAgICAgICAgdXNlckluZm86IEpTT04uc3RyaW5naWZ5KGRhdGEudXNlckluZm8pXG4gICAgICB9LFxuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgaWYgKHJlcy5kYXRhLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgX3RoaXMuZmFuc0lkID0gcmVzLmRhdGEuZGF0YS5mYW5zSWRcbiAgICAgICAgICBfdGhpcy5nZXRNaW5pTWVtKClcbiAgICAgICAgfVxuICAgICAgICBfdGhpcy4kYXBwbHkoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHRoaXMuJHBhcmVudC5nZXRVc2VySW5mbyhmdW5jdGlvbihkYXRhKSB7XG4gICAgICBzZWxmLnVzZXJJbmZvID0gZGF0YS51c2VySW5mb1xuICAgICAgc2VsZi4kYXBwbHkoKVxuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn6K+356iN5ZCOJ1xuICAgICAgfSlcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYuZ2V0VXNlckluZm8oZGF0YSlcbiAgICAgIH0sIDEwMDApXG4gICAgfSlcbiAgfVxuICBvblNoYXJlQXBwTWVzc2FnZShyZXMpIHtcbiAgICByZXR1cm4gdGhpcy4kcGFyZW50Lm9uU2hhcmVBcHBNZXNzYWdlKCfmgqjmnInkuIDlvKDkvJrlkZjljaHlvoXpooblj5YnKVxuICB9XG59XG4iXX0=