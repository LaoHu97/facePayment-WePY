"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* ========================================================
                        小程序配置文件
======================================================== */
// 域名
var extConfig = wx.getExtConfigSync ? wx.getExtConfigSync() : {};
var host = extConfig.attr.host;

var service = exports.service = {
    //登录获取session
    jscodeToSession: host + "/pay/jscodeToSession",
    //解密encryptedData
    getUserInfo: host + "/pay/wxSmaPro/getUserInfo",
    //查询是否领卡
    getMiniMem: host + "/pay/wxSmaPro/getMiniMem",
    // 领卡接口
    addCard: host + "/pay/wxSmaPro/addCard",
    // 打开会员卡
    decryptCode: host + "/pay/wxSmaPro/decryptCode",
    // 上传图片
    addFacePerson: host + "/pay/api/face/addFacePerson",
    // 提交个人资料
    activeCard: host + "/pay/wxSmaPro/activeCard",
    // 查询老会员
    findOldMem: host + "/pay/wxSmaPro/findOldMem",
    // 主域
    host: host
};

exports.default = {
    service: service
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJleHRDb25maWciLCJ3eCIsImdldEV4dENvbmZpZ1N5bmMiLCJob3N0IiwiYXR0ciIsInNlcnZpY2UiLCJqc2NvZGVUb1Nlc3Npb24iLCJnZXRVc2VySW5mbyIsImdldE1pbmlNZW0iLCJhZGRDYXJkIiwiZGVjcnlwdENvZGUiLCJhZGRGYWNlUGVyc29uIiwiYWN0aXZlQ2FyZCIsImZpbmRPbGRNZW0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUdBO0FBQ0EsSUFBSUEsWUFBWUMsR0FBR0MsZ0JBQUgsR0FBcUJELEdBQUdDLGdCQUFILEVBQXJCLEdBQTRDLEVBQTVEO0FBQ0EsSUFBSUMsT0FBT0gsVUFBVUksSUFBVixDQUFlRCxJQUExQjs7QUFFTyxJQUFNRSw0QkFBVTtBQUNuQjtBQUNBQyxxQkFBbUJILElBQW5CLHlCQUZtQjtBQUduQjtBQUNBSSxpQkFBZUosSUFBZiw4QkFKbUI7QUFLbkI7QUFDQUssZ0JBQWNMLElBQWQsNkJBTm1CO0FBT25CO0FBQ0FNLGFBQVlOLElBQVosMEJBUm1CO0FBU25CO0FBQ0FPLGlCQUFnQlAsSUFBaEIsOEJBVm1CO0FBV25CO0FBQ0FRLG1CQUFrQlIsSUFBbEIsZ0NBWm1CO0FBYW5CO0FBQ0FTLGdCQUFlVCxJQUFmLDZCQWRtQjtBQWVuQjtBQUNBVSxnQkFBZVYsSUFBZiw2QkFoQm1CO0FBaUJuQjtBQUNBQTtBQWxCbUIsQ0FBaEI7O2tCQXFCUTtBQUNYRTtBQURXLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAg5bCP56iL5bqP6YWN572u5paH5Lu2XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8vIOWfn+WQjVxyXG5sZXQgZXh0Q29uZmlnID0gd3guZ2V0RXh0Q29uZmlnU3luYz8gd3guZ2V0RXh0Q29uZmlnU3luYygpOiB7fVxyXG5sZXQgaG9zdCA9IGV4dENvbmZpZy5hdHRyLmhvc3Q7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZSA9IHtcclxuICAgIC8v55m75b2V6I635Y+Wc2Vzc2lvblxyXG4gICAganNjb2RlVG9TZXNzaW9uOmAke2hvc3R9L3BheS9qc2NvZGVUb1Nlc3Npb25gLFxyXG4gICAgLy/op6Plr4ZlbmNyeXB0ZWREYXRhXHJcbiAgICBnZXRVc2VySW5mbzpgJHtob3N0fS9wYXkvd3hTbWFQcm8vZ2V0VXNlckluZm9gLFxyXG4gICAgLy/mn6Xor6LmmK/lkKbpoobljaFcclxuICAgIGdldE1pbmlNZW06YCR7aG9zdH0vcGF5L3d4U21hUHJvL2dldE1pbmlNZW1gLFxyXG4gICAgLy8g6aKG5Y2h5o6l5Y+jXHJcbiAgICBhZGRDYXJkOiBgJHtob3N0fS9wYXkvd3hTbWFQcm8vYWRkQ2FyZGAsXHJcbiAgICAvLyDmiZPlvIDkvJrlkZjljaFcclxuICAgIGRlY3J5cHRDb2RlOiBgJHtob3N0fS9wYXkvd3hTbWFQcm8vZGVjcnlwdENvZGVgLFxyXG4gICAgLy8g5LiK5Lyg5Zu+54mHXHJcbiAgICBhZGRGYWNlUGVyc29uOiBgJHtob3N0fS9wYXkvYXBpL2ZhY2UvYWRkRmFjZVBlcnNvbmAsXHJcbiAgICAvLyDmj5DkuqTkuKrkurrotYTmlplcclxuICAgIGFjdGl2ZUNhcmQ6IGAke2hvc3R9L3BheS93eFNtYVByby9hY3RpdmVDYXJkYCxcclxuICAgIC8vIOafpeivouiAgeS8muWRmFxyXG4gICAgZmluZE9sZE1lbTogYCR7aG9zdH0vcGF5L3d4U21hUHJvL2ZpbmRPbGRNZW1gLFxyXG4gICAgLy8g5Li75Z+fXHJcbiAgICBob3N0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNlcnZpY2VcclxufVxyXG4iXX0=