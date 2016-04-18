import { extendObservable, asFlat } from 'mobx';

let UIStore  = {
  notificationSystem: null
}

extendObservable(UIStore, {
})

export default UIStore;
