 $(function() {
      
      $(document).ready(function(){
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);
	    console.log(target, "hey");

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function() {
	        window.location.hash = target;
	    });
	});


});

        
    });


 $( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    // console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}
$('#animate').mouseenter(function () {
    $(this).velocity({scale:1.25}, {
        delay: 500, duration: 1500
    });
});

 

$('.copyright').birdman(); 
var birdmanConfigWords = {
    speedUp:false,
    method: 'words',
    order: ['copyright','chiara', 'zielinsky', '2017'],
    delay: 2000,
    
};
console.log(birdmanConfigWords,"hey");

var birdmanConfigLines = {
    speedUp:false,
    method: 'lines',
    order: ['chiara ', 'copyright', 'zielinsky', '2017'],
    delay: 2000,
    
};

$('#wordsdemo').birdman(birdmanConfigWords);
$('#linesdemo').birdman(birdmanConfigLines);





    var config = new shinejs.Config({
      numSteps: 3,
      opacity: 1,
      shadowRGB: new shinejs.Color(38, 38, 38)
    });

    var shine = new shinejs.Shine(document.getElementById('my-shine-object'), config);

    function handleMouseMove(event) {
      shine.light.position.x = event.clientX;
      shine.light.position.y = event.clientY;
      shine.draw();
    }

    window.addEventListener('mousemove', handleMouseMove, false);