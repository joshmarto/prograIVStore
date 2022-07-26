document.addEventListener("DOMContentLoaded", loadScreen);

function loadScreen() {
    const body = `
        ${header}
        <div class="main-container">
            <div class="container-fluid">
                <h1>Misión y Visión</h1>
            </div>
        </div>
        <footer></footer>
    `;

    document.body.innerHTML = body;


    const deActivate = document.getElementById("nav-item-home");
    const activate = document.getElementById("nav-item-mision-vision");
    deActivate.className = "nav-item";
    activate.className = "nav-item active"

}