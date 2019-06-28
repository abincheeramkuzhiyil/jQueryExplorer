function buildHeader(activeLink = 'home') {
    let header = [];

    header.push('<div class="bg-dark text-white header d-none d-md-block">');
    header.push('<div class="p-3">jQuery explorer</div>');
    header.push('</div>');
    header.push('<nav class="navbar navbar-expand-lg navbar-dark bg-app-theme">');
    header.push('<a class="navbar-brand d-md-none" href="#">jQuery explorer</a>');
    header.push('<button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">');
    header.push('<span class="navbar-toggler-icon"></span>');
    header.push('</button>');
    header.push('<div class="collapse navbar-collapse" id="navbarText">');
    header.push('<ul class="navbar-nav mr-auto">');
    header.push('<li class="nav-item active">');
    header.push('<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>');
    header.push('</li>');
    header.push('<li class="nav-item">');
    header.push('<a class="nav-link" href="#">Fruits</a>');
    header.push('</li>');
    header.push('<li class="nav-item">');
    header.push('<a class="nav-link" href="#">Vegitables</a>');
    header.push('</li>');
    header.push('<li class="nav-item">');
    header.push('<a class="nav-link" href="#">Bikes</a>');
    header.push('</li>');
    header.push('<li class="nav-item">');
    header.push('<a class="nav-link" href="#">Cars</a>');
    header.push('</li>');
    header.push('</ul>');
    header.push('<span class="navbar-text">');
    header.push('Abin, <a href="../index.html">Logout</a>');
    header.push('</span>');
    header.push('</div>');
    header.push('</nav>');

    return header;
}

function buildFooter() {

}