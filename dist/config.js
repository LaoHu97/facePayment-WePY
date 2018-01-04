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
    jscodeToSession: host + '/pay/jscodeToSession',
    //解密encryptedData
    getUserInfo: host + '/pay/wxSmaPro/getUserInfo',
    //查询是否领卡
    getMiniMem: host + '/pay/getMiniMem',
    // 领卡接口
    addCard: host + '/pay/wxSmaPro/addCard',
    // 打开会员卡
    decryptCode: host + '/pay/wxSmaPro/decryptCode',
    // 上传图片
    addFacePerson: host + '/pay/api/face/addFacePerson',
    // 提交个人资料
    activeCard: host + '/pay/wxSmaPro/activeCard',
    // 查询老会员
    findOldMem: host + '/pay/findOldMem',
    // 主域
    host: host
};

exports.default = {
    service: service
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5qcyJdLCJuYW1lcyI6WyJob3N0Iiwic2VydmljZSIsImpzY29kZVRvU2Vzc2lvbiIsImdldFVzZXJJbmZvIiwiZ2V0TWluaU1lbSIsImFkZENhcmQiLCJkZWNyeXB0Q29kZSIsImFkZEZhY2VQZXJzb24iLCJhY3RpdmVDYXJkIiwiZmluZE9sZE1lbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7OztBQUlBO0FBQ0EsSUFBSUEsT0FBTyx3QkFBWDtBQUNBOztBQUVPLElBQU1DLDRCQUFVO0FBQ25CO0FBQ0FDLHFCQUFtQkYsSUFBbkIseUJBRm1CO0FBR25CO0FBQ0FHLGlCQUFlSCxJQUFmLDhCQUptQjtBQUtuQjtBQUNBSSxnQkFBY0osSUFBZCxvQkFObUI7QUFPbkI7QUFDQUssYUFBWUwsSUFBWiwwQkFSbUI7QUFTbkI7QUFDQU0saUJBQWdCTixJQUFoQiw4QkFWbUI7QUFXbkI7QUFDQU8sbUJBQWtCUCxJQUFsQixnQ0FabUI7QUFhbkI7QUFDQVEsZ0JBQWVSLElBQWYsNkJBZG1CO0FBZW5CO0FBQ0FTLGdCQUFlVCxJQUFmLG9CQWhCbUI7QUFpQm5CO0FBQ0FBO0FBbEJtQixDQUFoQjs7a0JBcUJRO0FBQ1hDO0FBRFcsQyIsImZpbGUiOiJjb25maWcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlsI/nqIvluo/phY3nva7mlofku7ZcclxuPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi8vIOWfn+WQjVxyXG52YXIgaG9zdCA9ICdodHRwOi8vdGVzdC53ZXVwYXkuY29tJztcclxuLy8gdmFyIGhvc3QgPSAnaHR0cDovL2xpYnJhcnkuZ2xvcmUvYXBpJztcclxuXHJcbmV4cG9ydCBjb25zdCBzZXJ2aWNlID0ge1xyXG4gICAgLy/nmbvlvZXojrflj5ZzZXNzaW9uXHJcbiAgICBqc2NvZGVUb1Nlc3Npb246YCR7aG9zdH0vcGF5L2pzY29kZVRvU2Vzc2lvbmAsXHJcbiAgICAvL+ino+WvhmVuY3J5cHRlZERhdGFcclxuICAgIGdldFVzZXJJbmZvOmAke2hvc3R9L3BheS93eFNtYVByby9nZXRVc2VySW5mb2AsXHJcbiAgICAvL+afpeivouaYr+WQpumihuWNoVxyXG4gICAgZ2V0TWluaU1lbTpgJHtob3N0fS9wYXkvZ2V0TWluaU1lbWAsXHJcbiAgICAvLyDpoobljaHmjqXlj6NcclxuICAgIGFkZENhcmQ6IGAke2hvc3R9L3BheS93eFNtYVByby9hZGRDYXJkYCxcclxuICAgIC8vIOaJk+W8gOS8muWRmOWNoVxyXG4gICAgZGVjcnlwdENvZGU6IGAke2hvc3R9L3BheS93eFNtYVByby9kZWNyeXB0Q29kZWAsXHJcbiAgICAvLyDkuIrkvKDlm77niYdcclxuICAgIGFkZEZhY2VQZXJzb246IGAke2hvc3R9L3BheS9hcGkvZmFjZS9hZGRGYWNlUGVyc29uYCxcclxuICAgIC8vIOaPkOS6pOS4quS6uui1hOaWmVxyXG4gICAgYWN0aXZlQ2FyZDogYCR7aG9zdH0vcGF5L3d4U21hUHJvL2FjdGl2ZUNhcmRgLFxyXG4gICAgLy8g5p+l6K+i6ICB5Lya5ZGYXHJcbiAgICBmaW5kT2xkTWVtOiBgJHtob3N0fS9wYXkvZmluZE9sZE1lbWAsXHJcbiAgICAvLyDkuLvln59cclxuICAgIGhvc3RcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgc2VydmljZVxyXG59XHJcbiJdfQ==