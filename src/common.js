/**
 * @file 公共类 单体模式
 * @author qiu(423822728@qq.com)
 * 采用es6 编译 在线编译 https://babeljs.cn/repl/#?babili=false&browsers=&build=&builtIns=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=6.26.0&envVersion=
 * 同级对象，多对象class操作，多对象实际绑定事件，导航条获得焦点，
 * classlist dataset ie11+
 */
; (function () {
    /**
     * 公共类
     * @namespace
     */
    const Init = {
        /** 
         *同级选择器
         *@param {DOM} dom 对象
         *@param {String} target 要查找的同级选择器
         *@return {Array} 同级对象列表
        */
        siblings(dom, target) {
            //父级
            let arr = []
            if (typeof dom == 'string') dom = document.querySelector(dom)
            let list;
            if (target) {

                list = dom.parentNode.querySelector(target)
            } else {
                //获得当前自己的所有节点
                list = dom.parentNode.childNodes
            }

            list.forEach(obj => {
                //获得除以外的对象
                if (obj != dom) {
                    arr.push(obj);
                }
            })

            return arr;
        },
        /**
         * 页面滚动，添加事件
         * @param {Dom} target 选择器
         * @param {String} dataString data-数据
         * @param {string} active 不存在事件时添加class = active
         * @param {Function} fn 匹配后触发,不存在事件时添加class = active
         * @param {Function} falseFn false 回调
         */
        scrollFn(target,config = {dataString :"top", className :"active"}) {
            //获得当前高度
            let h = document.body.clientHeight
            //获得对象位置
            function getTarget() {
                let targets = [];
                //保存对象位置数据 getBoundingClientRect 获取为负数
                document.querySelectorAll(target).forEach(obj => {
                    let top = obj.dataset[config.dataString] === undefined ? obj.offsetTop : obj.dataset[dataString]
                    targets.push({ top, obj })
                })
                return targets;
            }
            let targets = getTarget();

            document.addEventListener("scroll", function () {
                //获得当前高度
                let win_top = document.body.getBoundingClientRect().top * -1;
                //内容高度
                let content_h = document.body.clientHeight
                // 当页面内容高度改变时重新计算对象位置
                if (h != content_h) {
                    targets = getTarget();
                }
                //比对
                targets.forEach(data => {
                    if (data.top <= win_top) {
                        if (config.fn) {
                            config.fn(data, win_top)
                        } else {
                            data.obj.classList.add(className)
                        }
                    } else {
                        if (config.falseFn) {
                            config.falseFn(data, win_top)
                        } else {
                            data.obj.classList.remove(config.className)
                        }
                    }
                })

            })
        }

    }
    window.CommonQiu = Init;
})()
// AMD Export
if (typeof (module) !== 'undefined') {
    module.exports = window.CommonQiu;
}
else if (typeof define === 'function' && define.amd) {
    define([], function () {
        'use strict';
        return window.CommonQiu;
    });
}