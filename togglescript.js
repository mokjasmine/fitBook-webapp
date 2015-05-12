
$(document).ready(function() {
// Hide the "view" div.
	
	// Watch for clicks on the "slide" link.
	$("#lightbox").hide();
	$("#filter").hide();
	$('td.slide').click(function() {
	// When clicked, toggle the "view" div.
		$('td.slide').bind('click');
		$("#filter").css("z-index", 1);
		$("#lightbox").css("z-index", 2);
		$("#filter").toggle();
		$("#lightbox").toggle();
		
return false;
});

	$("#button").click(function() {
		$("#filter").css("z-index", -1);
		$("#lightbox").css("z-index", -1);
		$("#filter").toggle();
		$("#lightbox").toggle();
	});
});
