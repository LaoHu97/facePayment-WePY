/* ========================================================
                        小程序配置文件
======================================================== */

// 域名
var host = 'http://test.weupay.com';
// var host = 'http://library.glore/api';

export const service = {
    //登录获取session
    jscodeToSession:`${host}/pay/wxSmaPro/jscodeToSession`,
    //解密encryptedData
    getUserInfo:`${host}/pay/wxSmaPro/getUserInfo`,
    //查询是否领卡
    getMiniMem:`${host}/pay/wxSmaPro/getMiniMem`,
    // 领卡接口
    addCard: `${host}/pay/wxSmaPro/addCard`,
    // 打开会员卡
    decryptCode: `${host}/pay/wxSmaPro/decryptCode`,
    // 上传图片
    addFacePerson: `${host}/pay/api/face/addFacePerson`,
    // 提交个人资料
    activeCard: `${host}/pay/wxSmaPro/activeCard`,
    // 主域
    host
}

export default {
    service
}
