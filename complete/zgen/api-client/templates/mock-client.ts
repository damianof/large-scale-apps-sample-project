import { 
    I{{ entityPlural }}ApiClientUrls, 
    I{{ entityPlural }}ApiClient, 
    {{ entityPlural }}ApiClient 
} from '@/models/api-client/{{ kebabCase entityPlural }}/I{{ entityPlural }}ApiClient'

const urls: I{{ entityPlural }}ApiClientUrls = {
	fetch{{ entityPlural }}: '/static/data/{{ kebabCase entityPlural }}.json'
}

const {{ camelCase entityPlural }}ApiClient: I{{ entityPlural }}ApiClient = new {{ entityPlural }}ApiClient(urls)

export default {{ camelCase entityPlural }}ApiClient
