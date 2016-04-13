import moment from 'moment';
import jwtDecode from 'jwt-decode';
import { API } from 'mobx-model';

// const urlRoot = 'https://products.test.cb.bis.nl/api';

let auth = {

	login(attributes = {}) {
		let { email, password } = attributes;

		return API.request({
			endpoint: '/users/sign_in',
			method: 'post',
			data: { user: { email, password } },
			onSuccess: (response) => {
				if (response.status == 200) {
					this._token = response.body.token;
					localStorage.setItem('auth-token', this._token);
				}
			}
		})
	},

	loggedIn() {
		try {
			let decodedToken = jwtDecode(this._token);
			// ????
			// return moment(decodedToken.exp).isAfter(Date.new);
			return moment(decodedToken.exp).isBefore();
		} catch (err) {
			return false
		}
	},

	logOut() {
		return localStorage.removeItem("auth-token")
	}

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
