function renderTiles(items) {
  const app = document.getElementById('tiles');
  app.innerHTML = '';

  items.forEach((item, index) => {
    const image = item.Image || '';
    const hoverImage = item.HoverImage || '';
    const link = item.Link || '#';

    const el = document.createElement('a');
    el.className = 'tile hoverEnabled hover_zoom animInit anim_slide';
    el.href = link;
    el.target = '_blank';
    el.style.setProperty('--i', index);

    el.innerHTML = `
      <div class="imageWrapper">
        <img class="image imageNormal contain" src="${image}">
        ${
          hoverImage
            ? `<img class="image imageHover contain" src="${hoverImage}">`
            : ''
        }
      </div>
    `;

    app.appendChild(el);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('inView');
        } else {
          entry.target.classList.remove('inView');
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -10% 0px'
    }
  );

  document.querySelectorAll('.tile').forEach((el) => {
    observer.observe(el);
  });
}

const script = document.createElement('script');

script.src =
  'https://digitalgojp.sharepoint.com/sites/NTA_IBHub12/SiteAssets/image-tiles/image-tiles-data.js?v=' +
  new Date().getTime();

script.onload = () => {
  renderTiles(window.imageTilesData || []);
};

document.head.appendChild(script);
