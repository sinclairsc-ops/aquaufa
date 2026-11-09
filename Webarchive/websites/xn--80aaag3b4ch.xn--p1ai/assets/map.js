function str_replace(search, replace, subject)
{
   return subject.split(search).join(replace);
}

function showNfo($obj)
{
    clearTimeout($timeOut);
	
    //   get class
	$class = $($obj).attr('class');
	
    //	 change bg
	$bg    = $('div.'+$class).css('background-image');
	$bg    = str_replace('.png','-h.png',$bg);
	$('div.'+$class).css('background-image',$bg);
	
	//   hide other tooltip
	$('.map-nfo').hide();
	
	//	 show tooltip
	$('.n'+$class).addClass('active').show();
	
}

function hideNfo($obj)
{   
    //   get class
	$class = $($obj).attr('class');
	
    //	 change bg
	$bg    = $('div.'+$class).css('background-image');
	$bg    = str_replace('-h.png','.png',$bg);
	$('div.'+$class).css('background-image',$bg);
	
	//   hide tooltip
	hideNfo2();
}

function hideNfo2()
{   
    //   hide tooltip
	$timeOut = window.setTimeout(function(){
	    $('.map-nfo').each(function(i,el){
		    if($(el).hasClass('active')){
			    $(el).removeClass('active').fadeOut();
			}
		});
	},3000);
}

var $timeOut;
var $docWidthNormal;

function getDocWidth(){
   return $(document).width();
}

function setDocWidth(newWidth){
   $(document).width(newWidth);
}

function getMapWidth(){
   return $('#map').width();
}


function scrollLeft(){
   $left = (getMapWidth() - $docWidthNormal) / 2;
   $('html, body').animate({scrollLeft:$left});
}

$(function(){

    $docWidthNormal = getDocWidth();
	
    // show map
	$map = $('#interactive-map');
	$('.top-icon3').click(function(){
	    // scroll window to center if window w < 1920
		$mapWidth = getMapWidth();
		
		if($mapWidth > $docWidthNormal){
		   setDocWidth($mapWidth);
		   scrollLeft();
		}
		
		$('#map-interactive').fadeIn();
		$('.tophead-top2 div').fadeIn();
	});
	
	$('.map-nfo a').click(function(){
	    
		//   hide all other layers
		$('.map-nfo-wrapper').hide();
		
		//   get class of layer to show
		$class = $(this).attr('class');
		
		$('.map-nfo-wrapper').each(function(i,el){
			if($(el).hasClass('i'+$class)){
			    $(el).fadeIn(400,function(){
				   scrollLeft();
				});
			}
		});
	});
	
	//hide map
	$('.map-close').click(function(){
	    $('#map-interactive').fadeOut();
		$('.tophead-top2 div').fadeOut();
		$('.map-nfo-wrapper').fadeOut();
		$('html, body').animate({width:$docWidth});
	});
	
	$('.map-nfo-wrapper .close').click(function(){
	    $(this).parents('.map-nfo-wrapper').fadeOut(400,function(){
		   scrollLeft();
		});
	});
	
	$('area').mouseenter(function(){
	    showNfo(this);
	}).mouseout(function(){
	    hideNfo(this);
	});
	
	$('.map-nfo').mouseenter(function(){
	    clearTimeout($timeOut);
	}).mouseout(function(){
	    hideNfo2();
	});

	
	// jcarousel 
	$('.jcarousel ul').width($('.jcarousel li').width() * $('.jcarousel li').length);
	
	$('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });
			
		$('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination({
				'perPage': 1,
				'item': function(page, carouselItems) {
						return '<a href="#' + page + '"></a>';
						}
			});
});

