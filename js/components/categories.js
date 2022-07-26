document.addEventListener("DOMContentLoaded", loadScreen);

function loadScreen() {
    const body = `
        ${header}
        <div class="main-container">
            <div class="container-fluid">
                <h1>Categorias</h1>
                <br/>
                <p>Aquí encontrarás nuestras categorías para que puedas encontrar con mayor facilidad los productos que buscas.</p>
                <div class="categories">
                    ${ card("../img/ropa.jpg", "Ropa", "Ropa", "Esta es la seccion mas exclusiva en la ropa mas a la moda y de mejor calidad para nuestros clientes.", ".ropa", "Ver más...") }
                    ${ card("../img/zapatos.jpg", "Zapatos", "Zapatos", "Conoce todos los estilos que tenemos para ti, buscando combinar con tus mejores <i>outfits</i> y con comodidad siempre.", ".zapatos", "Ver tallas...") }
                </div>
            </div>
        </div>
        <footer></footer>
    `;

    document.body.innerHTML = body;


    const deActivate = document.getElementById("nav-item-home");
    const activate = document.getElementById("nav-item-categories");
    deActivate.className = "nav-item";
    activate.className = "nav-item active"

}