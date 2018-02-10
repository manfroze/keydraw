var keyboards = 21;
var cell = [];
var play = 0;

	/* ADD KEYBOARDS TO CANVAS */

	for (var i = 0; i < keyboards; i++) {

		$('#canvas').append('<div class="keyboard keyboard' + i + '"></div>');
	}


	/* KEYS AND VALUES */

	var keys = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 90, 88, 67, 86, 66, 78, 77, 188, 190, 189]
	var keyvalues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "&ograve;", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-"]


        var z = 0;
	for (var j = 0; j < keyboards; j++) {
	for (var i = 0; i < keys.length; i++) {
		$('.keyboard'+j).append('<div class="key show key-' + keys[i] + ' cell-' + z +'"><span>'+ keyvalues[i] +'</span></div>');
		cell[z]=1;
		if (keys[i]==48||keys[i]==80||keys[i]==186){z+=21;} else {z++;}
	} //keyloop
	z = 0;
	while (cell[z]==1) {z++;}
	} //keybloop

	$('.key-48, .key-80, .key-186').after('<br/>');

	/* TOGGLE WHITE ON PRESS */

	$(document).keydown(function(event){

		for (var i = 0; i < keys.length; i++) {

			if ( event.which == keys[i] ) $('.active .key-'+keys[i]).toggleClass('on');
		}

	});

	/* ACTIVE KEYBOARD */

	var activeKeyboard = 0;
	$('.keyboard' + activeKeyboard).addClass('active');

$(document).keydown(function(event){
    //back shift
	if ( event.which == 16 ) {

		if (activeKeyboard > 0) {
		activeKeyboard--; } else { activeKeyboard = 20; }

		$('.keyboard').removeClass('active');
		$('.keyboard' + activeKeyboard).addClass('active');

	}
    //fwd ctrl
	if ( event.which == 17 ) {
	
		if (activeKeyboard < keyboards-1) {
		activeKeyboard++; } else { activeKeyboard = 0 }

		$('.keyboard').removeClass('active');
		$('.keyboard' + activeKeyboard).addClass('active');

	}

	if ( event.which == 32 ) $('.key').removeClass('on');
	if ( event.which == 220 ) $('.key').toggleClass('show');
	if ( event.which == 8 ) {
	for (var i = 0; i < 840; i++){
	   if ($('.cell-'+i).hasClass('on')){
	    $('.cell-'+i).removeClass('on');
	   } else {
	    $('.cell-'+i).toggleClass('on');
	   }
	 }
	}
	if ( event.which == 13 ) if (play == 0){play=1;} else{play=0;}
	//if ( event.which == 18 ) $('.key').toggleClass('align');

     });
function update(){
	  for (var i = 0; i < 840; i++){
	   var n = 0;
	   if ($('.cell-'+(i-31)).length && $('.cell-'+(i-31)).hasClass('on')) n++;
	   if ($('.cell-'+(i-30)).length && $('.cell-'+(i-30)).hasClass('on')) n++;
	   if ($('.cell-'+(i-29)).length && $('.cell-'+(i-29)).hasClass('on')) n++;
	   if ($('.cell-'+(i-1)).length && $('.cell-'+(i-1)).hasClass('on')) n++;
	   if ($('.cell-'+(i+1)).length && $('.cell-'+(i+1)).hasClass('on')) n++;
	   if ($('.cell-'+(i+29)).length && $('.cell-'+(i+29)).hasClass('on')) n++;
	   if ($('.cell-'+(i+30)).length && $('.cell-'+(i+30)).hasClass('on')) n++;
	   if ($('.cell-'+(i+31)).length && $('.cell-'+(i+31)).hasClass('on')) n++;
	   if ($('.cell-'+i).hasClass('on')){
	    if (n < 2 || n > 3) $('.cell-'+i).toggleClass('marked'); 
	   }
	   else {
	    if (n == 3) $('.cell-'+i).toggleClass('saved'); 
	   } 
	  }
}
function draw(){
	  $('.marked').removeClass('on');
	  $('.saved').toggleClass('on');
	  $('.key').removeClass('marked');
	  $('.key').removeClass('saved');
}
var lastFrameTimeMs = 0, maxFPS = 10;

function mainLoop(timestamp) {

if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(mainLoop);
        return;
    }
    lastFrameTimeMs = timestamp;
    
    if(play==1){ 
	
 /*
   //test behaviour
      for (var i = 0; i < 840; i++){
	   if ($('.cell-'+i).hasClass('on')){
	    $('.cell-'+i).removeClass('on');
	   } else {
	    $('.cell-'+i).toggleClass('on');
	   }
	 } */
	update();
    draw();
	}
     requestAnimationFrame(mainLoop);
}
      requestAnimationFrame(mainLoop);
