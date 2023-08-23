export async function getWeatherFrom(query: string = 'Santa Fe') {
  const { body } = await fetch(`/api/get-weather?q=${query}`).then((res) => res.json())
  return body
}
