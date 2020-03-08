import { 
    I{{ entityPlural }}ApiClientUrls, 
    I{{ entityPlural }}ApiClient, 
    {{ entityPlural }}ApiClient 
} from '@/models/api-client/{{ toLowerCase entityPlural }}/I{{ entityPlural }}ApiClient'

const urls: I{{ entityPlural }}ApiClientUrls = {
	fetch{{ entityPlural }}: '/static/data/{{ toLowerCase entityPlural }}.json'
}

const {{ toLowerCase entityPlural }}ApiClient: I{{ entityPlural }}ApiClient = new {{ entityPlural }}ApiClient(urls)

export default {{ toLowerCase entityPlural }}ApiClient
