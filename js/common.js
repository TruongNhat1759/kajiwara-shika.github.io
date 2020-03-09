// JavaScript Document
$(function() {
    "use strict";
  var obj= {
	  init: function(){
		    this.toTop();
			this.smoothScroll();
			this.iconMenu();
			this.changeSize();
	  },
	  //totop
	  toTop: function(){
		  $("#totop").hide();
		  $(window).scroll(function(){
			  if($(this).scrollTop() > 100){				  
				  $("#totop").fadeIn();
			  }
			  else{
				  $("#totop").fadeOut();				  
			  }
		  });
		  $("#totop a").click(function(){
			 $('body,html').animate({
				scrollTop:0 
			 }, 500);
			 return false;
		  });
	  },
	  //smoothScroll
	  smoothScroll : function(){
			$('a[href^="#"]').click(function () {
				if ($($(this).attr('href')).length) {
					var p = $($(this).attr('href')).offset();
					if($(window).width() > 640){
						$('html,body').animate({
							scrollTop: p.top - 60
						}, 600);
					}else{
						$('html,body').animate({
							scrollTop: p.top - 30
						}, 600);
					}
					$('.menu-icon').removeClass('active');
					$('#gnavi').removeClass('open');
				}
				return false;
			});
			$(window).load(function(){
				var hash1= location.hash;
				var $root = $('html, body');
				if(hash1!==""){  
					var top01 = $(hash1).offset().top;
					if($(window).width() > 640){   
						$root.animate({ scrollTop:top01 - 60 }, 600);
					}else{
						$root.animate({ scrollTop:top01 - 30}, 600);
					}
				}
			});
			
		},
	 //sp gnavi
	 iconMenu : function(){	
		$('.menu-icon').click(function(){
			$(this).toggleClass('active');
			$('#gnavi').toggleClass('open');
			$('.submenu').stop().slideUp();
		});
	},
	changeSize : function(){
		$(window).bind("load resize", function () {
			var sw = $(window).width();
			if (sw > 640) {
				$('.menu-icon').removeClass('active');
				$('#gnavi').removeClass('open');
			}
			else{
				$('.menu-icon').removeClass('active');
				$('#gnavi').removeClass('open');
			}
		});
	}
  };
  
  obj.init();
});


