import { json } from '@sveltejs/kit'

const FETCH_OPTIONS = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '66416cc97cmsh2bf238738ce8adcp109cf8jsn31539adb64fb',
    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
  },
}

export async function GET(event: any) {
  const { searchParams } = event.url
  const query = searchParams.get('q') ?? 'Santa Fe'

  const response = await fetch(
    `https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`,
    FETCH_OPTIONS
  )

  const data = await response.json()

  const { location, current } = data
  const { country, localtime, name } = location
  const {
    condition,
    humidity,
    feelslike_c,
    temp_c,
    is_day,
    wind_kph,
    wind_dir,
  } = current
  const { icon, text } = condition

  const body = {
    country,
    localtime,
    city: name,
    humidity,
    isDay: is_day,
    feelsLike: feelslike_c,
    temp: temp_c,
    windKph: wind_kph,
    windDir: wind_dir,
    icon,
    description: text,
  }

  return json({
    body,
  })
}
