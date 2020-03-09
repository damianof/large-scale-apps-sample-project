import { 
    I{{ entityPlural }}ApiClientUrls, 
    I{{ entityPlural }}ApiClient, 
    {{ entityPlural }}ApiClient 
} from '@/models/api-client/{{ kebabCase entityPlural }}/I{{ entityPlural }}ApiClient'

const urls: I{{ entityPlural }}ApiClientUrls = {
	fetch{{ entityPlural }}: '/path/to/your/real/api/and-point'
}

const {{ camelCase entityPlural }}ApiClient: I{{ entityPlural }}ApiClient = new {{ entityPlural }}ApiClient(urls)

export default {{ camelCase entityPlural }}ApiClient
