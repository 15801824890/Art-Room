/**
 * Created by jade on 2016/5/19.
 */
seajs.config({
    base:"/js",
    comboExcludes: /\/js*/,
    paths: {
        "arale": "https://static.zlbaba.com/arale",
        "gallery": "https://static.zlbaba.com/gallery"
    },

    alias: {
        //arale
        validator: "arale/arale-validator/0.10.8/index-debug.js",       
        //gallery
        store: "gallery/store/1.0.1/index.js",
        uri:"gallery/uri/1.0.2/index",
        cookie: "arale/arale-cookie/1.1.0/index.js",
        dnd: "arale/arale-dnd/1.1.0/index-debug.js",
        qrcode:"arale/arale-qrcode/3.0.5/index-debug"
    },

    'map': [
        [ /^(.*\/.*\.(?:css|js))(.*)$/i, '$1?' + new Date().getMilliseconds() ]
    ]
})

//公共地址配置 发布时需要根据配置文件生成
window.CONFIG = {
    ZLGJ_BASEURL: "https://zlgj.zlbaba.com"

}