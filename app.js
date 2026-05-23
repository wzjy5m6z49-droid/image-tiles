fetch("https://digitalgojp.sharepoint.com/sites/NTA_IBHub12/_api/web/lists(guid'd810a0c4-002d-4702-84dc-96366a6480e5')/items", {
  credentials: 'include',
  headers: {
    'Accept': 'application/json;odata=nometadata'
  }
})
.then(async response => {

  const text = await response.text();

  console.log(text);

  document.body.innerHTML =
    '<pre>' +
    text
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;') +
    '</pre>';

})
.catch(error => {

  console.error(error);

  document.body.innerHTML =
    '<pre>' + error + '</pre>';

});
