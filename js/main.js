document.addEventListener("DOMContentLoaded", loadScreen);

function loadScreen() {
    const body = `
        ${header}
        <div class="main-container">
            <div class="container-fluid">
                <h1>Cool Store GT</h1>
            </div>
        </div>
        <footer></footer>
    `;

    document.body.innerHTML = body;
}