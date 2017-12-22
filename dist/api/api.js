'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCard = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var base = 'http://test.weupay.com';

// export const addCard = params => { return wepy.request(`${base}/pay/wxSmaPro/addCard`,params).then(res => res.data); };

var addCard = exports.addCard = function addCard(params) {
  return _wepy2.default.request({ url: base + '/pay/wxSmaPro/addCard', method: 'POST' }, params).then(function (res) {
    return res.data;
  });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJiYXNlIiwiYWRkQ2FyZCIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJ0aGVuIiwicmVzIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7QUFFQSxJQUFJQSxPQUFPLHdCQUFYOztBQUVBOztBQUVPLElBQU1DLDRCQUFVLFNBQVZBLE9BQVUsU0FBVTtBQUFFLFNBQU8sZUFBS0MsT0FBTCxDQUFhLEVBQUNDLEtBQUtILE9BQU8sdUJBQWIsRUFBcUNJLFFBQU8sTUFBNUMsRUFBYixFQUFpRUMsTUFBakUsRUFBeUVDLElBQXpFLENBQThFO0FBQUEsV0FBT0MsSUFBSUMsSUFBWDtBQUFBLEdBQTlFLENBQVA7QUFBc0csQ0FBbEkiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuXHJcbmxldCBiYXNlID0gJ2h0dHA6Ly90ZXN0LndldXBheS5jb20nO1xyXG5cclxuLy8gZXhwb3J0IGNvbnN0IGFkZENhcmQgPSBwYXJhbXMgPT4geyByZXR1cm4gd2VweS5yZXF1ZXN0KGAke2Jhc2V9L3BheS93eFNtYVByby9hZGRDYXJkYCxwYXJhbXMpLnRoZW4ocmVzID0+IHJlcy5kYXRhKTsgfTtcclxuXHJcbmV4cG9ydCBjb25zdCBhZGRDYXJkID0gcGFyYW1zID0+IHsgcmV0dXJuIHdlcHkucmVxdWVzdCh7dXJsOiBiYXNlICsgJy9wYXkvd3hTbWFQcm8vYWRkQ2FyZCcsbWV0aG9kOidQT1NUJ30scGFyYW1zKS50aGVuKHJlcyA9PiByZXMuZGF0YSl9O1xyXG4iXX0=