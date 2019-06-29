let headerMarkup = buildHeader();
$('#header').html(headerMarkup.join('\r\n'));

let menuBarMarkup = buildMenuBar('Fruits');
$('#menuBar').html(menuBarMarkup.join('\r\n'));

let record={};

$('#btnSave').submit(function(){
    record.name=$('#name').val();

});