
jQuery(function ($) {	
	
	$('#sendmessage').click( function() {
		var message = $('#message').val();
		$('#message').val('');
		socket_room.emit('sendchat', message);
	});
	$('#message').keypress(function(e) {
		if(e.which == 13) {
			 e.preventDefault(); //stop event
			$(this).blur();
			$('#sendmessage').focus().click();
		}
	});	

});


