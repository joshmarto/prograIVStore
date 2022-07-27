document.addEventListener("DOMContentLoaded", loadScreen);

function loadScreen() {
    const body = `
        ${header}
        <div class="main-container">
            <div class="container-fluid">
                <h1>Misión y Visión</h1>
                <br/>
                <div class="container-md">
                    <h3>Visión</h3>
                    <div class="container-sm">
                        <p>Nuestra visión es ser una tienda en línea que te ofrezca todo lo que puedas necesitar y querer a precios accesibles.</p>
                    </div>
                </div>
                <div class="container-md">
                    <h3>Misión</h3>
                    <div class="container-sm">
                        <p>Nuestra misión es buscar constantemente nuevos productos y categorías que te puedan servir o en las que puedas tener interés.</p>
                    </div>
                </div>
            </div>
        </div>
        ${footer}
    `;

    document.body.innerHTML = body;


    const deActivate = document.getElementById("nav-item-home");
    const activate = document.getElementById("nav-item-mision-vision");
    deActivate.className = "nav-item";
    activate.className = "nav-item active"

}