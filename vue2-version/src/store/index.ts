import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { IRootState, IRootStore, RootStore, initialRootState } from '@/models/store'
// GEN-IMPORTS
import { itemsState } from '@/store/items/items-module'

Vue.use(Vuex)

export const rootState: IRootState = {
	loading: false
}

const state: IRootState = JSON.parse(JSON.stringify(initialRootState))

const storeOptions: StoreOptions<IRootState> = {

	state: state,

    modules: {
		// GEN-MODULES
		itemsState
	}

}

export default new RootStore<IRootState>(storeOptions)
