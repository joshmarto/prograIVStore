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
                    ${ card("../img/ropa.jpg", "Ropa", "Ropa", "Esta es la seccion mas exclusiva en la ropa mas a la moda y de mejor calidad para nuestros clientes.", "#ropa", "Ver más...") }
                    ${ card("../img/zapatos.jpg", "Zapatos", "Zapatos", "Conoce todos los estilos que tenemos para ti, buscando combinar con tus mejores <i>outfits</i> y con comodidad siempre.", "#zapatos", "Ver tallas...") }
                    ${ card("../img/grocery-store.jpg", "Comestibles", "Comestibles", "Prueba la exquisita variedad de comestibles que tenemos disponibles para ti. Sabemos lo importante que es comer rico y saludable.", "#comstibles", "Ver más...") }
                    ${ card("../img/electrodomesticos.jpg", "Electrodomesticos", "Electrodomesticos", "Esta es tu oportunidad para conocer esos electrodomesticos que dia a dia complementan tu casa con variada utilidad.", "#electrodomesticos", "Comprar ahora") }
                    ${ card("../img/tupper.jpg", "Tupper", "Tupper", "Porque sabemos que siempre necesitas uno mas para guardar tu comida lo mejor posible. Puedes adquirirlos todos con nosotros.", "#tupper", "Comprar ahora") }
                </div>
                <div class="categories">
                ${ card("../img/juegos-de-mesa.jpg", "Juegos de Mesa", "Juegos de Mesa", "Los mejores juegos de mesa para entretenerte, razonar y pasar un buen tiempo en familia o con amigos.", "#juegos-de-mesa", "Ver más...") }
                ${ card("../img/libros.jpg", "Libros", "Libros", "¿Buscas una buena lectura? Aquí encontrarás los mejores libros de una gran cantidad de autores para que estudies o te entretengas con el mejor contenido literario.", "#libros", "Comprar ahora") }
                ${ card("../img/instrumentos-musicales.jpg", "Instrumentos Musicales", "Instrumentos Musicales", "Si lo tuyo es la música, este es tu espacio. Contamos con los mejores instrumentos y accesorios musicales que te permitiran llevar tu ejecución a otro nivel.", "#instrumentos-musicales", "Comprar ahora") }
                ${ card("../img/herramientas.jpg", "Herramientas", "Herramientas", "Si necesitas hacer alguna reparación cuenta con nuestro departamento de ferretería. Encontrarás todo lo necesario para ser un experto en construcción", "#herramientas", "Ver más...") }
                ${ card("../img/membresia.png", "Membresia Premium", "Membresia Premium", "¿Aún no eres un socio <i>Premium</i>? ¿Qué esperas? Obtendrás descuentos especiales, productos y servicios exclusivos", "#membresia", "Suscribirse!") }
                </div>
            </div>
        </div>
        ${footer}
    `;

    document.body.innerHTML = body;


    const deActivate = document.getElementById("nav-item-home");
    const activate = document.getElementById("nav-item-categories");
    deActivate.className = "nav-item";
    activate.className = "nav-item active"

}