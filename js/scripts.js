$(document).ready(function(){
	var overview = $('.overview');
	var maintoggle = $('.toggle-main')
    $('#nav').onePageNav();

    $('a[href^="http"]').attr('target','_blank');

    $('.toggle').click(function(){
        overview.toggleClass('open');
        var state = maintoggle.attr('aria-expanded');
        console.log(state);
        if ( state=='true' ) {
        	maintoggle.attr('aria-expanded', 'false');
        } else {
        	maintoggle.attr('aria-expanded', 'true');      	
        }
    });
});
