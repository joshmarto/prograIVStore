const card = ( src, alt, title, txt, url, goTo ) => `
    <div class="card">
        <img class="card-img-top" src="${src}" alt="${alt}" />
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${txt}</p>
          <a href="${url}" class="btn btn-success">${goTo}</a>
        </div>
    </div>
`;