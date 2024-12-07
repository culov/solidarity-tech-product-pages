function resizeFooter(){
	var windowWidth = $(window).width();
	//if sidebar visible

	if(windowWidth >1170 || $('.show-sidebar').length > 0){
		$("#fixed_next_steps_footer").css({width: windowWidth-240});
	}
	else{
		$("#fixed_next_steps_footer").css({width: windowWidth});
	}
}
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

$(function(){
		var floatlabels = (typeof FloatLabels === 'function') ? new FloatLabels( '#ns_form', {}) : null;
		resizeFooter();
		$( window ).resize(function(){resizeFooter()});
		$('.open-close').click(resizeFooter);
})
