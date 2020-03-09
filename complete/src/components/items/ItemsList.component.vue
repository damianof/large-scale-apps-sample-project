<template>
	<div>
		<h3>Items:</h3>
		<Loader :show="loading" />
		<ul v-show="!loading">
			<ItemComponent v-for="item in items" 
				:key="item.id" 
				:model="item"
				@click="onItemClick" />
		</ul>
	</div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from 'vue-property-decorator'
	import { IItem } from '@/models/items/IItem'
	import { MutationType } from '@/models/store/mutation-types/'
	import { Loader } from '@/components/shared'
	import ItemComponent from '@/components/items/children/Item.component.vue'

	@Component({
		components: {
			Loader,
			ItemComponent
		}
	})
    export default class ItemsListComponent extends Vue {
		@Prop() items!: IItem[]

		private get loading(): boolean {
			return this.$store.state.loading
		}

		onItemClick(item: IItem) {
			this.$store.dispatch(`itemsState/${ MutationType.items.selectingItem }`, {
				id: item.id, 
				selected: !item.selected
			})
		}
	}
</script>

<style lang="scss">
	ul {
		list-style-type: none;
		margin-block-start: 0;
		margin-block-end: 0;
		margin-inline-start: 0px;
		margin-inline-end: 0px;
		padding-inline-start: 0px;
	}
</style>
