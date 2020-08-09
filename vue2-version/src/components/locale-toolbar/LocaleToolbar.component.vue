<template>
  <div class="locale-toolbar">
    <div class="locale-switches">
      <LocaleFlagButton
        v-for="(localeInfo, index) in availableLocales"
        :key="index"
        :localeInfo="localeInfo"
        @clicked="onFlagClicked"/>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator'
  import { IAvailableLocaleInfo } from '@/models/localization/IAvailableLocaleInfo'
  import LocaleFlagButton from './LocaleFlagButton.component.vue'

	@Component({
    components: {
      LocaleFlagButton
    }
  })
  export default class LocaleToolbar extends Vue {
		@Prop({ default: () => [] }) availableLocales!: IAvailableLocaleInfo[]

    private onFlagClicked(clickedItem: IAvailableLocaleInfo) {
      this.$emit('clicked', clickedItem)
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
          border-bottom: solid 5px #42b983;
        }
      }

      input {
        display:none;
      }
    }
  }
</style>
