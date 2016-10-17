var socket_room = io.connect('https://secure-chamber-5161.herokuapp.com/');

var randomnumber=Math.floor(Math.random()*101);
var name = "user_"+randomnumber;
var login = false;

Lungo.Events.init({	
	
	"tap section#main article li:nth-child(1)":function(){
			
		if(!login){
			socket_room.emit('adduser', {nickname:name,room:0},function(data){		
				login = data;
				
			}); 
		}
		
	}
});


socket_room.on('updatechat', function (from, data) {
	if(login){
		
		chatList.innerHTML += '<li>'+'<strong>' +data+'</strong>'+'</li>';
	}

});
socket_room.on('announcement', function (user_exits) {
	
	chatList.innerHTML += '<li>'+'<strong>'+user_exits+'</strong>'+'</li>';
	
});

socket_room.on('user image', image);	

socket_room.on('user sound', sound);


socket_room.on('updaterooms', function(rooms, current_room,num_usuarios) {
	$('#rooms').empty();

});


function image (from, base64Image) {   	
	if(login){
		chatList.innerHTML += '<img class="thumb" src="' + base64Image + '"/>';  	
	}
}

function sound (from, soundSent) { 
	if(login){
		chatList.innerHTML += '<li><audio src="' + soundSent + '" controls  /></li>';  	
	}
}


