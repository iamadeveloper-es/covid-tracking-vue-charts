import axios from 'axios'


export default axios.create({
    baseURL: 'https://api.covid19api.com',
    headers: {
      'Content-Type': 'application/json'
    }
  })

