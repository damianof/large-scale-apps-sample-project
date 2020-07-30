import { IApiClient } from '@/models/api-client/IApiClient'
import apiMockClient from '@/api-client/mock'
import apiLiveClient from '@/api-client/live'

interface process {
  env: {
    VUE_APP_TOKEN_KEY: string
    VUE_APP_API_CLIENT: string
  }
}

const env =
  process.env && process.env.VUE_APP_API_CLIENT
    ? process.env.VUE_APP_API_CLIENT
    : 'mock'

let apiClient: IApiClient
if (env === 'live') {
  apiClient = apiLiveClient
} else {
  apiClient = apiMockClient
}

export default apiClient
