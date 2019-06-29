let header = buildHeader();
$('#header').html(header.join('\r\n'));

let menuBar=buildMenuBar('Home');
$('#menuBar').html(menuBar.join('\r\n'));