import { IItemsMutationType, ItemsMutationType } from './IItemsMutationType'

export interface IMutationType {
    readonly items: IItemsMutationType
	// as you add new state modules, add reference to module-specific mutation types here
}

export const MutationType: IMutationType = Object.freeze({
    items: ItemsMutationType
	// as you add new state modules, add reference to module-specific mutation types here
})
