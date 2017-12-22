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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJob3N0Iiwic2VydmljZSIsImFkZENhcmQiLCJkZWNyeXB0Q29kZSIsImFkZEZhY2VQZXJzb24iLCJhY3RpdmVDYXJkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUE7QUFDQSxJQUFJQSxPQUFPLHdCQUFYO0FBQ0E7O0FBRU8sSUFBTUMsNEJBQVU7QUFDbkI7QUFDQUMsYUFBWUYsSUFBWiwwQkFGbUI7QUFHbkI7QUFDQUcsaUJBQWdCSCxJQUFoQiw4QkFKbUI7QUFLbkI7QUFDQUksbUJBQWtCSixJQUFsQixnQ0FObUI7QUFPbkI7QUFDQUssZ0JBQWVMLElBQWYsNkJBUm1CO0FBU25CO0FBQ0FBO0FBVm1CLENBQWhCOztrQkFhUTtBQUNYQztBQURXLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAg5bCP56iL5bqP6YWN572u5paH5Lu2XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4vLyDln5/lkI1cclxudmFyIGhvc3QgPSAnaHR0cDovL3Rlc3Qud2V1cGF5LmNvbSc7XHJcbi8vIHZhciBob3N0ID0gJ2h0dHA6Ly9saWJyYXJ5Lmdsb3JlL2FwaSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZSA9IHtcclxuICAgIC8vIOmihuWNoeaOpeWPo1xyXG4gICAgYWRkQ2FyZDogYCR7aG9zdH0vcGF5L3d4U21hUHJvL2FkZENhcmRgLFxyXG4gICAgLy8g5omT5byA5Lya5ZGY5Y2hXHJcbiAgICBkZWNyeXB0Q29kZTogYCR7aG9zdH0vcGF5L3d4U21hUHJvL2RlY3J5cHRDb2RlYCxcclxuICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgYWRkRmFjZVBlcnNvbjogYCR7aG9zdH0vcGF5L2FwaS9mYWNlL2FkZEZhY2VQZXJzb25gLFxyXG4gICAgLy8g5o+Q5Lqk5Liq5Lq66LWE5paZXHJcbiAgICBhY3RpdmVDYXJkOiBgJHtob3N0fS9wYXkvd3hTbWFQcm8vYWN0aXZlQ2FyZGAsXHJcbiAgICAvLyDkuLvln59cclxuICAgIGhvc3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2VydmljZVxyXG59XHJcbiJdfQ==