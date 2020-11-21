!function(t,e){
    if ("object" == typeof exports && "undefined" != typeof module) {
        module.exports = e()
    }else{
        if("function" == typeof define){
            define.amd
        }else{
            t.PushSDK = e()
        }
    }
}(this,function(){
    //闭包函数
    "use strict";
    console.log("this",this);
    function modify(arg1) {
        return function(t) {
            return function(arg1) {

            }
        }
    }

});