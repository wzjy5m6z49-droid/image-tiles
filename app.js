document.body.innerHTML = 'TEST START';

fetch("https://digitalgojp.sharepoint.com/sites/NTA_IBHub12/_api/web/lists/getbytitle('ImageTiles')/items")
  .then(response => response.json())
  .then(data => {

    console.log(data);

    document.body.innerHTML =
      '<pre>' +
      JSON.stringify(data, null, 2) +
      '</pre>';

  })
  .catch(error => {

    console.error(error);

    document.body.innerHTML =
      '<pre>' +
      error +
      '</pre>';

  });
