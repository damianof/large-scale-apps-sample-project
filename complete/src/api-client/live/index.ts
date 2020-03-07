import { IApiClient } from '@/models/api-client/IApiClient'
import ItemsApiClient from '@/api-client/live/items'

const apiLiveClient: IApiClient = {
	items: ItemsApiClient
}

export default apiLiveClient
