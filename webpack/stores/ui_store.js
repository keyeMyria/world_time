import { extendObservable, asFlat } from 'mobx';

let UIStore  = {
  notificationSystem: null
}

extendObservable(UIStore, {
  productSearch: {
    columnsCaption: '',
    columns: '',
    query: '',
    queryCaption: '',
    selectedColumnPresetId: null,
    selectedSearchPresetId: null,
    showColumnsEditor: false,
    showSearchEditor: false
  }
})

export default UIStore;
