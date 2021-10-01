import axios from 'axios'

/**
 *
 * @param BearerToken
 * @returns
 */
export const PlayerPause = async (BearerToken: string) => {
  const config = {
    method: 'put',
    url: 'https://api.spotify.com/v1/me/player',
    headers: {
      Authorization: `Bearer ${BearerToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      device_ids: ['be4414f1466402bc6b4740f64191366e1058f829'],
      play: false,
    }),
  }

  return await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}

export const PlayerStart = async (BearerToken: string) => {
  const config = {
    method: 'put',
    url: 'https://api.spotify.com/v1/me/player',
    headers: {
      Authorization: `Bearer ${BearerToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      device_ids: ['be4414f1466402bc6b4740f64191366e1058f829'],
      play: true,
    }),
  }

  return await axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}
