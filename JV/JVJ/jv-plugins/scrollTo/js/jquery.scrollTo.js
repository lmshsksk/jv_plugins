/*
 * scrollTo
 *
 * Copyright (c) 2014 jay
 * Licensed under the MIT license.
 */

(function($){
    /**
     * 
     * @class scrollTo
     * @constructor
     */
    JV.scrollTo = function(Jnode, cfg) {
        var self = this;
        var defaults = {
            trigger: "#scrollBar a",
            triggerIndex: 0,
            speed: 500,
            target:"",
            offsetY:100,
            animateType: "easeInOutExpo",
            marginTop:0,
            scrollCallback:function(){}
        }
        this.items = $(Jnode);
        this.cfg = $.extend({}, defaults, cfg); //合并defaults和cfg，不修改defaults
        this.trigger = this.items,
        this.speed = this.cfg.speed,
        this.animateType = this.cfg.animateType,
        this.prev = $(this.cfg.prev),
        this.next = $(this.cfg.next);        
        this.init();

    };
  
  JV.scrollTo.prototype = {
        /**
         * 初始化
         * @param  {dom} Jnode
         * @param  {obj} cfg
         */
            triggerInit: function() {
                var self=this;
                if(self.target){
                    var ofy=self.cfg.offsetY;                   
                    $("body,html").stop(true, false).animate({
                        scrollTop: self.cfg.offsetY + "px"
                    }, self.speed, self.animateType);
                    return;
                }
                self.trigger.each(function(k, v) {
                    $(v).data("index", k);
                })
                var triggerIndex = self.cfg.triggerIndex;
                this.triggerActive(triggerIndex);
                //this.panelScroll(triggerIndex);
            },
            triggerActive: function(index) {
                var self=this;
                var current = self.trigger.eq(index);
                self.trigger.removeClass("active");
                current.addClass("active");
            },
            getIndex: function() {
                var self=this;
                return self.trigger.filter(".active").data("index");
            },
            triggerEvent: function() {
                var self=this;

                self.trigger.click(function(e) {
                    e.preventDefault();
                    var t = $(this),
                        index = t.data("index");
                    self.triggerActive(index);
                    self.panelScroll(index);

                })

            },
            panelScroll: function(index) {
                var self=this;
                var current = self.trigger.eq(index),
                    currentAnchor = current.attr("href"),
                    oft = $(currentAnchor).offset().top;
                $("body,html").stop(true, false).animate({
                    scrollTop: oft-self.cfg.marginTop + "px"
                }, self.speed, self.animateType,function(){
                    self.cfg.scrollCallback();
                });
            },
            init: function() {
                this.triggerInit();
                this.triggerEvent();
                
            }

  };


 })(jQuery);