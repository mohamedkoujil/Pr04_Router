export const getBasePath = (route) => {
  return `/${route.split('/')[1]}/${route.split('/')[2]}`
}

//Simulate an API call
export const getData = async () => {
  const data = await import('../data.json')
  return data
}

export const getDestinations = async () => {
  const data = await getData()
  return wait(1000).then(() => data.destinations)
}

export const getDestiation = async (id) => {
  const data = await getData()
  return wait(1000).then(() => data.destinations.find((destination) => destination.id == id))
}

export const getExperiences = async (id) => {
  const data = await getDestiation(id)
  return wait(1000).then(() => data.experiences)
}

export const getExperience = async (id, slug) => {
  const data = await getExperiences(id)

  return wait(100).then(() => data.find((experience) => experience.slug === slug))
}

export const wait = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms)
  })
}
