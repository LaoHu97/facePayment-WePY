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
    // 查询老会员
    findOldMem: `${host}/pay/wxSmaPro/findOldMem`,
    // 主域
    host
}

export default {
    service
}
