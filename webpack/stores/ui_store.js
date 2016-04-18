import { extendObservable, asFlat } from 'mobx';

let UIStore  = {
  notificationSystem: null
}

extendObservable(UIStore, {
	selectedIndexCell: null,
	logIn: false,
})



export default UIStore
