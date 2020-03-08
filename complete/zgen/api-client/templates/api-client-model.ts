import { I{{ entityName }} } from '@/models/{{ toLowerCase entityPlural }}/I{{ entityName }}'
import { httpClient, IHttpClientGetParameters } from '@/models/http/IHttpClient'

export interface I{{ entityPlural }}ApiClientUrls {
	fetch{{ entityPlural }}: string
}

export interface I{{ entityPlural }}ApiClient {
	urls: I{{ entityPlural }}ApiClientUrls
    fetch{{ entityPlural }}: () => Promise<I{{ entityName }}[]>
}

export class {{ entityPlural }}ApiClient implements I{{ entityPlural }}ApiClient {
	urls: I{{ entityPlural }}ApiClientUrls

	constructor(urls: I{{ entityPlural }}ApiClientUrls) {
		this.urls = urls
	}

	fetch{{ entityPlural }}(): Promise<I{{ entityName }}[]> {
		const getParameters: IHttpClientGetParameters = {
			url: this.urls.fetch{{ entityPlural }},
			requiresToken: false
		}

		return httpClient.get<I{{ entityName }}[]>(getParameters)
	}
}
