'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
var host = 'http://test.weupay.com';
// var host = 'http://library.glore/api';

var service = exports.service = {
    //登录获取session
    jscodeToSession: host + '/pay/wxSmaPro/jscodeToSession',
    // 领卡接口
    addCard: host + '/pay/wxSmaPro/addCard',
    // 打开会员卡
    decryptCode: host + '/pay/wxSmaPro/decryptCode',
    // 上传图片
    addFacePerson: host + '/pay/api/face/addFacePerson',
    // 提交个人资料
    activeCard: host + '/pay/wxSmaPro/activeCard',
    // 主域
    host: host
};

exports.default = {
    service: service
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJob3N0Iiwic2VydmljZSIsImpzY29kZVRvU2Vzc2lvbiIsImFkZENhcmQiLCJkZWNyeXB0Q29kZSIsImFkZEZhY2VQZXJzb24iLCJhY3RpdmVDYXJkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUE7QUFDQSxJQUFJQSxPQUFPLHdCQUFYO0FBQ0E7O0FBRU8sSUFBTUMsNEJBQVU7QUFDbkI7QUFDQUMscUJBQW1CRixJQUFuQixrQ0FGbUI7QUFHbkI7QUFDQUcsYUFBWUgsSUFBWiwwQkFKbUI7QUFLbkI7QUFDQUksaUJBQWdCSixJQUFoQiw4QkFObUI7QUFPbkI7QUFDQUssbUJBQWtCTCxJQUFsQixnQ0FSbUI7QUFTbkI7QUFDQU0sZ0JBQWVOLElBQWYsNkJBVm1CO0FBV25CO0FBQ0FBO0FBWm1CLENBQWhCOztrQkFlUTtBQUNYQztBQURXLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAg5bCP56iL5bqP6YWN572u5paH5Lu2XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyDln5/lkI1cclxudmFyIGhvc3QgPSAnaHR0cDovL3Rlc3Qud2V1cGF5LmNvbSc7XHJcbi8vIHZhciBob3N0ID0gJ2h0dHA6Ly9saWJyYXJ5Lmdsb3JlL2FwaSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZSA9IHtcclxuICAgIC8v55m75b2V6I635Y+Wc2Vzc2lvblxyXG4gICAganNjb2RlVG9TZXNzaW9uOmAke2hvc3R9L3BheS93eFNtYVByby9qc2NvZGVUb1Nlc3Npb25gLFxyXG4gICAgLy8g6aKG5Y2h5o6l5Y+jXHJcbiAgICBhZGRDYXJkOiBgJHtob3N0fS9wYXkvd3hTbWFQcm8vYWRkQ2FyZGAsXHJcbiAgICAvLyDmiZPlvIDkvJrlkZjljaFcclxuICAgIGRlY3J5cHRDb2RlOiBgJHtob3N0fS9wYXkvd3hTbWFQcm8vZGVjcnlwdENvZGVgLFxyXG4gICAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgICBhZGRGYWNlUGVyc29uOiBgJHtob3N0fS9wYXkvYXBpL2ZhY2UvYWRkRmFjZVBlcnNvbmAsXHJcbiAgICAvLyDmj5DkuqTkuKrkurrotYTmlplcclxuICAgIGFjdGl2ZUNhcmQ6IGAke2hvc3R9L3BheS93eFNtYVByby9hY3RpdmVDYXJkYCxcclxuICAgIC8vIOS4u+Wfn1xyXG4gICAgaG9zdFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBzZXJ2aWNlXHJcbn1cclxuIl19