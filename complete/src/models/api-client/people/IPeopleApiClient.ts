import { IPerson } from '@/models/people/IPerson'
import { httpClient, IHttpClientGetParameters } from '@/models/http/IHttpClient'

export interface IPeopleApiClientUrls {
	fetchPeople: string
}

export interface IPeopleApiClient {
	urls: IPeopleApiClientUrls
    fetchPeople: () => Promise<IPerson[]>
}

export class PeopleApiClient implements IPeopleApiClient {
	urls: IPeopleApiClientUrls

	constructor(urls: IPeopleApiClientUrls) {
		this.urls = urls
	}

	fetchPeople(): Promise<IPerson[]> {
		const getParameters: IHttpClientGetParameters = {
			url: this.urls.fetchPeople,
			requiresToken: false
		}

		return httpClient.get<IPerson[]>(getParameters)
	}
}
