<template>
  <div class="locale-toolbar">
  <span>Switch Locale:</span>
  <div class="locale-switches">
    <label role="button"
      v-for="(item, index) in items"
      :key="index"
      :class="`locale-radio ${ item.selected ? 'selected' : '' }`.trim()">
      <i :class="`flag-icons ${ item.flag }`"></i>
      <input type="radio" name="locale" :value="item.locale" class="icon-button" :checked="item.selected" @click="onItemClick(item)"/>
    </label>
  </div>
  <span>{{ selectedLocaleMessage }}</span>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { i18n } from '@/plugins/i18n-wrapper'
  import { IAvailableLocaleInfo } from '@/models/localization/IAvailableLocaleInfo'

	@Component
  export default class ItemComponent extends Vue {
		@Prop({ default: () => [] }) items!: IAvailableLocaleInfo[]

		private get selectedLocaleMessage (): string {
      const items: IAvailableLocaleInfo[] = this.items
      const item = items.find((item) => item.selected)
      if (item) {
        return item.name
      }
      return ''
    }

    private onItemClick(clickedItem: IAvailableLocaleInfo) {
      const items: IAvailableLocaleInfo[] = this.items
      // loop through item and set only the clickedItem selected to true
      items.forEach((item) => {
        if (item.locale !== clickedItem.locale) {
          item.selected = false
        } else {
          item.selected = true
          // switch i18n selected locale
          i18n.locale = item.locale
        }
      })
    }
	}
</script>
<style lang="scss">
  .locale-toolbar {
    display: inline-grid;
    grid-template-rows: 20px 40px 20px;
    align-items: center;

    .locale-switches {
      display: inline-flex;
      justify-content: center;

      label.locale-radio {
        cursor: pointer;
        display: block;
        padding: 5px;

        &.selected {
          outline: solid 1px red;
        }
      }

      input {
        display:none;
      }
    }
  }
</style>
