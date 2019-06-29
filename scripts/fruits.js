let headerMarkup = buildHeader();
$('#header').html(headerMarkup.join('\r\n'));

let menuBarMarkup = buildMenuBar('Fruits');
$('#menuBar').html(menuBarMarkup.join('\r\n'));

let fruitsList = [
    {
        id: 1,
        name: 'Apple Machintosh',
        family: 'Apple',
        price: 172.00,
        uom: 'kg'
    },
    {
        id: 2,
        name: 'Apple Indian',
        family: 'Apple',
        price: 120.00,
        uom: 'kg'
    }
];

bindFruitsList(fruitsList);

function bindFruitsList(fruitsList) {
    let fruitsMarkup = [];

    $.each(fruitsList, function (key, value) {
        fruitsMarkup.push(`<tr>`);
        fruitsMarkup.push(`<th>${key + 1}</th>`);
        fruitsMarkup.push(`<td>${value.name}</td>`);
        fruitsMarkup.push(`<td>${value.family}</td>`);
        fruitsMarkup.push(`<td>${value.price}</td>`);
        fruitsMarkup.push(`<td>${value.uom}</td>`);
        fruitsMarkup.push(`<td class="text-center"><i class="fas fa-trash"></i></td>`);
        fruitsMarkup.push(`</tr>`);
    });

    $('#fruitsList').html(fruitsMarkup.join('\r\n'));
}