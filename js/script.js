$(function(){
 //Effects
 $(".puff_effect").on("click", function(){
     $(".pic1").effect("puff",{
         percent: 200
      }, 2000);

    });

$(".bounce_effect").on("click", function(){
     $(".pic2").effect("bounce",{
     	direction: 'left',
     	distance: 50,
     	times: 7,
     	mode: 'hide'
     }, 2000);
	});

$(".explode_effect").on("click", function(){
     $(".explode").effect("explode",{
     	pieces: 4
     }, 2000,function(){
     	$(this).effect("explode", {
     		pieces: 4,
     		mode: 'show'
     		}, 2000);
     	});
       });
  //Show/Hide
  $(".btn_show").on("click", function(){
      $(".pic3").show("bounce",{
        direction: 'left',
     	distance: 50,
     	times: 7,
    }, 2000);
       });
 	
  $(".btn_hide").on("click", function(){
      $(".pic3").hide("drop",{
        direction: 'left',
   }, 2000);
  });

$(".btn_show1").on("click", function(){
      $(".effect_show").show("explode",{
        pieces: 9,
    }, 2000);
       });
 	
  $(".btn_hide1").on("click", function(){
      $(".effect_show").hide("shake",{
        direction: 'right',
        distance: 50,
     	times: 9,
   }, 2000);
  });
 //Add Class, Remove Class
  $(".ad_class").on("click", function(){
  	$(".div").addClass("anim",2000); 
    });
   $(".rm_class").on("click", function(){
       $(".div").removeClass("anim",2000); 
    });
   //Switch Class
    $(".sw_class").on("click", function(){
       $(".div1").switchClass("div1","anim",2000); 
    });
    //color animate
    $(".btn_anim").on("click", function(){
      $(".animate").animate({
      	"fontSize": "26px",
      	"color": "white",
      	"backgroundColor": "blue",
      	"width": "350px"
      }, 3000);
     });
    //Accordion
    $(".accord").accordion({  
     //active: 1
     active: false,
     collapsible: true,
     heightStyle: "content"
     });
//tabs
$(".tabs").tabs({
   active: 1,
   collapsible: true,
   heightStyle: "auto"
  });
//Menu
$("ul.menu").menu();
//Button
$(".btn-jquery").button();
//Datepicker
$(".datepic").datepicker({
	yearRange: "1950:2018",
	changeYear: true,
	changeMonth: true,
	showAnim: 'explode',
	//showOn: 'button'  календарь появл-ся по кнопке
	showOn: 'both',  //и так, и так
	duration: 'slow',  // появл-ся медленно
	numberOfMonths:[1,3] // показывает сразу по 3 месяца
});
//Slider
  /*$(".slider-jquery").slider({
  	max: 100,
  	min: 10,
  	range: true,
  	values: [10,50] //определяет начальное положение бегунков
  });*/

  $( ".slider-jquery" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( ".slider-jquery" ).slider( "values", 0 ) +
      " - $" + $( ".slider-jquery" ).slider( "values", 1 ) );

    //Dialog
    $(".btn-dial").on("click", function(){
    	$("div.hide").dialog({
    		modal: true, //модальное окно 
    		buttons: {
    			Ok: function(){
    				$(this).dialog("close");
    			}
    		}
    	});
    });
    //Появление формы через время
  /*setTimeout(function(){
  	$("form.hide").dialog({
  		modal: true, 
  	});
   },2000);*/
  //Autocomplete
  let lang = ["HTML","CSS","JavaScript","Java","Python","Ruby","C++","C#","PHP","VisualBasic","Pascal","Algol","Erlang","Scala"];
 $("input.lang").autocomplete({
 	source: lang
 });
 //draggable - можно двигать картинками
 $("img.drag").draggable({
 	helper: 'clone', //перемещает копию картинки
    delay: 300, 
   // opacity: 0.5,
    revert: true,
    zIndex: 1000 
  });
 //Droppable
 $("img.drag1").draggable({
 	revert: "invalid",
 	start: function(event, ui){
 		ui.helper.css('transform','rotate(5deg) scale(1.2)');
 	},
 	stop: function(event, ui){
 		ui.helper.css('transform','rotate(0deg) scale(1)');
 	},
 	zIndex:200
 });
 $(".trash").droppable({
 	activeClass: 'highlight',
 	drop: function(event, ui){
 		ui.helper.hide('explode');
 		$(this).attr('src','images/trashcan-full-icon.png');
 	}
 });
 //Sortable - можно переставлять пункты списка
 $(".sort1").sortable({
 	connectWith: '.sort2',  //перетаскивание из списка в список
 	helper: 'clone',
 	revert: true, //возвращает назад
   });
 $(".sort2").sortable({
 	connectWith: '.sort1'
 });
 //Resizable - изменение размера, появляется внизу маркер, за кот нужно тянуть
 $(".resize").resizable({
  //maxWidth: 300,
  //maxHeight: 400
  animate: true,
  animationDuration: 'slow'
  });
 //colorbox
 $("a.gal").colorbox({
 	rel: 'gal1',
 	speed: 700,
 	width: 500,
 	height: 500,
 	innerWidth: 350,
 	innerHeight: 350,
 	opacity: 0.5,
 	slideshow: true, // установка слайд-шоу
 	slideshowSpeed: 2000, // скорость перелистывания
 	slideshowAuto: false, // автозапуск слайд-шоу
 	current: "Малюнок {current} з {total}",
    slideshowStart: "Запуск слайд-шоу",
    slideshowStop: "Зупинка слайд-шоу"
  });
 $("a.coltext").colorbox({
 	inline: true,
 	width: "50%"
 });
 //inline youtube
 $("a.colyoutube").colorbox({
 	iframe: true,
 	width: 550,
 	height: 550
 });
 //superfish menu
 $("ul.sf-menu").superfish({
   delay: 1000,
   speed: 'slow'
  });
 //BxSlider
 $(".slider").bxSlider({
 	minSlides: 2,
 	maxSlides: 3,
 	moveSlides: 1,
 	slideMargin: 20,
 	slideWidth: 300,
 	captions: true

 });
});