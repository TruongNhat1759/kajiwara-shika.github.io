// JavaScript Document
$(function(){
"use strict";
 var ojbect= {
	 init : function(){
		this.idxSilder();
		// this.idxTab();
		this.idxOpen();
		this.idxOvernote();
	 },
	 	idxSilder : function(){
	 		$('.idx-silder').slick({
	 			autoplay: true,
	 			dots: true,
	 			arrows: false,
	 			speed: 1000,
	 		});
	 	},
	 	// idxTab : function(){
	 	// 	$('.b01-list-cate li').click(function(){
			// 	var tab_id = $(this).attr('data-tab');

			// 	$('.b01-list-cate li').removeClass('current');
			// 	$('.tab-content').removeClass('current');

			// 	$(this).addClass('current');
			// 	$("#"+tab_id).addClass('current');
			// })
	 	// },
	 	idxOpen : function(){
      new WOW().init();
      $(window).bind("load resize", function () {
        $('#idx-opening').click(function(){ 
          $(this).removeClass('show');
        })
      });
      if (sessionStorage.num) {
        $('#idx-opening').removeClass('show');
      } else {
        $('#idx-opening').addClass('show');
        sessionStorage.num = 1;
      }
    },
	 	idxOvernote : function(){
	 		$.ajax({
			'url' : 'news/_custom/?limit=3',
			'dataType' : 'jsonp',
			'success' : function(json){
				$.each(json.data, function(i,val){
					var $li_ind = $('<li/>').html(
					'<a href="news/' + val.url + '"><span class="cate-name field'+ val.field_id+'">' + val.field_name + '</span><div class="txt">' + val.title + '</div><span class="date">' + val.date.substr(0,4) + '.' + val.date.substr(5,2) + '.' + val.date.substr(8,2) + '</span></a>'
					);
					$li_ind.appendTo('#tab01 .item');

				});
			} 
			});
	 	}
	 };
	 ojbect.init();
});