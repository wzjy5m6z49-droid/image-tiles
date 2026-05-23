fetch("https://digitalgojp.sharepoint.com/sites/NTA_IBHub12/_api/web/lists(guid'd810a0c4-002d-4702-84dc-96366a6480e5')/items")
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
