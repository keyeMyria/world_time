import { API } from 'mobx-model';
import jwtDecode from 'jwt-decode';
import moment from 'moment';
import { autorun } from 'mobx';
import { UserStore } from 'stores';
import Notification from 'lib/notification';

let auth = {

	login(attributes = {}) {
		let { email, password } = attributes

		return API.request({
			endpoint: '/users/sign_in',
			method: 'post',
			data: { user: { email, password } },
			onSuccess: (response) => {
				this._token = response.body.token;
				localStorage.setItem('auth-token', this._token);
			}
		})
	},

	loggedIn() {
		try {
			let decodedToken = jwtDecode(this._token)
			return moment(decodedToken.expires).isAfter()

		} catch (err) {
			return false
		}
	},

	logOut() {
    autorun(() => { UserStore.logIn = false })
		Notification.info("You Logout")
		return localStorage.removeItem("auth-token")
	},

}

// create getter for the token
Object.defineProperty(auth, 'token', {
	get: function() { return this._token; }
});

// read token from localstorage on load
Object.assign(auth, {
	_token: localStorage.getItem('auth-token')
});

export default auth
