import { extendObservable, asFlat } from 'mobx';

let UserStore = {}

extendObservable(UserStore, {
	logIn: false
})

export default UserStore

