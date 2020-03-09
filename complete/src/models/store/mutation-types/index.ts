import { IItemsMutationType, ItemsMutationType } from './IItemsMutationType'

export interface IMutationType {
    items: IItemsMutationType
}

export const MutationType: IMutationType = {
    items: ItemsMutationType
}
