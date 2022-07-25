document.addEventListener("DOMContentLoaded", loadScreen);

function loadScreen() {
    const body = `
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-ligth">
                <a href="./index.html" class="navbar-brand">Cool Store GT</a>
                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="./index.html">Inicio <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="./.html">Categorías</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="./.html">Contacto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled" href="./.html">Misión-Visión</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
        <div class="main-container">
            <div class="container-fluid">
                <h1>Cool Store GT</h1>
            </div>
        </div>
        <footer></footer>
    `;

    document.body.innerHTML = body;
}