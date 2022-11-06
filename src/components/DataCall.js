import axios from 'axios'

export default async function DataCall() {
    let data = []
    const options = {
        method: 'GET',
        url: 'https://flashlive-sports.p.rapidapi.com/v1/events/list',
        params: {locale: 'en_INT', sport_id: '3', indent_days: '0', timezone: '-4'},
        headers: {
          'X-RapidAPI-Key': '8e73259ff3msh23d593f1ac46d7fp167ca1jsn08e2368f54b3',
          'X-RapidAPI-Host': 'flashlive-sports.p.rapidapi.com'
        }
      };
      
      data = await axios.request(options)
      return data.data

}