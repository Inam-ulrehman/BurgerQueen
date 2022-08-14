import axios from 'axios'

// === Products Root Url ===//

const customFetchProducts = axios.create({
  baseURL: 'https://burgerqueenbyinam.herokuapp.com/api/v1/products/static',
})

// User rootURL

export const customFetchUser = axios.create({
  baseURL: 'https://burgerqueenbyinam.herokuapp.com/api/v1/auth',
})

//  contact rootURL //

export const customFetchContact = axios.create({
  baseURL: 'https://burgerqueenbyinam.herokuapp.com/api/v1',
})

//  Order Root URL - This is fully CRUD at front end as well...

export const customFetchOrder = axios.create({
  baseURL: 'https://burgerqueenbyinam.herokuapp.com/api/v1',
})
//  Review Root URL - This is post read.

export const customFetchReview = axios.create({
  baseURL: 'https://burgerqueenbyinam.herokuapp.com/api/v1',
})

export default customFetchProducts
