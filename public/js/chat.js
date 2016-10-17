var socket_room = io.connect('https://secure-chamber-5161.herokuapp.com/');

var chatList = document.getElementById('message-list');

jQuery(function ($) {		


	$('#sendmessage').click( function() {
		var message = $('#message').val();
		$('#message').val('');
		socket_chat.emit('sendchat', message);
	});
	$('#message').keypress(function(e) {
		if(e.which == 13) {
			$(this).blur();
			$('#sendmessage').focus().click();
		}
	});	

});

socket_chat.on('updatechat', function (from, data) {

	chatList.innerHTML += '<li>'+'<strong>'+data+'</strong>'+'</li>';
	

});

socket_chat.on('announcement', function (user_exits) {
	chatList.append('<a>'+'<strong>'+user_exits+'</strong><br />' + '</a>');
});


socket_chat.on('user image', image);

function image (from, base64Image) {   	
	
	chatList.innerHTML += '<img class="thumb" src="' + base64Image + '"/>';  	
	
}

socket_chat.on('user sound', sound);

function sound (from, soundSent) { 
	
	chatList.innerHTML += '<li><audio src="' + soundSent + '" controls  /></li>';  	
	
}


socket_chat.on('updaterooms', function(rooms, current_room,num_usuarios) {
	
});
