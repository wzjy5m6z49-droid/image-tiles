fetch("https://digitalgojp.sharepoint.com/sites/NTA_IBHub12/_api/web/lists/getbytitle('ImageTiles')/items")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
