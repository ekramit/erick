
jQuery(document).ready(function(){

	jQuery('.tab-buttons li a').click(function(){

		var handler = jQuery(this);
		var rel = handler.data('rel');
		var parent = handler.parent();

		if(parent.hasClass('selected')){
		}else{
			
			jQuery('.tab-buttons li').removeClass('selected');
			parent.addClass('selected');

			jQuery('.tab-container > div').hide(500);
			jQuery('.tab-container #'+rel).show(500);
		}

		return false;

	});
});
