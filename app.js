async function loadTiles(){

  const res = await fetch('./data.json');
  const items = await res.json();

  const root = document.getElementById('tiles');

  items.forEach(item=>{

    const el = document.createElement('a');

    el.className = 'tile';
    el.href = item.link;
    el.target = '_blank';

    el.innerHTML = `
      <img
        class="image imageNormal"
        src="${item.image}"
      >

      <img
        class="image imageHover"
        src="${item.hoverImage}"
      >

      <div class="title">
        ${item.title}
      </div>
    `;

    root.appendChild(el);

  });

}

loadTiles();