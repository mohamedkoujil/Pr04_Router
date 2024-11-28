export const getCurrentUrl = () => {
  return window.location.pathname
}

export const getBasePath = (route) => {
  return `/${route.split('/')[1]}/${route.split('/')[2]}`
}
