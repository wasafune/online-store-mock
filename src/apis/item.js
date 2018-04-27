import axios from 'axios'

export const reqItem = (itemname) => {
  return axios.post(
    '/search/item',
    { itemname },
  )
}
