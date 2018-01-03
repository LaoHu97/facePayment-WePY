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
    //解密encryptedData
    getUserInfo: host + '/pay/wxSmaPro/getUserInfo',
    //查询是否领卡
    getMiniMem: host + '/pay/wxSmaPro/getMiniMem',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJob3N0Iiwic2VydmljZSIsImpzY29kZVRvU2Vzc2lvbiIsImdldFVzZXJJbmZvIiwiZ2V0TWluaU1lbSIsImFkZENhcmQiLCJkZWNyeXB0Q29kZSIsImFkZEZhY2VQZXJzb24iLCJhY3RpdmVDYXJkIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBOzs7O0FBSUE7QUFDQSxJQUFJQSxPQUFPLHdCQUFYO0FBQ0E7O0FBRU8sSUFBTUMsNEJBQVU7QUFDbkI7QUFDQUMscUJBQW1CRixJQUFuQixrQ0FGbUI7QUFHbkI7QUFDQUcsaUJBQWVILElBQWYsOEJBSm1CO0FBS25CO0FBQ0FJLGdCQUFjSixJQUFkLDZCQU5tQjtBQU9uQjtBQUNBSyxhQUFZTCxJQUFaLDBCQVJtQjtBQVNuQjtBQUNBTSxpQkFBZ0JOLElBQWhCLDhCQVZtQjtBQVduQjtBQUNBTyxtQkFBa0JQLElBQWxCLGdDQVptQjtBQWFuQjtBQUNBUSxnQkFBZVIsSUFBZiw2QkFkbUI7QUFlbkI7QUFDQUE7QUFoQm1CLENBQWhCOztrQkFtQlE7QUFDWEM7QUFEVyxDIiwiZmlsZSI6ImNvbmZpZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWwj+eoi+W6j+mFjee9ruaWh+S7tlxyXG49PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuLy8g5Z+f5ZCNXHJcbnZhciBob3N0ID0gJ2h0dHA6Ly90ZXN0LndldXBheS5jb20nO1xyXG4vLyB2YXIgaG9zdCA9ICdodHRwOi8vbGlicmFyeS5nbG9yZS9hcGknO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNlcnZpY2UgPSB7XHJcbiAgICAvL+eZu+W9leiOt+WPlnNlc3Npb25cclxuICAgIGpzY29kZVRvU2Vzc2lvbjpgJHtob3N0fS9wYXkvd3hTbWFQcm8vanNjb2RlVG9TZXNzaW9uYCxcclxuICAgIC8v6Kej5a+GZW5jcnlwdGVkRGF0YVxyXG4gICAgZ2V0VXNlckluZm86YCR7aG9zdH0vcGF5L3d4U21hUHJvL2dldFVzZXJJbmZvYCxcclxuICAgIC8v5p+l6K+i5piv5ZCm6aKG5Y2hXHJcbiAgICBnZXRNaW5pTWVtOmAke2hvc3R9L3BheS93eFNtYVByby9nZXRNaW5pTWVtYCxcclxuICAgIC8vIOmihuWNoeaOpeWPo1xyXG4gICAgYWRkQ2FyZDogYCR7aG9zdH0vcGF5L3d4U21hUHJvL2FkZENhcmRgLFxyXG4gICAgLy8g5omT5byA5Lya5ZGY5Y2hXHJcbiAgICBkZWNyeXB0Q29kZTogYCR7aG9zdH0vcGF5L3d4U21hUHJvL2RlY3J5cHRDb2RlYCxcclxuICAgIC8vIOS4iuS8oOWbvueJh1xyXG4gICAgYWRkRmFjZVBlcnNvbjogYCR7aG9zdH0vcGF5L2FwaS9mYWNlL2FkZEZhY2VQZXJzb25gLFxyXG4gICAgLy8g5o+Q5Lqk5Liq5Lq66LWE5paZXHJcbiAgICBhY3RpdmVDYXJkOiBgJHtob3N0fS9wYXkvd3hTbWFQcm8vYWN0aXZlQ2FyZGAsXHJcbiAgICAvLyDkuLvln59cclxuICAgIGhvc3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2VydmljZVxyXG59XHJcbiJdfQ==