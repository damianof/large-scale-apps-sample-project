import { IItem } from '@/models/items/IItem'

export interface IItemState {
	items: IItem[]
	loading: boolean
	selectingItem: boolean
}
