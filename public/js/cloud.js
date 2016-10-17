var socket = io.connect('https://secret-falls-2100.herokuapp.com/');
  jQuery(function ($) {
    var blackberryrsList = $('ul.blackberry-tweets');
    var androidrsList = $('ul.android-tweets');
    var iphonersList = $('ul.iphone-tweets');
    socket.on('blackberryr', function (data) {
      $('<img />')
      .attr('src', data.avatar)
      .load(function(){
        blackberryrsList
        .prepend($('<li>')
          .prepend($('<p>').text(data.user + ': ' + data.text))
          .prepend($(this)));
      });
    });
    socket.on('androidr', function (data) {
      $('<img />')
      .attr('src', data.avatar)
      .load(function(){
        androidrsList
        .prepend($('<li>')
          .prepend($('<p>').text(data.user + ': ' + data.text))
          .prepend($(this)));
      });
    });
    socket.on('iphoner', function (data) {
      $('<img />')
      .attr('src', data.avatar)
      .load(function(){
        iphonersList
        .prepend($('<li>')
          .prepend($('<p>').text(data.user + ': ' + data.text))
          .prepend($(this)));
      });
    });

  });
