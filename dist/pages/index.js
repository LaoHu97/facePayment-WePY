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
          if (res.data.status === 200) {
            _this.fansId = res.data.data.fansId;
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
        self.getMiniMem();
        self.getUserInfo(data);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJmYW5zSWQiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJiaW5kQ2FyZCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhZGRDYXJkIiwiX3RoaXMiLCJzaG93TG9hZGluZyIsInRpdGxlIiwicmVxdWVzdCIsImhlYWRlciIsIlN0cmluZyIsIm1pZCIsImdldFN0b3JhZ2VTeW5jIiwibWV0aG9kIiwic3VjY2VzcyIsInJlcyIsInRpbWVzdGFtcCIsIm5vbmNlX3N0ciIsIm91dGVyX3N0ciIsInNpZ25hdHVyZSIsImNhcmRMaXN0IiwiY2FyZElkIiwiY2FyZF9pZCIsImNhcmRFeHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaGlkZUxvYWRpbmciLCJvcGVuQ2FyZCIsImZhaWwiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRzIiwiZGVjcnlwdENvZGUiLCJvcGVuSWQiLCJlbmNyeXB0X2NvZGUiLCJjb2RlIiwiY2FyZENvZGUiLCJlcnJNc2ciLCJnZXRNaW5pTWVtIiwiYXBwaWQiLCJzdGF0dXMiLCJpc01lbSIsImlzQWN0aXZlIiwiaXNGYWNlIiwiZ2V0VXNlckluZm8iLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJyYXdEYXRhIiwiJGFwcGx5Iiwic2VsZiIsIiRwYXJlbnQiLCJvblNoYXJlQXBwTWVzc2FnZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7Ozs7Ozs7O0FBREE7OztJQUdxQkEsSzs7Ozs7Ozs7Ozs7Ozs7dUxBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCO0FBRGpCLEssU0FHVEMsVSxHQUFhO0FBQ1hDO0FBRFcsSyxTQUliQyxJLEdBQU87QUFDTEMsZ0JBQVU7QUFDUkMsbUJBQVcsRUFESDtBQUVSQyxrQkFBVTtBQUZGLE9BREw7QUFLTEMsY0FBUTtBQUxILEssU0FRUEMsUSxHQUFXLEUsU0FFWEMsTyxHQUFVO0FBQ1JDLGNBRFEsc0JBQ0c7QUFDVCx1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHRCxPQUxPO0FBTVJDLGFBTlEscUJBTUU7QUFDUixZQUFJQyxRQUFRLElBQVo7QUFDQSx1QkFBS0MsV0FBTCxDQUFpQjtBQUNmQyxpQkFBTztBQURRLFNBQWpCO0FBR0EsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYTCxlQUFLLGdCQUFRQyxPQURGO0FBRVhLLGtCQUFRO0FBQ04sNEJBQWdCO0FBRFYsV0FGRztBQUtYZixnQkFBTTtBQUNKSSxvQkFBUVksT0FBT0wsTUFBTVAsTUFBYixDQURKO0FBRUphLGlCQUFLLGVBQUtDLGNBQUwsQ0FBb0IsS0FBcEI7QUFGRCxXQUxLO0FBU1hDLGtCQUFRLE1BVEc7QUFVWEMsaUJBVlcsbUJBVUhDLEdBVkcsRUFVRTtBQUNYLGdCQUFJckIsT0FBTztBQUNUc0IseUJBQVdELElBQUlyQixJQUFKLENBQVNzQixTQURYO0FBRVRDLHlCQUFXRixJQUFJckIsSUFBSixDQUFTdUIsU0FGWDtBQUdUQyx5QkFBV0gsSUFBSXJCLElBQUosQ0FBU3dCLFNBSFg7QUFJVEMseUJBQVdKLElBQUlyQixJQUFKLENBQVN5QjtBQUpYLGFBQVg7QUFNQSwyQkFBS2YsT0FBTCxDQUFhO0FBQ1hnQix3QkFBVSxDQUFDO0FBQ1RDLHdCQUFRTixJQUFJckIsSUFBSixDQUFTNEIsT0FEUjtBQUVUQyx5QkFBU0MsS0FBS0MsU0FBTCxDQUFlL0IsSUFBZjtBQUZBLGVBQUQsQ0FEQztBQUtYb0IsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiwrQkFBS1csV0FBTDtBQUNBckIsc0JBQU1zQixRQUFOLENBQWVaLEdBQWY7QUFDRCxlQVJVO0FBU1hhLG9CQUFNLGNBQVNiLEdBQVQsRUFBYztBQUNsQiwrQkFBS1csV0FBTDtBQUNEO0FBWFUsYUFBYjtBQWFELFdBOUJVO0FBK0JYRSxjQS9CVyxnQkErQk5iLEdBL0JNLEVBK0JEO0FBQ1JjLG9CQUFRQyxHQUFSLENBQVlmLElBQUlyQixJQUFoQjtBQUNEO0FBakNVLFNBQWI7QUFtQ0Q7QUE5Q08sSyxTQWtGVnFDLE0sR0FBUyxFOzs7Ozs2QkFsQ0FoQixHLEVBQUs7QUFDWixxQkFBS1QsV0FBTCxDQUFpQjtBQUNmQyxlQUFPO0FBRFEsT0FBakI7QUFHQSxVQUFJYyxTQUFTTixJQUFJSyxRQUFKLENBQWEsQ0FBYixFQUFnQkMsTUFBN0I7QUFDQSxxQkFBS2IsT0FBTCxDQUFhO0FBQ1hMLGFBQUssZ0JBQVE2QixXQURGO0FBRVh2QixnQkFBUTtBQUNOLDBCQUFnQjtBQURWLFNBRkc7QUFLWGYsY0FBTTtBQUNKaUIsZUFBSyxlQUFLQyxjQUFMLENBQW9CLEtBQXBCLENBREQ7QUFFSlMsa0JBQVFBLE1BRko7QUFHSlksa0JBQVEsZUFBS3JCLGNBQUwsQ0FBb0IsUUFBcEIsQ0FISjtBQUlKc0Isd0JBQWNuQixJQUFJSyxRQUFKLENBQWEsQ0FBYixFQUFnQmU7QUFKMUIsU0FMSztBQVdYdEIsZ0JBQVEsTUFYRztBQVlYQyxlQVpXLG1CQVlIQyxHQVpHLEVBWUU7QUFDWCx5QkFBS1ksUUFBTCxDQUFjO0FBQ1pQLHNCQUFVLENBQUM7QUFDVEMsc0JBQVFBLE1BREM7QUFFVGMsb0JBQU1wQixJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWMwQztBQUZYLGFBQUQsQ0FERTtBQUtadEIscUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQiw2QkFBS1csV0FBTDtBQUNELGFBUFc7QUFRWkUsa0JBQU0sY0FBU2IsR0FBVCxFQUFjO0FBQ2xCYyxzQkFBUUMsR0FBUixDQUFZLGdCQUFnQmYsSUFBSXNCLE1BQWhDO0FBQ0EsNkJBQUtYLFdBQUw7QUFDRDtBQVhXLFdBQWQ7QUFhRDtBQTFCVSxPQUFiO0FBNEJEOzs7NkJBSVEsQ0FFUjs7O2lDQUNZO0FBQ1gscUJBQUtsQixPQUFMLENBQWE7QUFDWEwsYUFBSyxnQkFBUW1DLFVBREY7QUFFWDdCLGdCQUFRO0FBQ04sMEJBQWdCO0FBRFYsU0FGRztBQUtYZixjQUFNO0FBQ0ppQixlQUFLLGVBQUtDLGNBQUwsQ0FBb0IsS0FBcEIsQ0FERDtBQUVKcUIsa0JBQVEsZUFBS3JCLGNBQUwsQ0FBb0IsUUFBcEIsQ0FGSjtBQUdKMkIsaUJBQU8sZUFBSzNCLGNBQUwsQ0FBb0IsT0FBcEI7QUFISCxTQUxLO0FBVVhDLGdCQUFRLE1BVkc7QUFXWEMsZUFYVyxtQkFXSEMsR0FYRyxFQVdFO0FBQ1gseUJBQUtXLFdBQUw7QUFDQSxjQUFJWCxJQUFJckIsSUFBSixDQUFTOEMsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQixnQkFBSXpCLElBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBYytDLEtBQWxCLEVBQXlCO0FBQ3ZCLGtCQUFJMUIsSUFBSXJCLElBQUosQ0FBU0EsSUFBVCxDQUFjZ0QsUUFBbEIsRUFBNEI7QUFDMUIsb0JBQUkzQixJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWNpRCxNQUFsQixFQUEwQjtBQUN4QixpQ0FBS2hCLFFBQUwsQ0FBYztBQUNaUCw4QkFBVSxDQUFDO0FBQ1RDLDhCQUFRTixJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWMyQixNQURiO0FBRVRjLDRCQUFNcEIsSUFBSXJCLElBQUosQ0FBU0EsSUFBVCxDQUFjMEM7QUFGWCxxQkFBRCxDQURFO0FBS1p0Qiw2QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ3JCYyw4QkFBUUMsR0FBUixDQUFZLFNBQVo7QUFDRCxxQkFQVztBQVFaRiwwQkFBTSxjQUFTYixHQUFULEVBQWM7QUFDbEJjLDhCQUFRQyxHQUFSLENBQVksZ0JBQWdCZixJQUFJc0IsTUFBaEM7QUFDRDtBQVZXLG1CQUFkO0FBWUQ7QUFDRCwrQkFBS25DLFVBQUwsQ0FBZ0I7QUFDZEMsdUJBQUs7QUFEUyxpQkFBaEI7QUFHRCxlQWxCRCxNQWtCTztBQUNMLCtCQUFLd0IsUUFBTCxDQUFjO0FBQ1pQLDRCQUFVLENBQUM7QUFDVEMsNEJBQVFOLElBQUlyQixJQUFKLENBQVNBLElBQVQsQ0FBYzJCLE1BRGI7QUFFVGMsMEJBQU1wQixJQUFJckIsSUFBSixDQUFTQSxJQUFULENBQWMwQztBQUZYLG1CQUFELENBREU7QUFLWnRCLDJCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckJjLDRCQUFRQyxHQUFSLENBQVksU0FBWjtBQUNELG1CQVBXO0FBUVpGLHdCQUFNLGNBQVNiLEdBQVQsRUFBYztBQUNsQmMsNEJBQVFDLEdBQVIsQ0FBWSxnQkFBZ0JmLElBQUlzQixNQUFoQztBQUNEO0FBVlcsaUJBQWQ7QUFZRDtBQUNGO0FBQ0Y7QUFDRjtBQWpEVSxPQUFiO0FBbUREOzs7Z0NBQ1czQyxJLEVBQU07QUFDaEIsVUFBSVcsUUFBUSxJQUFaO0FBQ0EscUJBQUtHLE9BQUwsQ0FBYTtBQUNYTCxhQUFLLGdCQUFReUMsV0FERjtBQUVYbkMsZ0JBQVE7QUFDTiwwQkFBZ0I7QUFEVixTQUZHO0FBS1hmLGNBQU07QUFDSm1ELHlCQUFlbkQsS0FBS21ELGFBRGhCO0FBRUpDLGNBQUlwRCxLQUFLb0QsRUFGTDtBQUdKM0IscUJBQVd6QixLQUFLeUIsU0FIWjtBQUlKNEIsbUJBQVNyRCxLQUFLcUQsT0FKVjtBQUtKcEQsb0JBQVU2QixLQUFLQyxTQUFMLENBQWUvQixLQUFLQyxRQUFwQjtBQUxOLFNBTEs7QUFZWGtCLGdCQUFRLE1BWkc7QUFhWEMsZUFiVyxtQkFhSEMsR0FiRyxFQWFFO0FBQ1gsY0FBSUEsSUFBSXJCLElBQUosQ0FBUzhDLE1BQVQsS0FBb0IsR0FBeEIsRUFBNkI7QUFDM0JuQyxrQkFBTVAsTUFBTixHQUFlaUIsSUFBSXJCLElBQUosQ0FBU0EsSUFBVCxDQUFjSSxNQUE3QjtBQUNEO0FBQ0RPLGdCQUFNMkMsTUFBTjtBQUNEO0FBbEJVLE9BQWI7QUFvQkQ7Ozs2QkFDUTtBQUNQLFVBQUlDLE9BQU8sSUFBWDtBQUNBLFdBQUtDLE9BQUwsQ0FBYU4sV0FBYixDQUF5QixVQUFTbEQsSUFBVCxFQUFlO0FBQ3RDdUQsYUFBS3RELFFBQUwsR0FBZ0JELEtBQUtDLFFBQXJCO0FBQ0FzRCxhQUFLRCxNQUFMO0FBQ0EsdUJBQUsxQyxXQUFMLENBQWlCO0FBQ2ZDLGlCQUFPO0FBRFEsU0FBakI7QUFHQTBDLGFBQUtYLFVBQUw7QUFDQVcsYUFBS0wsV0FBTCxDQUFpQmxELElBQWpCO0FBQ0QsT0FSRDtBQVNEOzs7c0NBQ2lCcUIsRyxFQUFLO0FBQ3JCLGFBQU8sS0FBS21DLE9BQUwsQ0FBYUMsaUJBQWIsQ0FBK0IsWUFBL0IsQ0FBUDtBQUNEOzs7O0VBcE1nQyxlQUFLQyxJOztrQkFBbkIvRCxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHtcbiAgc2VydmljZVxufSBmcm9tICcuLi9jb25maWcuanMnXG4vLyDlvJXlhaXnu4Tku7ZcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICBjb25maWcgPSB7XG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihuWPluS8muWRmOWNoSdcbiAgfVxuICBjb21wb25lbnRzID0ge1xuICAgIGZvb3Q6IEZvb3RcbiAgfVxuXG4gIGRhdGEgPSB7XG4gICAgdXNlckluZm86IHtcbiAgICAgIGF2YXRhclVybDogJycsXG4gICAgICBuaWNrTmFtZTogJ+WKoOi9veS4rS4uLidcbiAgICB9LFxuICAgIGZhbnNJZDogJydcbiAgfVxuXG4gIGNvbXB1dGVkID0ge31cblxuICBtZXRob2RzID0ge1xuICAgIGJpbmRDYXJkKCkge1xuICAgICAgd2VweS5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgdXJsOiAnb2xkQWN0aXZhdGlvbidcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhZGRDYXJkKCkge1xuICAgICAgbGV0IF90aGlzID0gdGhpc1xuICAgICAgd2VweS5zaG93TG9hZGluZyh7XG4gICAgICAgIHRpdGxlOiAn5Yqg6L295LitJ1xuICAgICAgfSlcbiAgICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICAgIHVybDogc2VydmljZS5hZGRDYXJkLFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBmYW5zSWQ6IFN0cmluZyhfdGhpcy5mYW5zSWQpLFxuICAgICAgICAgIG1pZDogd2VweS5nZXRTdG9yYWdlU3luYygnbWlkJylcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIG5vbmNlX3N0cjogcmVzLmRhdGEubm9uY2Vfc3RyLFxuICAgICAgICAgICAgb3V0ZXJfc3RyOiByZXMuZGF0YS5vdXRlcl9zdHIsXG4gICAgICAgICAgICBzaWduYXR1cmU6IHJlcy5kYXRhLnNpZ25hdHVyZVxuICAgICAgICAgIH1cbiAgICAgICAgICB3ZXB5LmFkZENhcmQoe1xuICAgICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuY2FyZF9pZCxcbiAgICAgICAgICAgICAgY2FyZEV4dDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgICBfdGhpcy5vcGVuQ2FyZChyZXMpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwocmVzKSB7XG4gICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIG9wZW5DYXJkKHJlcykge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgfSlcbiAgICBsZXQgY2FyZElkID0gcmVzLmNhcmRMaXN0WzBdLmNhcmRJZFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IHNlcnZpY2UuZGVjcnlwdENvZGUsXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWlkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdtaWQnKSxcbiAgICAgICAgY2FyZElkOiBjYXJkSWQsXG4gICAgICAgIG9wZW5JZDogd2VweS5nZXRTdG9yYWdlU3luYygnb3BlbklkJyksXG4gICAgICAgIGVuY3J5cHRfY29kZTogcmVzLmNhcmRMaXN0WzBdLmNvZGVcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHdlcHkub3BlbkNhcmQoe1xuICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgY2FyZElkOiBjYXJkSWQsXG4gICAgICAgICAgICBjb2RlOiByZXMuZGF0YS5kYXRhLmNhcmRDb2RlXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeWksei0pe+8jOWOn+WboO+8micgKyByZXMuZXJyTXNnKVxuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gIH1cbiAgb25Mb2FkKCkge1xuXG4gIH1cbiAgZ2V0TWluaU1lbSgpIHtcbiAgICB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgdXJsOiBzZXJ2aWNlLmdldE1pbmlNZW0sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWlkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdtaWQnKSxcbiAgICAgICAgb3BlbklkOiB3ZXB5LmdldFN0b3JhZ2VTeW5jKCdvcGVuSWQnKSxcbiAgICAgICAgYXBwaWQ6IHdlcHkuZ2V0U3RvcmFnZVN5bmMoJ2FwcGlkJylcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgICBpZiAocmVzLmRhdGEuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBpZiAocmVzLmRhdGEuZGF0YS5pc01lbSkge1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEuaXNBY3RpdmUpIHtcbiAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmRhdGEuaXNGYWNlKSB7XG4gICAgICAgICAgICAgICAgd2VweS5vcGVuQ2FyZCh7XG4gICAgICAgICAgICAgICAgICBjYXJkTGlzdDogW3tcbiAgICAgICAgICAgICAgICAgICAgY2FyZElkOiByZXMuZGF0YS5kYXRhLmNhcmRJZCxcbiAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmRhdGEuZGF0YS5jYXJkQ29kZVxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeaIkOWKnycpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHlpLHotKXvvIzljp/lm6DvvJonICsgcmVzLmVyck1zZylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnY2FtZXJhJ1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgd2VweS5vcGVuQ2FyZCh7XG4gICAgICAgICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmRhdGEuY2FyZElkLFxuICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmRhdGEuZGF0YS5jYXJkQ29kZVxuICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ+aJk+W8gOS8muWRmOWNoeaIkOWKnycpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmiZPlvIDkvJrlkZjljaHlpLHotKXvvIzljp/lm6DvvJonICsgcmVzLmVyck1zZylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxuICBnZXRVc2VySW5mbyhkYXRhKSB7XG4gICAgbGV0IF90aGlzID0gdGhpc1xuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6IHNlcnZpY2UuZ2V0VXNlckluZm8sXG4gICAgICBoZWFkZXI6IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZW5jcnlwdGVkRGF0YTogZGF0YS5lbmNyeXB0ZWREYXRhLFxuICAgICAgICBpdjogZGF0YS5pdixcbiAgICAgICAgc2lnbmF0dXJlOiBkYXRhLnNpZ25hdHVyZSxcbiAgICAgICAgcmF3RGF0YTogZGF0YS5yYXdEYXRhLFxuICAgICAgICB1c2VySW5mbzogSlNPTi5zdHJpbmdpZnkoZGF0YS51c2VySW5mbylcbiAgICAgIH0sXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIF90aGlzLmZhbnNJZCA9IHJlcy5kYXRhLmRhdGEuZmFuc0lkXG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuJGFwcGx5KClcbiAgICAgIH1cbiAgICB9KVxuICB9XG4gIG9uU2hvdygpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXNcbiAgICB0aGlzLiRwYXJlbnQuZ2V0VXNlckluZm8oZnVuY3Rpb24oZGF0YSkge1xuICAgICAgc2VsZi51c2VySW5mbyA9IGRhdGEudXNlckluZm9cbiAgICAgIHNlbGYuJGFwcGx5KClcbiAgICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgICB0aXRsZTogJ+ivt+eojeWQjidcbiAgICAgIH0pXG4gICAgICBzZWxmLmdldE1pbmlNZW0oKVxuICAgICAgc2VsZi5nZXRVc2VySW5mbyhkYXRhKVxuICAgIH0pXG4gIH1cbiAgb25TaGFyZUFwcE1lc3NhZ2UocmVzKSB7XG4gICAgcmV0dXJuIHRoaXMuJHBhcmVudC5vblNoYXJlQXBwTWVzc2FnZSgn5oKo5pyJ5LiA5byg5Lya5ZGY5Y2h5b6F6aKG5Y+WJylcbiAgfVxufVxuIl19