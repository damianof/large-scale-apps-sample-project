import { 
    IPeopleApiClientUrls, 
    IPeopleApiClient, 
    PeopleApiClient 
} from '@/models/api-client/people/IPeopleApiClient'

const urls: IPeopleApiClientUrls = {
	fetchPeople: '/static/data/people.json'
}

const peopleApiClient: IPeopleApiClient = new PeopleApiClient(urls)

export default peopleApiClient
