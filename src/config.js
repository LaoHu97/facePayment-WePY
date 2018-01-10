/* ========================================================
                        小程序配置文件
======================================================== */
// 域名
let extConfig = wx.getExtConfigSync? wx.getExtConfigSync(): {}
let host = extConfig.attr.host;

export const service = {
    //登录获取session
    jscodeToSession:`${host}/pay/jscodeToSession`,
    //解密encryptedData
    getUserInfo:`${host}/pay/mini/getUserInfo`,
    //查询是否领卡
    getMiniMem:`${host}/pay/mini/getMiniMem`,
    // 领卡接口
    addCard: `${host}/pay/mini/addCard`,
    // 打开会员卡
    decryptCode: `${host}/pay/mini/decryptCode`,
    // 上传图片
    addFacePerson: `${host}/pay/api/face/addFacePerson`,
    // 提交个人资料
    activeCard: `${host}/pay/mini/activeCard`,
    // 查询老会员
    findOldMem: `${host}/pay/mini/findOldMem`,
    // 主域
    host
}

export default {
    service
}
