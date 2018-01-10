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
    getUserInfo: host + "/pay/mini/getUserInfo",
    //查询是否领卡
    getMiniMem: host + "/pay/mini/getMiniMem",
    // 领卡接口
    addCard: host + "/pay/mini/addCard",
    // 打开会员卡
    decryptCode: host + "/pay/mini/decryptCode",
    // 上传图片
    addFacePerson: host + "/pay/api/face/addFacePerson",
    // 提交个人资料
    activeCard: host + "/pay/mini/activeCard",
    // 查询老会员
    findOldMem: host + "/pay/mini/findOldMem",
    // 主域
    host: host
};

exports.default = {
    service: service
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJleHRDb25maWciLCJ3eCIsImdldEV4dENvbmZpZ1N5bmMiLCJob3N0IiwiYXR0ciIsInNlcnZpY2UiLCJqc2NvZGVUb1Nlc3Npb24iLCJnZXRVc2VySW5mbyIsImdldE1pbmlNZW0iLCJhZGRDYXJkIiwiZGVjcnlwdENvZGUiLCJhZGRGYWNlUGVyc29uIiwiYWN0aXZlQ2FyZCIsImZpbmRPbGRNZW0iXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7OztBQUdBO0FBQ0EsSUFBSUEsWUFBWUMsR0FBR0MsZ0JBQUgsR0FBcUJELEdBQUdDLGdCQUFILEVBQXJCLEdBQTRDLEVBQTVEO0FBQ0EsSUFBSUMsT0FBT0gsVUFBVUksSUFBVixDQUFlRCxJQUExQjs7QUFFTyxJQUFNRSw0QkFBVTtBQUNuQjtBQUNBQyxxQkFBbUJILElBQW5CLHlCQUZtQjtBQUduQjtBQUNBSSxpQkFBZUosSUFBZiwwQkFKbUI7QUFLbkI7QUFDQUssZ0JBQWNMLElBQWQseUJBTm1CO0FBT25CO0FBQ0FNLGFBQVlOLElBQVosc0JBUm1CO0FBU25CO0FBQ0FPLGlCQUFnQlAsSUFBaEIsMEJBVm1CO0FBV25CO0FBQ0FRLG1CQUFrQlIsSUFBbEIsZ0NBWm1CO0FBYW5CO0FBQ0FTLGdCQUFlVCxJQUFmLHlCQWRtQjtBQWVuQjtBQUNBVSxnQkFBZVYsSUFBZix5QkFoQm1CO0FBaUJuQjtBQUNBQTtBQWxCbUIsQ0FBaEI7O2tCQXFCUTtBQUNYRTtBQURXLEMiLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgICAgICAgICAgICAg5bCP56iL5bqP6YWN572u5paH5Lu2XHJcbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbi8vIOWfn+WQjVxyXG5sZXQgZXh0Q29uZmlnID0gd3guZ2V0RXh0Q29uZmlnU3luYz8gd3guZ2V0RXh0Q29uZmlnU3luYygpOiB7fVxyXG5sZXQgaG9zdCA9IGV4dENvbmZpZy5hdHRyLmhvc3Q7XHJcblxyXG5leHBvcnQgY29uc3Qgc2VydmljZSA9IHtcclxuICAgIC8v55m75b2V6I635Y+Wc2Vzc2lvblxyXG4gICAganNjb2RlVG9TZXNzaW9uOmAke2hvc3R9L3BheS9qc2NvZGVUb1Nlc3Npb25gLFxyXG4gICAgLy/op6Plr4ZlbmNyeXB0ZWREYXRhXHJcbiAgICBnZXRVc2VySW5mbzpgJHtob3N0fS9wYXkvbWluaS9nZXRVc2VySW5mb2AsXHJcbiAgICAvL+afpeivouaYr+WQpumihuWNoVxyXG4gICAgZ2V0TWluaU1lbTpgJHtob3N0fS9wYXkvbWluaS9nZXRNaW5pTWVtYCxcclxuICAgIC8vIOmihuWNoeaOpeWPo1xyXG4gICAgYWRkQ2FyZDogYCR7aG9zdH0vcGF5L21pbmkvYWRkQ2FyZGAsXHJcbiAgICAvLyDmiZPlvIDkvJrlkZjljaFcclxuICAgIGRlY3J5cHRDb2RlOiBgJHtob3N0fS9wYXkvbWluaS9kZWNyeXB0Q29kZWAsXHJcbiAgICAvLyDkuIrkvKDlm77niYdcclxuICAgIGFkZEZhY2VQZXJzb246IGAke2hvc3R9L3BheS9hcGkvZmFjZS9hZGRGYWNlUGVyc29uYCxcclxuICAgIC8vIOaPkOS6pOS4quS6uui1hOaWmVxyXG4gICAgYWN0aXZlQ2FyZDogYCR7aG9zdH0vcGF5L21pbmkvYWN0aXZlQ2FyZGAsXHJcbiAgICAvLyDmn6Xor6LogIHkvJrlkZhcclxuICAgIGZpbmRPbGRNZW06IGAke2hvc3R9L3BheS9taW5pL2ZpbmRPbGRNZW1gLFxyXG4gICAgLy8g5Li75Z+fXHJcbiAgICBob3N0XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHNlcnZpY2VcclxufVxyXG4iXX0=