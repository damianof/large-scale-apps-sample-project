import { IApiClient } from '@/models/api-client/IApiClient'
import ItemsApiClient from '@/api-client/mock/items'

const apiMockClient: IApiClient = {
	items: ItemsApiClient
}

export default apiMockClient
