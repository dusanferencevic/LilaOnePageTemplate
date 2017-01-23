$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#nav').addClass('shrink');
    }
    else {
    $('#nav').removeClass('shrink');
    }
  });
});
$(document).ready(function() {
	$(window).scroll(function() {
  	if($(document).scrollTop() > 10) {
    	$('#logo').addClass('change');
    }
    else {
    $('#logo').removeClass('change');
    }
  });
});
$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 10) {
      $('#link1,#link2,#link3,#link4,#link5,#link6,#link7').addClass('change1');
    }
    else {
    $('#link1,#link2,#link3,#link4,#link5,#link6,#link7').removeClass('change1');
    }
  });
});
$(document).ready(function() {
  $(window).scroll(function() {
    if($(document).scrollTop() > 10) {
      $('#link1,#link2,#link3,#link4,#link5,#link6,#link7').addClass('shrink1');
    }
    else {
    $('#link1,#link2,#link3,#link4,#link5,#link6,#link7').removeClass('shrink1');
    }
  });
});

 $(document).ready(function () {
        $('#sest,#pet,#cetiri,#tri,#dva,#jedan').hover(function () {
            $(this).addClass('hover');
        }, function () {
            $(this).removeClass('hover');
        });
    });
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 1200) {
        //console.log('a');
        $("#link2").addClass("activee");
    } else {
        //console.log('a');
        $("#link2").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 2000) {
        //console.log('a');
        $("#link3").addClass("activee");
    } else {
        //console.log('a');
        $("#link3").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 2000) {
        $("#link2").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 3500) {
        //console.log('a');
        $("#link4").addClass("activee");
    } else {
        //console.log('a');
        $("#link4").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 3500) {
        $("#link3").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 5200) {
        //console.log('a');
        $("#link5").addClass("activee");
    } else {
        //console.log('a');
        $("#link5").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 5200) {
        $("#link4").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 6000) {
        //console.log('a');
        $("#link6").addClass("activee");
    } else {
        //console.log('a');
        $("#link6").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 6000) {
        $("#link5").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 6600) {
        //console.log('a');
        $("#link7").addClass("activee");
    } else {
        //console.log('a');
        $("#link7").removeClass("activee");
    }
});
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
     //console.log(scroll);
    if (scroll >= 6600) {
        $("#link6").removeClass("activee");
    }
});