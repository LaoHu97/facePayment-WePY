'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/index', 'pages/activation', 'pages/camera', 'pages/accomplish'],
      window: {
        'backgroundTextStyle': 'light',
        'navigationBarBackgroundColor': '#1AAD19',
        'navigationBarTitleText': 'WeChat',
        'navigationBarTextStyle': 'WeChat'
      },
      'debug': true
    };
    _this.globalData = {
      userInfo: null,
      useridcard: null
    };

    _this.use('requestfix');
    _this.intercept('request', {
      config: function config(p) {
        p.timestamp = +new Date();
        return p;
      },
      success: function success(p) {
        console.log('request success');
        return p;
      },
      fail: function fail(p) {
        console.log('request error');
        return p;
      }
    });
    return _this;
  }

  _createClass(_default, [{
    key: 'onShareAppMessage',
    value: function onShareAppMessage() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '微信会员卡';

      return {
        title: title,
        path: '/pages/index',
        // imageUrl: '',
        success: function success(res) {
          // 转发成功
          console.log(res.errMsg);
        },
        fail: function fail(res) {
          // 转发失败
          console.log(res.errMsg);
        }
      };
    }
  }, {
    key: 'onShow',
    value: function onShow(data) {
      this.globalData.useridcard = data.query;
    }
  }, {
    key: 'onLaunch',
    value: function onLaunch() {
      _wepy2.default.login({
        success: function success(res) {
          console.log(res);
        }
      });
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImdsb2JhbERhdGEiLCJ1c2VySW5mbyIsInVzZXJpZGNhcmQiLCJ1c2UiLCJpbnRlcmNlcHQiLCJwIiwidGltZXN0YW1wIiwiRGF0ZSIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZmFpbCIsInRpdGxlIiwicGF0aCIsInJlcyIsImVyck1zZyIsImRhdGEiLCJxdWVyeSIsImxvZ2luIiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7O0FBd0JFLHNCQUFjO0FBQUE7O0FBQUE7O0FBQUEsVUFyQmRBLE1BcUJjLEdBckJMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsa0JBRkssRUFHTCxjQUhLLEVBSUwsa0JBSkssQ0FEQTtBQU9QQyxjQUFRO0FBQ04sK0JBQXVCLE9BRGpCO0FBRU4sd0NBQWdDLFNBRjFCO0FBR04sa0NBQTBCLFFBSHBCO0FBSU4sa0NBQTBCO0FBSnBCLE9BUEQ7QUFhUCxlQUFTO0FBYkYsS0FxQks7QUFBQSxVQUxkQyxVQUtjLEdBTEQ7QUFDWEMsZ0JBQVUsSUFEQztBQUVYQyxrQkFBWTtBQUZELEtBS0M7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQSxVQUFLQyxTQUFMLENBQWUsU0FBZixFQUEwQjtBQUN4QlAsWUFEd0Isa0JBQ2pCUSxDQURpQixFQUNkO0FBQ1JBLFVBQUVDLFNBQUYsR0FBYyxDQUFDLElBQUlDLElBQUosRUFBZjtBQUNBLGVBQU9GLENBQVA7QUFDRCxPQUp1QjtBQUt4QkcsYUFMd0IsbUJBS2hCSCxDQUxnQixFQUtiO0FBQ1RJLGdCQUFRQyxHQUFSLENBQVksaUJBQVo7QUFDQSxlQUFPTCxDQUFQO0FBQ0QsT0FSdUI7QUFTeEJNLFVBVHdCLGdCQVNuQk4sQ0FUbUIsRUFTaEI7QUFDTkksZ0JBQVFDLEdBQVIsQ0FBWSxlQUFaO0FBQ0EsZUFBT0wsQ0FBUDtBQUNEO0FBWnVCLEtBQTFCO0FBSFk7QUFpQmI7Ozs7d0NBQ2tDO0FBQUEsVUFBakJPLEtBQWlCLHVFQUFULE9BQVM7O0FBQ2pDLGFBQU87QUFDTEEsZUFBT0EsS0FERjtBQUVMQyxjQUFNLGNBRkQ7QUFHTDtBQUNBTCxpQkFBUyxpQkFBU00sR0FBVCxFQUFjO0FBQ3JCO0FBQ0FMLGtCQUFRQyxHQUFSLENBQVlJLElBQUlDLE1BQWhCO0FBQ0QsU0FQSTtBQVFMSixjQUFNLGNBQVNHLEdBQVQsRUFBYztBQUNsQjtBQUNBTCxrQkFBUUMsR0FBUixDQUFZSSxJQUFJQyxNQUFoQjtBQUNEO0FBWEksT0FBUDtBQWFEOzs7MkJBQ01DLEksRUFBTTtBQUNYLFdBQUtoQixVQUFMLENBQWdCRSxVQUFoQixHQUE2QmMsS0FBS0MsS0FBbEM7QUFDRDs7OytCQUNVO0FBQ1QscUJBQUtDLEtBQUwsQ0FBVztBQUNUVixpQkFBUyxpQkFBU00sR0FBVCxFQUFjO0FBQ3JCTCxrQkFBUUMsR0FBUixDQUFZSSxHQUFaO0FBQ0Q7QUFIUSxPQUFYO0FBS0Q7Ozs7RUFoRTBCLGVBQUtLLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBwYWdlczogW1xyXG4gICAgICAncGFnZXMvaW5kZXgnLFxyXG4gICAgICAncGFnZXMvYWN0aXZhdGlvbicsXHJcbiAgICAgICdwYWdlcy9jYW1lcmEnLFxyXG4gICAgICAncGFnZXMvYWNjb21wbGlzaCdcclxuICAgIF0sXHJcbiAgICB3aW5kb3c6IHtcclxuICAgICAgJ2JhY2tncm91bmRUZXh0U3R5bGUnOiAnbGlnaHQnLFxyXG4gICAgICAnbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcic6ICcjMUFBRDE5JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJUaXRsZVRleHQnOiAnV2VDaGF0JyxcclxuICAgICAgJ25hdmlnYXRpb25CYXJUZXh0U3R5bGUnOiAnV2VDaGF0J1xyXG4gICAgfSxcclxuICAgICdkZWJ1Zyc6IHRydWVcclxuICB9XHJcblxyXG4gIGdsb2JhbERhdGEgPSB7XHJcbiAgICB1c2VySW5mbzogbnVsbCxcclxuICAgIHVzZXJpZGNhcmQ6IG51bGxcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKVxyXG4gICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKVxyXG4gICAgdGhpcy5pbnRlcmNlcHQoJ3JlcXVlc3QnLCB7XHJcbiAgICAgIGNvbmZpZyhwKSB7XHJcbiAgICAgICAgcC50aW1lc3RhbXAgPSArbmV3IERhdGUoKVxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1Y2Nlc3MocCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IHN1Y2Nlc3MnKVxyXG4gICAgICAgIHJldHVybiBwXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWwocCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdyZXF1ZXN0IGVycm9yJylcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuICBvblNoYXJlQXBwTWVzc2FnZSh0aXRsZSA9ICflvq7kv6HkvJrlkZjljaEnKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aXRsZTogdGl0bGUsXHJcbiAgICAgIHBhdGg6ICcvcGFnZXMvaW5kZXgnLFxyXG4gICAgICAvLyBpbWFnZVVybDogJycsXHJcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeaIkOWKn1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZhaWw6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgIC8vIOi9rOWPkeWksei0pVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5lcnJNc2cpXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgb25TaG93KGRhdGEpIHtcclxuICAgIHRoaXMuZ2xvYmFsRGF0YS51c2VyaWRjYXJkID0gZGF0YS5xdWVyeVxyXG4gIH1cclxuICBvbkxhdW5jaCgpIHtcclxuICAgIHdlcHkubG9naW4oe1xyXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG59XG4iXX0=