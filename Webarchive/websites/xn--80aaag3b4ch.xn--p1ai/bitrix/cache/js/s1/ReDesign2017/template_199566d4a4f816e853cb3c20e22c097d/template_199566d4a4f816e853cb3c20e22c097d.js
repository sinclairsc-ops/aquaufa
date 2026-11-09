
; /* Start:"a:4:{s:4:"full";s:105:"/bitrix/templates/ReDesign2017/components/bitrix/menu/horizontal_multilevel_resp/script.js?15053143214788";s:6:"source";s:90:"/bitrix/templates/ReDesign2017/components/bitrix/menu/horizontal_multilevel_resp/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
var jshover = function()
{
	var menuDiv = document.getElementById("horizontal-multilevel-menu")
	if (!menuDiv)
		return;

	var sfEls = menuDiv.getElementsByTagName("li");
	for (var i=0; i<sfEls.length; i++)
	{
		sfEls[i].onmouseover=function()
		{
			this.className+=" jshover";
		}
		sfEls[i].onmouseout=function()
		{
			this.className=this.className.replace(new RegExp(" jshover\\b"), "");
		}
	}
}
if (window.attachEvent)
	window.attachEvent("onload", jshover);
// вверх
$(function() {

	$(window).scroll(function() {

		if($(this).scrollTop() > 101) {

			$('#intop').fadeIn();
            if ($('.blockb').hasClass()==false) $('.blockb').addClass('fixed2');
			}
		else {
			$('#intop').fadeOut();
            $('.blockb').removeClass('fixed2');
			}

		});

		$('#intop').click(function() {
			$('body,html').animate({scrollTop:0},600);

		});

});
$(document).ready(function(){
$('.spoiler_button').click(function(){
if ($(this).parent().children('div.spoiler_open').css("display")=="none") {
$("div[class^='spoiler_open']").hide('normal');
$(this).parent().children('div.spoiler_open').toggle('normal');
}
else $("div[class^='spoiler_open']").hide('normal');
  return false;
});
});
(function($){var pushy=$('.pushy'),body=$('body'),container=$('#container'),push=$('.push'),pushyLeft='pushy-left',pushyOpenLeft='pushy-open-left',pushyOpenRight='pushy-open-right',siteOverlay=$('.site-overlay'),menuBtn=$('.menu-btn, .pushy-link'),menuBtnFocus=$('.menu-btn'),menuLinkFocus=$(pushy.data('focus')),menuSpeed=200,menuWidth=pushy.width()+'px',submenuClass='.pushy-submenu',submenuOpenClass='pushy-submenu-open',submenuClosedClass='pushy-submenu-closed',html=$('html'),freez='freez',submenu=$(submenuClass);$(document).keyup(function(e){if(e.keyCode==27){if(body.hasClass(pushyOpenLeft)||body.hasClass(pushyOpenRight)){if(cssTransforms3d){closePushy();}else{closePushyFallback();opened=false;}if(menuBtnFocus){menuBtnFocus.focus();}}}});function togglePushy(){if(pushy.hasClass(pushyLeft)){body.toggleClass(pushyOpenLeft);html.toggleClass(freez);}else{body.toggleClass(pushyOpenRight);html.toggleClass(freez);}if(menuLinkFocus){pushy.one('transitionend',function(){menuLinkFocus.focus();});}}function closePushy(){if(pushy.hasClass(pushyLeft)){body.removeClass(pushyOpenLeft);html.removeClass(freez);}else{body.removeClass(pushyOpenRight);html.removeClass(freez);}}function openPushyFallback(){if(pushy.hasClass(pushyLeft)){body.addClass(pushyOpenLeft);pushy.animate({left:"0px"},menuSpeed);container.animate({left:menuWidth},menuSpeed);push.animate({left:menuWidth},menuSpeed);}else{body.addClass(pushyOpenRight);pushy.animate({right:'0px'},menuSpeed);container.animate({right:menuWidth},menuSpeed);push.animate({right:menuWidth},menuSpeed);}if(menuLinkFocus){menuLinkFocus.focus();}}function closePushyFallback(){if(pushy.hasClass(pushyLeft)){body.removeClass(pushyOpenLeft);pushy.animate({left:"-"+menuWidth},menuSpeed);container.animate({left:"0px"},menuSpeed);push.animate({left:"0px"},menuSpeed);}else{body.removeClass(pushyOpenRight);pushy.animate({right:"-"+menuWidth},menuSpeed);container.animate({right:"0px"},menuSpeed);push.animate({right:"0px"},menuSpeed);}}function toggleSubmenu(){$(submenuClass).addClass(submenuClosedClass);$(submenuClass).on('click',function(){var selected=$(this);if(selected.hasClass(submenuClosedClass)){$(submenuClass).addClass(submenuClosedClass).removeClass(submenuOpenClass);selected.removeClass(submenuClosedClass).addClass(submenuOpenClass);}else{selected.addClass(submenuClosedClass).removeClass(submenuOpenClass);}});}var cssTransforms3d=(function csstransforms3d(){var el=document.createElement('p'),supported=false,transforms={'webkitTransform':'-webkit-transform','OTransform':'-o-transform','msTransform':'-ms-transform','MozTransform':'-moz-transform','transform':'transform'};if(document.body!==null){document.body.insertBefore(el,null);for(var t in transforms){if(el.style[t]!==undefined){el.style[t]='translate3d(1px,1px,1px)';supported=window.getComputedStyle(el).getPropertyValue(transforms[t]);}}document.body.removeChild(el);return(supported!==undefined&&supported.length>0&&supported!=="none");}else{return false;}})();if(cssTransforms3d){toggleSubmenu();menuBtn.on('click',function(){togglePushy();});siteOverlay.on('click',function(){togglePushy();});}else{body.addClass('no-csstransforms3d');if(pushy.hasClass(pushyLeft)){pushy.css({left:"-"+menuWidth});}else{pushy.css({right:"-"+menuWidth});}container.css({"overflow-x":"hidden"});var opened=false;toggleSubmenu();menuBtn.on('click',function(){if(opened){closePushyFallback();opened=false;}else{openPushyFallback();opened=true;}});siteOverlay.on('click',function(){if(opened){closePushyFallback();opened=false;}else{openPushyFallback();opened=true;}});}}(jQuery));

/* End */
;; /* /bitrix/templates/ReDesign2017/components/bitrix/menu/horizontal_multilevel_resp/script.js?15053143214788*/
