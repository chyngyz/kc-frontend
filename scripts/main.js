!function(e){e(document).ready(function(){e("#menu-trigger").click(function(t){t.preventDefault(),e("#main-menu").toggleClass("show")}),e("#topmenu-trigger").click(function(t){t.preventDefault(),e("#top-menu").toggleClass("show")}),e("#hero-slider").owlCarousel({loop:!0,autoplay:!0,autoplayHoverPause:!0,fluidSpeed:600,autoplaySpeed:600,dotsSpeed:600,dragEndSpeed:60,slideSpeed:300,paginationSpeed:400,singleItem:!0,autoPlay:!0,stopOnHover:!1,autoHeight:!0,transitionStyle:"fade"}),e("#panel-slider").owlCarousel({loop:!0,autoplay:!0,autoplayHoverPause:!0,fluidSpeed:600,autoplaySpeed:600,dotsSpeed:600,dragEndSpeed:60,slideSpeed:300,paginationSpeed:400,autoPlay:!0,stopOnHover:!1,autoHeight:!0,transitionStyle:"fade",autoHeight:!0,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1],navigation:!0,navigationText:["prev","next"],rewindNav:!0,pagination:!1}),e("#testimonials").owlCarousel({loop:!0,autoplay:!0,autoplayHoverPause:!0,fluidSpeed:600,autoplaySpeed:600,dotsSpeed:600,dragEndSpeed:60,slideSpeed:300,paginationSpeed:400,autoPlay:!0,stopOnHover:!1,singleItem:!0,autoHeight:!0,navigation:!0,navigationText:["prev","next"],rewindNav:!0,pagination:!1}),e("#kc-tour-hero-slider").owlCarousel({loop:!0,autoplay:!0,autoplayHoverPause:!0,fluidSpeed:600,autoplaySpeed:600,dotsSpeed:600,dragEndSpeed:60,slideSpeed:300,paginationSpeed:400,autoPlay:!0,stopOnHover:!1,singleItem:!0,navigation:!0,navigationText:["prev","next"],rewindNav:!0,pagination:!1}),e(".marquee").marquee({allowCss3Support:!0,css3easing:"linear",delayBeforeStart:0,direction:"left",duplicated:!1,duration:15e3,gap:20,pauseOnCycle:!1,pauseOnHover:!0}),e("#goto-top").on("click",function(){e("html, body").animate({scrollTop:0},"slow")}),e(window).on("scroll",function(){e(window).scrollTop()>200?e("#fixed-contacts").addClass("shown"):e(window).scrollTop()<200&&e("#fixed-contacts").removeClass("shown")}),e("#order-call-num").mask("+996 (###) ##-##-##"),e("#popular-tabs a,#popular-edu-tabs a, #inbound-tours-tabs a ").click(function(t){t.preventDefault(),e(this).siblings().removeClass("active"),e(this).addClass("active").tab("show")}),e(".btn-radio").click(function(){var t="#"+e(this).data("target");e(t).prop("checked",!0),e(this).siblings().removeClass("active"),e(this).addClass("active")}),e(".checkbox label").click(function(){e(this).siblings("input").prop("checked",!e(this).siblings("input").prop("checked"))}),e(".counter-inc").click(function(){var t=e(this).siblings("input.form-control"),a=e(t).val();e(t).mask("#"),e(t).val(+a+1)}),e(".counter-dec").click(function(){var t=e(this).siblings("input.form-control"),a=e(t).val();e(t).mask("#"),0==a||e(t).val(+a-1)});var t=e("#from, #to").datepicker({defaultDate:"+1w",changeMonth:!0,numberOfMonths:1,onSelect:function(a){var i="from"==this.id?"minDate":"maxDate",n=e(this).data("datepicker"),o=e.datepicker.parseDate(n.settings.dateFormat||e.datepicker._defaults.dateFormat,a,n.settings);t.not(this).datepicker("option",i,o)}});e("#booking-form-slider").slider({range:!0,min:15,max:3600,values:[75,2e3],step:20,slide:function(t,a){e("#range-start-amount").val("$"+a.values[0]),e("#range-end-amount").val("$"+a.values[1])}}),e("#range-start-amount").val("$"+e("#booking-form-slider").slider("values",0)),e("#range-end-amount").val("$"+e("#booking-form-slider").slider("values",1))})}(jQuery),function(e){e.fn.marquee=function(t){return this.each(function(){var a,i,n,o,r,s=e.extend({},e.fn.marquee.defaults,t),d=e(this),u=3,l="animation-play-state",p=!1,c=function(e,t,a){for(var i=["webkit","moz","MS","o",""],n=0;n<i.length;n++)i[n]||(t=t.toLowerCase()),e.addEventListener(i[n]+t,a,!1)},f=function(e){var t=[];for(var a in e)e.hasOwnProperty(a)&&t.push(a+":"+e[a]);return t.push(),"{"+t.join(",")+"}"},g=function(){d.timer=setTimeout(D,s.delayBeforeStart)},m={pause:function(){p&&s.allowCss3Support?a.css(l,"paused"):e.fn.pause&&a.pause(),d.data("runningStatus","paused"),d.trigger("paused")},resume:function(){p&&s.allowCss3Support?a.css(l,"running"):e.fn.resume&&a.resume(),d.data("runningStatus","resumed"),d.trigger("resumed")},toggle:function(){m["resumed"==d.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(d.timer),d.find("*").andSelf().unbind(),d.html(d.find(".js-marquee:first").html())}};if("string"==typeof t)return void(e.isFunction(m[t])&&(a||(a=d.find(".js-marquee-wrapper")),d.data("css3AnimationIsSupported")===!0&&(p=!0),m[t]()));var v;e.each(s,function(e,t){if(v=d.attr("data-"+e),"undefined"!=typeof v){switch(v){case"true":v=!0;break;case"false":v=!1}s[e]=v}}),s.duration=s.speed||s.duration,o="up"==s.direction||"down"==s.direction,s.gap=s.duplicated?parseInt(s.gap):0,d.wrapInner('<div class="js-marquee"></div>');var h=d.find(".js-marquee").css({"margin-right":s.gap,"float":"left"});if(s.duplicated&&h.clone(!0).appendTo(d),d.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),a=d.find(".js-marquee-wrapper"),o){var S=d.height();a.removeAttr("style"),d.height(S),d.find(".js-marquee").css({"float":"none","margin-bottom":s.gap,"margin-right":0}),s.duplicated&&d.find(".js-marquee:last").css({"margin-bottom":0});var y=d.find(".js-marquee:first").height()+s.gap;s.duration=(parseInt(y,10)+parseInt(S,10))/parseInt(S,10)*s.duration}else r=d.find(".js-marquee:first").width()+s.gap,i=d.width(),s.duration=(parseInt(r,10)+parseInt(i,10))/parseInt(i,10)*s.duration;if(s.duplicated&&(s.duration=s.duration/2),s.allowCss3Support){var w=document.body||document.createElement("div"),b="marqueeAnimation-"+Math.floor(1e7*Math.random()),k="Webkit Moz O ms Khtml".split(" "),x="animation",C="",q="";if(w.style.animation&&(q="@keyframes "+b+" ",p=!0),p===!1)for(var H=0;H<k.length;H++)if(void 0!==w.style[k[H]+"AnimationName"]){var I="-"+k[H].toLowerCase()+"-";x=I+x,l=I+l,q="@"+I+"keyframes "+b+" ",p=!0;break}p&&(C=b+" "+s.duration/1e3+"s "+s.delayBeforeStart/1e3+"s infinite "+s.css3easing,d.data("css3AnimationIsSupported",!0))}var j=function(){a.css("margin-top","up"==s.direction?S+"px":"-"+y+"px")},O=function(){a.css("margin-left","left"==s.direction?i+"px":"-"+r+"px")};s.duplicated?(o?a.css("margin-top","up"==s.direction?S+"px":"-"+(2*y-s.gap)+"px"):a.css("margin-left","left"==s.direction?i+"px":"-"+(2*r-s.gap)+"px"),u=1):o?j():O();var D=function(){if(s.duplicated&&(1===u?(s._originalDuration=s.duration,o?s.duration="up"==s.direction?s.duration+S/(y/s.duration):2*s.duration:s.duration="left"==s.direction?s.duration+i/(r/s.duration):2*s.duration,C&&(C=b+" "+s.duration/1e3+"s "+s.delayBeforeStart/1e3+"s "+s.css3easing),u++):2===u&&(s.duration=s._originalDuration,C&&(b+="0",q=e.trim(q)+"0 ",C=b+" "+s.duration/1e3+"s 0s infinite "+s.css3easing),u++)),o?s.duplicated?(u>2&&a.css("margin-top","up"==s.direction?0:"-"+y+"px"),n={"margin-top":"up"==s.direction?"-"+y+"px":0}):(j(),n={"margin-top":"up"==s.direction?"-"+a.height()+"px":S+"px"}):s.duplicated?(u>2&&a.css("margin-left","left"==s.direction?0:"-"+r+"px"),n={"margin-left":"left"==s.direction?"-"+r+"px":0}):(O(),n={"margin-left":"left"==s.direction?"-"+r+"px":i+"px"}),d.trigger("beforeStarting"),p){a.css(x,C);var t=q+" { 100%  "+f(n)+"}",l=e("style");0!==l.length?l.filter(":last").append(t):e("head").append("<style>"+t+"</style>"),c(a[0],"AnimationIteration",function(){d.trigger("finished")}),c(a[0],"AnimationEnd",function(){D(),d.trigger("finished")})}else a.animate(n,s.duration,s.easing,function(){d.trigger("finished"),s.pauseOnCycle?g():D()});d.data("runningStatus","resumed")};d.bind("pause",m.pause),d.bind("resume",m.resume),s.pauseOnHover&&d.bind("mouseenter mouseleave",m.toggle),p&&s.allowCss3Support?D():g()})},e.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,gap:20,pauseOnCycle:!1,pauseOnHover:!1}}(jQuery);