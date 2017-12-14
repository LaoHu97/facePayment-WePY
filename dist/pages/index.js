'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


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


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkluZGV4IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsImNvbXBvbmVudHMiLCJmb290IiwibWl4aW5zIiwiZGF0YSIsInVzZXJJbmZvIiwibmlja05hbWUiLCJmb3JtIiwidXNlcm5hbWUiLCJ1c2VycGhvbmUiLCJ1c2VyaWRjYXJkIiwiYmlydGhkYXkiLCJsb2FkaW5nIiwiY29tcHV0ZWQiLCJtZXRob2RzIiwiY2FycnlPbiIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJhZGRDYXJkIiwicmVxdWVzdCIsIm1pZCIsImhlYWRlciIsIm1ldGhvZCIsInN1Y2Nlc3MiLCJyZXMiLCJ0aW1lc3RhbXAiLCJub25jZV9zdHIiLCJvdXRlcl9zdHIiLCJzaWduYXR1cmUiLCJjYXJkTGlzdCIsImNhcmRJZCIsImNhcmRfaWQiLCJjYXJkRXh0IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvbnNvbGUiLCJsb2ciLCJldmVudHMiLCJzZWxmIiwiJHBhcmVudCIsImdldFVzZXJJbmZvIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7OztBQUZBOzs7SUFJcUJBLEs7Ozs7Ozs7Ozs7Ozs7O29MQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QjtBQURqQixLLFFBR1RDLFUsR0FBYTtBQUNYQztBQURXLEssUUFJYkMsTSxHQUFTLGdCLFFBRVRDLEksR0FBTztBQUNMQyxnQkFBVTtBQUNSQyxrQkFBVTtBQURGLE9BREw7QUFJTEMsWUFBTTtBQUNKQyxrQkFBVSxFQUROO0FBRUpDLG1CQUFXLEVBRlA7QUFHSkMsb0JBQVksRUFIUjtBQUlKQyxrQkFBVSxZQUpOO0FBS0pDLGlCQUFTO0FBTEw7QUFKRCxLLFFBYVBDLFEsR0FBVyxFLFFBSVhDLE8sR0FBVTtBQUNSQyxhQURRLHFCQUNFO0FBQ1IsdUJBQUtDLFVBQUwsQ0FBZ0I7QUFDZEMsZUFBSztBQURTLFNBQWhCO0FBR0QsT0FMTztBQU1SQyxhQU5RLHFCQU1FO0FBQ1IsdUJBQUtDLE9BQUwsQ0FBYTtBQUNYRixlQUFLLDZDQURNO0FBRVhiLGdCQUFNO0FBQ0pnQixpQkFBSztBQURELFdBRks7QUFLWEMsa0JBQVE7QUFDTiw0QkFBZ0I7QUFEVixXQUxHO0FBUVhDLGtCQUFRLE1BUkc7QUFTWEMsbUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQixnQkFBSXBCLE9BQU87QUFDVHFCLHlCQUFXRCxJQUFJcEIsSUFBSixDQUFTcUIsU0FEWDtBQUVUQyx5QkFBV0YsSUFBSXBCLElBQUosQ0FBU3NCLFNBRlg7QUFHVEMseUJBQVdILElBQUlwQixJQUFKLENBQVN1QixTQUhYO0FBSVRDLHlCQUFXSixJQUFJcEIsSUFBSixDQUFTd0I7QUFKWCxhQUFYO0FBTUEsMkJBQUtWLE9BQUwsQ0FBYTtBQUNYVyx3QkFBVSxDQUFDO0FBQ1RDLHdCQUFRTixJQUFJcEIsSUFBSixDQUFTMkIsT0FEUjtBQUVUQyx5QkFBU0MsS0FBS0MsU0FBTCxDQUFlOUIsSUFBZjtBQUZBLGVBQUQsQ0FEQztBQUtYbUIsdUJBQVMsaUJBQVNDLEdBQVQsRUFBYztBQUNyQlcsd0JBQVFDLEdBQVIsQ0FBWVosR0FBWjtBQUNEO0FBUFUsYUFBYjtBQVNEO0FBekJVLFNBQWI7QUEyQkQ7QUFsQ08sSyxRQXFDVmEsTSxHQUFTLEU7Ozs7OzZCQUdBO0FBQ1AsVUFBSUMsT0FBTyxJQUFYO0FBQ0EsV0FBS0MsT0FBTCxDQUFhQyxXQUFiLENBQXlCLFVBQVNuQyxRQUFULEVBQW1CO0FBQzFDLFlBQUlBLFFBQUosRUFBYztBQUNaaUMsZUFBS2pDLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0Q7QUFDRGlDLGFBQUtHLE1BQUw7QUFDRCxPQUxEO0FBTUQ7Ozs7RUEzRWdDLGVBQUtDLEk7O2tCQUFuQjVDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4vLyDlvJXlhaXnu4Tku7ZcbmltcG9ydCBGb290IGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdCdcbmltcG9ydCB0ZXN0TWl4aW4gZnJvbSAnLi4vbWl4aW5zL3Rlc3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgY29uZmlnID0ge1xuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmv4DmtLvkvJrlkZjljaEnXG4gIH1cbiAgY29tcG9uZW50cyA9IHtcbiAgICBmb290OiBGb290XG4gIH1cblxuICBtaXhpbnMgPSBbdGVzdE1peGluXVxuXG4gIGRhdGEgPSB7XG4gICAgdXNlckluZm86IHtcbiAgICAgIG5pY2tOYW1lOiAn5Yqg6L295LitLi4uJ1xuICAgIH0sXG4gICAgZm9ybToge1xuICAgICAgdXNlcm5hbWU6ICcnLFxuICAgICAgdXNlcnBob25lOiAnJyxcbiAgICAgIHVzZXJpZGNhcmQ6ICcnLFxuICAgICAgYmlydGhkYXk6ICcxOTk3LTAxLTE1JyxcbiAgICAgIGxvYWRpbmc6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY29tcHV0ZWQgPSB7XG5cbiAgfVxuXG4gIG1ldGhvZHMgPSB7XG4gICAgY2FycnlPbigpIHtcbiAgICAgIHdlcHkubmF2aWdhdGVUbyh7XG4gICAgICAgIHVybDogJ2NhbWVyYSdcbiAgICAgIH0pXG4gICAgfSxcbiAgICBhZGRDYXJkKCkge1xuICAgICAgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiAnaHR0cDovL3Rlc3Qud2V1cGF5LmNvbS9wYXkvd3hTbWFQcm8vYWRkQ2FyZCcsXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBtaWQ6ICcxOTInXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgdGltZXN0YW1wOiByZXMuZGF0YS50aW1lc3RhbXAsXG4gICAgICAgICAgICBub25jZV9zdHI6IHJlcy5kYXRhLm5vbmNlX3N0cixcbiAgICAgICAgICAgIG91dGVyX3N0cjogcmVzLmRhdGEub3V0ZXJfc3RyLFxuICAgICAgICAgICAgc2lnbmF0dXJlOiByZXMuZGF0YS5zaWduYXR1cmVcbiAgICAgICAgICB9XG4gICAgICAgICAgd2VweS5hZGRDYXJkKHtcbiAgICAgICAgICAgIGNhcmRMaXN0OiBbe1xuICAgICAgICAgICAgICBjYXJkSWQ6IHJlcy5kYXRhLmNhcmRfaWQsXG4gICAgICAgICAgICAgIGNhcmRFeHQ6IEpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICAgICAgICAgICB9XSxcbiAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBldmVudHMgPSB7XG5cbiAgfVxuICBvbkxvYWQoKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzXG4gICAgdGhpcy4kcGFyZW50LmdldFVzZXJJbmZvKGZ1bmN0aW9uKHVzZXJJbmZvKSB7XG4gICAgICBpZiAodXNlckluZm8pIHtcbiAgICAgICAgc2VsZi51c2VySW5mbyA9IHVzZXJJbmZvXG4gICAgICB9XG4gICAgICBzZWxmLiRhcHBseSgpXG4gICAgfSlcbiAgfVxufVxuIl19