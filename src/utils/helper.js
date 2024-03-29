import moment from 'moment/moment'
//==================filter===============

// get unique values for filter declare variable
// const categories = getUniqueValues(data,'categories')

export const getUniqueValues = (data, type) => {
  let unique = data.map((item) => item[type])
  // if its an array pass error array = [1,2,3]
  if (type === 'array') {
    unique = unique.flat()
  }
  return ['all', ...new Set(unique)]
}

//=================payments============

// format price for payments like stripe

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number / 100)
}

// ============Scroll up============
window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
// ==========Moment============
export const formatDate = (createdAt) => {
  return moment(createdAt).format('MMM Do YY')
}

// ===npm install query-string=======
// import queryString from 'query-string'
// const parsed = queryString.parse(location.search)
// console.log(parsed)

// ================Capital first Letter=====================
// function capitalizeFirstLetter(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1)
// }
// ========================
