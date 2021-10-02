import axios from 'axios'

/**
 *
 * @param BearerToken
 * @returns
 */
export const PlayerPause = async (
  BearerToken: string,
  device_ids: string
): Promise<boolean> => {
  return await axios({
    method: 'put',
    url: 'https://api.spotify.com/v1/me/player',
    headers: {
      Authorization: `Bearer ${BearerToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      device_ids: [device_ids || 'be4414f1466402bc6b4740f64191366e1058f829'],
      play: false,
    }),
  })
    .then(function () {
      return true
    })
    .catch(function () {
      return false
    })
}

export const PlayerStart = async (
  BearerToken: string,
  device_ids: string
): Promise<boolean> => {
  return await axios({
    method: 'put',
    url: 'https://api.spotify.com/v1/me/player',
    headers: {
      Authorization: `Bearer ${BearerToken}`,
      'Content-Type': 'application/json',
    },
    data: JSON.stringify({
      device_ids: [device_ids || 'be4414f1466402bc6b4740f64191366e1058f829'],
      play: true,
    }),
  })
    .then(function () {
      return true
    })
    .catch(function () {
      return false
    })
}
