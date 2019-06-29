function buildHeader() {
    let header = [];

    header.push('<div class="bg-dark text-white header d-none d-md-block">');
    header.push('<div class="p-3">jQuery explorer</div>');
    header.push('</div>');

    return header;
}

function buildMenuBar(activeLink=''){
    let menuBar = [];
    let menuItems = [
        { name: 'Home', url: '../pages/home.html' },
        { name: 'Fruits', url: '../pages/fruits.html' },
        { name: 'Vegetables', url: '../pages/vegetables.html' },
        { name: 'Bikes', url: '../pages/bikes.html' },
        { name: 'Cars', url: '../pages/cars.html' }
    ];

    menuBar.push('<nav class="navbar navbar-expand-md navbar-dark bg-app-theme">');
    menuBar.push('<a class="navbar-brand d-md-none" href="#">jQuery explorer</a>');
    menuBar.push('<button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">');
    menuBar.push('<span class="navbar-toggler-icon"></span>');
    menuBar.push('</button>');
    menuBar.push('<div class="collapse navbar-collapse" id="navbarText">');
    menuBar.push('<ul class="navbar-nav mr-auto">');
    $.each(menuItems, function (key, value) {
        if (value.name === activeLink) {
            menuBar.push('<li class="nav-item active">');
            menuBar.push(`<a class="nav-link" href="${value.url}">${value.name} <span class="sr-only">(current)</span></a>`);
            menuBar.push('</li>');
        } else {
            menuBar.push('<li class="nav-item">');
            menuBar.push(`<a class="nav-link" href="${value.url}">${value.name}</a>`);
            menuBar.push('</li>');
        }
    });
    menuBar.push('</ul>');
    menuBar.push('<span class="navbar-text">');
    menuBar.push('<a href="../index.html">Close app</a>');
    menuBar.push('</span>');
    menuBar.push('</div>');
    menuBar.push('</nav>');

    return menuBar;
}