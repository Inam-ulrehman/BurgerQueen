//  user in local Storage //
export const setUserInLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}

// =========Cart =============

export const setCartInLocalStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart))
}

export const getCartFromLocalStorage = () => {
  const result = localStorage.getItem('cart')
  const cart = result ? JSON.parse(result) : null
  return cart
}

export const removeCartFromLocalStorage = () => {
  localStorage.removeItem('cart')
}

// ==========Cash Order ===============

export const setCashOrderInLocalStorage = (cart) => {
  localStorage.setItem('cashOrder', JSON.stringify(cart))
}

export const getCashOrderFromLocalStorage = () => {
  const result = localStorage.getItem('cashOrder')
  const cart = result ? JSON.parse(result) : null
  return cart
}

export const removeCashOrderFromLocalStorage = () => {
  localStorage.removeItem('cashOrder')
}

// ===============================
