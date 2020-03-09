
export interface IItemsMutationType {
	loadItems: string
	loadingItems: string
	loadedItems: string
	selectingItem: string
}

export const ItemsMutationType: IItemsMutationType = {
	loadItems: 'loadItems',
	loadingItems: 'loadingItems',
	loadedItems: 'loadedItems',
	selectingItem: 'selectingItem',
}
