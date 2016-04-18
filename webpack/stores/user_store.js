import { extendObservable, asFlat } from 'mobx';

import { auth } from "lib/auth";

import { UIStore } from 'stores';
console.log(auth)

let UserStore = { }

extendObservable(UserStore, {

	logIn: false


})

export default UserStore

