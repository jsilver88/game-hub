import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '7ef5770981974cc4873d34eafa91e7ad',
  },
})
