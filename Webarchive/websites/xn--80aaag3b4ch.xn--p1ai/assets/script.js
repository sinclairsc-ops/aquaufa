$(document).ready(function()
{

	var AllBanners = $('.banner-container-img2 img').toArray();
	var thisbanner = 0;
	var nextbanner = 1;
	
	$('.banner-container-img1').attr('style', "background:#FFF url('"+ $(AllBanners[0]).attr('src') +"');");
	$('.banner-container-img2').attr('style', "background:#FFF url('"+ $(AllBanners[1]).attr('src') +"');");
	
	if($(".banner-container-img1").length>0)
		{
			$(".banner-container-img1").offset({left: ($(".banner-container-img").offset().left), top: ($(".banner-container-img").offset().top)});
			
		}if($(".banner-container-img2").length>0)
		{
			$(".banner-container-img2").offset({left: ($(".banner-container-img").offset().left), top: ($(".banner-container-img").offset().top)});
		}
	
	
	function startrotate(){
	$('.banner-container-img2').fadeOut();
	$('.banner-container-img1').fadeIn();

	if (thisbanner < AllBanners.length-1)
	{
		thisbanner=thisbanner+1;
		
		
	}
	else
	{
		thisbanner=0;
		
	}
	
	
	if (nextbanner < AllBanners.length-1)
	{
		nextbanner=nextbanner+1;
		
		
	}
	else
	{
		nextbanner=0;
		
	}
	
	
	$('.banner-container-img1').attr('style', "background:#FFF url('"+ $(AllBanners[nextbanner]).attr('src') +"');");
	$('.banner-container-img2').attr('style', "background:#FFF url('"+ $(AllBanners[thisbanner]).attr('src') +"');");
	
		
	
	
	$('.banner-container-flaer1').text($(AllBanners[thisbanner]).attr('data-field1'));
	$('.banner-container-flaer2').text($(AllBanners[thisbanner]).attr('data-field2'));
	$('.banner-container-img1').attr('href', $(AllBanners[nextbanner]).attr('data-field3'));
	$('.banner-container-flaer1').attr('href', $(AllBanners[nextbanner]).attr('data-field3'));
	$('.banner-container-flaer2').attr('href', $(AllBanners[nextbanner]).attr('data-field3'));
	
	$('.banner-container-img2').fadeOut();
	$('.banner-container-img1').fadeIn();
	   //Меняем картинку и текст через 10 секунд 
	   setTimeout(startrotate,6000);
	}
	


	
	startrotate();
	
	/* рандомный логотип */
	
	var AllLogos = $('.logo img').toArray();
	var minimum = 0;
	var maximum = ($('.logo img').length -1);
	NewLogo = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	LogoHref = $(AllLogos[NewLogo]).attr('src');
	TitleHref = $(AllLogos[NewLogo]).attr('data-title');
	$('.logo').attr('style','background:url("' + LogoHref + '") no-repeat center center;');
	$('.logo').attr('title', TitleHref);
	/* конец рандомного логотипа  */
	
	/* Города */
	$(".city-choosen").click(function()
		{
			$(".city-choosen-cont").addClass('active');
			$(".city-chose").show();
			$(".city-chose").offset({left: $('.city-choosen-cont').offset().left, top: $('.city-choosen-cont').offset().top + $('.city-choosen-cont').height() +20});
		});
		
	$(".plz-chose").click(function()
		{
			$(".city-choosen-cont").removeClass('active');
			$(".city-chose").hide();
			$(".city-choosen").text($(this).text());
		});

	/* Выравнивание фона слайдера */
if($(".slider-background-wrapper").length>0)
{
	var OriginalWidth = $('.slider-background-wrapper').width()
	var windowwidth = $(window).width();
	if (windowwidth<1203)
	{
		windowwidth = 1203;
	}
	var LeftPosition = windowwidth /2 - OriginalWidth /2;
	$('.slider-background-wrapper').offset({left: LeftPosition, top: $('.slider-background').offset().top -73});
	$('.slider-background-wrapper').width( windowwidth -LeftPosition);
	$(window).resize(function(){
	
		OriginalWidth = $('.slider-background-wrapper').width()
		windowwidth = $(window).width();
		if (windowwidth<1203)
		{
			windowwidth = 1203;
		}
		LeftPosition = windowwidth /2 - OriginalWidth /2;
	
		LeftPosition = windowwidth /2 - OriginalWidth /2;
		$('.slider-background-wrapper').offset({left: LeftPosition , top: $('.slider-background').offset().top -73});
		$('.slider-background-wrapper').width( windowwidth -LeftPosition);
	});
	/* конец выравниванию фона слайдера */
	
	/* слайдер */
	$('#slider1').tinycarousel({ display: 1, intervaltime: 100, duration: 200 });
	
	$('.wraper1150').offset({left: $('.maybe-banner .wraper1050').offset().left -50 , top: $('.maybe-banner .wraper1050').offset().top + 350});
	$(window).resize(function(){
		$('.wraper1150').offset({left: $('.maybe-banner .wraper1050').offset().left -50 , top: $('.maybe-banner .wraper1050').offset().top + 350});
	});
	/* конец слайдера */
}
	
	/*	
		часики на главной
	*/
	if ($('.time-scale').length > 0)
	{
		var DateMin = parseInt($('.date-min').text());
		var DateMax = parseInt($('.date-max').text());
		var CurentServerHour =  parseInt($('.time-scale').attr('data-servertimehour'));
		var CurBlock = 0;
		
		for (i =DateMin; i<DateMax;i++)
		{
		
			if (i==CurentServerHour)
			{
				block = '<div class="time-dots active"></div>';
				CurBlock = i;
				$('.time-scale-m .inline-container').append(block);
			}
			else
			{
				block = '<div class="time-dots"></div>';
				$('.time-scale-m .inline-container').append(block);
			}
			
			
		}

	}
	
	var MoveClock = function()
	{
		
		
	
		var d = new Date();
		var n = d.getMinutes(); 
		if (n < 10)
		{
			$('.time-dots').remove();
			if (CurBlock < DateMax)
			{
				CurBlock = CurBlock+1;
			}
			else
			{
				alert(CurBlock)
				alert(DateMax)
				$('.time-scale').hide();
				$('.working-time-notwork').show();
			}
			
			for (i =DateMin; i<DateMax;i++)
			{
			
				if (i==CurBlock)
				{
					block = '<div class="time-dots active"></div>';
					CurBlock = i;
					$('.time-scale-m .inline-container').append(block);
				}
				else
				{
					block = '<div class="time-dots"></div>';
					$('.time-scale-m .inline-container').append(block);
				}
				
				
			}
			
			
		}

	}
	
	if ($('.time-scale').length > 0)
	{
		intervalID = setInterval(MoveClock, 360000);
	}
	
});

/* закрытие окна городов по клику вне их */
	$(document).click( function(event){
      if(( $(event.target).closest(".city-choosen").length )||($(event.target).closest(".city-chose").length))
        return;

	$('.city-chose').hide();
	$(".city-choosen-cont").removeClass('active');
	
	event.stopPropagation();
    });
	
;