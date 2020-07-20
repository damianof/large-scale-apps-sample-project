import { IItem } from '@/models/items/IItem'
import { httpClient, IHttpClientGetParameters } from '@/models/http/IHttpClient'

export interface IItemsApiClientUrls {
	fetchItems: string
}

export interface IItemsApiClient {
	urls: IItemsApiClientUrls
    fetchItems: () => Promise<IItem[]>
}

export class ItemsApiClient implements IItemsApiClient {
	urls: IItemsApiClientUrls

	constructor(urls: IItemsApiClientUrls) {
		this.urls = urls
	}

	fetchItems(): Promise<IItem[]> {
		const getParameters: IHttpClientGetParameters = {
			url: this.urls.fetchItems,
			requiresToken: false
		}

		return httpClient.get<IItem[]>(getParameters)
	}
}
