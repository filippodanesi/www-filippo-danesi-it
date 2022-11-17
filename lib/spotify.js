const client_id = `3e8b0e4a8b144243a899b3de8e7225f6`
const client_secret = `909a02b0f05048b9acfdd1582a4990b7`
const refresh_token = `AQBn7a02d9yJn9ASs3J8aFupyBLv8nMcsOF4PaQDJGLQoSulIBrgvQzQ5KGCSJ6GbHpnUbL4NdULh8512fqkw9APiXE15VyHf0E7pmER0XjbUFIQhgoa0lNP-dnlOhqh2jI`

const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks`
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token,
    }),
  })

  return response.json()
}

export const getNowPlaying = async () => {
  const { access_token } = await getAccessToken()

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}

export const getTopTracks = async () => {
  const { access_token } = await getAccessToken()

  return fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  })
}
