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

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '领取会员卡'
    }, _this.components = {
      foot: _foot2.default
    }, _this.data = {
      userInfo: {
        avatarUrl: '',
        nickName: '加载中...'
      }
    }, _this.computed = {}, _this.methods = {
      addCard: function addCard() {
        _wepy2.default.navigateTo({
          url: 'camera'
        });
        // let _this = this
        // wepy.showLoading({
        //   title: '加载中'
        // })
        // wepy.request({
        //   url: 'http://test.weupay.com/pay/wxSmaPro/addCard',
        //   data: {
        //     mid: '66'
        //   },
        //   method: 'POST',
        //   success(res) {
        //     let data = {
        //       timestamp: res.data.timestamp,
        //       nonce_str: res.data.nonce_str,
        //       outer_str: res.data.outer_str,
        //       signature: res.data.signature
        //     }
        //     wepy.addCard({
        //       cardList: [{
        //         cardId: res.data.card_id,
        //         cardExt: JSON.stringify(data)
        //       }],
        //       success: function(res) {
        //         wepy.hideLoading()
        //         _this.openCard(res)
        //       },
        //       fail: function(res) {
        //         wepy.hideLoading()
        //       }
        //     })
        //   }
        // })
      }
    }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'openCard',
    value: function openCard(res) {
      _wepy2.default.showLoading({
        title: '加载中'
      });
      var cardId = res.cardList[0].cardId;
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
  }]);

  return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwiZGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJjb21wdXRlZCIsIm1ldGhvZHMiLCJhZGRDYXJkIiwibmF2aWdhdGVUbyIsInVybCIsImV2ZW50cyIsInJlcyIsInNob3dMb2FkaW5nIiwidGl0bGUiLCJjYXJkSWQiLCJjYXJkTGlzdCIsInJlcXVlc3QiLCJtaWQiLCJlbmNyeXB0X2NvZGUiLCJjb2RlIiwibWV0aG9kIiwic3VjY2VzcyIsIm9wZW5DYXJkIiwiY2FyZENvZGUiLCJoaWRlTG9hZGluZyIsImZhaWwiLCJzZWxmIiwiZ2V0VXNlckluZm8iLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7Ozs7OztBQURBOzs7SUFHcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsSSxHQUFPO0FBQ0xDLGdCQUFVO0FBQ1JDLG1CQUFXLEVBREg7QUFFUkMsa0JBQVU7QUFGRjtBQURMLEssUUFPUEMsUSxHQUFXLEUsUUFFWEMsTyxHQUFVO0FBQ1JDLGFBRFEscUJBQ0U7QUFDUix1QkFBS0MsVUFBTCxDQUFnQjtBQUNkQyxlQUFLO0FBRFMsU0FBaEI7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7QUFyQ08sSyxRQW1FVkMsTSxHQUFTLEU7Ozs7OzZCQTVCQUMsRyxFQUFLO0FBQ1oscUJBQUtDLFdBQUwsQ0FBaUI7QUFDZkMsZUFBTztBQURRLE9BQWpCO0FBR0EsVUFBSUMsU0FBU0gsSUFBSUksUUFBSixDQUFhLENBQWIsRUFBZ0JELE1BQTdCO0FBQ0EscUJBQUtFLE9BQUwsQ0FBYTtBQUNYUCxhQUFLLGlEQURNO0FBRVhSLGNBQU07QUFDSmdCLGVBQUssSUFERDtBQUVKQyx3QkFBY1AsSUFBSUksUUFBSixDQUFhLENBQWIsRUFBZ0JJO0FBRjFCLFNBRks7QUFNWEMsZ0JBQVEsTUFORztBQU9YQyxlQVBXLG1CQU9IVixHQVBHLEVBT0U7QUFDWCx5QkFBS1csUUFBTCxDQUFjO0FBQ1pQLHNCQUFVLENBQUM7QUFDVEQsc0JBQVFBLE1BREM7QUFFVEssb0JBQU1SLElBQUlWLElBQUosQ0FBU3NCO0FBRk4sYUFBRCxDQURFO0FBS1pGLHFCQUFTLGlCQUFTVixHQUFULEVBQWM7QUFDckIsNkJBQUthLFdBQUw7QUFDRCxhQVBXO0FBUVpDLGtCQUFNLGNBQVNkLEdBQVQsRUFBYztBQUNsQiw2QkFBS2EsV0FBTDtBQUNEO0FBVlcsV0FBZDtBQVlEO0FBcEJVLE9BQWI7QUFzQkQ7Ozs2QkFJUSxDQUVSOzs7NkJBQ1E7QUFDUCxVQUFJRSxPQUFPLElBQVg7QUFDQSxxQkFBS0MsV0FBTCxDQUFpQjtBQUNmTixlQURlLG1CQUNQVixHQURPLEVBQ0Y7QUFDWGUsZUFBS3hCLFFBQUwsR0FBZ0JTLElBQUlULFFBQXBCO0FBQ0F3QixlQUFLRSxNQUFMO0FBQ0Q7QUFKYyxPQUFqQjtBQU1EOzs7O0VBbEdnQyxlQUFLQyxJOztrQkFBbkJqQyxLIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuLy8g5byV5YWl57uE5Lu2XG5pbXBvcnQgRm9vdCBmcm9tICcuLi9jb21wb25lbnRzL2Zvb3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpooblj5bkvJrlkZjljaEnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcbiAgICBmb290OiBGb290XG4gIH1cblxuICBkYXRhID0ge1xuICAgIHVzZXJJbmZvOiB7XG4gICAgICBhdmF0YXJVcmw6ICcnLFxuICAgICAgbmlja05hbWU6ICfliqDovb3kuK0uLi4nXG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZWQgPSB7fVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgYWRkQ2FyZCgpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ2NhbWVyYSdcbiAgICAgIH0pXG4gICAgICAvLyBsZXQgX3RoaXMgPSB0aGlzXG4gICAgICAvLyB3ZXB5LnNob3dMb2FkaW5nKHtcbiAgICAgIC8vICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgICAvLyB9KVxuICAgICAgLy8gd2VweS5yZXF1ZXN0KHtcbiAgICAgIC8vICAgdXJsOiAnaHR0cDovL3Rlc3Qud2V1cGF5LmNvbS9wYXkvd3hTbWFQcm8vYWRkQ2FyZCcsXG4gICAgICAvLyAgIGRhdGE6IHtcbiAgICAgIC8vICAgICBtaWQ6ICc2NidcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAvLyAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAvLyAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAvLyAgICAgICB0aW1lc3RhbXA6IHJlcy5kYXRhLnRpbWVzdGFtcCxcbiAgICAgIC8vICAgICAgIG5vbmNlX3N0cjogcmVzLmRhdGEubm9uY2Vfc3RyLFxuICAgICAgLy8gICAgICAgb3V0ZXJfc3RyOiByZXMuZGF0YS5vdXRlcl9zdHIsXG4gICAgICAvLyAgICAgICBzaWduYXR1cmU6IHJlcy5kYXRhLnNpZ25hdHVyZVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vICAgICB3ZXB5LmFkZENhcmQoe1xuICAgICAgLy8gICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAvLyAgICAgICAgIGNhcmRJZDogcmVzLmRhdGEuY2FyZF9pZCxcbiAgICAgIC8vICAgICAgICAgY2FyZEV4dDogSlNPTi5zdHJpbmdpZnkoZGF0YSlcbiAgICAgIC8vICAgICAgIH1dLFxuICAgICAgLy8gICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAvLyAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgLy8gICAgICAgICBfdGhpcy5vcGVuQ2FyZChyZXMpXG4gICAgICAvLyAgICAgICB9LFxuICAgICAgLy8gICAgICAgZmFpbDogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAvLyAgICAgICAgIHdlcHkuaGlkZUxvYWRpbmcoKVxuICAgICAgLy8gICAgICAgfVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH0pXG4gICAgfVxuICB9XG4gIG9wZW5DYXJkKHJlcykge1xuICAgIHdlcHkuc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6ICfliqDovb3kuK0nXG4gICAgfSlcbiAgICBsZXQgY2FyZElkID0gcmVzLmNhcmRMaXN0WzBdLmNhcmRJZFxuICAgIHdlcHkucmVxdWVzdCh7XG4gICAgICB1cmw6ICdodHRwOi8vdGVzdC53ZXVwYXkuY29tL3BheS93eFNtYVByby9kZWNyeXB0Q29kZScsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1pZDogJzY2JyxcbiAgICAgICAgZW5jcnlwdF9jb2RlOiByZXMuY2FyZExpc3RbMF0uY29kZVxuICAgICAgfSxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgd2VweS5vcGVuQ2FyZCh7XG4gICAgICAgICAgY2FyZExpc3Q6IFt7XG4gICAgICAgICAgICBjYXJkSWQ6IGNhcmRJZCxcbiAgICAgICAgICAgIGNvZGU6IHJlcy5kYXRhLmNhcmRDb2RlXG4gICAgICAgICAgfV0sXG4gICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICB3ZXB5LmhpZGVMb2FkaW5nKClcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgd2VweS5oaWRlTG9hZGluZygpXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgZXZlbnRzID0ge1xuXG4gIH1cbiAgb25Mb2FkKCkge1xuXG4gIH1cbiAgb25TaG93KCkge1xuICAgIGxldCBzZWxmID0gdGhpc1xuICAgIHdlcHkuZ2V0VXNlckluZm8oe1xuICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgc2VsZi51c2VySW5mbyA9IHJlcy51c2VySW5mb1xuICAgICAgICBzZWxmLiRhcHBseSgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuIl19