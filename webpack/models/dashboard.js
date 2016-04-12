'use strict';
import { API, BaseModel } from 'mobx-model';
import { pluralize } from 'inflection';

class Dashboard extends BaseModel {

	static attributes = {
		city_ids: null,
		hours:    null
	}

	static relations = [
		{
			type: 'hasMany',
			relatedModel: 'City',
      reverseRelation: true
		}
	];

	actionAddCity = (newCityId) => {
		let currentCityIds = this.cities.map(city => city.id)
    currentCityIds.push(newCityId)
		return this.update({ city_ids: currentCityIds })
	}

	actionRemoveCity = (City) => {
		let currentCityIds = this.cities.map(city => city.id)
		_.remove(currentCityIds, function(n) { return n === City.id; })
		return this.update({ city_ids: currentCityIds })
	}

}

Dashboard.addClassAction('loadAll', function() {
	return API.request({
	 endpoint: this.urlRoot,
	  onSuccess: (response) => {
	  	let json = response.body;
	    json[pluralize(this.jsonKey)].forEach(modelJson => {
	    	this.set({ modelJson, topLevelJson: json })
	    });
	   }
	});
});

export default Dashboard;
