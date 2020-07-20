import Vuex from 'vuex'
import {
	// GEN-IMPORTS
	IItemsState, initialItemsState
} from '@/models/store/'

export interface IStoreModuleNames {
	readonly itemsState: string
}
export const StoreModuleNames: IStoreModuleNames = Object.freeze({
	itemsState: 'itemsState'
})

export interface IRootState {
	loading: boolean
}

export const initialRootState: IRootState = {
    loading: false
}

export interface IRootStore {
	// GEN-INTERFACE-PROPS
	itemsState: IItemsState
}

export class RootStore<S> extends Vuex.Store<S> implements IRootStore {
	// GEN-STORE-PROPS
	itemsState: IItemsState = initialItemsState
}
