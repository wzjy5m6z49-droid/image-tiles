const app = document.getElementById('tiles');

(window.imageTilesData || []).forEach(item => {

  const el = document.createElement('a');

  el.className = 'tile';
  el.href = item.Link;
  el.target = '_blank';

  el.innerHTML = `
    <div class="imageWrapper">

      <img
        class="image imageNormal"
        src="${item.Image}"
      >

      ${
        item.HoverImage
        ? `
          <img
            class="image imageHover"
            src="${item.HoverImage}"
          >
        `
        : ''
      }

    </div>

    <div class="title">
      ${item.Title}
    </div>
  `;

  app.appendChild(el);

});
