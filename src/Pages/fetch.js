fetch('https://homePage/')
  .then(response => response.json())
  .then(data => {
    
    console.log(data);
  })
  .catch(error => {
    console.error('Error', error);
  });