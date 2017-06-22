/**
 * Created by jade on 16/2/22.
 */
/*base start*/
seajs.config({
    base: "/js",
    comboExcludes: /\/js*/
})
/*base end*/

seajs.config({
    paths: {
        "arale": "http://static.zlbaba.com/arale",
        "gallery": "http://static.zlbaba.com/gallery"
    },

    alias: {
        //arale
        autocomplete: "arale/arale-autocomplete/1.4.1/autocomplete.js",
        calendar: "arale/arale-calendar/1.1.2/index.js",
        dialog: "arale/arale-dialog/1.5.8/dialog-debug.js",
        dialog_2: "arale/arale-dialog/1.5.8/dialog",
        select: "arale/arale-select/0.11.1/index-debug.js",
        sticky: "arale/arale-sticky/1.4.0/index.js",
        switchable: "arale/arale-switchable/1.1.1/switchable-debug.js",
        tip: "arale/arale-tip/1.4.1/tip-debug.js",
        validator: "arale/arale-validator/0.11.0/index.js",
        dnd: "arale/arale-dnd/1.1.0/index-debug.js",
        cookie: "arale/arale-cookie/1.1.0/index.js",
        popup: "arale/arale-popup/1.2.0/popup.js",
        widget: "arale/arale-widget/1.2.0/widget",
        //gallery
        arttemplate: "gallery/arttemplate-native/3.0.2/index",
        store: "gallery/store/1.0.1/index.js",
        kindeditor: "gallery/kindeditor/4.1.11/index.js",
        ztree: "gallery/ztree/1.0.1/index.js",
        moment: "arale/moment/2.9.0/moment",
        paging: "gallery/bt-paging/1.0.2/index",
        uri: "gallery/uri/1.0.3/index",
        overlay: "arale/arale-overlay/1.2.0/overlay",
        regionpicker: "gallery/bt-regionpicker/1.0.9/index",
        dataRegion: "gallery/data-region/1.0.2/index",
        upload: "arale/arale-upload/1.3.0/index-debug",
        underscore: "gallery/underscore/1.6.0/underscore-debug",
        paging: "gallery/bt-paging/1.1.2/index",
        qrcode: "arale/arale-qrcode/3.0.5/index-debug",
        cpcregion:"gallery/cpc-regionpicker.0.0.4/index",
        highcharts: "gallery/highcharts/4.0.5/highcharts",
        btJquery:"common/bt-jquery",
        echart:"common/echarts.common.min"
    },
    'map': [
        [ /^(.*\/.*\.(?:css|js))(.*)$/i, '$1?' + new Date().getMilliseconds() ]
    ],
    preload: ["btJquery"]
})


//公共地址配置 发布时需要根据配置文件生成
window.CONFIG = {
    UPLOAD: {
        ACTION: "http://file.zlbaba.com/file/upload",
        SPACE_CODE: "ECTG0DAXXYG6WVLGF26FULLVENQXEYY26MUH2PBRDYA",
        VIEW: "http://file.zlbaba.com/file/view",
        DOWNLOAD: "http://file.zlbaba.com/file/get"
    },
    SO_BASEURL: "http://www.patexplorer.com",
    JOYSHAREURL:"http://www.zlbaba.com/share",
    APPLY_BASEURL:"http://apply.zlbaba.com",
    LOGIN_BASEURL:"https://login.zlbaba.com",
    ZLBABA_BASEURL:"http://www.zlbaba.com",
    ZLGJ_BASEURL:"https://zlgj.zlbaba.com",
    CXB_BASEURL:"http://www.chuangxb.com",
    CPPC_BASEURL:"http://www.chinapatentproduct.com",
    BAITEN_BASEURL:"http://www.baiten.cn",
    PATEXP_BASEURL:"http://www.patexplorer.com",
}
