document.addEventListener("DOMContentLoaded", loadScreen);

function loadScreen() {
    const body = `
        ${header}
        <div class="main-container">
            <div class="container-fluid">
                <h1>Cool Store GT</h1>
                <br/>
                <p>Bienvenidos a nuestra tienda <i>online</i> en donde encontrarás muchos productos de tu interés.</p>
            </div>
        </div>
        ${footer}
    `;

    document.body.innerHTML = body;
}