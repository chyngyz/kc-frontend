!function(e){iFrameResize({log:!0,heightCalculationMethod:"documentElementScroll",resizedCallback:function(e){console.log(e.iframe.id,e.height,e.width,e.type)}}),e(document).ready(function(){e("#menu-trigger").click(function(a){a.preventDefault(),e("#main-menu").toggleClass("show")}),e("#topmenu-trigger").click(function(a){a.preventDefault(),e("#top-menu").toggleClass("show")}),e("#hero-slider").owlCarousel({loop:!0,autoplay:!0,autoplayHoverPause:!0,fluidSpeed:600,autoplaySpeed:600,dotsSpeed:600,dragEndSpeed:60,slideSpeed:300,paginationSpeed:400,singleItem:!0,autoPlay:!0,stopOnHover:!1,autoHeight:!0,transitionStyle:"fade"}),e("#panel-slider").owlCarousel({loop:!0,autoplay:!0,autoplayHoverPause:!0,fluidSpeed:600,autoplaySpeed:600,dotsSpeed:600,dragEndSpeed:60,slideSpeed:300,paginationSpeed:400,autoPlay:!0,stopOnHover:!1,autoHeight:!0,transitionStyle:"fade",autoHeight:!0,items:3,itemsDesktop:[1e3,3],itemsDesktopSmall:[979,3],itemsTablet:[768,2],itemsMobile:[479,1],navigation:!0,navigationText:["prev","next"],rewindNav:!0,pagination:!1}),e("#testimonials").owlCarousel({loop:!0,autoplay:!0,autoplayHoverPause:!0,fluidSpeed:600,autoplaySpeed:600,dotsSpeed:600,dragEndSpeed:60,slideSpeed:300,paginationSpeed:400,autoPlay:!0,stopOnHover:!1,singleItem:!0,autoHeight:!0,navigation:!0,navigationText:["prev","next"],rewindNav:!0,pagination:!1}),e("#kc-tour-hero-slider").owlCarousel({loop:!0,autoplay:!0,autoplayHoverPause:!0,fluidSpeed:600,autoplaySpeed:600,dotsSpeed:600,dragEndSpeed:60,slideSpeed:300,paginationSpeed:400,autoPlay:!0,stopOnHover:!1,singleItem:!0,navigation:!0,navigationText:["prev","next"],rewindNav:!0,pagination:!1}),e(".marquee").marquee({allowCss3Support:!0,css3easing:"linear",delayBeforeStart:0,direction:"left",duplicated:!1,duration:15e3,gap:20,pauseOnCycle:!1,pauseOnHover:!0}),e("#goto-top").on("click",function(){e("html, body").animate({scrollTop:0},"slow")}),e(window).on("scroll",function(){e(window).scrollTop()>200?e("#fixed-contacts").addClass("shown"):e(window).scrollTop()<200&&e("#fixed-contacts").removeClass("shown")}),e("#order-call-num, #order-call-num-mobile").mask("+996 (###) ##-##-##"),e("#masked-number").mask("0 (###) ##-##-##"),e("#popular-tabs a,#popular-edu-tabs a,#inbound-tours-tabs a,#job-accounts-tabs a ").click(function(a){a.preventDefault(),e(this).siblings().removeClass("active"),e(this).addClass("active").tab("show")}),e(".btn-radio").click(function(){var a="#"+e(this).data("target");e(a).prop("checked",!0),e(this).siblings().removeClass("active"),e(this).addClass("active")}),e(".checkbox label, .checkbox-type-radio label, .radio-custom label").click(function(){e(this).siblings("input").prop("checked",!e(this).siblings("input").prop("checked"))}),e(".counter-inc").click(function(){var a=e(this).siblings("input.form-control"),t=e(a).val();e(a).mask("#"),e(a).val(+t+1)}),e(".counter-dec").click(function(){var a=e(this).siblings("input.form-control"),t=e(a).val();e(a).mask("#"),0==t||e(a).val(+t-1)});var a=e("#from, #to").datepicker({defaultDate:"+1w",changeMonth:!0,numberOfMonths:1,onSelect:function(t){console.log("assd");var i="from"==this.id?"minDate":"maxDate",n=e(this).data("datepicker"),o=e.datepicker.parseDate(n.settings.dateFormat||e.datepicker._defaults.dateFormat,t,n.settings);a.not(this).datepicker("option",i,o)}});e("#booking-form-slider").slider({range:!0,min:15,max:3600,values:[75,2e3],step:20,slide:function(a,t){e("#range-start-amount").val("$"+t.values[0]),e("#range-end-amount").val("$"+t.values[1])}}),e("#range-start-amount").val("$"+e("#booking-form-slider").slider("values",0)),e("#range-end-amount").val("$"+e("#booking-form-slider").slider("values",1)),e("#search-days-slider").slider({range:!0,min:1,max:90,values:[10,30],step:1,slide:function(a,t){e("#search-days-start-amount").val(t.values[0]),e("#search-days-end-amount").val(t.values[1])}}),e("#search-days-start-amount").val(e("#search-days-slider").slider("values",0)),e("#search-days-end-amount").val(e("#search-days-slider").slider("values",1)),e("#hotel-gallery").lightGallery({download:"false"}),e("#blurred-image").blurjs({source:"#kc-news--hero",radius:30,overlay:"rgba(255, 255, 255, .2)",offset:{x:50,y:50}}),e(".kc-job-accounts--login, .kc-apply-to-job").magnificPopup({type:"inline",showCloseBtn:!1,midClick:!0}),e(".kc-vacancy-login-popup--close").click(function(){e.magnificPopup.close()}),e(".show-hide").click(function(){var a=e(".showHidePassword"),t=e(a).prop("type");"password"==t?e(a).prop("type","text"):e(a).prop("type","password")})})}(jQuery),function(e){e.fn.marquee=function(a){return this.each(function(){var t,i,n,o,s,r=e.extend({},e.fn.marquee.defaults,a),d=e(this),l=3,u="animation-play-state",p=!1,c=function(e,a,t){for(var i=["webkit","moz","MS","o",""],n=0;n<i.length;n++)i[n]||(a=a.toLowerCase()),e.addEventListener(i[n]+a,t,!1)},m=function(e){var a=[];for(var t in e)e.hasOwnProperty(t)&&a.push(t+":"+e[t]);return a.push(),"{"+a.join(",")+"}"},g=function(){d.timer=setTimeout(P,r.delayBeforeStart)},f={pause:function(){p&&r.allowCss3Support?t.css(u,"paused"):e.fn.pause&&t.pause(),d.data("runningStatus","paused"),d.trigger("paused")},resume:function(){p&&r.allowCss3Support?t.css(u,"running"):e.fn.resume&&t.resume(),d.data("runningStatus","resumed"),d.trigger("resumed")},toggle:function(){f["resumed"==d.data("runningStatus")?"pause":"resume"]()},destroy:function(){clearTimeout(d.timer),d.find("*").andSelf().unbind(),d.html(d.find(".js-marquee:first").html())}};if("string"==typeof a)return void(e.isFunction(f[a])&&(t||(t=d.find(".js-marquee-wrapper")),d.data("css3AnimationIsSupported")===!0&&(p=!0),f[a]()));var v;e.each(r,function(e,a){if(v=d.attr("data-"+e),"undefined"!=typeof v){switch(v){case"true":v=!0;break;case"false":v=!1}r[e]=v}}),r.duration=r.speed||r.duration,o="up"==r.direction||"down"==r.direction,r.gap=r.duplicated?parseInt(r.gap):0,d.wrapInner('<div class="js-marquee"></div>');var h=d.find(".js-marquee").css({"margin-right":r.gap,"float":"left"});if(r.duplicated&&h.clone(!0).appendTo(d),d.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),t=d.find(".js-marquee-wrapper"),o){var y=d.height();t.removeAttr("style"),d.height(y),d.find(".js-marquee").css({"float":"none","margin-bottom":r.gap,"margin-right":0}),r.duplicated&&d.find(".js-marquee:last").css({"margin-bottom":0});var w=d.find(".js-marquee:first").height()+r.gap;r.duration=(parseInt(w,10)+parseInt(y,10))/parseInt(y,10)*r.duration}else s=d.find(".js-marquee:first").width()+r.gap,i=d.width(),r.duration=(parseInt(s,10)+parseInt(i,10))/parseInt(i,10)*r.duration;if(r.duplicated&&(r.duration=r.duration/2),r.allowCss3Support){var S=document.body||document.createElement("div"),b="marqueeAnimation-"+Math.floor(1e7*Math.random()),k="Webkit Moz O ms Khtml".split(" "),x="animation",C="",j="";if(S.style.animation&&(j="@keyframes "+b+" ",p=!0),p===!1)for(var q=0;q<k.length;q++)if(void 0!==S.style[k[q]+"AnimationName"]){var H="-"+k[q].toLowerCase()+"-";x=H+x,u=H+u,j="@"+H+"keyframes "+b+" ",p=!0;break}p&&(C=b+" "+r.duration/1e3+"s "+r.delayBeforeStart/1e3+"s infinite "+r.css3easing,d.data("css3AnimationIsSupported",!0))}var I=function(){t.css("margin-top","up"==r.direction?y+"px":"-"+w+"px")},O=function(){t.css("margin-left","left"==r.direction?i+"px":"-"+s+"px")};r.duplicated?(o?t.css("margin-top","up"==r.direction?y+"px":"-"+(2*w-r.gap)+"px"):t.css("margin-left","left"==r.direction?i+"px":"-"+(2*s-r.gap)+"px"),l=1):o?I():O();var P=function(){if(r.duplicated&&(1===l?(r._originalDuration=r.duration,o?r.duration="up"==r.direction?r.duration+y/(w/r.duration):2*r.duration:r.duration="left"==r.direction?r.duration+i/(s/r.duration):2*r.duration,C&&(C=b+" "+r.duration/1e3+"s "+r.delayBeforeStart/1e3+"s "+r.css3easing),l++):2===l&&(r.duration=r._originalDuration,C&&(b+="0",j=e.trim(j)+"0 ",C=b+" "+r.duration/1e3+"s 0s infinite "+r.css3easing),l++)),o?r.duplicated?(l>2&&t.css("margin-top","up"==r.direction?0:"-"+w+"px"),n={"margin-top":"up"==r.direction?"-"+w+"px":0}):(I(),n={"margin-top":"up"==r.direction?"-"+t.height()+"px":y+"px"}):r.duplicated?(l>2&&t.css("margin-left","left"==r.direction?0:"-"+s+"px"),n={"margin-left":"left"==r.direction?"-"+s+"px":0}):(O(),n={"margin-left":"left"==r.direction?"-"+s+"px":i+"px"}),d.trigger("beforeStarting"),p){t.css(x,C);var a=j+" { 100%  "+m(n)+"}",u=e("style");0!==u.length?u.filter(":last").append(a):e("head").append("<style>"+a+"</style>"),c(t[0],"AnimationIteration",function(){d.trigger("finished")}),c(t[0],"AnimationEnd",function(){P(),d.trigger("finished")})}else t.animate(n,r.duration,r.easing,function(){d.trigger("finished"),r.pauseOnCycle?g():P()});d.data("runningStatus","resumed")};d.bind("pause",f.pause),d.bind("resume",f.resume),r.pauseOnHover&&d.bind("mouseenter mouseleave",f.toggle),p&&r.allowCss3Support?P():g()})},e.fn.marquee.defaults={allowCss3Support:!0,css3easing:"linear",easing:"linear",delayBeforeStart:1e3,direction:"left",duplicated:!1,duration:5e3,gap:20,pauseOnCycle:!1,pauseOnHover:!1}}(jQuery);