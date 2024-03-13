// igdbService.js
import axios from 'axios'

const fetchAccessToken = async () => {
  const CLIENT_ID = '6tu79avs946h39hu41wm53k8ut8zqq'
  const CLIENT_SECRET = 'nji57rgao7bnu5b8rcd5gnme48yulg'
  const TWITCH_OAUTH_URL = `https://id.twitch.tv/oauth2/token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&grant_type=client_credentials`

  try {
    const response = await axios.post(TWITCH_OAUTH_URL)
    const { access_token } = response.data
    return access_token
  } catch (error) {
    console.error('Error fetching access token:', error)
    throw error
  }
}

export { fetchAccessToken }
