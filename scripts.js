function searchAPI(){
    const query = document.getElementById('query').value;
    const apiKey = 'xWyiC6NTbUbCF4Vytm7Hi8gRahFgkKxW';
    const url = `https://api.giphy.com/v1/gifs/translate?api_key=${apiKey}&s=${encodeURIComponent(query)}`;
    const img = document.querySelector('img');
    fetch(url, {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        img.src = response.data.images.original.url;
      })
      .catch(function(err) {
        // ERROR
      });
  }