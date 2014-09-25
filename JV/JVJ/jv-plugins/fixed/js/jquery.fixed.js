/*
 * fixed
 *
 * Copyright (c) 2014 jay
 * Licensed under the MIT license.
 */

(function($){
    /**
     * 
     * @class fixed
     * @constructor
     */
    JV.fixed = function(Jnode, cfg) {
        var self = this;
        var defaults = {
            marginTop:0
        }
        this.items = $(Jnode);
        this.cfg = $.extend({}, defaults, cfg); //合并defaults和cfg，不修改defaults
        this.marginTop=this.cfg.marginTop;
        this.originTop=this.items.offset().top;
        this.originStyles={
            position:null,
            top:null,
            visibility:null
        };
        this.init();

    };
  
  JV.fixed.prototype = {
        /**
         * 初始化
         * @param  {dom} Jnode
         * @param  {obj} cfg
         */


      
        setup: function() {
            var self=this;


            // 修正过高的 marginTop
            self.marginTop = self.marginTop <= self.originTop ? self.marginTop : self.originTop;
            // 保存原有的样式
            for (var style in self.originStyles) {
                if (self.originStyles.hasOwnProperty(style)) {
                    self.originStyles[style] = self.items.css(style);
                }
            }

            $(window).scroll(function() {
                self.scrollFn();
            })

        },
        scrollFn: function() {
            var self=this;
            var w = $(window);
            var distance = self.originTop - w.scrollTop();
            var ie6=$.browser.msie && $.browser.version==6;
            // 当距离小于等于预设的值时
            // 将元素设为 fix 状态
            if (distance <= self.marginTop) {
                if (!ie6) {
                    self.items.css({
                        position: "fixed",
                        top: self.marginTop,
                        visibility: "visible"
                    });
                } else {
                    self.items.css({
                        position: "absolute",
                        top: marginTop + w.scrollTop(),
                        visibility: "visible"
                    });

                }

            } else if (distance > self.marginTop) {
                // 恢复原有的样式
                self.items.css(self.originStyles);
            }
        },
        init: function() {
            this.setup();
            this.scrollFn();

        }

  };


 })(jQuery);