let apiKey = {
  key: 'f9a1ca61-85b1-457a-81b1-2ef7a877871c',
};

var myHeaders = new Headers();
myHeaders.append("Content-Type", "text/plain");
myHeaders.append("Content-Length", content.length.toString());
myHeaders.append("X-Custom-Header", "ProcessThisImmediately");

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' 
            };

fetch(
  'https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
    apiKey.key, myInit
)
  .then((response) => {
    if (!response.ok)
      throw new Error('Error executing the request, status' + response.status);
    return response.json();
  })
  .then((api) => {
    console.log(api);

    let text = '';

    for (let i = 0; i < 10; i++) {
      text =
        text +
        `
            <div class="media">
                <img src="coin.jpg" class="align-self-center mr-3" alt="coin" width="100" height="60">
                <div class="media-body">
                <h5 class="mt-2">${api.data[i].name}</h5>
                <p>${api.data[i].symbol}</p>
                </div>
            </div>
        `;

      document.getElementById('coins').innerHTML = text;
    }
  })
  .catch((error) => {
    console.error(error.message);
  });
