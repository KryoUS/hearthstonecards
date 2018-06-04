import axios from 'axios';
import { apiKey } from '../config.json'

const cardSearch = (text) => {
  return axios.get(`https://omgvamp-hearthstone-v1.p.mashape.com/cards/search/${text}`, {headers: {'X-Mashape-Key': apiKey}})
    .then(response => {
      return response.data[response.data.length-1]
    }).catch(error => {
      console.log(error)
    })
}

export default cardSearch