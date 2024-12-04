export const getBasePath = (route) => {
  return `/${route.split('/')[1]}/${route.split('/')[2]}`
}

export const getData = async () => {
  const data = await import('../data.json')
  return data
}

export const getDestinations = async () => {
  const data = await getData()
  return data.destinations
}

export const getDestiation = async (id) => {
  const data = await getData()
  return data.destinations.find((destination) => destination.id == id)
}

export const getExperiences = async (id) => {
  const data = await getDestiation(id)
  return data.experiences
}

export const getExperience = async (id, slug) => {
  const data = await getExperiences(id)
  return data.find((experience) => experience.slug === slug)
}
