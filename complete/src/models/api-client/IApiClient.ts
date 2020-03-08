import { IItemsApiClient } from '@/models/api-client/items/IItemsApiClient'
// GEN-IMPORTS
import { IPeopleApiClient } from '@/models/api-client/people/IPeopleApiClient'

export interface IApiClient {
	items: IItemsApiClient
	// GEN-PROPERTIES
	people: IPeopleApiClient
}

