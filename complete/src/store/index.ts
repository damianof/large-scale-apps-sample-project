import Vue from 'vue'
import Vuex from 'vuex'
import { IItemState } from '@/models/store/IItemState'
import { IItem } from '@/models/items/IItem'
import apiClient from '@/api-client'

Vue.use(Vuex)

// our initial state:
const state: IItemState = {
	loading: false,
	items: [],
	selectingItem: false
}

export default new Vuex.Store({
	state: state,
	mutations: {
		loadingItems(state: IItemState) {
			state.loading = true
		}, 
		loadedItems(state: IItemState, items: IItem[]) {
			state.items = items
			state.loading = false
		},
		selectingItem(state: IItemState, isSelecting: boolean) {
			state.selectingItem = isSelecting
		}
	},
	actions: {
		loadItems({ commit }) {
			commit('loadingItems')

			// let's pretend we called some API end-point 
			// and it takes 1 second to return the data
			// by using javascript setTimeout with 1000 for the milliseconds option
			setTimeout(() => {

				apiClient
					.items
					.fetchItems()
					.then((data) => {
						commit('loadedItems', data)
					})

			}, 1000)
		},
		selectingItem({ commit }: any, params: {
			id: number, 
			selected: boolean
		}) {
			if (!state.selectingItem) {
				const { id, selected } = params
				commit('selectingItem', true)

				const item = state.items.find(o => o.id === id)
				if (item) {
					item.selected = selected
					commit('selectingItem', false)
				}
			}
		}
	},
	modules: {
	}
})
