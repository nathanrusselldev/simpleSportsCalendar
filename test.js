const options = {
  method: 'GET',
  url: 'https://flashlive-sports.p.rapidapi.com/v1/events/data',
  params: {locale: 'en_INT', event_id: '6ZCocWsb'},
  headers: {
    'X-RapidAPI-Key': '8e73259ff3msh23d593f1ac46d7fp167ca1jsn08e2368f54b3',
    'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});