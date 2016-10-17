var chatList = document.getElementById('message-list');

function click(el) { 

	var evt = document.createEvent('Event');
	evt.initEvent('click', true, true);
	el.dispatchEvent(evt);
}

document.querySelector('#fileSelect').addEventListener('click', function(e) {
	var fileInput = document.querySelector('#fileElem'); 
	fileInput.click(); 
}, false);

function handleFiles(files) {
	for (var i = 0, f; f = files[i]; i++) {
		
	
		if (f.type.match('image.*')) {			
			
			var reader = new FileReader();

			reader.onload = (function(theFile) {
				return function(e) {

					socket_room.emit('user image', e.target.result);

					var span = document.createElement('span');
					span.innerHTML = ['<img class="thumb" src="', e.target.result,
					'" title="', escape(theFile.name), '"/>'].join('');
					chatList.insertBefore(span, null);
				};
			})(f);

			reader.readAsDataURL(f);
		}
		if ((f.type.match('audio.*'))||(f.type.match('video.*'))) {	

			var reader = new FileReader();

			reader.onload = (function(theFile) {
				return function(e) {					
					chatList.innerHTML += '<li><audio src="' + e.target.result + '" controls  /></li>';
					socket_room.emit('user sound', e.target.result);				
					
				};
			})(f);

			reader.readAsDataURL(f);

		}

	}
}